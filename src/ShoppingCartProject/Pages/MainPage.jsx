import { useSelector } from "react-redux";
import {
  currentStatus,
  error,
  selectAllProducts,
} from "../Redux/features/ProductSlice";
import ProductCard from "../components/ProductCard";

const MainPage = () => {
  const errors = useSelector(error);
  const products = useSelector(selectAllProducts);
  const status = useSelector(currentStatus);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeed") {
    content = products.map((product) => {
      return <ProductCard key={product.id} {...product} />;
    });
  } else if (status === "failed") {
    content = <div>{errors}</div>;
  }

  return <div className="flex flex-wrap justify-center my-10">{content}</div>;
};

export default MainPage;
