import React from 'react';
import { useHistory } from 'react-router';

const AllServiceInfoTable = (props) => {

    const allservice = props.service;
   
    const { _id, title, description,price } =allservice;
    const history = useHistory();

    const handleDelete = () => {
        console.log('click')
        fetch(`https://glacial-temple-08180.herokuapp.com/deleteService/${_id}`, {method:'DELETE'})
        .then(res => res.json())
        .then(data => {
            alert('Deleted successfully');
            history.replace('/');
        })
    }

    return (
        <tr> <td>{title}</td>
        <td>{price}</td>
        <td><i onClick={handleDelete} className="fas fa-trash-alt"></i>   <i className="fas fa-edit"></i></td>  
        </tr>
        
    );
};

export default  AllServiceInfoTable;