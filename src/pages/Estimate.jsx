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
import { mapCsvToFormData } from "../utils/functions";
import { validationSchema } from "../utils/validatiions";

const initialValues = {
  tasks: "",
  backendHoursW: 0,
  backendHoursR: 0,
  backendHoursB: 0,
  frontendHoursW: 0,
  frontendHoursR: 0,
  frontendHoursB: 0,
  costBackend: 0,
  costFrontEnd: 0,
};

const Estimate = () => {
  const [formData, setFormData] = useState([]);
  const handleSubmit = (values, { resetForm }) => {
    const backendAverage =
      (values.backendHoursW + values.backendHoursR + values.backendHoursB) / 3;
    const frontendAverage =
      (values.frontendHoursW + values.frontendHoursR + values.frontendHoursB) /
      3;
    const totalCost = values.costBackend + values.costFrontEnd;
    const newData = {
      tasks: values.tasks,
      backendHoursW: values.backendHoursW,
      backendHoursR: values.backendHoursR,
      backendHoursB: values.backendHoursB,
      backendAverage: backendAverage,
      frontendHoursW: values.frontendHoursW,
      frontendHoursR: values.frontendHoursR,
      frontendHoursB: values.frontendHoursB,
      frontendAverage: frontendAverage,
      costBackend: values.costBackend,
      costFrontEnd: values.costFrontEnd,
      totalCost: totalCost,
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
  const calculateSums = () => {
    const sums = {
      tasks: "Total",
      backendHoursW: 0,
      backendHoursR: 0,
      backendHoursB: 0,
      frontendHoursW: 0,
      frontendHoursR: 0,
      frontendHoursB: 0,
      costBackend: 0,
      costFrontEnd: 0,
    };

    formData.forEach((row) => {
      sums.backendHoursW += parseFloat(row.backendHoursW);
      sums.backendHoursR += parseFloat(row.backendHoursR);
      sums.backendHoursB += parseFloat(row.backendHoursB);
      sums.frontendHoursW += parseFloat(row.frontendHoursW);
      sums.frontendHoursR += parseFloat(row.frontendHoursR);
      sums.frontendHoursB += parseFloat(row.frontendHoursB);
      sums.costBackend += parseFloat(row.costBackend);
      sums.costFrontEnd += parseFloat(row.costFrontEnd);
    });

    return sums;
  };

  const TableFooter = () => {
    const sums = calculateSums();

    return (
      <tfoot>
        <tr>
          <td>{sums.tasks}</td>
          <td>{sums.backendHoursW}</td>
          <td>{sums.backendHoursR}</td>
          <td>{sums.backendHoursB}</td>
          <td>
            {(sums.backendHoursW + sums.backendHoursR + sums.backendHoursB) / 3}
          </td>
          <td>{sums.frontendHoursW}</td>
          <td>{sums.frontendHoursR}</td>
          <td>{sums.frontendHoursB}</td>
          <td>
            {(sums.frontendHoursW + sums.frontendHoursR + sums.frontendHoursB) /
              3}
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
        <div className="col-6 form_col">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <BootstrapForm.Group controlId="tasks">
                  <BootstrapForm.Label>Task</BootstrapForm.Label>
                  <Field name="tasks" as="textarea" className="form-control" />
                  {errors.tasks && touched.tasks ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.tasks}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="backendHoursW">
                  <BootstrapForm.Label>
                    Backend Worse in hours
                  </BootstrapForm.Label>
                  <Field
                    name="backendHoursW"
                    type="number"
                    className="form-control"
                  />
                  {errors.backendHoursW && touched.backendHoursW ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.backendHoursW}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="backendHoursR">
                  <BootstrapForm.Label>
                    Backend Realistic in hours
                  </BootstrapForm.Label>
                  <Field
                    name="backendHoursR"
                    type="number"
                    className="form-control"
                  />
                  {errors.backendHoursR && touched.backendHoursR ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.backendHoursR}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="backendHoursB">
                  <BootstrapForm.Label>
                    Backend Best in hours
                  </BootstrapForm.Label>
                  <Field
                    name="backendHoursB"
                    type="number"
                    className="form-control"
                  />
                  {errors.backendHoursB && touched.backendHoursB ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.backendHoursB}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="frontendHoursW">
                  <BootstrapForm.Label>
                    Frontend Worse in hours
                  </BootstrapForm.Label>
                  <Field
                    name="frontendHoursW"
                    type="number"
                    className="form-control"
                  />
                  {errors.frontendHoursW && touched.frontendHoursW ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.frontendHoursW}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="frontendHoursR">
                  <BootstrapForm.Label>
                    Frontend Realistic in hours
                  </BootstrapForm.Label>
                  <Field
                    name="frontendHoursR"
                    type="number"
                    className="form-control"
                  />
                  {errors.frontendHoursR && touched.frontendHoursR ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.frontendHoursR}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>
                <BootstrapForm.Group controlId="frontendHoursB">
                  <BootstrapForm.Label>
                    Frontend Best in hours
                  </BootstrapForm.Label>
                  <Field
                    name="frontendHoursB"
                    type="number"
                    className="form-control"
                  />
                  {errors.frontendHoursB && touched.frontendHoursB ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.frontendHoursB}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="costBackend">
                  <BootstrapForm.Label>Cost BE in currency</BootstrapForm.Label>
                  <Field
                    name="costBackend"
                    type="number"
                    className="form-control"
                  />
                  {errors.costBackend && touched.costBackend ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.costBackend}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <BootstrapForm.Group controlId="costFrontEnd">
                  <BootstrapForm.Label>Cost FE in currency</BootstrapForm.Label>
                  <Field
                    name="costFrontEnd"
                    type="number"
                    className="form-control"
                  />
                  {errors.costFrontEnd && touched.costFrontEnd ? (
                    <BootstrapForm.Text className="text-danger">
                      {errors.costFrontEnd}
                    </BootstrapForm.Text>
                  ) : null}
                </BootstrapForm.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="table_col">
        <div className="d-flex justify-content-end my-3">
          <CSVLink
            data={formData}
            filename={"my-form-data.csv"}
            className="btn btn-primary me-2"
          >
            Export as CSV
          </CSVLink>
          <div className="input-group">
            <label className="input-group-btn">
              <span className="btn btn-primary">
                Import CSV&hellip;{" "}
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
                <th>Task</th>
                <th>Backend Worse</th>
                <th>Backend Realistic</th>
                <th>Backend Best</th>
                <th>Average Backend</th>
                <th>Frontend Worse</th>
                <th>Frontend Realistic</th>
                <th>Frontend Best</th>
                <th>Average Frontend</th>
                <th>Cost BE</th>
                <th>Cost FE</th>
                <th>Total Cost</th>
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
                  <td>${data.costBackend}</td>
                  <td>${data.costFrontEnd}</td>
                  <td>${data.totalCost}</td>
                </tr>
              ))}
            </tbody>
            <TableFooter />
          </Table>
        )}
      </div>
    </Container>
  );
};

export default Estimate;
