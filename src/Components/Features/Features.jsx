import React from "react";
import FeatureItem from "./FeatureItem";
import "./Features.css";

export default function Features() {
  return (
    <section className="features row p-0 p-md-5 py-5 m-0  border-top border-bottom ">
      <FeatureItem
        imgCnfg={{
          imageSrc: "/icons/callcenter.svg",
          imageAlt: "Call Center Image",
        }}
        txtCnfg={{ title: "CUSTOMER SUPPORT", caption: "Need Assistence?" }}
      />
      <FeatureItem
        imgCnfg={{
          imageSrc: "/icons/card.svg",
          imageAlt: "Credit Card Image",
        }}
        txtCnfg={{ title: "SECURED PAYMENT", caption: "Safe & Fast" }}
      />
      <FeatureItem
        imgCnfg={{
          imageSrc: "/icons/back.svg",
          imageAlt: "Go Back Icon",
        }}
        txtCnfg={{ title: "FREE RETURNS", caption: "Easy & Free" }}
      />
      <FeatureItem
        imgCnfg={{
          imageSrc: "/icons/freeshipping.svg",
          imageAlt: "Free Shipping Image",
        }}
        txtCnfg={{ title: "FREE SHIPPING", caption: "Orders Over $99" }}
      />
    </section>
  );
}
