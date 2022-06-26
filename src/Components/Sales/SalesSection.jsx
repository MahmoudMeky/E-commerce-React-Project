import React from "react";
import SalesItem from "./SalesItem";
import "./SalesSection.css";

export default function SalesSection() {
  return (
    <section className="sales row p-0 p-md-5 py-5 m-0">
      <h4 className="section-title mb-5">Find all you need...</h4>
      <SalesItem
        imgSrc="/sales/sales1.jpg"
        title="All About Men.."
        caption="Check this.."
        btnTitle="Men Clothes"
        className="sales-text-1"
      />
      <SalesItem
        imgSrc="/sales/sales2.jpg"
        title="Electronics.."
        caption="Check this.."
        btnTitle="Electronics"
        className="sales-text-2"
      />
      <SalesItem
        imgSrc="/sales/sales3.jpg"
        title="Jewellery.."
        caption="Check this.."
        btnTitle="jewellery"
        className="sales-text-3"
      />
      <SalesItem
        imgSrc="/sales/sales4.jpg"
        title="All About Women.."
        caption="Check this.."
        btnTitle="Women Clothes"
        className="sales-text-4"
      />
    </section>
  );
}
