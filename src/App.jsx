import './App.css'
import Header from './components/Header/Header'
import Lazyload from './components/Lazyload/Lazyload';
import Main from './components/Main/Main'
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {
        loading ?
          <div className='h-screen w-screen'>
            <Lazyload></Lazyload>
          </div>
          :
          <div>
            <Header></Header>
            <Main></Main>
          </div>
      }
    </>
  )
}

export default App
