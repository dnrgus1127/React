import './App.css';



function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}


function Header(props) { //Component
  console.log('props', props, props.title)
  return <header>
    <h1><a href='/' onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>

}


function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}


function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'vue', body: 'vue is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ]
  return (
    <div className="App">
      <Header title="React" onChangeMode={function(){
        alert("Header");
      }}></Header>
      <Header title="Js"></Header>
      <Header title="Vue"></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="React" body="Js"></Article>
    </div >
  );
}

export default App;
