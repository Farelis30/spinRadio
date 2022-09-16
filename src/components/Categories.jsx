import React, { useState } from "react";
import "./Categories.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState(false);

  const showCategories = () => {
    setCategories(!categories);
  };

  const linkData = [
    "All",
    "News",
    "Entertainment",
    "Lifestyle",
    "Music",
    "Tech",
    "Sport",
  ];

  return (
    <>
      <ul className="categories-list">
        {linkData.map((data, index) => (
          <li key={index}>
            <Link to="/watch">{data}</Link>
          </li>
        ))}
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
              {linkData.map((data, index) => (
                <Link
                  to="/watch"
                  key={index}
                  className="categories-dropdown-link"
                >
                  <div className="categories-dropdown-items">{data}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
