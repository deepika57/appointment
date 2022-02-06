import React from "react"

const ReadOnlyRow = ({ contact,handleEditClick, handleDeleteClick}) => {
    return (
         <tr>
           <td> {contact.calender}</td>
           <td> {contact.fullName}</td>
           <td> {contact.address}</td>
           <td> {contact.description}</td>
           <td> {contact.slot}</td>
           <td> 
               <button type="button" onClick={(event)=> handleEditClick(event,contact)}>Edit</button>
               <button type="button" onClick={()=> handleDeleteClick(contact.id)}>Delete</button>
           </td>
         </tr>
    );
};

export default ReadOnlyRow;
