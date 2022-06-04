import { createContext, useContext, useEffect, useReducer } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    products: [],
    sortBy: null,
    sizes: [],
    brands: [],
    idealFor: [],
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_PRODUCTS": {
        return { ...state, products: action.payload.products };
      }
      case "SORT_BY": {
        return { ...state, sortBy: action.payload.sortBy };
      }
      case "FILTER_BY_SIZE": {
        return {
          ...state,
          sizes: state.sizes.includes(action.payload.size)
            ? [...state.sizes.filter((size) => size !== action.payload.size)]
            : [...state.sizes, action.payload.size],
        };
      }
      case "FILTER_BY_BRAND": {
        return {
          ...state,
          brands: state.brands.includes(action.payload.brand)
            ? [
                ...state.brands.filter(
                  (brand) => brand !== action.payload.brand
                ),
              ]
            : [...state.brands, action.payload.brand],
        };
      }
      case "FILTER_BY_IDEALFOR": {
        return {
          ...state,
          idealFor: state.idealFor.includes(action.payload.idealFor)
            ? [
                ...state.idealFor.filter(
                  (idealFor) => idealFor !== action.payload.idealFor
                ),
              ]
            : [...state.idealFor, action.payload.idealFor],
        };
      }
      case "CLEAR_FILTER": {
        return {
          ...state,
          sortBy: null,
          sizes: [],
          brands: [],
          idealFor: [],
        };
      }
      default:
        return [...state];
    }
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "LOAD_PRODUCTS", payload: { products: data } });
    };
    fetchData();
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw Error("Invalid Context Operation:FilterContext");
  }

  return context;
};

export { FilterProvider, useFilter };
