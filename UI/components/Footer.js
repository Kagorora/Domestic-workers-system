import React from 'react';
import { signUpPageStyles } from '../styleModules/signup.css.js';
import { FullYear } from './todayDate';


const Footer = () => {
    return (
        <div style={signUpPageStyles.footerDiv}>
            <script src='./todayDate.js'></script>
            <code style={signUpPageStyles.footerText}>&copy; Domestic Workers {FullYear()}</code>
        </div>
    )
}

export default Footer;
