
import { useState } from 'react';
import './App.css';
import ColorBar from './component/ColorBar'; 
import copy from "copy-to-clipboard"

function App() {

  const [rgbfirst, setRgbFirst] = useState([73])
  const [rgbSecond, setRgbSecond] = useState([173])
  const [rgbThird, setRgbThird] = useState([110])
  const [clickTocopy, setClickTocopy] = useState()


  const copyToClipboard = () => {
      const copyText = `rgb(${rgbfirst}, ${rgbSecond}, ${rgbThird})`;
      copy(copyText);
      setClickTocopy(!clickTocopy)
      
  }

  const getFirst = (colors) =>{
  
    setRgbFirst(colors)

  }

  const getSecond = (colore) =>{
  
    setRgbSecond(colore)
    
  }
  const getThird = (colorp) =>{

    setRgbThird(colorp)
    
  }

  
  return (
   <>
   
    <div className='box' style={{backgroundColor:`rgb(${rgbfirst}, ${rgbSecond}, ${rgbThird})`}} > 
     <h2>rgb({rgbfirst}, {rgbSecond}, {rgbThird})</h2> <img width="34" height="34" src="https://img.icons8.com/dusk/64/copy.png" alt="copy" onClick={copyToClipboard} className={clickTocopy ? 'scaleup' : null}/>
    </div>
    <ColorBar getFirst={getFirst} getSecond={getSecond} getThird={getThird}/>
   </>
  );
}

export default App;
