import { useState } from 'react'
import './style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className={"makeCenter"}>
      <Header number={number}/>
      <h1 className={"h1"}>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <Footer/>
    </div>
  );
}

export default App;
