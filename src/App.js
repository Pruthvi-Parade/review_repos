import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './Components/Homepage';
import Movie from './Components/Movie';
import Header from './Components/Header/Header'
import Movielist from './Components/Movielist/Movielist';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='movie/:id' element={<Movie />} />
        <Route path='movielist/:type' element={<Movielist />} />
        <Route path='/*' element={<h1>Error Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;