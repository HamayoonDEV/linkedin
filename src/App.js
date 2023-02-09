import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css'
function App() {
  return (
    <div className="App">
      {/**Header */}
      <Header/>
      {/**App Body */}
      <div className="app-body">
        <Sidebar/>
      </div>
      {/** Side bar */}
      {/**Feed */}
      {/**Widgets */ }
     
    </div>
  );
}

export default App;
