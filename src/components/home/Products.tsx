import Product from 'components/common/Product';
import { IProduct } from 'Models/types';
import React from 'react';
import { Row } from 'react-bootstrap';

const Products = ({ products }: IProduct[]) => {
  return (
    <div className="my-5">
      <h2 className="mb-4">Latest Products</h2>
      <Row>
        {products.map((product: IProduct) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default Products;
