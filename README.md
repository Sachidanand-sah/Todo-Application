# Responsive Todo List Application

## Project Description

A feature-rich, responsive Todo List application built using React and Firebase. This project demonstrates essential React skills such as component-based architecture, state management, event handling, and styling. It also incorporates cloud storage with Firebase Firestore for persistent data storage.

## Features

1. **Add Todos**: Users can input and add tasks to the list. The input field clears after submission.
2. **Mark as Completed**: Users can mark tasks as completed with a checkbox. Completed tasks are visually distinct (strikethrough text and grayed out).
3. **Delete Todos**: Each task has a delete button to remove it from the list.
4. **Filter Tasks**: Filter options to display All, Active, or Completed tasks.
5. **Add Project Details**: Users can associate tasks with projects and specify start and end dates for each task.
6. **Persistent Data**: Tasks are stored in Firebase Firestore, ensuring they persist across page reloads.
7. **Responsive UI**: Built using React-Bootstrap for a clean and responsive design.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React-Bootstrap**: For responsive and attractive UI components.
- **Firebase Firestore**: Cloud NoSQL database for storing tasks.
- **JavaScript (ES6)**: Language used for logic and functionality.

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- Firebase account (with Firestore enabled)

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Sachidanand-sah/Todo-List.git
   cd responsive-todo-list
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase**:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database.
   - Copy your Firebase configuration from the Firebase Console.
   - Create a new file `firebase/firebaseConfig.js` in the project and add the configuration:
     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getFirestore } from 'firebase/firestore';

     const firebaseConfig = {
         apiKey: "",
         authDomain: "todo-application-bba81.firebaseapp.com",
         databaseURL: "https://todo-application-bba81-default-rtdb.firebaseio.com",
         projectId: "todo-application-bba81",
         storageBucket: "todo-application-bba81.firebasestorage.app",
         messagingSenderId: "942024253790",
         appId: "1:942024253790:web:6ee75e69ed5b15c180efcf"
       };

     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);

     export default db;

     ```

4. **Run the Project**:

   ```bash
   npm start
   ```

   This will start the development server. Open `http://localhost:3000` in your browser to view the application.

### Deployment (Optional)

- **Deploy on Firebase Hosting**:
  1. Install Firebase CLI:
     ```bash
     npm install -g firebase-tools
     ```
  2. Log in to Firebase:
     ```bash
     firebase login
     ```
  3. Initialize Firebase:
     ```bash
     firebase init
     ```
  4. Build the project:
     ```bash
     npm run build
     ```
  5. Deploy:
     ```bash
     firebase deploy
     ```

## Folder Structure

```
src/
├── components/
│   ├── TodoForm.js        # Component for adding tasks
│   ├── TodoList.js        # Component for listing tasks
│   ├── TodoFilter.js      # Component for filtering tasks
├── firebase/
│   └── firebaseConfig.js  # Firebase configuration
├── App.js                 # Main application file
├── index.js               # Entry point
```

## Usage

1. Add a task in the input field and click "Add".
2. Specify the project name, start date, and end date for each task.
3. Use the checkboxes to mark tasks as completed.
4. Delete tasks using the "Delete" button.
5. Use the "All", "Active", and "Completed" filters to view specific tasks.

## Contributions

Feel free to fork this repository, make changes, and submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# Todo-Application
