import React from 'react';

const EditableRow = ({editFormData , handleEditFormChange, handleCancelClick}) => {
  return (
          <tr>
             <td>
               <input type="date" id="start" name="calender" value="2022-02-02" min="2015-01-01" max="2040-12-31"/>
             </td>
             <td>
               
               <select class="table-filter" name="fullName" id="category1" placeholder="Choose Doctor Name" value={editFormData.fullName} onChange={handleEditFormChange}>
                  <option value="main"> Choose Doctor Name</option>
                  <option value="Henry Rusell">Henry Rusell</option>
                  <option value="Daniel Claries">Daniel Claries</option>
                  <option value="Alexander K">Alexander K</option>
                  <option value="Stefan P">Stefan P</option>
               </select>
             </td>
             <td>
               
               <select class="table-filter" name="address" id="category2" placeholder="Choose Location" value={editFormData.address} onChange={handleEditFormChange}>
                  <option value="main">Choose Location</option>
                  <option value="Heidelberg">Heidelberg</option>
                  <option value="Mannheim">Mannheim</option>
                  <option value="Berlin">Berlin</option>
                  
                </select>
             </td>
             <td>
               <input
                  type ="text"
                  required="required"
                  placeholder="Enter Description"
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditFormChange}
               ></input>
             </td>
             <td>
               
               <select class="table-filter" name="slot" required="required" id="category4" placeholder="Enter Timeslot" value={editFormData.email} onChange={handleEditFormChange}>
                  <option value="main">Choose Time Slot</option>
                  <option value="9:00 am - 9:30 am">9:00 am - 9:30 am</option>
                  <option value="9:30 am - 10:00 am">9:30 am - 10:00 am</option>
                  <option value="10:00 am - 10:30 am">10:00 am - 10:30 am</option>
                  <option value="1:00 pm - 1:30 pm">1:00 pm - 1:30 pm</option>
                  <option value="1:30 pm - 2:00 pm">1:30 pm - 2:00 pm</option>
                  
                </select>
             </td>
             <td>
                 <button type="submit">Save</button>
                 <button type="button" onClick={handleCancelClick}>Cancel</button>
             </td>
         </tr>

  );
};

export default EditableRow;
