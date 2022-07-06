import React, { useEffect } from "react";
import spesieses from "../data/spesieses.json";
import { Button, Modal, Card } from "react-bootstrap";

export const Spesies = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [cardIndex, setCardIndex] = React.useState(null);

  const toggleModal = (id) => {
    setCardIndex(id);
    setModalShow(!modalShow);
  };

  return (
    <>
      <div className="container text-center">
        <h3>
          <b>Spesies Mangrove Mangunharjo</b>
        </h3>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {spesieses.map((spesies, index) => {
          return (
            <div key={spesies.id}>
              <Card style={{ width: "18rem" }} className="m-2">
                <Card.Img variant="top" src={`asset_spesies/${spesies.gambar}`} style={{ height: "20rem" }} />
                <Card.Body>
                  <Card.Title>{spesies.tittle}</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="outline-primary" onClick={() => toggleModal(index)}>
                    Detail
                  </Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} spesiesTittle={spesies[cardIndex].tittle} spesiesDeskripsi={spesies[cardIndex].deskripsi} />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  const { spesiesTittle, spesiesDeskripsi } = props;
  const [modalShow, setModalShow] = React.useState(false);

  const toggleModal = (id) => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered isOpen={modalShow} toggle={(e) => toggleModal()}>
        <Modal.Header closeButton toggle={(e) => toggleModal()}>
          <Modal.Title id="contained-modal-title-vcenter">{spesiesTittle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Hello world</h4>
          <p>{spesiesDeskripsi}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
