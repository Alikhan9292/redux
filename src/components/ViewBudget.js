import React from "react";
import { FaEdit } from 'react-icons/fa';

const ViewBudget = (props) => {
    return(
        <>
            <span>Budget: ₸{props.budget}</span>
            <FaEdit onClick={props.handleEditClick}>
             
            </FaEdit>
        </>
    );
};

export default ViewBudget;