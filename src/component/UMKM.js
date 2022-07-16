import React from "react";
import { Card, Button } from "react-bootstrap";
import umkm from "../data/umkm.json";
import { FiArrowRight } from "react-icons/fi";

export const UMKM = () => {
  const [visible, setVisible] = React.useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="container text-center">
            <h3>Dukung UMKM</h3>
            <p className="text-secondary">Data infografis terkait pemerintahan desa mangunharjo yang sudah diolah.</p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {umkm.slice(0, visible).map((ukm, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "18rem" }} className="m-3 shadow">
                <Card.Img variant="top" src={`asset_umkm/${ukm.gambar}`} style={{ height: "15rem" }} />
                <Card.Body>
                  <Card.Title>{ukm.title}</Card.Title>
                  {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
                  <Card.Text>
                    <a href={ukm.googleMaps} target="_blank" className="text-decoration-none">
                      Google Maps <FiArrowRight />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        <div className="container">
          <hr />
          <div className="text-center mt-lg-3 mb-5">
            <Button onClick={showMoreItems} id="loadMore">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
