import requests from 'services/httpService';
class ProductService {
  getProducts(): Promise<any> {
    return requests.get('/product');
  }

  getProductByID(id: string): Promise<any> {
    return requests.get(`/product/${id}`);
  }

  addProductByID(body: {}): Promise<any> {
    return requests.post(`/product/`, body);
  }

  updateProductByID(id: string, body: {}): Promise<any> {
    return requests.post(`/product/${id}`, body);
  }

  deleteProductByID(id: string): Promise<any> {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
