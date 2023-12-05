import React from "react";
import { Link } from 'react-router-dom'; 
import "./footerPlain.css";
import PrivacyModal from "./PrivacyModal";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCopyright } from "react-icons/lu";

const FooterPlain = () => {
    return (
        <footer className="footer universalFont">
            <div className="footer-container">
                <div className="item1" >
                    <PrivacyModal/>
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <LuCopyright />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Thaleia Vavanou. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Thaleia"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="item3"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/thaleiavavanou"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="item4"
                >
                   <FaLinkedin />
                </a>
                <div className="item5">
                    <Link to="/contact">
                    <MdOutlineMailOutline />
                    </Link>

                </div>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default FooterPlain;
