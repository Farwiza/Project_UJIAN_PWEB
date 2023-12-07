import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MhsList from './MhsList';
import MhsCreate from './MhsCreate';
import MhsDetail from './MhsDetail';
import MhsEdit from './MhsEdit';


function App() {
  return (
    <div className="App">
      <nav class="navbar bg-black">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-white">Project Mahasiswa</span>
          </div>
      </nav>
      <BrowserRouter>
  <Routes>
    <Route path='/' element ={<MhsList />}></Route>
    <Route path='/mahasiswa/create' element ={<MhsCreate />}></Route>
    <Route path='/mahasiswa/detail/:mhsNpm' element ={<MhsDetail />}></Route>
    <Route path='/mahasiswa/edit/:mhsNpm' element ={<MhsEdit />}></Route>
    
  </Routes>
  </BrowserRouter>

    </div>
  );
  
}

export default App;
