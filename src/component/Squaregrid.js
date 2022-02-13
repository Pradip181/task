import { faFingerprint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Icons from './Icons'
import progresBar from './progressBar.jpeg'

export default function Squaregrid(props) {
    return (
        <div>
            <div className='container-fluid px-4 ' style={{ backgroundColor: "black" }} >
                <div class="row gx-5" >
                    <div class="col-6 colspan-1" style={{ borderStyle: "solid", borderColor: "skyblue ", }}>
                        <p className='my-0 mt-5' style={{ color: "white" }}><b>Java</b></p>
                        <p className='my-0' style={{ color: "grey" }}>This Course is provisioned by <span className='text-light'>Nexxt Labs</span></p>
                        <p style={{ color: "skyblue " }}><span> &#8226; labs</span> <span className='px-md-4'>&#8226; Exercises</span> <span>&#8226; Do it yourself</span> </p>
                        <Icons></Icons>
                    </div>
                    

                    <div class="col d-flex justify-content-end " style={{ borderStyle: "solid", borderColor: "skyblue" }}>
                        <div className='container'>
                            <img src={progresBar} alt="progress bar" style={{ marginTop: "100px", marginLeft: "280px", height: "200px" }} /><br></br>
                            <p style={{ fontSize: "30px", marginTop: "20px", marginLeft: "230px", color: 'skyblue' }}> 45 hours left<br></br><p style={{ color: "grey", marginLeft: "20px", fontSize: "20px" }}>out of 50 hours</p></p>

                        </div>

                    </div>
                    <div className="container" style={{
                        position: "absolute",
                        marginTop: "150px",
                        marginLeft:"560px",
                        background: "#f00",
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        backgroundColor:"black",
                        border:"1px solid white",
                        boxShadow:" 0px 3px 29px 0px skyblue "
                        
                    }}>
                     <div className='container mt-4 mx-4'>
                     <FontAwesomeIcon icon={faFingerprint} color="skyBlue" style={{height:"50px",width:"50px"}}  />
                     </div>
                     <p className="pass mt-4 mb-0"style={{fontSize:"10px" ,color:"white"}}>ENTER YOUR PILEARNING PASSWORD</p>
                     <input  type="password" for="pass" style={{color:"skyblue",background:"black"}}/>
                     <button type="button " class="btn mt-4 mx-5" style={{backgroundColor:"skyblue",color:" black"}}><b>Enter Lab</b></button> 

                    </div>

                </div>
            </div>
        </div>

    )
}
