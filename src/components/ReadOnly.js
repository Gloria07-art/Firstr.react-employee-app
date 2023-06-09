import React from "react";

const ReadOnly = ( {detail, 
  handleEditClick, 
  handleDeleteClick}) => {

    return(
<tr>
          <td>{detail.fullName}</td>
          <td>{detail.surName}</td>
          <td>{detail.email}</td>
          <td>{detail.phoneNumber}</td>
          <td>{detail.image}</td>
          <td>{detail.position}</td>
          <td>{detail.iden}</td>
          <td>
            <button type="button" 
            class="prof"
            style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black", boxShadow:"4px 8px 16px black"}}
          onClick={(event)=> handleEditClick(event, detail)}> Edit
            </button>
            <button class="prof" type="button" onClick={() =>handleDeleteClick(detail.id)}
            style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"maroon", color:"black", boxShadow:"4px 8px 16px black"}}>Delete</button>
            </td>
          </tr>
    );
};

export default ReadOnly;