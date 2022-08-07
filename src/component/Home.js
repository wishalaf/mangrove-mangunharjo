import React from "react";
import "../style/style.css";
import "../style/animation.css";
import SDGS from "../asset/SDGS.png";
import USGS from "../asset/USGS.png";
import TNC from "../asset/TNC.png";
import Gallery from "./Gallery";
import { UMKM } from "./UMKM";
import mangrove from "../asset/mangrove.mp4";

export default function Home() {
  return (
    // JUMBOTRON
    <>
      <div className="jumbotron">
        <div className="p-5 text-white container">
          <div>
            <h1 className="display">
              Selamat Datang <br />
            </h1>
            <h3 style={{ marginTop: -20, marginBottom: 30 }}>Mangrove Mangunharjo Semarang</h3>
          </div>

          <a href="#explore" className="btn btn-warning tombol rounded-pill">
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
            <h6 style={{ marginLeft: 20, marginTop: -20 }}>Explore</h6>
          </a>
        </div>
      </div>

      {/* INFO PANEL */}
      <div className="container wrap-info" id="explore">
        <div className="row justify-content-center ">
          <div className="col-7 info-panel">
            <div className="row info-panel-2">
              <div className="col">
                <img src={USGS} alt="USGS" />
              </div>
              <div className="col">
                <img src={SDGS} alt="SDGS" />
              </div>
              <div className="col">
                <img src={TNC} alt="TNC" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstrak */}
      <div className="container abstrak">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <video style={{ width: "100%", borderRadius: 20 }} alt="mbahe" controls>
              <source src={mangrove} type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-5 ">
            <div className="abstrak_2 ms-5">
              <h1>Mangunharjo Squad</h1>
              <p>Ayo kita bersama-sama memajukan potensi hutan mangrove di Kelurahan Mangunharjo, Tugu Kota Semarang. Gabung bersama kami menjadi Mangunharjo Squad</p>
              <a href="#gallery" className="btn btn-warning tombol rounded-pill mt-3">
                GALLERY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quotes */}
      <section className="quotes">
        <div className="row justify-content-center">
          <div className="col-8">
            <p>" Jangan biarkan sampah merusak keindahan hutan mangrove, selain kotor, itu akan membunuh pohon bakau secara perlahan. Jika mangrove telah rusak, maka bersiaplah menerima peringatan dari Tuhan. "</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* UMKM */}
      <UMKM />
    </>
  );
}
