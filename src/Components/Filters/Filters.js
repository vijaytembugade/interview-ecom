import React from "react";
import { useFilter } from "../../Context/filterContext";
import "./Filters.css";

const Filters = () => {
  const { state, dispatch } = useFilter();
  const { sortBy, brands, sizes, idealFor } = state;

  return (
    <div className="filter-container">
      <div className="clear-filter">
        <h2>Filters</h2>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          Clear
        </button>
      </div>
      {/* filter by price */}
      <div className="price-filter">
        <h4>Filter by Price</h4>
        <div className="flex-vcontainer">
          <label>
            <input
              type="radio"
              name="SORT_BY"
              id=""
              checked={sortBy && sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({
                  type: "SORT_BY",
                  payload: { sortBy: "HIGH_TO_LOW" },
                })
              }
            />
            <span>High to Low</span>
          </label>
          <label>
            <input
              type="radio"
              name="SORT_BY"
              id=""
              checked={sortBy && sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({
                  type: "SORT_BY",
                  payload: { sortBy: "LOW_TO_HIGH" },
                })
              }
            />
            <span>Low to High</span>
          </label>
        </div>
      </div>

      {/* filter by size */}
      <div className="size-filter">
        <h4>Filter by Size</h4>
        <div className="flex-vcontainer">
          <label htmlFor="small">
            <input
              type="checkbox"
              name="small"
              id="small"
              checked={sizes?.includes("small")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: { size: "small" } })
              }
            />
            <span>Small</span>
          </label>
          <label htmlFor="medium">
            <input
              type="checkbox"
              name="medium"
              id="medium"
              checked={sizes?.includes("medium")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_SIZE",
                  payload: { size: "medium" },
                })
              }
            />
            <span>Medium</span>
          </label>
          <label htmlFor="large">
            <input
              type="checkbox"
              name="large"
              id="large"
              checked={sizes?.includes("large")}
              onChange={() =>
                dispatch({ type: "FILTER_BY_SIZE", payload: { size: "large" } })
              }
            />
            <span>Large</span>
          </label>

          <label htmlFor="x-large">
            <input
              type="checkbox"
              name="medium"
              id="x-large"
              checked={sizes?.includes("x-large")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_SIZE",
                  payload: { size: "x-large" },
                })
              }
            />
            <span>X-large</span>
          </label>
        </div>
      </div>

      {/* filter by brand */}
      <div className="brand-filter">
        <h4>Filter by Brand</h4>
        <div className="flex-vcontainer">
          <label htmlFor="Allen Solly">
            <input
              type="checkbox"
              name="Allen Solly"
              id="Allen Solly"
              checked={brands?.includes("Allen Solly")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_BRAND",
                  payload: { brand: "Allen Solly" },
                })
              }
            />
            <span>Allen Solly</span>
          </label>
          <label htmlFor="Peter England">
            <input
              type="checkbox"
              name="Peter England"
              id="Peter England"
              checked={brands?.includes("Peter England")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_BRAND",
                  payload: { brand: "Peter England" },
                })
              }
            />
            <span>Peter England</span>
          </label>
          <label htmlFor="Louis Phillipe">
            <input
              type="checkbox"
              name="Louis Phillipe"
              id="Louis Phillipe"
              checked={brands?.includes("Louis Phillipe")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_BRAND",
                  payload: { brand: "Louis Phillipe" },
                })
              }
            />
            <span>Louis Phillipe</span>
          </label>
        </div>
      </div>

      {/* filter by ideal for */}
      <div className="brand-filter">
        <h4>Ideal for</h4>
        <div className="flex-vcontainer">
          <label htmlFor="Men">
            <input
              type="checkbox"
              name="Men"
              id="Men"
              checked={idealFor?.includes("Men")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_IDEALFOR",
                  payload: { idealFor: "Men" },
                })
              }
            />
            <span>Men</span>
          </label>
          <label htmlFor="Women">
            <input
              type="checkbox"
              name="Women"
              id="Women"
              checked={idealFor?.includes("women")}
              onChange={() =>
                dispatch({
                  type: "FILTER_BY_IDEALFOR",
                  payload: { idealFor: "women" },
                })
              }
            />
            <span>Women</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
