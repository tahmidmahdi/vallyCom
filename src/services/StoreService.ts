import requests from 'services/httpService';
class StoreService {
  getStores(): Promise<any> {
    return requests.get('/store');
  }

  getStoreByID(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addStoreByID(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  updateStoreByID(id: string, body: {}): Promise<any> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStoreByID(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
