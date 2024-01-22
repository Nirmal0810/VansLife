import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App(){
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className="site-logo">#VANLIFE</Link>
        <nav className='navbar'>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}