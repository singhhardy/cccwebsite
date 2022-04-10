import React, { useEffect } from 'react';
import './Overview.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Overview() {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])
    return (
        <div data-aos="fade-up" id="overview">
        <div  className='overViweContainer' >
            <div className=' overViewInner'>
                
                <div className='overviewText'>
                    <p>
                        Crypto Car Club is the first web3 based NFT Play to Earn car game.
                    </p>
                    <p>Use your NFT car in the game to play and earn tokens.</p>
                    <p>Choose from the four different car designs, Futuristic, Exotic, Sport, and Classic.</p>
                    <p>Own your dream super NFT car and become a VIP member Club.</p>
                </div>
                <div className='overviewImage'><img src='MclarenOverView.png' /></div>
            </div>
           
        </div> </div>
    )
}


export default Overview
