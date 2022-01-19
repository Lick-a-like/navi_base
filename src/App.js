import React from 'react'
import logo_01 from './logo_01.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Gnb from './Gnb';
import ContentStrap from './ContentStrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "container">
          <h1><a href="www.naver.com"><img src={logo_01} className="App-logo" alt="logo" /></a></h1>
          <ul id="gnb">
            <Gnb gnblink="http://naver.com" gnbtext="네이버" gnbtarget="_blank"></Gnb>
            <Gnb gnblink="http://daum.net" gnbtext="다음" gnbtarget=""></Gnb>
            <Gnb gnblink="http://google.com" gnbtext="구글"></Gnb>
          </ul>
        </div>
      <ContentStrap></ContentStrap>
      </header>
    </div>
  );
}

export default App;