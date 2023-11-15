import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Search from "./views/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>



       {/* <header>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
      <footer></footer> */}

      <Routes>

       
        <Route path="/" element= {<Home/>}/>

        
        <Route path="/search" element= {<Search/>}/>
        

      </Routes>
   
     

      
      
      
    </section>
  );
}

export default App;
