import React from "react";
import "./Crews.css";
import { BsFillPlayFill } from "react-icons/bs";

export default function Crews() {
  return (
    <div className="bg-primary-1">
      <div className="container crews-container">
        <h1 className="title-container">KHI STATION CREWS</h1>
        <div className="crews-list">
          <div className="play rotate">{<BsFillPlayFill />}</div>
          <div className="crews-items">
            <div className="crews-image"></div>
            <div className="crews-image"></div>
            <div className="crews-image"></div>
          </div>
          <div className="play">{<BsFillPlayFill />}</div>
        </div>
      </div>
    </div>
  );
}
