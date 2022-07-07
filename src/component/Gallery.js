import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Gallery1 from "../asset/assetGallery/Gallery1.jpg";
import Gallery2 from "../asset/assetGallery/Gallery2.jpg";
import Gallery3 from "../asset/assetGallery/Gallery3.jpg";
import Gallery4 from "../asset/assetGallery/Gallery4.jpg";
import Gallery5 from "../asset/assetGallery/Gallery5.jpg";
import Gallery6 from "../asset/assetGallery/Gallery6.jpg";
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
                <img className="d-block imageCarousel" src={Gallery1} alt="First slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Gallery2} alt="Second slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Gallery3} alt="Third slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block imageCarousel" src={Gallery4} alt="Third slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block imageCarousel" src={Gallery5} alt="Third slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block imageCarousel" src={Gallery6} alt="Third slide" style={{ borderRadius: 20 }} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
