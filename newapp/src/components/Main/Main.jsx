import React from 'react';
import './main.css';
import download from'./download.jpg';
import photo0jpg from'./photo0jpg.jpg';
import switzerland from'./switzerland.jpg';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
const Data = [
{ 
    id:1,
    imgSrc:download,
    destTitle:'Lauterbrunnen',
    location:"Switzerland",
    grade:"CULTURAL RELAX",
    fees:'$900',
    description:"Lauterbrunnen is deservedly second on the list of the most beautiful places Switzerland has to offer! Situated in the Swiss Alps, this village is set in one of the most impressive trough valleys in the Alps.",

},
{ 
    id:2,
    imgSrc:photo0jpg,
    destTitle:'Waterbom',
    location:"Bali",
    grade:"CULTURAL RELAX",
    fees:'$900',
    description:"Exciting water slides slice through 3.8 hectares of landscaped tropical parks providing hours of fun and entertainment for the young and young at heart! World-class slides and rides are built and maintained to strict international safety standards",

},
{ 
    id:3,
    imgSrc:switzerland,
    destTitle:'The Matterhorn',
    location:"Switzerland",
    grade:"CULTURAL RELAX",
    fees:'$1000',
    description:"The Matterhorn, Switzerland's iconic pointed peak is one of the highest mountains in the Alps. On the border with Italy, this legendary peak rises to 4,478 meters, and its four steep faces lie in the direction of the compass points.",

},
]
const Main = () =>
 {
    
    return(
        <section className="main container section">
            <div className="secTitle">
            <h3 className='title'> Most visited Destination </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(( {id,imgSrc, destTitle , location , grade , fees, description }) =>{
                     return(
                        <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt=
                            "{destTitle}"/>
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle"> {destTitle}</h4>
                            <span className="continent flex">
                                <MdOutlineTravelExplore className='icons'/>
                              <span className='name'> {location} </span> </span>

                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade} <small></small></span>
                            </div>
                            <div className="price">
                                <h5> {fees}</h5>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{ description}</p>

                        </div>
                        <button  className='btn flex'> 
                        DETAILS <HiOutlineClipboardCheck className='icon'/> </button>
                        </div>
                        </div>
                     )
                    })
                }
            </div>
        </section>
    )
}
export default Main

