import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBRCO1Q4matAtBOuuFs4Gofmv07dFhhVG4',
	authDomain: 'kanban-devsharks.firebaseapp.com',
	projectId: 'kanban-devsharks',
	storageBucket: 'kanban-devsharks.appspot.com',
	messagingSenderId: '73804733188',
	appId: '1:73804733188:web:85caf5b0c0c6caf9c80e51',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();
const auth = getAuth();
const storage = getStorage(app);

export { app, db, timestamp, auth, storage };
