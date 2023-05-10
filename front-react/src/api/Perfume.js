import axios from 'axios';

export const getAllPerfumes = async () => {
  try {
    const response = await axios.get('http://localhost:8111/api/perfumes');
    return response.data;
  } catch (error) {
    console.error(error);
    return []; // 오류 발생 시 빈 배열 반환
  }
};

export const getPerfumeDetail = async (perfumeNumber) => {
  try {
    const response = await axios.get(`http://localhost:8111/api/perfume-details/${perfumeNumber}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // On error, return null
  }
};