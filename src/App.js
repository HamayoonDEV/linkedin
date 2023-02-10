import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import './App.css'
function App() {
  return (
    <div className="App">
      {/**Header */}
      <Header/>
      {/**App Body */}
      <div className="app-body">
        <Sidebar/>
      
      {/** Side bar */}
      {/**Feed */}
      <Feed/>

      {/**Widgets */ }
      </div>
     
    </div>
  );
}

export default App;
