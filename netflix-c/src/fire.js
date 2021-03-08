import firebase from 'firebase'
  
  var firebaseConfig = {
    apiKey: "AIzaSyBK4fyEaE3gdf4DlR6f2nxHVZRwmTXtKlc",
    authDomain: "videoproject-32916.firebaseapp.com",
    projectId: "videoproject-32916",
    storageBucket: "videoproject-32916.appspot.com",
    messagingSenderId: "948413903831",
    appId: "1:948413903831:web:fcd3e1ac3f9cbd53509192"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;