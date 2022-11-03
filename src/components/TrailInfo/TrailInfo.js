import React from "react";
import "./TrailInfo.css";

const TrailInfo = ({trail}) => {

    
  return (
    <div className="trail-info">
      <h2>{trail.name}</h2>
      <h5>{trail.city}, {trail.region}</h5>
      <img src="" alt="" />

      <div>
        <p>notes about the trail here</p>
      </div>
    </div>
  );
};

export default TrailInfo;
