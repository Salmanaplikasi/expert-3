import API_CONFIG from './apiConfig';

const API_ENDPOINT = {
  HOME: `${API_CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${API_CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${API_CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
