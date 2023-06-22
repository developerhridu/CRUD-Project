import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Delete, Read } from "../../APIs/CRUDServices";
import { ErrorToast, SuccessToast } from "../../Helper/ValidationHelper";
import FullScreenLoader from "../Common/FullScreenLoader";


const ListTable = () => {

    const [DataList, SetDataList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Read().then((Result)=>{
            SetDataList(Result)
        })
    }, [])
    const handleDownloadJSON = () => {
        // Create a new <a> element
        const a = document.createElement("a");

        // Create a Blob containing the JSON data
        const jsonData = JSON.stringify(DataList);
        const blob = new Blob([jsonData], { type: "application/json" });

        // Set the download attribute and URL for the <a> element
        a.href = URL.createObjectURL(blob);
        a.download = "myFile.json";

        // Programmatically click the <a> element to trigger the download
        a.click();
    };
    const handleDownloadCSV = () => {
        // Create a new <a> element
        const a = document.createElement("a");

        // Convert data to CSV format
        const csvData = convertToCSV(DataList);

        // Create a Blob containing the CSV data
        const blob = new Blob([csvData], { type: "text/csv" });

        // Set the download attribute and URL for the <a> element
        a.href = URL.createObjectURL(blob);
        a.download = "myFile.csv";

        // Programmatically click the <a> element to trigger the download
        a.click();
    };

// Helper function to convert data to CSV format
    const convertToCSV = (dataList) => {
        // Define CSV headers
        const headers = ['ProductName', 'ProductCode', 'Img', 'UnitPrice', 'Qty', 'TotalPrice', 'CreatedDate'];

        // Create CSV rows
        const rows = dataList.map((data) => {
            return headers.map((header) => data[header]).join(',');
        });

        // Combine headers and rows
        const csvContent = [headers.join(','), ...rows].join('\n');

        return csvContent;
    };


    const DeleteItem = (id) =>{
        Delete(id).then((Result) => {
            if(Result === true){
                SuccessToast("Deleted");
                Read().then(r => SetDataList(r));
            }


            else
                ErrorToast("Not Deleted")
        })
    }

    const UpdateItem=(id)=>{
        navigate(`/update/${id}`);
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
                                                        <button onClick={UpdateItem.bind(this, item._id)} className="btn btn-success mx-1">Update</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    </tbody>
                                </table>
                                <div>
                                    <button className='btn btn-success mx-1' onClick={handleDownloadJSON}>Download as JSON</button>
                                    <button className="btn btn-danger mx-1" onClick={() => handleDownloadCSV()}>Download as CSV</button>
                                </div>
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