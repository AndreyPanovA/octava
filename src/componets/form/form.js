import React from "react"
import { Form } from 'react-bootstrap';
import API from "../../api/api";

const NetworkForm = ({data})=> {
    const [state, setState]=React.useState({
        ...data
    })
    const callbacks ={
        onSubmit:(e)=>{
            e.preventDefault()
            API.updateNetworkInfo(state).then(el=>{
                console.log("hire", el)
            })
        },
        onChange:(e)=>{
            e.persist()
            const key =e.target.dataset.key
            console.log("key", key)
            setState((prev)=>({
                [key]:e.target.value
            }))

        },
        onReset:(e)=>{
            e.preventDefault()
            setState(data)
        }
    }
    const renders = {
        item: ([key, val])=>{
            return (
                <Form.Group key={key}>
                    <label htmlFor="exampleInputUsername1">{val}</label>
                    <Form.Control
                        type="text"
                        placeholder={""}
                        data-key={key}
                        value={state?.[key]}
                        onChange={callbacks.onChange}
                    />
                </Form.Group>
            )
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Настройки сети</h4>
                <p className="card-description">Задать настройки для майнера </p>
                <form className="forms-sample">
                    {Object.entries(data).map(renders.item)}
                    <button type="submit" className="btn btn-primary mr-2" onClick={callbacks.onSubmit}>Сохранить</button>
                    <button className="btn btn-dark" onClick={callbacks.onReset}>Сбросить</button>
                </form>
            </div>
        </div>
    )
}
export default NetworkForm
