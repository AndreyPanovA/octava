import React from "react"
import Table from "../../componets/table/table";
import API from "../../api/api";
import {home} from "../../mook";
const Home = ()=> {
    const [state, setState]=React.useState({
        data:home
    })
    React.useEffect(()=>{
        API.getSystemInfo().then(el=>{
            setState((prev)=>({...prev, data: el}))
        })
    },[])
    return (
        <div>
            <Table data={state.data} />
        </div>
    )
}
export default Home
