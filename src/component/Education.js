import React from "react";
import "../style/styleEdu.css";
import Mangrove6 from "../asset/Mangrove6.jpg";
import { Spesies } from "./Spesies";

export default function Education() {
  return (
    <>
      {/* Definisi */}
      <div className="container-fluid definisi">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5 text-start">
              <h1>
                <b>Hutan Mangrove</b>
              </h1>
              <p>
                <b>Hutan mangrove</b> merupakan sekumpulan pepohonan yang tumbuh di area sekitar garis pantai yang dipengaruhi oleh pasang surutnya air laut serta berada pada tempat yang mengalami akumulasi bahan organik dan pelumpuran.
                Hutan mangrove yang juga biasa dikenal dengan sebutan hutan bakau ini merupakan sebuah ekosistem yang bersifat khas karena adanya aktivitas daur penggenangan oleh pasang surut air laut.
              </p>
            </div>

            <div className="col-lg-6">
              <img src={Mangrove6} alt="Mangrove6" style={{ borderRadius: 15 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Fungsi */}
      <div className="container fungsi">
        <h1>
          <b>Fungsi Hutan Mangrove</b>
        </h1>
      </div>
      <div className="row justify-content-center mt-4 fungsi-list">
        <div className="col-9">
          <ol>
            <li>Sebagai tumbuhan yang mampu menahan arus air laut yang mengikis daratan pantai, dengan kata lain tumbuhan mangrove mampu untuk menahan air laut agar tidak mengikis tanah di garis pantai.</li>
            <li>Sebagaimana fungsi tumbuhan yang lain, mangrove juga memiliki fungsi sebagai penyerap gas karbondioksida (CO2) dan penghasil oksigen (O2).</li>
            <li>Hutan mangrove memiliki peran sebagai tempat hidup berbagai macam biota laut seperti ikan-ikan kecil untuk berlindung dan mencari makan.</li>
          </ol>
        </div>
      </div>

      {/* Spesies */}
      <Spesies />
    </>
  );
}
