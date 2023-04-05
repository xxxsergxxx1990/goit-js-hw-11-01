import axios from 'axios';
const axios = require('axios');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25304871-df2e19bed09fd25767dfbf1e2';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.perPage = 40;
    this.page = 1;
  };

  async fetchApi() {
    const params = new URLSearchParams({
      q: this.searchQuery,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.perPage,
      page: this.page,
    });
    try {
      const url = `${BASE_URL}/?${params}`;
      this.stepPage();
      return await axios.get(url);
    }
    catch(e){
      return console.log('err- ', e);
    }
    
    
  };

  stepPage() {
    this.page += 1;
  };

  resetPage() {
    this.page = 1;
  };

  get query() {
    return this.searchQuery;
  };

  set query(newQuery) {
    this.searchQuery = newQuery;
  };

}



