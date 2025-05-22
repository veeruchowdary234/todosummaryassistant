import axios from 'axios';

export const sendToSlack = async (message) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  const payload = {
    text: `📝 *Todo Summary:*\n${message}`
  };

  const response = await axios.post(webhookUrl, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};
