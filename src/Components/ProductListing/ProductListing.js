import React from "react";
import "./ProductListing.css";
import { useFilter } from "../../Context/filterContext";
import Card from "../Card/Card";

const ProductListing = () => {
  function checkSortByProduct(products, sortBy) {
    if (sortBy === "HIGH_TO_LOW") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (sortBy === "LOW_TO_HIGH") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    return products;
  }

  function filerBySize(products, sizes) {
    if (sizes.length > 0) {
      return products.filter((product) => sizes.includes(product.size));
    }
    return products;
  }

  function filterByBrand(products, brands) {
    if (brands.length > 0) {
      return products.filter((product) => brands.includes(product.brand));
    }
    return products;
  }

  function filterByIdealFor(products, idealFor) {
    if (idealFor.length > 0) {
      return products.filter((product) => idealFor.includes(product.for));
    }
    return products;
  }

  const {
    state: { products, sortBy, sizes, brands, idealFor },
  } = useFilter();

  const filterByIdealForProducts = filterByIdealFor(products, idealFor);
  const filterBySizedProducts = filerBySize(filterByIdealForProducts, sizes);
  const filterByBrandProducts = filterByBrand(filterBySizedProducts, brands);
  const filterProducts = checkSortByProduct(filterByBrandProducts, sortBy);

  return (
    <>
      {filterProducts.length > 0 && (
        <h2 className="all-product-heading">
          All Products ({filterProducts.length})
        </h2>
      )}
      <div className="product-list">
        {filterProducts &&
          filterProducts?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default ProductListing;
