import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  let { id } = useParams();
  const [ProductDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loadProductDetails(id)
      .then((response) => {
        setProductDetails(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div>{loading ? <Loading /> : <div>Product ID: {id}</div>}</div>;
};
