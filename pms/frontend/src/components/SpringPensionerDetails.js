import axios from "axios";
import { useState } from "react";
import Pensioner from "../models/Pensioner";
import { useNavigate } from "react-router-dom";

const SpringPensionerDetails = () => {

    // state - for the component 
    const [newPensionerObj, setNewPensionerObj] = useState(new Pensioner());
    const [displayPensionerObj, setDisplayPensionerObj] = useState(new Pensioner());

    console.log(newPensionerObj);
    const adhaar = newPensionerObj.adhaar;
    const navigate = useNavigate();
    console.log(adhaar);
    

    const handleAddPensioner = (e) => {
        //console.log(e.target.value);
        setNewPensionerObj({
            ...newPensionerObj,
            [e.target.name]: e.target.value
        });
    }




    const submitAddPensioner = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:9082/pensionerDetailByAadhaar/${adhaar}`, newPensionerObj)
            .then((response) => {
                console.log("response",response.data);
                console.log(newPensionerObj.name);
                if(response.data.pan===newPensionerObj.pan && response.data.name===newPensionerObj.name ) {
                    setDisplayPensionerObj(response.data);
                    Pensioner.adhaar=newPensionerObj.adhaar;
                    //window.location.assign('/disburse');
                    navigate('/disburseinput');
                }
                else {
                    throw new Error("Invalid");
                }
            })
            .catch(() => {
                alert("Invalid Input!!!!");
                window.location.assign("/springpensioner")
            });
    }

    return (
        <div>
            <div className="container">
            <div className="d-flex justify-content-center h-100" >
                <div className='card'>
                    <div>
                        <h1 className="card-header" style={{ textAlign: 'center' }}  >Pensioner Details</h1>
                    </div>
                    <div class="card-body">
                        <form className="input-group form-group " onSubmit={submitAddPensioner}>
                            <div className='form-group'>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={newPensionerObj.name}
                                    onChange={handleAddPensioner}
                                    placeholder="Enter name" 
                                    required
                                    />
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="form-control"
                                    value={newPensionerObj.dateOfBirth}
                                    onChange={handleAddPensioner}
                                    placeholder="Enter dateOfBirth" />
                                <input
                                    type="text"
                                    id="pan"
                                    name="pan"
                                    className="form-control"
                                    value={newPensionerObj.pan}
                                    onChange={handleAddPensioner}
                                    placeholder="Enter pan"
                                    required />
                                <input
                                    type="number"
                                    id="adhaar"
                                    name="adhaar"
                                    className="form-control"
                                    value={newPensionerObj.adhaar}
                                    onChange={handleAddPensioner}
                                    placeholder="Enter adhaar" 
                                    required />
                                    
                                <input
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    className=" float-right btn btn-success btn-outline-white"
                                    // type="button"
                                    value="Submit"
                                    onClick={submitAddPensioner}/>
                            </div>
                        </form>
                    </div>
                
            </div>
            </div>
        </div>
        </div>
    );
}

export default SpringPensionerDetails;