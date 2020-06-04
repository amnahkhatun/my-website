import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import amnah from '../../assets/images/amnah.JPG';
import amnah2 from '../../assets/images/amnah2.jpg';
import amnah3 from '../../assets/images/amnah3.jpg';
import amnah4 from '../../assets/images/amnah4.jpg';
import location from '../../assets/images/location.jpg';





export default function GithubProfileCard({prof}) {
  if (prof.hireable!==null){ 
    prof.hireable="Yes";
  }else{
    prof.hireable="No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
      <div className="row">
        <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{ emoji(String(prof.bio)) }"</h2>
              {prof.location !== null &&
            <div className="location-div">
              <span className="desc-prof">
              <img style= {{width:'14px', paddingRight : '6px'}} src={location} alt={location} className="location-image"/>{prof.location}
              </span>
            </div>}
            <div className="opp-div">
              <span className="desc-prof">Open for opportunities : {prof.hireable}</span>
            </div>
            <SocialMedia/>
          </div>
          <div className="image-content-profile">
            <img src={amnah4} alt={amnah} className="profile-image"/>
        </div>
      </div>
    </div>
	</Fade>
    );
}
