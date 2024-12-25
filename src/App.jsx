import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Photos from './pages/photos';
import NotFound from './pages/notfound';


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
