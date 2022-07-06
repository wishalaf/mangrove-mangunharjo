import React from "react";
import "../style/Contact.css";

export default function Contact() {
  return (
    <div className="container-fluid" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ paddingLeft: "3px" }}>
              <i className="fas fa-user"></i>Kontak
            </h2>
            <hr />
          </div>
          <div className="col-md-6">
            <p style={{ marginTop: 20 }}>
              <i className="fas fa-map-marker-alt p-2"></i>Jl.Kokrosono, Panggung Lor, <br />
              Kec. Semarang Utara, Semarang
            </p>
            <p>
              <i className="fas fa-phone-alt p-2"></i>(024) 351-3404
            </p>
            <p>
              <i className="fas fa-envelope p-2"></i>sekretariat@sman14-smg.sch.id
            </p>
            <h4 className="mb-2">Ikuti Kami</h4>
            <div className="minibar">
              <a href="https://www.instagram.com/sman14semarangberkelas/" className="ms-1" target="_blank">
                <i className="mini-1 fab fa-instagram fa-2x ms-1"></i>
              </a>
              <a href="https://www.facebook.com/SMA-NEGERI-14-SEMARANG-127761808341" className="ms-1" target="_blank">
                <i className="mini-2 fab fa-facebook-square fa-2x ms-1"></i>
              </a>
              <a href="https://twitter.com/fourteenshs" className="ms-1" target="_blank">
                <i className="mini-3 fab fa-twitter-square fa-2x ms-1"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCNKzF-G1xPOQP43eTrMeXfA/featured" className="ms-1" target="_blank">
                <i className="mini-4 fab fa-youtube fa-2x ms-1"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 maps">
            <h5 className="text-center">Google Maps</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31683.620535835307!2d110.2945568674475!3d-6.955820678373687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705f9411782ca3%3A0xd8e0fa2362f55511!2sMangunharjo%2C%20Tugu%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1656761714029!5m2!1sen!2sid"
              width="500"
              height="350"
              loading="lazy"
              title="myFrame"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
