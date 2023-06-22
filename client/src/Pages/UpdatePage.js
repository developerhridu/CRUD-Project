import React from 'react';
import { useParams } from "react-router";
import AppNavBar from "../Components/Common/AppNavBar";
import UpdateForm from "../Components/Update/UpdateForm";
const UpdatePage = () => {
    const params=useParams();
    return (
        <div>
            <AppNavBar/>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;