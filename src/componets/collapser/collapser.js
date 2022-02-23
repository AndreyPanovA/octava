import React from "react";
import {Collapse} from "react-bootstrap";

const Collapser = ({children, Btn})=>{
    const [state, setState]=React.useState({
        isShow:false
    })
    const callbacks = {
        onClick:()=>{
            setState((prev)=>({...prev, isShow: !prev.isShow}))
        }
    }
    return (
        <div>
            <Btn onClick={callbacks.onClick} />
            <Collapse in={state.isShow} >
                {children}
            </Collapse>
        </div>
    )
}
export default Collapser
