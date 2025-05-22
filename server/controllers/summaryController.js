import Todo from '../models/Todo.js';
import { generateSummary } from '../utils/openai.js';
import { sendToSlack } from '../utils/slack.js';

export const summarizeAndPostToSlack = async (req, res) => {
  try {
    const todos = await Todo.find({ completed: false });
    console.log("Fetched todos:", todos.length);

    const summary = await generateSummary(todos);
    console.log("Generated summary:", summary);

    const slackResponse = await sendToSlack(summary);
    console.log("lack response:", slackResponse);

    res.json({ message: 'Summary sent to Slack', slackResponse });
  } catch (error) {
    console.error("Error in summarizeAndPostToSlack:", error);
    res.status(500).json({ error: error.message || "Unexpected error" });
  }
};

