import React from "react"
import {home} from "../../mook";

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
                            {Object.entries(home).map(renders.item)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
//
// <tr>
// <td>
// <div className="form-check form-check-muted m-0">
//     <label className="form-check-label">
//     <input type="checkbox" className="form-check-input" />
//     <i className="input-helper"></i>
// </label>
// </div>
// </td>
// <td>
// <div className="d-flex">
// <img src={require('../../assets/images/faces/face2.jpg')} alt="face" />
//     <span className="pl-2">Estella Bryan</span>
// </div>
// </td>
// <td> 02312 </td>
// <td> $14,500 </td>
// <td> Website </td>
// <td> Cash on delivered </td>
// <td> 04 Dec 2019 </td>
// <td>
// <div className="badge badge-outline-warning">Pending</div>
// </td>
// </tr>
// <tr>
// <td>
// <div className="form-check form-check-muted m-0">
// <label className="form-check-label">
// <input type="checkbox" className="form-check-input" />
// <i className="input-helper"></i>
// </label>
// </div>
// </td>
// <td>
// <div className="d-flex">
// <img src={require('../../assets/images/faces/face5.jpg')} alt="face" />
//     <span className="pl-2">Lucy Abbott</span>
// </div>
// </td>
// <td> 02312 </td>
// <td> $14,500 </td>
// <td> App design </td>
// <td> Credit card </td>
// <td> 04 Dec 2019 </td>
// <td>
// <div className="badge badge-outline-danger">Rejected</div>
// </td>
// </tr>
// <tr>
// <td>
// <div className="form-check form-check-muted m-0">
// <label className="form-check-label">
// <input type="checkbox" className="form-check-input" />
// <i className="input-helper"></i>
// </label>
// </div>
// </td>
// <td>
// <div className="d-flex">
// <img src={require('../../assets/images/faces/face3.jpg')} alt="face" />
//     <span className="pl-2">Peter Gill</span>
// </div>
// </td>
// <td> 02312 </td>
// <td> $14,500 </td>
// <td> Development </td>
// <td> Online Payment </td>
// <td> 04 Dec 2019 </td>
// <td>
// <div className="badge badge-outline-success">Approved</div>
// </td>
// </tr>
// <tr>
// <td>
// <div className="form-check form-check-muted m-0">
// <label className="form-check-label">
// <input type="checkbox" className="form-check-input" />
// <i className="input-helper"></i>
// </label>
// </div>
// </td>
// <td>
// <div className="d-flex">
// <img src={require('../../assets/images/faces/face4.jpg')} alt="face" />
//     <span className="pl-2">Sallie Reyes</span>
// </div>
// </td>
// <td> 02312 </td>
// <td> $14,500 </td>
// <td> Website </td>
// <td> Credit card </td>
// <td> 04 Dec 2019 </td>
// <td>
// <div className="badge badge-outline-success">Approved</div>
// </td>
// </tr>
