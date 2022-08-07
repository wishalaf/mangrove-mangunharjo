import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "../style/styleFooter.css";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footerKKN ">
      <div className="text-center p-3 footer" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy; {new Date().getFullYear()} Copyright{" "}
        <a className="text-primary text-decoration-none" href="https://instagram.com/kkndesamangunharjo?igshid=YmMyMTA2M2Y=" target={"_blank"}>
          KKN Tematik IDBU
        </a>
      </div>
    </MDBFooter>
  );
}
