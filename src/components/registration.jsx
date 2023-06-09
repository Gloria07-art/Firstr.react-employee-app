import React, {useState} from "react"
import { Button } from "react-bootstrap"

export const Register = (props) => {
  
    return(
        
         
<form>

    <label for="fname" class="subject">Enter First name:</label>
    <input type="text" id="fname" name="fname" placeholder="Name" /> <br></br>
<div class="prof">
    <label for="lname">Enter Last name:</label>
    <input type="text" id="lname" name="lname" placeholder="Surname"/> <br></br>
        </div>

<div>  
    <label for="email">Enter Email:</label>
    <input type="email" id="email" name="email" placeholder="youremail@gmail.com"/> <br></br>
    </div>

<div> 
    <label for="identity">Enter ID number:</label>
    <input type="number" id="identity" name="identity" placeholder="your id number"/><br></br>
    </div>

<div>  
    <label for="cellphone">Enter Phone number:</label>
    <input type="number" id="cellphone" name="cellphone" placeholder="your phone number"/><br></br>
    </div>

<div> 
    <label for="positions">Enter Employee position:</label>
    <input type="text" id="positions" name="positions" placeholder="your position"/> <br></br>
        </div>

<div>  
    <label for="image">Upload your image:</label>
        <input type="image" id="image" name="image" src="img_submit.gif" alt="Upload" width="48" height="48"/> 
        </div>
        <br></br>

                  <center>
                     <input type="submit" value="Submit"/> 
                     <input type="submit" value="Delete"/>
                     <input type="reset" value="Reset"/></center>

                  <button>Register</button>

        </form>

    )
}