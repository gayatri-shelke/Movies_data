import './App.css';
import Home from './component/Home.js'
// import SingleMovie from './component/SingleMovie.js'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
      
    </div>
  );
}

export default App;
