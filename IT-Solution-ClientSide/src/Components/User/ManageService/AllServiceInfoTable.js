import React from 'react'

const AllServiceInfoTable = (props) => {
    
      
    const allServices = props.reg;
   
    const { _id, name, writer,price } =allServices;
    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://glacial-temple-08180.herokuapp.com/deleteService/${_id}`, {method:'DELETE'})
        .then(res => res.json())
        .then(data => {
            alert('Deleted successfully');
            history.replace('/');
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
           
            <td><i onClick={handleDelete} className="fas fa-trash-alt"></i>   <i className="fas fa-edit"></i></td>
            
        </tr>
    )
}

export default AllServiceInfoTable
