import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div class="footer">

                    <div class="socialmedia">
                        <a href="https://github.com/shrushti2000">
                            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/Shrushti2000">
                            <i class="fa fa-twitter fa-3x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shrushti-polekar-8255471a6/">
                            <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Footer }