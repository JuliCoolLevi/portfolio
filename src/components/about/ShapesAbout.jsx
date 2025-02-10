import React from "react";

const ShapesAbout = () => {
    return (
    <div className="shapes__about">
            
            <svg width="40" height="40" class="shape-about s1a" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,5 35,35 5,35" fill="#FFD15C"/>
            </svg>

            <svg width="50" height="50" class="shape-about s2a" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="40" height="40" rx="10" ry="10" fill="#44D7B6"/>
            </svg>

            <svg width="50" height="50" class="shape-about s3a" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="5" fill="#FFD15C"/>
                <circle cx="40" cy="10" r="5" fill="#44D7B6"/>
                <circle cx="10" cy="40" r="5" fill="#6C6CE5"/>
                <circle cx="40" cy="40" r="5" fill="#FF4C60"/>
            </svg>

            <svg width="15" height="23" class="shape-about s4a" xmlns="http://www.w3.org/2000/svg">
            <rect transform="rotate(30 9.86603 10.13397)" x="7" width="3" height="25" rx="1.5" fill="#F9A8D4" fill-rule="evenodd"/>
            </svg>

            <svg width="70" height="70" class="shape-about s5a" xmlns="http://www.w3.org/2000/svg">
                <polygon points="35,5 50,50 20,50" fill="#6C6CE5" />
                <polygon points="35,15 55,55 15,55" fill="#44D7B6" />
            </svg>

            <svg width="100" height="50" class="shape-about s6a" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,40 C30,10 50,10 100,40" fill="none" stroke="#F9A8D4" stroke-width="3"/>
                <path d="M0,30 C40,10 60,10 100,30" fill="none" stroke="#44D7B6" stroke-width="3"/>
            </svg>


    </div>
    )
}

export default ShapesAbout