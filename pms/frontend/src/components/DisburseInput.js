import axios from "axios";
import { useState } from "react";
import Pensioner from "../models/Pensioner";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
 
const  DisburseInput=() => {
    const [newPensionerObj, setNewPensionerObj] = useState(new Pensioner());
   

    //newPensionerObj.serviceCharge=550;
    newPensionerObj.adhaar= Pensioner.adhaar;
    newPensionerObj.pensionAmount=0;
    Pensioner.serviceCharge=newPensionerObj.serviceCharge;
    console.log(newPensionerObj);


    const handleAddPensioner = (e) => {
        console.log(e.target.value);
        setNewPensionerObj({
            ...newPensionerObj,
            [e.target.name]: e.target.value
        });
    }



    const navigate = useNavigate();

    const postServiceCharge = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9083/disbursePension', newPensionerObj)
            .then((response) => {
                console.log("response",response.data);
                console.log(response.data.pensionStatusCode);
                if(response.data.pensionStatusCode===10) {
                    navigate('/disburse');
                }
                else {
                    throw new Error("Invalid");
                }
                console.log(newPensionerObj);
                
            })
            .catch(() => {
                alert("Please Enter Correct Service Charge");
                //window.location.assign("/springpensioner")
            });
    }
    return(
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className='card'>
                <div class="card-body"></div>
                <form className="input-group form-group " onSubmit={postServiceCharge}>
                    <div className='form-group'>
                    <input
                        type="number"
                        id="serviceCharge"
                        name="serviceCharge"
                        className="form-control"
                        value= {newPensionerObj.serviceCharge}
                        onChange={handleAddPensioner}
                        placeholder="Enter service charge" 
                        required />
                        
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="float-right btn btn-success btn-outline-white"
                        // type="button"
                        value="Fetch Details"
                        onClick={postServiceCharge}
                    />
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default DisburseInput;