import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container, ProductInfo } from "./styles";

interface ProductParams {
  id: string;
}

interface ProductFields {
  description: string;
  title: string;
  url: string;
}

const Product: React.FC = (props) => {
  const params = useParams<ProductParams>();
  const [product, setProduct] = useState<ProductFields>();

  useEffect(() => {
    api.get(`/products/${params.id}`).then((response) => {
      setProduct(response.data);
    });
  }, [params.id]);

  return (
    <Container>
      <Header />
      <ProductInfo>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>

        <p>
          URL: <a href={product?.url}>{product?.url}</a>
        </p>
      </ProductInfo>
    </Container>
  );
};

export default Product;
