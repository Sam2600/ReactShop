import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { ContextUse } from "../Context/contextProvider";

const MainPage = () => {
  const [products, setProducts] = useState([]);

  const { initialState, dispatch } = ContextUse();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const handleClick = (res) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        count: 1,
        added: true,
        product: res,
      },
    });
  };

  return (
    <div className="flex flex-wrap justify-center my-10">
      {products.map((res) => {
        return (
          <ProductCard
            key={res.id}
            onclick={() => handleClick(res)}
            value={initialState.added}
            {...res}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
