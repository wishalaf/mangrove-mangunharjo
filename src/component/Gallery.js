import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Mangrove1 from "../asset/Mangrove1.jpg";
import Mangrove2 from "../asset/Mangrove2.jpg";
import Mangrove3 from "../asset/Mangrove3.jpg";
import Mangrove4 from "../asset/Mangrove4.jpg";
import Mangrove5 from "../asset/Mangrove5.jpg";
import Mangrove6 from "../asset/Mangrove6.jpg";
import "../style/Gallery.css";
import GalleryBG from "../asset/GalleryBG.jpg";

function Gallery() {
  return (
    <>
      <div className="container-fluid mt-5" style={{ backgroundColor: "#e8fff3", backgroundSize: "cover" }} id="gallery">
        <div className="row d-flex justify-content-center">
          <div className="col-10 d-flex justify-content-center mb-5 mt-5">
            <h3 style={{ backgroundColor: "white", borderRadius: 50, padding: 20, width: 500 }} className="text-center">
              <i className="fa-solid fa-clone me-3"></i>
              Gallery
            </h3>
          </div>
          <div className="wrapCarousel">
            <Carousel variant="dark" style={{ paddingBottom: 50 }}>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove1} alt="First slide" style={{ borderRadius: 20 }} />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove2} alt="Second slide" style={{ borderRadius: 20 }} />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove3} alt="Third slide" style={{ borderRadius: 20 }} />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove4} alt="Third slide" style={{ borderRadius: 20 }} />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove5} alt="Third slide" style={{ borderRadius: 20 }} />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block imageCarousel" src={Mangrove6} alt="Third slide" style={{ borderRadius: 20 }} />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
