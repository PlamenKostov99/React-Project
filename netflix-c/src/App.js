/* eslint-disable react/jsx-no-undef */
import React, {useState, useEffect} from 'react';
import fire from './fire';
import './App.css';
import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner";
import Nav from './Nav';
import Login from './Login';
import Hero from './Hero';

function App() {
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors= () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>  {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break
      }
    });
  }
  const handleSignUp = () =>  {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      // eslint-disable-next-line default-case
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break
      }
    });
  }

  const handleLogout = () => {
     fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInput();
        setUser(user);
      } else {
        setUser('');
      }
    })
  }
  useEffect (() => {
    authListener();
  }, [])
  return (
    <div className="app">
      {user ? (
        <div className="app1">
         
      <Nav></Nav>
      
      <Hero handleLogout={handleLogout}></Hero>
      
      <Banner></Banner>
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
      
    </div>
  );
}

export default App;

