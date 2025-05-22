 Todo Summary Assistant

Welcome to my Todo Summary Assistant app — a full-stack web application designed to help users manage their tasks more efficiently and intelligently Basically This app integrates an LLM (OpenAI) to generate a summary of your pending to-dos, which is then instantly sent to a Slack channel via an incoming webhook.

---

## Setup Instructions

To run this app locally, clone the repository and follow the steps below:

```bash
git clone https://github.com/veeruchowdary234/todosummaryassistant.git
cd todosummaryassistant
```

### Backend Setup

```bash
cd server
npm install
cp .env.example .env     # Fill in real environment variable values
npm run dev              # Starts the backend server on http://localhost:5000
```

### Frontend Setup

```bash
cd ../client
npm install
npm run dev              # Starts the frontend on http://localhost:3000
```

---

## Slack Setup Instructions

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps) and create a new Slack app.
2. Choose your workspace and enable **Incoming Webhooks** under the app settings.
3. Select a Slack channel where the summary messages should be posted (e.g., `#general`, `#todo`).
4. Copy the generated webhook URL.
5. Paste the URL into your `.env` file in the backend under the key:

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

Every time you click the **"Summarize and Send to Slack"** button in the app, a message will be posted to the selected channel.

---

## LLM (OpenAI) Setup Instructions

The app uses OpenAI's GPT-3.5 model to generate meaningful summaries of your current pending todos.

1. Create an account at [https://platform.openai.com](https://platform.openai.com).
2. Navigate to the API section and generate a new API key.
3. Paste this key into your backend `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
```

The backend will now call OpenAI’s API using this key to generate intelligent summaries.

---

## Design and Architecture Decisions

This project is structured to keep the frontend and backend loosely coupled, enabling independent development and deployment, possibly hosted on different platforms for bothe front end and backend

---

### Frontend (`/client`)

- Built with React+vite.
- Uses Tailwind CSS for styling to create a responsive UI.
- Components like `TodoInput`, `TodoList`, and `SummaryButton` are modular and easy to maintain.
- State management is handled at the component level for simplicity and control.

---

### Backend (`/server`)

The backend is an Express.js server connected to MongoDB Atlas. It includes RESTful API routes liek ('/api/todos','/api/summarize'), controller logic, and utility modules for OpenAI and Slack integrations.

---

### API Routes

- `GET /api/todos` – Fetch all todos
- `POST /api/todos` – Add a new todo
- `DELETE /api/todos/:id` – Delete a todo
- `POST /api/summarize` – Generate a summary and send to Slack

---

### Controllers

- `todoController.js` – Handles logic for CRUD operations related to todos of the users.
- `summarizeController.js` – Handles logic for generating a summary from pending todos and sending it to Slack.

---

### Utilities

- `openai.js` – Handles communication with OpenAI’s GPT API.
- `slack.js` – Manages sending messages to Slack via the configured webhook.

All API calls from the frontend are routed through the backend using Axios, making communication secure and centralized.
