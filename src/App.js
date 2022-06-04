import "./App.css";

import Filters from "./Components/Filters/Filters";
import ProductListing from "./Components/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <div className="filter-section">
        <Filters />
      </div>
      <div className="product-section">
        <h2 className="filterable">Filterable</h2>
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
