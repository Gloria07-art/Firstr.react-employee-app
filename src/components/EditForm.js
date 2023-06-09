import React from 'react';

const EditForm = ({ editFormData,
     handleEditFormChange,
    handleCancelClick,
    
 }) => {
    return (
        
    <tr>
    <td>
         <input type="text" 
      required="required" 
      name="fullName" 
      placeholder="Name"
      value={editFormData.fullName} //repopulate our data and method for our edited from to change
      onChange={handleEditFormChange}      
      ></input>

      </td>
                <td>
                     <input type="text" 
    required="required" 
     name="surName"
      placeholder="Surname"
      value={editFormData.surName}
      onChange={handleEditFormChange}></input> </td>

                <td>
                    <input type="email" 
    required="required"  
    name="email" 
    placeholder="youremail@gmail.com"
    value={editFormData.email}
    onChange={handleEditFormChange}></input> </td>

                <td> <input type="number" 
    required="required" 
     name="phoneNumber"
      placeholder="your phone number" 
      value={editFormData.phoneNumber}
      onChange={handleEditFormChange}></input></td>

                <td><input type="file" 
        required="required"  
        name="image" 
        placeholder="upload your image"
        value={editFormData.image}
        onChange={handleEditFormChange}></input> </td>

                <td><input type="text" 
    required="required" 
     name="position"
      placeholder="your position"
      value={editFormData.position}
      onChange={handleEditFormChange}></input></td>
      
                <td><input type="number" 
    required="required" 
    name="iden" 
    placeholder="your id number" 
    value={editFormData.iden}
    onChange={handleEditFormChange}></input></td>

    <td>
        <button type='submit' > Save</button>

        <button type='button' onClick={handleCancelClick}> Cancel</button>
    </td>
    </tr>

        );
};

export default EditForm;