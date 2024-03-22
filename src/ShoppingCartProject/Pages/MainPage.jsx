import { useSelector } from "react-redux";
import {
  currentStatus,
  error,
  selectAllProducts,
} from "../Redux/features/ProductSlice";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const MainPage = () => {
  //
  const errors = useSelector(error);
  const products = useSelector(selectAllProducts);
  const status = useSelector(currentStatus);

  useEffect(() => {
    if (localStorage.getItem("ITEM_DETAIL_ID")) {
      localStorage.removeItem("ITEM_DETAIL_ID");
    }
  }, [localStorage.getItem("ITEM_DETAIL_ID")]);

  let content;

  switch (status) {
    case "loading":
      content = (
        <span className="loading mx-auto my-auto w-1/12 h-1/12 loading-bars"></span>
      );
      break;
    case "succeed":
      content = products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      });
      break;
    case "failed":
      content = <div>{errors}</div>;
      break;
  }

  return (
    <div className="p-5 mx-auto my-12 rounded flex flex-wrap gap-10 justify-center">
      {content}
    </div>
  );
};

export default MainPage;
