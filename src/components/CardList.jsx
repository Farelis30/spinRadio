import React from "react";
import "./CardList.css";
import Categories from "./Categories";

export default function CardList({ title, isCategory }) {
  return (
    <div className="bg-primary-1">
      <div className="container podcast-container animate__animated animate__slideInLeft">
        <h1 className="title-container">{title}</h1>
        {/* <!-- Podcast List --> */}
        {isCategory === true ? <Categories /> : <></>}
        <div className="podcast-list">
          <div className="podcast-item">
            <p>Sahur Meluncur</p>
          </div>
          <div className="podcast-item">
            <p>Sahur Meluncur</p>
          </div>
          <div className="podcast-item">
            <p>Sahur Meluncur</p>
          </div>
          <div className="podcast-item">
            <p>Sahur Meluncur</p>
          </div>
          <div className="podcast-item">
            <p>Sahur Meluncur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
