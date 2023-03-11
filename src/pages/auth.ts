// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCdxnMvyDPZCu0XP7O_r1cIWGjUVix4k",
  authDomain: "refresh-icons.firebaseapp.com",
  projectId: "refresh-icons",
  storageBucket: "refresh-icons.appspot.com",
  messagingSenderId: "730662992922",
  appId: "1:730662992922:web:1110aced5ba1c69bf565a3",
  measurementId: "G-HY863XH9JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiI4MTIxZTczMzg2ZmQ4MTE3Njg0MmIwYWZhNzNiYTExYWEwN2M2MDNlZmU2ZjcwMGI5MTFlYjc1NWI4YmZlMjAxODIzOWQxNjBmNDMzNTQ3ZiIsImlhdCI6MTY3ODUxNzI4Ni43NDk3LCJuYmYiOjE2Nzg1MTcyODYuNzQ5NzAzLCJleHAiOjE3MTAxMzk2ODYuNzQxOTksInN1YiI6IjEzODkzMCIsInNjb3BlcyI6W119.mrnUBLNFJktQlBdjGmlWu2wDHIgDYNaQOajoqvOFoVooobbqPtt2dxvfepbzDmOxW_TFREJvlZqT_uF-IyCU-0n-kllWdLZIgVzdLOy9qkUb7iaHoFcF1N_w71m9g9F2O9Bf99NduS349IDHv0xUrr_c2VRFkese9cuReJTcDO4YjVLfygysyMpFHVTSGPvlZntGsgvjLnJih88rP0WUa50P_KZ2SfkGiLKC_9AbQCgShqp95sIfNxXkVTXLUH5cCHDnyncxaPq6WMoXr5hwcYW809xdnBSd5rho00R1TDexK4i8OzBfmywuUbDm4CplHHUuCFNJeyjq7JboZ26SIyPi5SP8I6VBtPSfHi0Xm5vuLJ-Aj4GhEFA_OvfkWJ_kPcNCHm2_ObzyM332hx5y7yU7XiOc8VItdziUiIwkmd7FfCWDdpcQviTiDRIAoNEfMUjYUuTrGwV85OuaR9FDd7fMoo04qwSZbm2yCfYpG3EE1leDp60zaZeZBFB3EbxQ';
