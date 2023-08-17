import React from 'react';
import './footer.css';
import video from './video.mp4';
import { AiOutlineSend } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
 import {FaTripadvisor} from 'react-icons/fa';
 import {MdTravelExplore} from 'react-icons/md';

const Footer = () =>
 {
    return (
        <section classname='Footer'>
        <div className='videoDiv'>
        <video src={video} muted autoPlay loop type="video/mp4"/>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
            <div className="text">
                <small> KEEP IN TOUCH </small>
                <h2> Travel with us</h2>
            </div>

            <div className="footerCard flex">
                <div className="footerIntra flex">
                    <div className="logoDiv">
                        <a herf="#" className='logo flex'>  <MdTravelExplore className='icons'/>
                         </a>
                    </div>
                    <div className='footerParagraph'>
                    Travelling is an amazing way to learn a lot of things in life. 
                    A lot of people around the world travel every year to many places.
                     Moreover, it is important to travel to humans. 
                     Some travel to learn more while some travel to take a break from their life.
                      No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things.
                    </div>
                    <div className='footerSocials flex'>
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaTripadvisor className="icons"/>
                    
                    </div>
             </div>
             <div className="footerLinks grid">
                {/*group one*/}
                    <div className="linkGroup">
                        <span className='groupTitle'> OUR AGENCY</span>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Services
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Insurance
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Tourism
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Agency
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Payment
                    </li>
                    </div>
                 {/*group Two*/}
                    <div className="linkGroup">
                        <span className='groupTitle'> PARTNERS</span>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Bookings
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Rentcars
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        HostelWorld
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        Trivago
                    </li>
                    <li className='footerList' flex>
                        <FiChevronRight className='icon'/>
                        TripAdvisor
                    </li>
                    </div>
                     </div>
                <div className='footerDiv grid' />
                <small> BEST TRAVEL WEBSITE THEAM</small>
                <small>  CopyRight-2023</small>
                </div>
                <div className="inputDiv flex">
                <input type='text' placeholder='Enter Email Address'/>
                  <button className='btn flex' type="submit">
                    SEND<AiOutlineSend className="icon"/>
                  </button>
                
                
                
            </div>
            
        </div>
     </div>
    </section>
 )
}
export default Footer

