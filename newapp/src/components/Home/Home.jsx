import React from 'react';
import './home.css';
import {HiFilter} from 'react-icons/hi';

const Home = () => {
    return (
        <section classname='Home'>
        <div className='overlay'></div>
        
       <div className="homeContent container">
        <div className="textDiv">

            <span className="smallText">
                Our Packages
            </span>

            <h1 className="homeTitle">
                Search Your Holiday
            </h1>

        </div>
       </div>
       <div className="cardDiv grid">
        <div className="destinationInput">
            <lable htmlFor="city">  Search Your Destination</lable>
            <div className="input grid">
                <input type="text" placeholder='Enter Name Here......'/>
               

            </div>
       
        </div>
        <div className="dateInput grid">
            <lable htmlFor="date">  Select Your Date</lable>
            <div className="input flex">
                <input type="date" />
        

            </div>
       
        </div>
        <div className="priceInput">
            <div className="lable_total flex">
                <lable htmlFor="price">Max price:

                </lable>
                <h3 className='total'>$5000

                </h3>
            </div>
            <div className="input grid">
                <input type='range ' max="5000" min="1000"/>

            </div>
    </div>
    <div className="searchOption flex">
        <HiFilter className="icon"/>
        <span>
            More 
        </span>
        </div> 
       </div>
        </section>
    )
}

export default Home
