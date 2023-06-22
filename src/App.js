import './App.css';
import Home from './pages/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import MyNav from './components/Navbar';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} >
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;

function Dashboard(){
  <>
    <MyNav />
      <Outlet />
    <Footer />
  </>
}
