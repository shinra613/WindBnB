
import './App.css';
import Blogcard from './blogcard';
import database from './blogdata';


function App() {

  

  return (
    <div className="App">
      <h1>Blogs</h1>
      <div ClassName="hightlight-blog">
        

      </div>
      <div className="blog-container">
         
        {database.map((item) => {  return <Blogcard title={item.title} date={item.date} desc={item.desc} link={item.link} /> })}
        </div> 
      
    </div>
  );
}

export default App;
