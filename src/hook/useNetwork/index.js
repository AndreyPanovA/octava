import React from "react"
const useNetwork = (cb)=> {
    const [state, setState]=React.useState({
        loading:true,
        data:{}
    })
    React.useEffect(()=>{
            cb().then(el=>{
                setState((prev)=>({
                    ...prev,
                    loading: false,
                    data:el
                }))
            })
        }
    ,[])
    return [state.data, state.loading]
}

export default useNetwork
