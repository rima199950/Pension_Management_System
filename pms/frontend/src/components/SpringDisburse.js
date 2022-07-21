import axios from "axios";
import { useEffect,useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pensioner from "../models/Pensioner";

const SpringDisburse=() => {
    const [pensioner, setPensioner] = useState(new Pensioner());
    const [newPensionerObj, setNewPensionerObj] = useState(new Pensioner());
    const [displayPensionerObj, setDisplayPensionerObj] = useState(new Pensioner());
    
    console.log(newPensionerObj);
    //newPensionerObj.adhaar= Pensioner.adhaar;
    pensioner.adhaar=Pensioner.adhaar;
  



    useEffect(()=>{
        submitGetallPensioner();
        //submitAddPensioner();
    },[]);

    const handleAddPensioner = (e) => {
        //console.log(e.target.value);
        setNewPensionerObj({
            ...newPensionerObj,
            [e.target.name]: e.target.value
        });
    }
    const navigate = useNavigate();

    const submitAddPensioner = () => {
        //console.log(newPensionerObj);
        //submitGetallPensioner();
        console.log(pensioner);
        axios.post('http://localhost:9081/pensionerInput', pensioner)
            .then((response) => {
                setDisplayPensionerObj(response.data);
                console.log("response",response);
            })
            .catch(() => {
                alert("Invalid Input!!!!");
                navigate('/disburse');
               // window.location.assign("/springpensioner")
            });
    }


    const submitGetallPensioner = () => {
        axios.get(`http://localhost:9082/pensionerDetailByAadhaar/${Pensioner.adhaar}`,newPensionerObj)
            .then((response) => {
                //setDisplayPensionerObj(response.data);
                setNewPensionerObj(response.data);
                console.log(response.data);
                setPensioner(response);
                pensioner.name=response.data.name;
                pensioner.pan=  response.data.pan; 
                pensioner.pensionType=response.data.pensionType;
                //console.log(newPensionerObj);
                submitAddPensioner();
               
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }
    const processPension=() => {
        navigate('/processPension');
    }
    

    return(
        <>
            <div className="container" >
            <div className="d-flex justify-content-center h-100">
                <div className='card'>
                    <div>
                        <h1 className="card-header" style={{ textAlign: 'center' }}  >Disburse Page</h1>
                    </div>
                    <div class="card-body">
                        <form className="input-group form-group">
                            <div className="form-group">
                                <label>Pensioner Name:</label>
                                <p className="form-control "
                                name={displayPensionerObj.name}
                                >{displayPensionerObj.name}</p>
                            </div>
                            <div className="form-group">
                                <label>Pensioner PAN:</label>
                                <p className="form-control ">{displayPensionerObj.pan}</p>
                            </div>
                            <div className="form-group">
                                <label>Pension Type:</label>
                                <p className="form-control ">{displayPensionerObj.pensionType}</p>
                            </div>
                            <div className="form-group">
                                <label>Pension Amount:</label>
                                <p className="form-control">{displayPensionerObj.pensionAmount}</p>
                            </div>
                            <div className="float-right">
                                <input id="submitBtn" onClick={processPension} name="submit" value="Disburse Pension" className="btn btn-success btn-outline-white" type="submit"></input>
                            </div>
                        </form>
                    </div>
                
                </div>
                </div>
            </div>
        </>
    )
}

export default SpringDisburse;
