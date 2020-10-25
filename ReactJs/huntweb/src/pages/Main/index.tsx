import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, ProductList, Article, Actions } from "./styles";

interface ProductProps {
  _id: String;
  title: String;
  description: String;
  url: String;
}
interface productInfoProps {
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export default function Main() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productInfo, setProductInfo] = useState<productInfoProps>();
  const [page, setPage] = useState(1);

  function prevPage() {
    if (page === 1) return;
    const pageNumber = page - 1;
    loadProduct(pageNumber);
    setPage(pageNumber);
  }

  function nextPage() {
    if (page === productInfo?.pages) return;
    const pageNumber = page + 1;
    loadProduct(pageNumber);
    setPage(pageNumber);
  }

  async function loadProduct(page = 1) {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    console.log(productInfo);

    setProducts(docs);
    setProductInfo(productInfo);
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
        <Actions>
          <button disabled={page === 1} onClick={prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo?.pages} onClick={nextPage}>
            Próximo
          </button>
        </Actions>
      </ProductList>
    </Container>
  );
}
