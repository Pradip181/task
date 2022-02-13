import {  faChartBar, faClock,  faRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export default function Icons() {
    
    return (
        <div>
            <div class="container d-inline-flex p-2">
                <div class="row justify-content-md-start">
                    <div class="col col-lg-2">
                  <FontAwesomeIcon icon={faRunning} color="skyBlue"  style={{border:"0.5px solid skyblue",padding:"10px",height:"50px",width:"50px"}}/>
                    </div>
                    <div class="col-md-auto text-light " style={{paddingBottom:"0px"}}>  
                       <p style={{marginLeft:"50px"}}>EXERCISES <br/><span style={{fontSize:"40px",color:"skyblue"}}>9</span><span style={{color:"grey"}}>   completed out of 84</span></p>
                       
                    </div>
                </div>
            </div>
            <div class="container d-inline-flex p-2">
                <div class="row justify-content-md-start">
                    <div class="col col-lg-2">
                    <FontAwesomeIcon icon={faChartBar}  color="skyBlue"  style={{border:"0.5px solid skyblue",padding:"10px",height:"50px",width:"50px"}}/>
                    </div>
                   
                    <div class="col-md-auto text-light " style={{paddingBottom:"0px"}}>  
                       <p style={{marginLeft:"50px"}}>PROJECTS <br/><span style={{fontSize:"40px",color:"skyblue"}}>2</span><span style={{color:"grey"}}>   completed out of 6</span></p>
                       
                    </div>
                    
                </div>
            </div>
            <div class="container d-inline-flex p-2">
                <div class="row justify-content-md-start">
                    <div class="col col-lg-2">
                  <FontAwesomeIcon icon={faClock} color="skyBlue"  style={{border:"0.5px solid skyblue",padding:"10px",height:"50px",width:"50px"}}/>
                    </div>
                    <div class="col-md-auto text-light " style={{paddingBottom:"0px"}}>  
                       <p style={{marginLeft:"50px"}}>TIME SPENT <br/><span style={{fontSize:"40px",color:"skyblue"}}>5</span><span style={{color:"grey"}}>   hours still now</span></p>
                       
                    </div> 
                </div>
            </div>
        </div>
            )
}
