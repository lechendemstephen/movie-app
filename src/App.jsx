import './css/App.css'
import Favorite from './pages/Favorite'
import Home from './pages/home'
import { Routes, Route} from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'
import NavBar from './components/NavBar'


function App() {
 

  return (
   
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>

        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/favorites' element= {<Favorite />}/>
        </Routes>

      </main>
    </MovieProvider>

   
  )
}

export default App
