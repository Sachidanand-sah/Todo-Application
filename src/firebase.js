import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYfAUHCsJhGoAu1OcbxvyxUpjb6rZQ79M",
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
