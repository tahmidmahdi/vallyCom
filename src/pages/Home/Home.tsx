import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { IProduct } from 'Models/types';
import React, { useEffect, useState } from 'react';
import productService from 'services/productService';
const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  useEffect(() => {
    productService.getProducts().then((res) => setProducts(res));
  });
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
