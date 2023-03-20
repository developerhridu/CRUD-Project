import React, {useEffect, useState} from 'react';
import {Read, Delete} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../Helper/ValidationHelper";


const ListTable = () => {

    const [DataList, SetDataList] = useState([]);

    useEffect(() => {
        Read().then((Result)=>{
            SetDataList(Result)
        })
    }, [])


    const DeleteItem = (id) =>{
        Delete(id).then((Result) => {
            if(Result === true)
                SuccessToast("Deleted")
            else
                ErrorToast("Not Deleted")
        })
    }


    if(DataList.length > 0){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card list-card">
                            <div className="card-header pb-0">
                                <h4>Product List</h4>
                            </div>

                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Unit Price</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Qty</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total Price</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                                    </tr>

                                    </thead>
                                    <tbody>
                                    {
                                        DataList.map((item , i) => {
                                            return(
                                                <tr>
                                                    <td>
                                                        <div className="d-flex  animated fadeInUp px-2 py-1">
                                                            <div>
                                                                <img src={item.Img} className="avatar avatar-sm me-3" alt="user1"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{item.ProductName}</h6>
                                                                <p className="text-xs text-secondary mb-0">{item.ProductCode}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 animated fadeInUp text-sm"> {item.UnitPrice}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 animated fadeInUp text-sm"> {item.Qty}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 animated fadeInUp text-sm">  {item.TotalPrice}</h6>

                                                    </td>
                                                    <td>
                                                        <button onClick={DeleteItem.bind(this, item._id)} className="btn btn-danger mx-1">Delete</button>
                                                        <button className="btn btn-success mx-1">Update</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }
};

export default ListTable;