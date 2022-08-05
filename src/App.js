import './App.css';
import React, { useState, useEffect, Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'



function Header(props) { //Component
  console.log('props', props, props.title)
  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>

}


function HeadTitle(props) {
  return <h1 className='HeadTitle'>
    {props.title}
  </h1>

}

function TItleImg() {
  return <img src="/images/universe.jpg" alt='house' width="98.5%" height="30%" className='Center'></img>
}

function Menu() {
  return <div id="menu">
    <ul>
      <li><a href='/'>Menu1</a></li>
      <li><a href='/'>Menu2</a></li>
      <li><a href='/'>Menu3</a></li>
      <li><a href='/'>Menu4</a></li>
    </ul>
  </div>
}

// function Nav(props) {
//   const lis = []
//   for (let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(<li key={t.id}>
//       <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
//         event.preventDefault();
//         props.onChangeMode(event.target.id);
//       }}>{t.title}</a>
//     </li>)
//   }
//   return <nav>
//     <ol>
//       {lis}
//     </ol>
//   </nav>
// }


function Page1() {
  const [message, setMessage] = useState(""); useEffect(() => { fetch('/api/hello').then(response => response.text()).then(message => { setMessage(message); }); }, [])

  return <div className="App">
  <HeadTitle title="HI"></HeadTitle>
  <Menu></Menu>
  {/* <Nav topics={topics} onChangeMode={(id) => {
  alert(id);
}}></Nav> */}
  <TItleImg></TItleImg>
  <Header title="React" onChangeMode={function () {
    alert("Heade2r");
  }}></Header>

  <h1 className="App-title">{message}</h1>
  <p className="App-intro">                To get started, edit <code>src/App.js</code> and save to reload.            </p>
</div >
}

function Page2() {
  const [message, setMessage] = useState(""); useEffect(() => { fetch('/api/hello').then(response => response.text()).then(message => { setMessage(message); }); }, [])

  return <div className="App">
  <HeadTitle title="HI"></HeadTitle>
  {/* <Menu></Menu> */}
  {/* <Nav topics={topics} onChangeMode={(id) => {
  alert(id);
}}></Nav> */}
  <TItleImg></TItleImg>
  <Header title="React" onChangeMode={function () {
    alert("Heade2r");
  }}></Header>

  <h1 className="App-title">{message}</h1>
  <p className="App-intro">                To get started, edit <code>src/App.js</code> and save to reload.            </p>
</div >
}



function App() {
  // const topics = [
  //   { id: 1, title: 'html', body: 'html is ...' },
  //   { id: 2, title: 'vue', body: 'vue is ...' },
  //   { id: 3, title: 'js', body: 'js is ...' },
  // ]
  const [message, setMessage] = useState(""); useEffect(() => { fetch('/api/hello').then(response => response.text()).then(message => { setMessage(message); }); }, [])
  return (
    <Router>
      <header>
        <Link to="/">
          <p>메인화면</p>
        </Link>
        <Link to="/api/time">
          <p>시간 리셋</p>
        </Link>
        <Route exact paht="/" element={<Main />}></Route>
        <Route path="/api/time" element={<Main />} />
        <Route exact path="*" element={<Main />} />
      </header>
      <p> 가나다라 </p>

     

      <div className="App">
        <HeadTitle title="HI"></HeadTitle>
        <Menu></Menu>
        {/* <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav> */}
        <TItleImg></TItleImg>
        <Header title="React" onChangeMode={function () {
          alert("Heade2r");
        }}></Header>

        <h1 className="App-title">{message}</h1>
        <p className="App-intro">                To get started, edit <code>src/App.js</code> and save to reload.            </p>
      </div >
    </Router>
  );
}

export default App;
