import React from "react";
import spesieses from "../data/spesieses.json";
import { Button, Modal, Card, Row, Col } from "react-bootstrap";
import "../style/styleSpesies.css";

export const Spesies = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [cardIndex, setCardIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const toggleModal = (id) => {
    setCardIndex(id);
    setModalShow(!modalShow);
  };

  return (
    <>
      <div className="container-fluid spesies">
        <div className="container text-center spesiesJudul text-warning ">
          <h1>Spesies Mangrove dan Tumbuhan Asosiasi</h1>
          <h1>Mangunharjo Semarang</h1>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          {spesieses.slice(0, visible).map((spesies, index) => {
            return (
              <div key={index}>
                <Card style={{ width: "18rem" }} className="m-3 shadow">
                  <Card.Img variant="top" src={`asset_spesies/${spesies.gambar}`} style={{ height: "15rem" }} />
                  <Card.Body>
                    <Card.Title>{spesies.tittle}</Card.Title>
                    {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                    <Button variant="outline-primary" value={index} onClick={(e) => toggleModal(e.target.value)}>
                      Detail
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

          <div className="container">
            <hr />
            <div className="text-center mt-lg-3 mb-5">
              {visible < spesieses.length && (
                <Button onClick={showMoreItems} id="loadMore">
                  Load More
                </Button>
              )}
            </div>
          </div>
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} cardIndex={cardIndex} />
        </div>
      </div>
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  const { cardIndex } = props;

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b>
              <i>{spesieses[cardIndex].tittle}</i>
            </b>
            <h6>{spesieses[cardIndex].jenis}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Deskripsi</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].deskripsi}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Daun</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].daun}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Bunga</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].bunga}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Buah</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].buah}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Ekologi</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].ekologi}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <h6>
                <b>Manfaat</b>
              </h6>
            </Col>
            <Col lg={10}>
              <p>{spesieses[cardIndex].manfaat}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
