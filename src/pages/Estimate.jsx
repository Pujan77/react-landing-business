import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Form as BootstrapForm,
  Button,
  Container,
  Table,
} from "react-bootstrap";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { calculateSums, mapCsvToFormData } from "../utils/functions";
import { validationSchema } from "../utils/validatiions";
import { FormContent, TableContent } from "../content";
import { TbTableExport, TbTableImport } from "react-icons/tb";

const initialValues = {
  tasks: "",
  backendHoursW: "",
  backendHoursR: "",
  backendHoursB: "",
  frontendHoursW: "",
  frontendHoursR: "",
  frontendHoursB: "",
  costBackend: "",
  costFrontEnd: "",
};

const Estimate = () => {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (values, { resetForm }, errors) => {
    const backendAverage =
      (parseFloat(values.backendHoursW) +
        parseFloat(values.backendHoursR) +
        parseFloat(values.backendHoursB)) /
      3;
    const frontendAverage =
      (parseFloat(values.frontendHoursW) +
        parseFloat(values.frontendHoursR) +
        parseFloat(values.frontendHoursB)) /
      3;
    const totalCost =
      parseFloat(values.costBackend) + parseFloat(values.costFrontEnd);
    const newData = {
      tasks: values.tasks,
      backendHoursW: parseFloat(values.backendHoursW),
      backendHoursR: parseFloat(values.backendHoursR),
      backendHoursB: parseFloat(values.backendHoursB),
      backendAverage: backendAverage.toFixed(2),
      frontendHoursW: parseFloat(values.frontendHoursW),
      frontendHoursR: parseFloat(values.frontendHoursR),
      frontendHoursB: parseFloat(values.frontendHoursB),
      frontendAverage: frontendAverage.toFixed(2),
      costBackend: parseFloat(values.costBackend),
      costFrontEnd: parseFloat(values.costFrontEnd),
      totalCost: totalCost.toFixed(2),
    };
    setFormData([...formData, newData]);
    resetForm();
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: false,
      skipEmptyLines: true,
      complete: (results) => {
        // Ignore the first row (headers)
        results.data.shift();
        const formData = mapCsvToFormData(results.data);
        // Set the form data
        setFormData(formData);
        // setFormData(results.data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  };

  const TableFooter = () => {
    const sums = calculateSums(formData);

    return (
      <tfoot>
        <tr className="footer_dark">
          <td>{sums.tasks}</td>
          <td>{sums.backendHoursW}</td>
          <td>{sums.backendHoursR}</td>
          <td>{sums.backendHoursB}</td>
          <td>
            {(
              (sums.backendHoursW + sums.backendHoursR + sums.backendHoursB) /
              3
            ).toFixed(2)}
          </td>
          <td>{sums.frontendHoursW}</td>
          <td>{sums.frontendHoursR}</td>
          <td>{sums.frontendHoursB}</td>
          <td>
            {(
              (sums.frontendHoursW +
                sums.frontendHoursR +
                sums.frontendHoursB) /
              3
            ).toFixed(2)}
          </td>
          <td>{sums.costBackend}</td>
          <td>{sums.costFrontEnd}</td>
          <td>{sums.costBackend + sums.costFrontEnd}</td>
        </tr>
      </tfoot>
    );
  };

  return (
    <Container>
      <div className="row form_row">
        <div className="col-4 form_col">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="row">
                  {FormContent.map((data, i) => {
                    return (
                      <>
                        {data.type === "textarea" ? (
                          <div className="col-12">
                            <div className="form-group text-start mt-3">
                              <label
                                id={data.element + "-label"}
                                for={data.element}
                              >
                                {data.name}
                              </label>
                              <Field
                                name={data.element}
                                id={data.element}
                                as={data.type}
                                className="form-control"
                                placeholder={data.placeHolder}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="col-6">
                            <div className="form-group text-start mt-3">
                              <label
                                id={data.element + "-label"}
                                for={data.element}
                              >
                                {data.name}
                              </label>
                              <Field
                                name={data.element}
                                type={data.type}
                                className="form-control"
                                placeholder={data.placeHolder}
                              />
                            </div>
                            {errors[data.element] && touched[data.element] ? (
                              <BootstrapForm.Text className="text-danger">
                                {errors[data.element]}
                              </BootstrapForm.Text>
                            ) : null}
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>

                <Button className="mt-3 mb-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-8 table_col">
          <div className="d-flex justify-content-end my-3">
            <div className="input-group">
              <label className="input-group-btn">
                <span className="">
                  <TbTableImport size={40} color="#fcfcfc" /> Import
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </span>
              </label>
            </div>
          </div>

          {formData.length > 0 && (
            <Table variant="light" striped bordered hover>
              <thead>
                <tr>
                  {TableContent.map((data, i) => (
                    <th key={i}>{data.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {formData.map((data) => (
                  <tr key={data.tasks}>
                    <td>{data.tasks}</td>
                    <td>{data.backendHoursW}</td>
                    <td>{data.backendHoursR}</td>
                    <td>{data.backendHoursB}</td>
                    <td>{data.backendAverage}</td>
                    <td>{data.frontendHoursW}</td>
                    <td>{data.frontendHoursR}</td>
                    <td>{data.frontendHoursB}</td>
                    <td>{data.frontendAverage}</td>
                    <td>Nrs. {data.costBackend}</td>
                    <td>Nrs. {data.costFrontEnd}</td>
                    <td>Nrs. {data.totalCost}</td>
                  </tr>
                ))}
              </tbody>
              <TableFooter />
            </Table>
          )}
          {formData.length > 0 && (
            <CSVLink
              data={formData}
              filename={"my-form-data.csv"}
              className="d-flex"
            >
              <div className="input-group">
                <label className="input-group-btn">
                  <span className="">
                    <TbTableExport size={40} color="#fcfcfc" />
                  </span>
                </label>
              </div>
            </CSVLink>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Estimate;
