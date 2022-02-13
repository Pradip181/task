import { faAlignJustify, faBell, faBolt, faCartArrowDown, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export default function Navbar() {
    


    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <FontAwesomeIcon icon={faAlignJustify} color="skyBlue" className='p-2' />
                        <a class="navbar-brand" href="/">Brand Logo</a>

                        <ul class="navbar-nav me-auto  mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/self">Self</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Classroom">Classroom</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Events">Events</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="/Labs" style={{ color: "skyblue " }}>Labs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Exams">Exams </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/community">Community</a>
                            </li>



                        </ul>
                        <ul class="navbar-nav me-auto  mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link mx-150px" href="/"><FontAwesomeIcon icon={faBolt} color="skyBlue" className='p-1' style={{ border: "0.5px solid skyblue", padding: "10px" }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"><FontAwesomeIcon icon={faCartArrowDown} color="skyBlue" className='p-1' style={{ border: "0.5px solid skyblue", padding: "10px" }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"><FontAwesomeIcon icon={faHeart} color="skyBlue" className='p-1' style={{ border: "0.5px solid skyblue", padding: "10px" }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"><FontAwesomeIcon icon={faBell} color="skyBlue" className='p-1' style={{ border: "0.5px solid skyblue", padding: "10px" }} /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"><FontAwesomeIcon icon={faMagnifyingGlass} color="skyBlue" className='p-1' style={{ border: "0.5px solid skyblue", padding: "10px" }} /></a>
                            </li>

                        </ul>
                        <ul>
                            <li><a class="nav-link " href="/"><FontAwesomeIcon icon={faUser} color="skyBlue" className='p-2' style={{ border: "0.5px solid skyblue", borderRadius: "25px", padding: "10px" }} /></a></li>
                        </ul>

                        <form class="form-inline my-2 my-lg-0">

                            <span className=' justify-content-center ' style={{ color: "skyblue" }}>Abhishek Ghosh<br></br> </span>
                            <span className='justify-content-center ' style={{ color: "grey", fontSize: "13px" }}>Nexxt Edutech  </span>

                        </form>

                    </div>
                </div>
            </nav>

        </>
    )
}
