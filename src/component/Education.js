import React from "react";
import "../style/styleEdu.css";
import Mangrove6 from "../asset/Mangrove6.jpg";
import { Spesies } from "./Spesies";
// import BGeducation from "../asset/BGeducation.jpg";
// import { Container } from "react-bootstrap";
import onlineTutorial from "../asset/onlineTutorial.jpg";
import education from "../asset/education.jpg";
import forest from "../asset/forest.JPG";

export default function Education() {
  return (
    <>
      {/* Intro */}
      <div className="container-fluid pt-2">
        <div className="container ">
          <div className="row ms-lg-3 pe-lg-3">
            <div className="col-lg-7 col-sm-12 ">
              <img src={education} alt="education" className="educationImage" />
            </div>

            <div className="col-lg-5 col-sm-12">
              <p className="introKata">Learn Mangrove</p>
              <h2>Mari Ketahui Tentang Mangrove</h2>
              <p className="mt-lg-3">
                <a href="#definisi" className="btn btn-warning rounded-pill px-lg-4">
                  Pelajari lebih lanjut
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Definisi */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#66747d"
          fill-opacity="1"
          d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,160C672,160,768,128,864,128C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          id="definisi"
        ></path>
      </svg>
      <div className="container-fluid definisi">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-start">
              <h1 className="text-warning definisiJudul">Hutan Mangrove</h1>
              <p>
                <b>Hutan mangrove</b> merupakan sekumpulan pepohonan yang tumbuh di area sekitar garis pantai yang dipengaruhi oleh pasang surutnya air laut serta berada pada tempat yang mengalami akumulasi bahan organik dan pelumpuran.
              </p>
              <p>Hutan mangrove yang juga biasa dikenal dengan sebutan hutan bakau ini merupakan sebuah ekosistem yang bersifat khas karena adanya aktivitas daur penggenangan oleh pasang surut air laut.</p>
            </div>

            <div className="col-lg-6">
              <img src={Mangrove6} alt="Mangrove6" style={{ borderRadius: 15 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Fungsi */}
      <div className="container-fluid fungsi pt-5">
        <div className="container">
          <div className="row fungsi-list">
            <div className="col-lg-6 mt-lg-4">
              <img src={forest} alt="forest" style={{ borderRadius: 15 }} />
            </div>
            <div className="col-lg-6 fungsiMangrove">
              <h1 className="mb-lg-4 mt-lg-3 text-warning">Fungsi Hutan Mangrove</h1>
              <ol>
                <li>Sebagai tumbuhan yang mampu menahan arus air laut yang mengikis daratan pantai, dengan kata lain tumbuhan mangrove mampu untuk menahan air laut agar tidak mengikis tanah di garis pantai.</li>
                <li>Sebagaimana fungsi tumbuhan yang lain, mangrove juga memiliki fungsi sebagai penyerap gas karbondioksida (CO2) dan penghasil oksigen (O2).</li>
                <li>Hutan mangrove memiliki peran sebagai tempat hidup berbagai macam biota laut seperti ikan-ikan kecil untuk berlindung dan mencari makan.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Spesies */}
      <Spesies />
    </>
  );
}
