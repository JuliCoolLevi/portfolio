import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';


const Portfolio = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItems(updatedItems);
    }

    return (
        <section className='project container section' id='portfolio'>
            <h2 className='section__title'>Projects</h2>

            <div className='project__filters'>
                <span className='project__item' onClick={() => setItems(Menu)}>All</span>
                <span className='project__item' onClick={() => filterItem("Personal")}>Personal</span>
                <span className='project__item' onClick={() => filterItem("Academic")}>Academic</span>
            </div>

            <div className='project__container grid'>
                {items.map((elem) => {
                    const{ id, image, title, category, link } = elem;
                    return (
                        <div className='project__card' key={id}>
                            <div className='project__thumbnail'> 
                                <img src={image} alt='' className='project__img' />
                                
                                <div className='project__mask'></div>

                            </div>

                            <span className='project__category'>{category}</span>

                            <h3 className='project__title'>{title}</h3>

                            <a href={link} target='_blank' className='project__button'>
                                <i className='icon-link work__button-icon'></i>
                            </a>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Portfolio