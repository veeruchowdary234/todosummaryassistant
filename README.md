Welcome to my Todo Summary Assistant app , a full-stack web application designed to help users manage their tasks more efficiently and intelligently with an integrated llm to summarize pending tasks with openai and send it to slack

SETUP INSTRUCTIONS :
 To run this app locally you have to clone the repository and follow the steps below.
    git clone https://github.com/veeruchowdary234/todosummaryassistant.git
    cd todosummaryassistant
    cd server
    npm install
    cp .env.example .env   #example file contaons all example variabled fill them with real ones
    npm run dev            #start backend server
    #get into client folder
    cd ../client
    npm install
    npm run dev
Slack Setup instructions:
   Get into  https://api.slack.com/apps and create a new slack app by choosing an workspace
   Enable Incoming Webhooks under the app settings and activate them
   Choose the Slack channel where summary messages will be posted ex:#general,#todo
   Copy the generated webhook URL and paste it in your .env file under SLACK_WEBHOOK_URL
   Every time you click the "Summarize and Send to Slack" button in the app, a message will be sent to your selected channel.
LLM setup instructions:
   The app uses OpenAI's GPT-3.5 to generate meaningful summaries of your current pending todo
   Create an OpenAI account at https://platform.openai.com.
   Go to the API section and generate a new API key.
   Copy this key and paste it into your .env file as OPENAI_API_KEY
   The backend will now call OpenAI's API using this key to generate intelligent summaries.

Design and architecture Decisions:

    .Particulary This project is structured to keep the frontend and backend loosely coupled, enabling independent development and deployment possibly to host in diffrent platforms
    .The frontend /client is built with React and uses Tailwind CSS for styling to create responsive ui
    Components like TodoInput, TodoList, and SummaryButton are made modular and easy to maintain and by enhancing state managment in each component

    .The backend /server is an Express.js server connected to MongoDB Atlas It includes RESTful API routes api/todos/,/api/summarize controller logic and utility modules for OpenAI and Slack integration.
    .(/api/todos) handles all CRUD operations for to-dos and is managed by todoRoutes.js and todoController.js.
    .(/api/summarize) handles the generation and Slack delivery of the summary and is managed by summarizeRoute.js and      summarizeController.js 

    All API calls from the frontend are routed through the backend, making it secure and scalable using axios

    openai.js: Handles communication with OpenAI’s GPT API.
    slack.js: Manages sending messages to Slack via webhook.


