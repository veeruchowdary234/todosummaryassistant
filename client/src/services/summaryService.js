import axios from 'axios';

export const sendSummary = async () => {
  const response = await axios.post('/api/summarize');
  return response.data;
};
