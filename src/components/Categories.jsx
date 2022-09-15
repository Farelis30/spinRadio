import React, { useState } from "react";
import "./Categories.css";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Categories() {
  const [categories, setCategories] = useState(false);

  const showCategories = () => {
    setCategories(!categories);
  };

  return (
    <>
      <ul className="categories-list">
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Entertaiment</a>
        </li>
        <li>
          <a href="/">Lifestyle</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Tech</a>
        </li>
        <li>
          <a href="/">Sport</a>
        </li>
      </ul>
      <div className="categories-dropdown-list">
        <div className="categories-dropdown-container">
          <div className="categories-dropdown-select" onClick={showCategories}>
            <p>Select</p>
            <BsFillCaretDownFill />
          </div>
          {categories === false ? (
            <></>
          ) : (
            <div className="categories-dropdown-menu">
              <div className="categories-dropdown-items">All</div>
              <div className="categories-dropdown-items">News</div>
              <div className="categories-dropdown-items">Entertainment</div>
              <div className="categories-dropdown-items">Lifestyle</div>
              <div className="categories-dropdown-items">Music</div>
              <div className="categories-dropdown-items">Tech</div>
              <div className="categories-dropdown-items">Sport</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
