# Employee Polls Project

## Project Description

The **Employee Polls** project is a web application that allows employees to create polls for their coworkers. The core functionality involves asking questions in the form: "Would you rather [option A] or [option B]?". Users cannot choose "neither" or "both" — they must decide between the two options.

In this application, users can:

- Answer polls and view both answered and unanswered polls.
- Create new polls for their colleagues to answer.
- See how others have responded to existing polls.
- View a leaderboard that ranks users based on their poll activity.

The application provides features such as logging in, navigating between answered and unanswered polls, voting, posting new polls, and checking user rankings on the leaderboard.

## App Functionality

### Features

- **Login**: Users can impersonate existing users by selecting from a dropdown on the login page. After login, the user can view and interact with polls relevant to their account. Information about the logged-in user is always displayed on the page.
- **Home Page**: After logging in, users are presented with polls categorized into unanswered and answered sections, sorted by creation date (newest at the top). Unanswered polls are displayed by default.
- **Poll Details**: Clicking a poll provides more information, including:
  - "Would You Rather" question text.
  - Avatar of the poll author.
  - Voting options with counts and percentages for answered polls.
- **Voting**: Users can vote on unanswered polls, and upon voting, the poll details are updated to show the results.
  - Users are allowed to vote only once, and they cannot change their answers.
- **404 Page**: If a user attempts to access a poll that does not exist, a 404 error page is displayed.
- **Navigation**: A navigation bar allows easy movement between the home page, leaderboard, and other sections of the application.
- **New Poll**: Users can create new polls by navigating to `/add` and submitting a form with two options. The newly created poll will be displayed in the appropriate category on the home page.
- **Leaderboard**: A leaderboard at `/leaderboard` shows each user ranked by the number of polls created and answered. Each entry includes the user's name, avatar, number of questions asked, and number of questions answered.

## Installation and Launch Instructions

Follow these steps to install and run the Employee Polls project locally:

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd employee-polls
   ```

2. **Install Dependencies**
   Install all the required dependencies using npm:
   ```bash
   npm install
   ```

### Running the Application

To launch the application locally, use the following command:

```bash
npm start
```

This command will start the development server, and the application will be accessible at `http://localhost:3000` in your web browser.

### Running Tests

To run the test suite, execute the following command:

```bash
npm test
```

This will run the available unit tests for the application using Jest.

## Project Scripts

- **`npm start`**: Starts the development server.
- **`npm build`**: Builds the application for production.
- **`npm test`**: Runs the unit tests using Jest.
- **`npm eject`**: Ejects the configuration files from `create-react-app`. Use with caution.

## Dependencies

The project is built using the following major dependencies:

- **React**: Frontend UI framework (`react`, `react-dom`).
- **React Router**: Handles routing within the application (`react-router-dom`).
- **Redux**: State management (`redux`, `react-redux`).
- **Redux Thunk**: Middleware for handling asynchronous actions (`redux-thunk`).
- **React Testing Library**: Used for unit testing React components (`@testing-library/react`, `@testing-library/jest-dom`).

## Contact

If you have any questions or encounter any issues, feel free to open an issue on the repository.

Enjoy building and using the Employee Polls app!
