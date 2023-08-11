import { useEffect, useReducer } from "react";
import "../index.css";
import axios from "axios";

/**
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
 */

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {

  switch (action.type) {

    case "fetchData":
        //console.log(action.value)
      return { ...state, loading: false, post: action.value };

    case "errorHappen":
      return { ...state, error: action.value };
  }
};

const CounterOne = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "fetchData", value: res.data });
      })
      .catch((err) => {
        dispatch({ type: "errorHappen", value: err });
      });
  }, []);

  const [temp, dispatch] = useReducer(reducer, initialState);

  //console.log(temp);

  return (
    <div>
      {temp.loading && <div>Loading...</div>}
      {temp.error !== "" && <div>There is an error</div>}
      <p>{temp.post.body}</p>
    </div>
  );
};

export default CounterOne;
