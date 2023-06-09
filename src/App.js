import './App.css';
//import { Register } from "./components/registration"
import data from "./mock-data.json";
import React, { useState, Fragment } from "react";
import {nanoid} from "nanoid";
import ReadOnly from "./components/ReadOnly";
import EditForm from "./components/EditForm";


const App = () => {
console.log(data)
  const [details, setDetails] = useState(data);  //State for data=details
  const [addFormData, setAddFormData] = useState({
    fullName:"",
    surName: "",
    email: "",
    phoneNumber: "",
    image: "",
    position: "",
    iden:"",
  });


  const [editFormData, setEditFormData] = useState({ // State to be able to edit Data form
    fullName:"",
    surName: "",
    email: "",
    phoneNumber: "",
    image: "",
    position: "",
    iden:"",
  });

  

const [editDetailId, setEditDetailId] = useState(null); //  State to be able to edit details. The Main for our handlers.

const handleAddFormChange = (event) => {  //1 handle for add-form change
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData };
  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
 
};

const [searchTerm, setSearchTerm] = useState('');

const search =(datas) =>
return datas.filter( )

const handleEditFormChange =(event) =>{ //2handler for editing-form change
event.preventDefault();

const fieldName = event.target.getAttribute("name");
const fieldValue = event.target.value;

const newFormData = { ...editFormData };
newFormData[fieldName] = fieldValue;

setEditFormData(newFormData);
};


const handleAddFormSubmit = (event) => { //3handler for submitting add-form 
  event.preventDefault();

  const newDetail = {
    id: nanoid(),
    fullName: addFormData.fullName,
    surName: addFormData.surName,
    email: addFormData.email,
    phoneNumber: addFormData.phoneNumber,
    image: addFormData.image,
    position: addFormData.position,
    iden: addFormData.iden,

  };
 
  const newDetails = [...details, newDetail]; // Array for storing new details.
  setDetails(newDetails);

};

const handleEditFormSubmit = (event)=> {  //4handler for editing forms for submitting
  event.preventDefault();

const editedDetail = {
  id: editDetailId,
  fullName: editFormData.fullName,
  surName: editFormData.surName,
  email: editFormData.email,
  phoneNumber: editFormData.phoneNumber,
  image: editFormData.image,
  position: editFormData.position,
  iden: editFormData.iden,
};

 const newDetails = [ ...details]; //Our array of details

 const index = details.findIndex((detail) => detail.id === editDetailId); //to find form using its index number for us to edit.

 newDetails[index] = editedDetail;

 setDetails(newDetails);
 setEditDetailId(null);
};

const handleEditClick = (event, detail) => { //5handler for the edit button
  event.preventDefault();
setEditDetailId(detail.id);

const formValues = {
  fullName: detail.fullName,
  surName: detail.surName,
  email: detail.email,
  phoneNumber: detail.phoneNumber,
  image: detail.image,
  position: detail.position,
  iden: detail.iden,

};

setEditFormData(formValues);
};

const handleCancelClick = () => {  //6small handle for cancelling
  setEditDetailId(null);
};

const handleDeleteClick = (detailId) => {  // 7handler for delete clicking
const newDetails = [ ...details];

const index = details.findIndex((detail) => detail.id === detailId);

newDetails.splice(index, 1);

setDetails(newDetails);
};

 


  return (
    <div className="App">
      <img src="./assets/img/image.png" alt=""/>
      <h1 class="subject" style={{textShadow:"4px 8px 16px black"}}> Employee Registration</h1> <div>

<input class="see"
 type='text' 
 placeholder='Search...' 
 className='search'
 onChange={(e) => 
 setSearchTerm(e.target.value)}
 
 />

<button 
    style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black"}}
    type="submit">
      <>
      <svg width= "20px" height= "15px" xmlna= "https://www.w3.org/2000/svg">
         <image href ="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png"
    height="15px" width="20px"/></svg>
    </>
    </button>
    </div>
     
      
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Position</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          
          {details.map((detail) => (
            <Fragment>
             { editDetailId === detail.id ? ( 
             <EditForm 
             editFormData={editFormData} 
             handleEditFormChange={handleEditFormChange}
             handleCancelClick={handleCancelClick}
             
             /> 
             ):(
             <ReadOnly 
             detail={detail}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              />
             )}  
            </Fragment>
      
            ))}
    
        </tbody> 
      </table>
      </form>
      
      <h1 class="subject"> Add your details</h1>
      <form onSubmit={handleAddFormSubmit}>
      <table>
        <tbody>
          <tr>
      <input
      class= "row"
       type="text" 
      required="required" 
      name="fullName" 
      placeholder="Name"
      onChange={handleAddFormChange} /> 

    
    <input type="text" 
    class= "row"
    required="required" 
     name="surName"
      placeholder="Surname"
      onChange={handleAddFormChange}/> 
      
    
    <input type="email" 
    class= "row"
    required="required"  
    name="email" 
    placeholder="youremail@gmail.com"
    onChange={handleAddFormChange}/> 
    
    
    <input type="number" 
    class= "row"
    required="required" 
     name="phoneNumber"
      placeholder="your phone number" 
      onChange={handleAddFormChange}/>
        
        <input type="file" 
        class= "row"
        required="required"  
        name="image" 
        placeholder="upload your image"
        onChange={handleAddFormChange} /> 
        
    <input type="text" 
    class= "row"
    required="required" 
     name="position"
      placeholder="your position"
      onChange={handleAddFormChange}/> 

        <input type="number" 
        class= "row"
    required="required" 
    name="iden" 
    placeholder="your id number" 
    onChange={handleAddFormChange}/>

    <button class="prof" 
    style={{ border:"none", borderRadius:"5px", width:"70px", height:"30px", backgroundColor:"white", color:"black", boxShadow:"4px 8px 16px black"}}
    type="submit">Add</button>
    </tr>
    </tbody>
    </table>

      </form>
      <br></br>
      <ul > By submitting your personal data and registering you hereby confirm:</ul>
<ul class="prof"> That you have read and understood our Privacy Policy.</ul>
<ul class="prof">That you have no objection to us retaining your personal information in our database for future employment opportunities</ul>
<ul class="prof">That the information you have provided to us is true, correct and up to date.</ul><br></br>
<ul > I have read and accept the Terms and Conditions <input type="checkbox"></input></ul>

    </div>
  );

             };


export default App;
