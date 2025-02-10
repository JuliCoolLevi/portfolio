import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

{/*
1. Software Development & Programming
    Focuses on designing, developing, 
    and optimizing software applications, 
    including mobile, web, and enterprise systems, 
    using various programming languages and frameworks.

2. Systems & Software Engineering
    Covers the principles of operating systems, 
    software architecture, and engineering methodologies 
    to build scalable, secure, and efficient computing 
    systems.

3. Mathematics, Data & Networking
    Emphasizes foundational mathematical concepts, 
    statistical analysis, and networking principles 
    essential for computing, data science, 
    and system optimization.
*/}

const data = [
    {
      id: 1,
      image: Image1,
      title: "Software Development & Programming",
      description:
        "Designing, developing, and optimizing software applications, including mobile, web, and enterprise systems, using various programming languages and frameworks.",
    },
    {
      id: 2,
      image: Image2,
      title: "Systems & Software Engineering",
      description:
        "Covers the principles of operating systems, software architecture, and engineering methodologies to build scalable, secure, and efficient computing systems.",
    },
    {
      id: 3,
      image: Image3,
      title: "Mathematics, Data & Networking",
      description:
        "Emphasizes foundational mathematical concepts, statistical analysis, and networking principles essential for computing, data science, and system optimization.",
    },
];

const Services = () => {
    return <section className='services container section' id='services'>

        <h2 className='section__title'>Services</h2>

        <div className='services__container grid'>
            {data.map(({id, image, title, description}) => {
                return (
                    <div className='services__card' key={id}>
                        <img src={image} alt='' className='services__img' />

                        <h3 className='services__title'>{title}</h3>

                        <p className='services__description'>{description}</p>
                    </div>
                );
            } )}
        </div>
    </section>;
}

export default Services