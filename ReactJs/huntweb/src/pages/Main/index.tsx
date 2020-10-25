import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, ProductList, Article } from "./styles";

interface ProductProps {
  _id: String;
  title: String;
  description: String;
  url: String;
}

export default function Main() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  async function loadProduct() {
    const response = await api.get("/products");
    setProducts(response.data.docs);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <Container>
      <ProductList>
        {products.map((product) => (
          <Article key={Math.random()}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </Article>
        ))}
      </ProductList>
    </Container>
  );
}
