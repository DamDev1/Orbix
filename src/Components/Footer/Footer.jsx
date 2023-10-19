import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="col-1 about">
                    <div className="logo">
                        <img src="asset/logo.png" alt="" width={100}/>
                    </div>
                    <p>Vindepo is a platform where you can rent NFTs for a couple of days at very affordable rates.</p>
                </div>

                <div className="col-2">
                    <ul>
                        <NavLink>Home</NavLink>
                        <NavLink>About us</NavLink>
                        <NavLink>Privacy Policy</NavLink>
                        <NavLink>FAQs</NavLink>

                        <NavLink>Contact</NavLink>
                        <NavLink>Terms & conditions</NavLink>
                    </ul>
                </div>

                <div className="col-3">
                    <h5>Follow Us</h5>
                    <div className="socal">
                        <div className="facebook">
                            <FacebookOutlinedIcon/>
                        </div>
                        <div className="twitter">
                            <TwitterIcon/>
                        </div>
                        <div className="instagram">
                            <InstagramIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
