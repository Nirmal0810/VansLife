import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Vans from './pages/Vans'
import HostLayout from './Components/HostLayout'
import Layout from './Components/Layout'
import HostDashboard from './pages/Host/HostDashboard'
import HostIncome from './pages/Host/HostIncome'
import HostVans from './pages/Host/HostVans'
import HostReviews from './pages/Host/HostReviews'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import "../server"

export default function App(){
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='host' element={<HostLayout />}>
            <Route index element={<HostDashboard/>}/>
            <Route path='income' element={<HostIncome/>}/>
            <Route path='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>
            <Route path='reviews' element={<HostReviews/>}/>
          </Route>
          <Route path='about' element={<About />}></Route>
          <Route path='vans' element={<Vans />}></Route>
        </Route>        
      </Routes>
      
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
