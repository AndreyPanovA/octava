import React from "react"


const Table = (props)=> {
    const {title="Система", data={}} = props
    const callbacks = {}
    const renders = {
        item: ([key, val])=>{
            return (
                <tr>
                    <td>{key}</td>
                    <td><div className={"badge badge-outline-success"}>{val}</div></td>
                </tr>
            )
        }
    }
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map(renders.item)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
