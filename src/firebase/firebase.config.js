import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvou7bwZkXmPpDKxYRS3Jpf-2zXbaohB0',
  authDomain: 'dragon-news-auth-7c493.firebaseapp.com',
  projectId: 'dragon-news-auth-7c493',
  storageBucket: 'dragon-news-auth-7c493.appspot.com',
  messagingSenderId: '978498656958',
  appId: '1:978498656958:web:642d0de85cb05d589d9cef',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
