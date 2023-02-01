
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";


// Env vars
const apiKey = process.env.DB_API_KEY;
const privKey = process.env.DB_PRIVATE_KEY;
const authDomain = process.env.DB_AUTH_DOMAIN;
const projectId = process.env.DB_PROJECT_ID;
const storageBucket = process.env.DB_STORAGE_BUCKET;
const messagingSenderId = process.env.DB_MESSAGING_SENDER_ID;
const appId = process.env.DB_APP_ID;
const measurementId = process.env.DB_MEASUREMENT_ID;


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId,
    privateKey: privKey
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);