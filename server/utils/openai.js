import axios from 'axios';

export const generateSummary = async (todos) => {
  const prompt = `
Summarize the following to-do list in a short, clear paragraph:
${todos.map((todo, index) => `${index + 1}. ${todo.title}`).join('\n')}
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error?.message || 'Failed to generate summary'
    );
    
  }
};


