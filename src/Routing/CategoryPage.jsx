import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Product from "../Components/Products/Product/Product";
import { useParams, Navigate } from "react-router-dom";
import RangeSlider from "../Components/Helpers/RangeSlider"

export default function CategoryPage() {
  let { category } = useParams();

  const [itemsToShow, setItemsToShow] = useState([]);

  let [numOfProductsToShow, setnumOfProductsToShow] = useState(12);
  let categoryID = false;


  switch (category) {
    case "clothes":
      categoryID = 1;
      break;
    case "electronics":
      categoryID = 2;
      break;
    case "furniture":
      categoryID = 3;
      break;
    case "shoes":
      categoryID = 4;
      break;
    case "others":
      categoryID = 5;
      break;
    case "tech":
      categoryID = 6;
      break;

    default:
      categoryID = false;


      break;
  }
  let [priceFilterValue, setPriceFilterValue] = useState(0)

  useEffect(() => {
    if (!priceFilterValue) {
      axios
        .get(
          `https://api.escuelajs.co/api/v1/categories/${categoryID}/products?offset=0&limit=${numOfProductsToShow}`
        )
        .then((response) => {
          setItemsToShow(response.data);
        });
    }
  }, [numOfProductsToShow]);


  useEffect(() => {

    axios
      .get(
        `https://api.escuelajs.co/api/v1/categories/${categoryID}/products?offset=0&limit=${numOfProductsToShow}`
      )
      .then((response) => {
        setItemsToShow(response.data);
      });

    setPriceFilterValue(0);
    // priceFilter.current.value = 0;

  }, [category]);


  // useEffect(() => {
  //   filterItems()
  // }, [numOfProductsToShow])


  function showMoreProducts() {
    setnumOfProductsToShow(numOfProductsToShow + 6);
  }



  let priceFilter = useRef();

  function rangeHandler() {
    setPriceFilterValue(priceFilter.current.value)
  }


  let [rangeRenderValue, setRangeRenderValue] = useState(0);

  function rangeRenderHandler() {
    setRangeRenderValue(priceFilter.current.value)
  }

  function applyFilter(items) {
    let filtered_Items = items.filter((item) => {
      return item.price <= priceFilterValue;
    })
    return filtered_Items
  }
  useEffect(() => {
    if (priceFilterValue) {

      axios
        .get(
          `https://api.escuelajs.co/api/v1/categories/${categoryID}/products`
        )
        .then((response) => {
          let filtered = applyFilter(response.data)
          setItemsToShow(filtered);
        });

    }

  }, [priceFilterValue])


  useEffect(() => {
    // Resetting Number of Items
    setnumOfProductsToShow(12)
    setFilterShown(false)

  }, [category])

  let filterBtnHandler = () => {
    setPriceFilterValue(priceFilter.current.value)
  }

  // let [rangeValues,setRangeValues]=useState({min:250,max:4800})

  let [filterShown, setFilterShown] = useState(false);

  let showFilterHandler = () => {
    setFilterShown(!filterShown)
  }

  return (
    <>{categoryID ?
      <section className="products d-flex flex-column p-0 p-md-1 py-5 m-0 align-items-center gap-4" style={{ minHeight: "calc(100vh - 110px)" }}>
        <h5 className="section-title m-0 pt-4" style={{ height: "fit-content" }}>{category}</h5>
        <button className="btn border btn-dark" onClick={showFilterHandler}>{filterShown ? "Hide Filters" : "Show Filters"}</button>


        {/* <div className="slider col-8 col-md-6 col-lg-11 border d-flex gap-3 align-items-center justify-content-between p-3">
          <h3 className="">Price Filter</h3>

          <RangeSlider width="60%" rangeValues={rangeValues} />
          <p className="m-0 text-center lead">Starts from {rangeValues.min} $ to {rangeValues.max} $</p>

        </div> */}




        {filterShown &&
          <div className="filter col-11 flex-column flex-md-row border d-flex gap-3 align-items-center justify-content-between p-2 px-4">
            <h5 className="m-0">Price Filter</h5>
            <input className="col-10 col-md-6" type="range" name="" id="" min={5} max={3000} step={5} ref={priceFilter} onChange={rangeRenderHandler} onMouseUp={rangeHandler} />
            <p className="m-0 text-center lead ">
              {priceFilterValue ?
                `Price up to $ ${priceFilterValue}` :
                "Price up to Max"
              }
            </p>
          </div>}


        {/* <div className="filter-controls  row m-0 px-5 justify-content-center col-12" style={{ height: "fit-content" }}>
          <h4 className="m-0 text-center">0:{rangeRenderValue}</h4>
          <input className="p-1 col-12" type="range" name="" id="" min={5} max={3000} step={5} ref={priceFilter} onChange={rangeRenderHandler} onMouseUp={rangeHandler} />
        </div> */}

        <div className="items col-11">
          {itemsToShow.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                prodName={item.title}
                prodPrice={item.price}
                imageSrc={item.images[0]}
                imageAlt={item.title}
              />
            );
          })}
        </div>
        {!priceFilterValue &&
          <button
            onClick={showMoreProducts}
            className="sales-btn btn bg-black px-3 text-white rounded-0 text-uppercase fw-bold p-2"
            style={{ height: "fit-content" }}
          >
            Show More
          </button>
        }

      </section>
      : <Navigate to={"/error"} replace={true}></Navigate>
    }
    </>
  );
}
