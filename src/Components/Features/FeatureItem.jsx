import React from "react";

export default function FeatureItem({imgCnfg,txtCnfg}) {
  return (
    <div className="feature-item">
      <img
        src={imgCnfg.imageSrc}
        alt={imgCnfg.imageAlt}
        style={{ width: 50 }}
      />
      <div className="text">
        
        <h5>{txtCnfg.title}</h5>
        <span>{txtCnfg.caption}</span>
      </div>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
        vestibulum magna, et dapib.
      </p>
    </div>
  );
}
