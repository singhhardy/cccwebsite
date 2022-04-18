import React, {useEffect} from 'react';
import './Pass.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Pass() {
    useEffect(() =>{
        Aos.init({duration: 3000});
    }, [])
    return (
        <div data-aos="fade-up" id="Pass">
        <div className='PassContainer' >
            <div className=' overViewInner'> 
            <section className='videocontainer'><video  src='PASS.mp4' loop muted autoPlay play playsinline/></section>
                <div className='overviewText'>
                    <p>
                    Crypto Car Club PASS, is the first and the most exclusive item in the CCC ecosystem! 
                    CCC is launching a one-time PASS sale.
 
                    </p>
                    <p>All PASS holders get an upgrade to our highest role, Ultramodern, and unlock the Ambassador Program. 
                    With the PASS, holders can take a luxury car for a drive during our car shows, and automatically join a raffle for a free car giveaway.
                    </p>
                    <p>A higher return on royalties distribution and grant you early access to Game token pre-sales and Crypto Car Club Game
                    </p>
                    <p>Claim free CCC NFT. </p>
                    <p>Customize your player NFT and become an NFT on us. 
                    Access to private clubhouses and VIP events all around the world. </p>
                    <p>Customized merchandise with your name and your title. 
                        Full access to Crypto Car Club AR and VR version.</p>
                    <p>After the PASS sale, the PASS can only be claimed by owning 5 CCC NFTs</p>
                    <a href=''><button class="btn">COMMING SOON</button></a>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Pass
