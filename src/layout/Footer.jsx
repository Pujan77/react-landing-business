import React from "react";
import { FooterContent } from "../content";

const Footer = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>{FooterContent.heading}</h2>
            <p className="pr-5 text-white-50">{FooterContent.headingText} </p>
            <p>
              {FooterContent.social.map((social, i) => (
                <a style={{ marginLeft: "10px" }} href={social.link} key={i}>
                  <i className={social.class}></i>
                </a>
              ))}
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              {FooterContent.links.map((link, i) => (
                <li key={i}>
                  - <a href={link.to}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>{FooterContent.location}</p>
            <p className="mb-0">
              <i className="fa fa-phone mr-3"></i> {FooterContent.contact}
            </p>
            <p>
              <i className="fa fa-envelope-o mr-3"></i> {FooterContent.email}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © 2023. All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
