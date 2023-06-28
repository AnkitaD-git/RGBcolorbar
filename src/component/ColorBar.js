import React, { useState } from 'react'

const ColorBar = ({getFirst, getSecond, getThird}) => {
    const [valuefirst, setvalueFirst] = useState([73])
    const [valuesecond, setvalueSecond] = useState([173])
    const [valuethird, setvalueThird] = useState([110])

    const handleChangeFirst = (e) => {
        const {value} = e.target
     
        setvalueFirst(value)
        getFirst(value)
    }

    const handleChangeSecond = (e) => {
        const {value} = e.target
  
        setvalueSecond(value)
        getSecond(value)
    }
    const handleChangeThird = (e) => {
        const {value} = e.target
       
        setvalueThird(value)
        getThird(value)
    }
  return (
    <div className='InputRange'>
      <input type="range" min="0" max="255" onChange={handleChangeFirst}/>
      <h2>{valuefirst}</h2>
      <input type="range" min="0" max="255" onChange={handleChangeSecond}/>
      <h2>{valuesecond}</h2>
      <input type="range" min="0" max="255" onChange={handleChangeThird}/>
      <h2>{valuethird}</h2>
    </div>
  )
}

export default ColorBar
