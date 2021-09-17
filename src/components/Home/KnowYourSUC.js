import React from "react";
import "./KnowYourSUC.css";
import knowursucbg1 from "../../assets/home/KnowYourSUC/knowursuc1.svg";
import knowursucbg2 from "../../assets/home/KnowYourSUC/knowursuc2.svg";
// import KnowYourSUCCard from "../../components/Home/KnowYourSUCCard";
// import { Container, Col, Row } from 'react-bootstrap';
import knowyoursuc3 from "../../assets/home/KnowYourSUC/knowyoursuc3.svg";

export default function KnowYourSUC() {
  return (
    <>
      <div className="knowursuc-first">
        <div className="knowursuc-container">
          <img
            src={knowursucbg2}
            alt="knowursucbg2"
            style={{ width: "100%" }}
          />
          <div className="knowyoursuc_images">
            <div className="row1">
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
            </div>
            <div className="row2">
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
              <img
                src={knowyoursuc3}
                alt="knowyoursuc"
                style={{
                  width: "15em",
                }}
              />
            </div>
          </div>

          <img
            src={knowursucbg1}
            alt="knowursucbg1"
            style={{
              width: "100%",
              position: "absolute",
              top: "-0.5vh",
              left: "0",
            }}
          />
        </div>
      </div>
    </>
  );
}
