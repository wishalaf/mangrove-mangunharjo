import React from "react";
import "../style/Contact.css";
import suryanti from "../asset/suryanti.png";
import churun from "../asset/churun.png";
import siti from "../asset/siti.png";
import wishal from "../asset/pasfoto.jpg";

export default function Contact() {
  return (
    <div className="container-fluid page-container" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ paddingLeft: "3px" }}>
              <i className="fas fa-user"></i> Kontak
            </h2>
            <hr />
          </div>
          <div className="col-md-6">
            <h4>Kelurahan Mangunharjo, Tugu Kota Semarang</h4>
            <p style={{ marginTop: 20 }}>
              <i className="fas fa-map-marker-alt p-2"></i>Jl.Laut Mangunharjo No.22 Semarang
            </p>
            <p>
              <i className="fas fa-phone-alt p-2 "></i>(024) 8663500
            </p>
            <p>
              <i className="fas fa-envelope p-2 "></i>kectugu@gmail.com
            </p>
            <h4 className="mb-2">Ikuti Kami</h4>
            <div className="minibar">
              <a href="https://instagram.com/kelurahan_mangunharjo_kec.tugu?igshid=YmMyMTA2M2Y=" className="ms-1" target="_blank">
                <i className="mini-1 fab fa-instagram fa-2x ms-1"></i>
              </a>
              <a href="https://kectugu.semarangkota.go.id/kelurahan-mangunharjo" className="ms-1" target="_blank">
                <i class="mini-1 fab fa-blogger fa-2x ms-1"></i>
              </a>

              <hr />
              <h4 className="mt-2 mb-4">Tim IDBU Mangunharjo 2022</h4>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                  <img src={suryanti} alt="Suryanti" className="rounded-circle img-thumbnail" style={{ width: 80 }} />
                  <h6>Dr. Ir. Suryanti, M.Pi</h6>
                  <p>Dosen KKN IDBU</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                  <img src={siti} alt="Siti" className="rounded-circle img-thumbnail" style={{ width: 80 }} />
                  <h6>Ir. Siti Rudiyanti, M.Si</h6>
                  <p>Dosen KKN IDBU</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                  <img src={churun} alt="Churun" className="rounded-circle img-thumbnail" style={{ width: 80 }} />
                  <h6>Churun Ain, S.Pi., M.Si</h6>
                  <p>Dosen KKN IDBU</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center"></div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                  <img src={wishal} alt="Wishal" className="rounded-circle img-thumbnail" style={{ width: 80 }} />
                  <h6>Wishal Asdicky Falah</h6>
                  <p>Front End Developer</p>
                </div>
              </div>

              <h4 className="mb-2">Ikuti Kami</h4>
              <div className="minibar">
                <a href="https://instagram.com/kkndesamangunharjo?igshid=YmMyMTA2M2Y=" className="ms-1" target="_blank">
                  <i className="mini-1 fab fa-instagram fa-2x ms-1"></i>
                </a>
                {/* <a href="https://www.facebook.com/SMA-NEGERI-14-SEMARANG-127761808341" className="ms-1" target="_blank">
                  <i className="mini-2 fab fa-facebook-square fa-2x ms-1"></i>
                </a>
                <a href="https://twitter.com/fourteenshs" className="ms-1" target="_blank">
                  <i className="mini-3 fab fa-twitter-square fa-2x ms-1"></i>
                </a> */}
                <a href="https://www.youtube.com/channel/UClMSRugFnIu7I6z6cAjZf1A" className="ms-1" target="_blank">
                  <i className="mini-4 fab fa-youtube fa-2x ms-1"></i>
                </a>
              </div>
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
