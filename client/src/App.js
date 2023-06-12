import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import {Detail, Form, HomePage, LandingPage, NavBar} from "./components"



function App() {
  const {pathname} = useLocation()
 

  return (
    <div className="App">
      {pathname !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
