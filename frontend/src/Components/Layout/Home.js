import React from 'react'
import "../../Styles/home.scss"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineShoppingCart, AiOutlineTrophy } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import img1 from "../../Images/carousel1.webp"
import img2 from "../../Images/carousel2.webp"
import img3 from "../../Images/carousel3.webp"
import img4 from "../../Images/carousel4.webp"
import img5 from "../../Images/carousel5.webp"
import img6 from "../../Images/carousel6.webp"

// images for posters;
import poster1 from "../../Images/p1.jpg"
import poster2 from "../../Images/p2.jpeg"
import poster3 from "../../Images/p3.webp"
import poster4 from "../../Images/p4.webp"
import poster5 from "../../Images/p5.jpeg"
import poster6 from "../../Images/p6.webp"
import poster7 from "../../Images/p7.webp"
import poster8 from "../../Images/p8.jpeg"

const Home = () => {

  return (
    <div id="home">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
      showThumbs={false} showIndicators={false} interval={3000} >
            <div>
                <img src={img1} alt="carousel1" className='cimg'/>
            </div>

            <div>
                <img src={img2} alt="carousel2" className='cimg'/>
            </div>
            <div>
                <img src={img3} alt="carousel3" className='cimg'/>
            </div>
            <div>
                <img src={img4} alt="carousel4" className='cimg'/>
            </div>
            <div>
                <img src={img5} alt="carousel4" className='cimg'/>
            </div>
            <div>
                <img src={img6} alt="carousel4" className='cimg'/>
            </div>
        </Carousel>


        <section className="services">
            <div className='servicebox'>
            <AiOutlineShoppingCart/>
                
                <div className="servicecontent">
                    <h3>Free Shipping</h3>
                    <p>From all orders above $500</p>
                </div>
            </div>
            <div className='servicebox'>
                <MdRefresh/>
                
                <div className="servicecontent">
                    <h3>Daily Surprise Offers</h3>
                    <p>Save up to 25% off</p>
                </div>
            </div>
            <div className='servicebox'>
                <AiOutlineTrophy/>
                
                <div className="servicecontent">
                    <h3>Affordable Prices</h3>
                    <p>Get Factory direct price</p>
                </div>
            </div>
            <div className='servicebox'>
                <RiSecurePaymentLine/>
                
                <div className="servicecontent">
                    <h3>Secure Payments</h3>
                    <p>100% Protected Payments</p>
                </div>
            </div>
        </section>


        <section id="posters" >
        <div class="pro-container">
            <div class="pro">
                <h3>Top Deals</h3>
                <img src={poster1} alt="Top Deals" />
            </div>
            <div class="pro">
                <h3>Gym & Fitness</h3>
                <img src={poster2} alt="Gym" />
            </div>
            <div class="pro">
                <h3>Furniture</h3>
                <img src={poster3} alt="Furniture" />
            </div>
            <div class="pro">
                <h3>Personal Care</h3>
                <img src={poster4} alt="BeautyProducts" />
            </div>
            <div class="pro">
                <h3>Home Decor</h3>
                <img src={poster5} alt="Living Room" />
            </div>
            <div class="pro">
                <h3>Fashion Needs</h3>
                <img src={poster6} alt="Fashion" />
            </div>
            <div class="pro">
                <h3>Personal Care</h3>
                <img src={poster7} alt="Personal Care" />
            </div>
            <div class="pro">
                <h3>Electronics</h3>
                <img src={poster8} alt="Electronics" />
            </div>
        </div>
        
        </section>


        <section id="newsletter">
            <div class="newstext">
                <h2><span>Sign up</span> for Newsletter</h2>
                <p>Get E-mail updates about <span>new offers</span> and <span>exciting deals</span> .</p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address"/>
                <button>Sign Up</button>
            </div>
        </section>
    </div>
  )
}

export default Home
