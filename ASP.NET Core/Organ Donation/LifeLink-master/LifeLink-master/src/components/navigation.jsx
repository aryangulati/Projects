/** @format */
import React from "react";

export const Navigation = (props) => {

  

  if(localStorage.getItem("DonarId")){
    return(
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              LifeLink
            </a>{" "}
          </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
          <a href="/" className="page-scroll">
            Home
          </a>
        </li>
        <li>
          <a href="/#about" className="page-scroll">
            About us
          </a>
        </li>
        <li>
        <a href="/#Testimonials" className="page-scroll">
          Reviews
        </a>
      </li>
        <li>
          <a href="/#contact" className="page-scroll">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/DonarProfile" className="page-scroll"> 
            View Profile
          </a>
        </li>
        <li>
          <a href="/LogoutDonar" className="page-scroll">
            Logout
          </a>
        </li>
          </ul>
        </div>
        </div>
        </nav>
    );
  }
  else 
  if(localStorage.getItem("HospitalId"))
  {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              LifeLink
            </a>{" "}
          </div>
  
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="page-scroll">
                  About us
                </a>
              </li>
              <li>
              <a href="/#Testimonials" className="page-scroll">
                Reviews
              </a>
            </li>
              <li>
                <a href="/#contact" className="page-scroll">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/DonarList" className="page-scroll"> 
                  Donars List
                </a>
              </li>
              <li>
                <a href="/SeekerList" className="page-scroll">
                  Seekers List
                </a>
              </li>
              <li>
                <a href="/LogoutHospital" className="page-scroll" >
                  Logout
                </a>
              </li>
              {/* <li>
                <a href='#portfolio' className='page-scroll'>
                  Seeker
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  else{
    return(
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              LifeLink
            </a>{" "}
          </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
          <a href="/" className="page-scroll">
            Home
          </a>
        </li>
        <li>
          <a href="/#about" className="page-scroll">
            About us
          </a>
        </li>
        <li>
        <a href="/#Testimonials" className="page-scroll">
          Reviews
        </a>
      </li>
        <li>
          <a href="/#contact" className="page-scroll">
            Contact Us
          </a>
        </li>
        <li>
        <a href="/SeekerSignUp" className="page-scroll">
          Seekers
        </a>
      </li>
        <li>
          <a href="/DonarSignUp" className="page-scroll"> 
            Donar Registration
          </a>
        </li>
        <li>
          <a href="/HospitalSignUp" className="page-scroll">
            Hospital Registration
          </a>
        </li>
          </ul>
        </div>
        </div>
        </nav>
    )
  }

};
