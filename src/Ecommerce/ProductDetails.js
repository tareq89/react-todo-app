import React , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { mockProducts } from "./mockProducts";
import ShowProductDetails from "./ShowProductDetails";

export const ProductDetails = () => {

  const [currentProduct, setcurrentProduct] = useState({})

  const loadProductDetails = (id)=>{
    let Curproduct = {};
    mockProducts.map((product)=>{
      if (id==product.id){
        Curproduct = product;
        // console.log(product)
      }
    });
    return Promise.resolve(Curproduct);
  }

  let { id } = useParams();
  const [ProductDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loadProductDetails(id)
      .then((response) => {
        // setProductDetails(response);
        setcurrentProduct(response);
        // console.log(response);

      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div>{!loading ? <ShowProductDetails product={currentProduct}></ShowProductDetails> : <div>Product ID: {id}</div>}</div>;
};
