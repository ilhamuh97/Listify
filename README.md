# Listify

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ilhamuh97/Listify)

Listify is a simple yet feature-rich full-stack shopping list application. It allows users to manage their shopping items with a clean, modern, and theme-able interface. The project is built with a React frontend and a Node.js/Express backend, demonstrating a complete CRUD (Create, Read, Update, Delete) workflow.

## Features

- **Create & Manage Items**: Easily add new items to your shopping list.
- **Mark as Bought**: Click an item to toggle its "bought" status, visually represented with a strikethrough.
- **Delete Items**: Remove items from the list with a confirmation modal to prevent accidental deletions.
- **Persistent Storage**: All shopping items are stored in a MongoDB database.
- **Theming**: Choose from over 20 pre-built themes powered by DaisyUI to customize the look and feel.
- **Responsive UI**: The application is designed to work seamlessly on both desktop and mobile devices.
- **State Management**: Utilizes Zustand for efficient and minimalistic client-side state management.
- **User Feedback**: Provides instant feedback for all actions using toast notifications.

## Tech Stack

### Frontend

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS & DaisyUI
- **State Management**: Zustand
- **HTTP Client**: Axios

### Backend

- **Framework**: Node.js & Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **API**: REST

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20.x or later recommended)
- npm (v10.x or later)
- A running MongoDB instance (local or a cloud service like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/ilhamuh97/Listify.git
    cd Listify
    ```

2.  **Set up the Backend:**

    ```sh
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Create a local environment file from the example
    cp .env.example .env
    ```

    Open the newly created `.env` file and add your MongoDB connection string:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

3.  **Set up the Frontend:**

    ```sh
    # Navigate to the frontend directory from the root
    cd ../frontend

    # Install dependencies
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    In the `/backend` directory, run:

    ```sh
    npm run dev
    ```

    The backend server will start on `http://localhost:3001`.

2.  **Start the Frontend Development Server:**
    In the `/frontend` directory, run:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

### Backend (`/backend`)

- `npm run dev`: Starts the development server with live-reloading using `nodemon`.
- `npm run build`: Compiles TypeScript to JavaScript for production.
- `npm run start`: Runs the compiled production server.
- `npm run lint`: Lints the TypeScript source files.

### Frontend (`/frontend`)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Serves the production build locally for preview.
- `npm run lint`: Lints the project files.

## Try It Online

You can access the application at:

https://zingy-hamster-0539d7.netlify.app/

If the app does not respond immediately, please **wake up the server first** by visiting:

https://listify-xqfy.onrender.com/

The server may be shut down automatically due to free-tier limitations, so the first request might take some time.

## API Endpoints

The backend exposes the following RESTful API endpoints under the base path `/api/v1/items`.

| Method   | Endpoint | Description                        | Request Body            |
| :------- | :------- | :--------------------------------- | :---------------------- |
| `GET`    | `/`      | Fetches all shopping items.        | -                       |
| `POST`   | `/`      | Creates a new shopping item.       | `{ "name": "string" }`  |
| `PUT`    | `/:id`   | Updates an item's `bought` status. | `{ "bought": boolean }` |
| `DELETE` | `/:id`   | Deletes a specific shopping item.  | -                       |
