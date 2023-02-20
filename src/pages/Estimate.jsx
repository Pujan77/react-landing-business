import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button, Table } from "react-bootstrap";

const validationSchema = Yup.object().shape({
  tasks: Yup.string().required("Tasks is required"),
  backendHoursW: Yup.number()
    .required("Backend Worse in hours is required")
    .positive("Backend Worse in hours must be a positive number"),
  backendHoursR: Yup.number()
    .required("Backend Realistic in hours is required")
    .positive("Backend Realistic in hours must be a positive number"),
  backendHoursB: Yup.number()
    .required("Backend Best in hours is required")
    .positive("Backend Best in hours must be a positive number"),
  frontendHoursW: Yup.number()
    .required("Frontend Worse in hours is required")
    .positive("Frontend Worse in hours must be a positive number"),
  frontendHoursR: Yup.number()
    .required("Frontend Realistic in hours is required")
    .positive("Frontend Realistic in hours must be a positive number"),
  frontendHoursB: Yup.number()
    .required("Frontend Best in hours is required")
    .positive("Frontend Best in hours must be a positive number"),
  costBackend: Yup.number()
    .required("Cost BE in currency is required")
    .positive("Cost BE in currency must be a positive number"),
  costFrontEnd: Yup.number()
    .required("Cost FE in currency is required")
    .positive("Cost FE in currency must be a positive number"),
});

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

  return (
    <div className="row">
      <div className="col-6">
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
                <BootstrapForm.Label>Backend Best in hours</BootstrapForm.Label>
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
        </Table>
      )}
    </div>
  );
};

export default Estimate;
