import './App.css';

import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Whiskey from './IntroAcol';
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global'
import {lightTheme, darkTheme} from './styles/theme'
import { useThemeContext } from './context/themeContext';
import DashboardUpSidebar from './containers/DashboardUpSidebar';

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

function TitleImg() {
  return <img src="/images/whiskey.jpg" alt='whiskey' width="98.5%" height="30%" className='Center'></img>
}

function Page() {
  const [message, setMessage] = useState("");
  useEffect(() => { fetch('/api/time').then(response => response.text()).then(message => { setMessage(message); }); }, [])

  return <div className="App">
    <HeadTitle title="Wine And More"></HeadTitle>
    <Menu></Menu>

    <Header title="React" onChangeMode={function () {
      alert("Heade2r");
    }}></Header>

    <h1 className="App-title">{message}</h1>
    <p className="App-intro">                To get started, edit <code>src/App.js</code> and save to reload.            </p>
  </div >
}

function PageAlcol() {
  return <div className='Center'>
    <img src="/images/wine.png" alt='wine' width="96px" height="192px" className='Center'></img>
    <p>파논 토카이 아토푸슈 6</p>
    <p>레드 와인</p>
  </div>
}

function InsidePage(props) { // Menu 컴포넌트 
  let menuId = props.selectedMenu // Menu 컴포넌트 선택된 값
  let content = null;

  if (menuId === '칵테일 추천') {
    content = <TitleImg></TitleImg>
  }
  else if (menuId === '칵테일') {
    content = <h1>식</h1>
  }
  else if (menuId === '위스키') {
    content = <Whiskey></Whiskey>
  }
  else {
    content = <h2>{props.selectedMenu}</h2>
  }

  // setMenuId(props.menuId);

  return <div>
    {content}
  </div>
}

function Menu() {
  const menus = [
    { id: 1, title: '칵테일 추천' },
    { id: 2, title: '칵테일' },
    { id: 3, title: '위스키' },
    { id: 4, title: '보드카' },
    { id: 5, title: '데킬라' },
    { id: 6, title: '리큐르' },
    { id: 7, title: '럼' },
    { id: 8, title: '와인' }
  ]
  let [clickIndex, setClickIndex] = useState("칵테일 추천");
  const lis = []
  for (let i = 0; i < menus.length; i++) {
    lis.push(<li key={menus[i].id}><a href='/' onClick={(event) => {
      event.preventDefault();
      // clickIndex = menus[i].title;
      setClickIndex(menus[i].title)
    }
    }>{menus[i].title}</a></li>)
  }
  return <div id="menu">
    <ul>
      {lis}
    </ul>
    <InsidePage selectedMenu={clickIndex}></InsidePage>
  </div>
}

function RowMenu(props) {
  const lis = []
  for (let i = 0; i < props.Menu.length; i++) {
    lis.push(<li key={props.Menu[i].id}><a href='/' onClick={(event) => {
      event.preventDefault();
    }
    }>{props.Menu[i].title}</a></li>)
  }
  return <div id='RowMenu'>
    <ul>
      {lis}
    </ul>
  </div>
}
function HomePage() {
  const menus = [
    { id: 1, title: "최근 변경" },
    { id: 2, title: "최근 토론" },
    { id: 3, title: "특수 기능" }

  ]
  return <div id="page">
    {/* Page Top Header */}
    <div id='PageHeader'>
      <div>
        <RowMenu Menu={menus} ></RowMenu>
      </div>
    </div>
    {/* Page Body */}
    <div id="PageBody">
      <div id='BodyContent'> </div>
    </div>
    {/* Page Footer*/}
    <div id='PageFooter'></div>

  </div>
}

function SpeedCode2() {
  const { theme } = useThemeContext();
  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <DashboardUpSidebar/>
  </ThemeProvider>
}



function SpeedCode() {
  const { theme } = useThemeContext();
  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <Dashboard />
  </ThemeProvider>
}

function App() {
  return (
    <Router>
      <header>
        <meta charSet="utf-8"></meta>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route path="/api/time" component={Page} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/speedCode" component={SpeedCode} />
          <Route path="/speedCode2" component={SpeedCode2} />
          <Route path="*" component={PageAlcol} />

        </Switch>
      </header>
    </Router>
  );
}


export default App;
