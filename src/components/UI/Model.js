import React from 'react'
import "./Model.css"
import ReactDOM  from 'react-dom'

const BackDrop = props =>{
    return (
        <div className='backdrop'></div>
    )
}
const ModelOverlay = props =>{
    return (
        <div className='modal'>
            <div >
              {props.children}
            </div>
        </div>
    )
}

const PortalElement = document.getElementById("overlay")

const Model = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<BackDrop/> , PortalElement)}
    {ReactDOM.createPortal(    
    <ModelOverlay>
        {props.children}
    </ModelOverlay> , PortalElement)}

    </>
  )
}

export default Model