import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// const INITIAL_VALUES = {
//   title: "",
//   img: "",
//   description: "",
// };

function Modalmovie({ handleAddMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  const handleInputChange = (event) => {
    // ES6 will replace [name] by the current name value e.g. if name = "title" => [name] = title. This feature is called computed property names
    return setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    return handleAddMovie(form);
    // handleClose();
    // setForm({});
  };

  /**
   *
   * @param {Object} event an object that has the information about the input we are currently changing
   */

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="text"
                name="img"
                onChange={handleInputChange}
                placeholder="Enter movie picture"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleInputChange}
                rows={3}
              />
            </Form.Group>

            <Form.Label>Movie Rate: </Form.Label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave();
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modalmovie;
