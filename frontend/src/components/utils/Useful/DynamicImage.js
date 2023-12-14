import { useState, useEffect } from "react";
import React from "react";

function updateFilter() {
  // Generate random values for the filter properties
  const invertValue = Math.random() * 100;
  const sepiaValue = Math.random() * 1000;
  const saturateValue = Math.random() * 10000;
  const hueRotateValue = Math.random() * 360;
  const brightnessValue = Math.random() * 100;
  const contrastValue = Math.random() * 200;

  // Apply the dynamic filter to the image
  const filter = `invert(${invertValue}%) sepia(${sepiaValue}%) saturate(${saturateValue}%) hue-rotate(${hueRotateValue}deg) brightness(${brightnessValue}%) contrast(${contrastValue}%)`;
  // console.log(filter);
  return filter;
}

function DynamicImage(props) {

  const [filterValues, setFilterValues] = useState(updateFilter());

  useEffect(() => {
    // Update the filter every second
    const interval = setInterval(() => {
      setFilterValues(updateFilter());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img src={props.image} style={{ filter: filterValues }} />
    </>
  );
}
export default DynamicImage;
