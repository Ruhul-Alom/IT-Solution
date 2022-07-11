import React from 'react';
import { useHistory } from 'react-router';

const AllOrderInfoTable = (props) => {

    const allorder = props.order;
   
    const { _id,serviceName,email,servicePrice } =allorder;
    const history = useHistory();

    // const handleDelete = () => {
    //     fetch(`https://glacial-temple-08180.herokuapp.com/deleteService${_id}`, {method:'DELETE'})
    //     .then(res => res.json())
    //     .then(data => {
    //         alert('Deleted successfully');
    //         history.replace('/');
    //     })
    // }
    const handlePending = () => {

        }
        const handleProceed = () => {
        
        }
        const handleDone = () => {
        
        }

    return (
        <tr> <td>{email}</td>
            <td>{serviceName}</td>
        <td>{servicePrice }</td>
     
        <td><i onClick={handlePending} className="fas fa-pause-circle">pending</i>   <i onClick={handleProceed} className="fas fa-running">proceesd</i> <i onClick={handleDone} className="fas fa-check-circle">done</i></td>  
        </tr>
        
    );
};

export default  AllOrderInfoTable;