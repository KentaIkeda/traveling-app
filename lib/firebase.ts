import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_5Jd6y3gR2pXc6RwTfxEWhrNw6XUoJ0U',
  authDomain: 'traveling-app-fb116.firebaseapp.com',
  projectId: 'traveling-app-fb116',
  storageBucket: 'traveling-app-fb116.appspot.com',
  messagingSenderId: '331315090637',
  appId: '1:331315090637:web:7ed0e2dcd1d9c2742c4584',
  measurementId: 'G-W8MKS9V7V3',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
