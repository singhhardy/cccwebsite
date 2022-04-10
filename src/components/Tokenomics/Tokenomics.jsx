import React, { useEffect } from 'react';
import './Tokenomics.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Tokenomics() {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])
    return (
        <div data-aos="fade-up">
            <div className="tokenomicsContainer tokenomicsInner  ">
                <div className="innerdivtextandimg " >
<br />
                    <div className="row  rowstarthere "  >
                        <div className="col-lg-7">
                            
                    <p className='tokenHead'> CRYPTO CAR CLUB TOKEN</p>
                            <div className="tokenText">
                                <p>
                                    Crypto Car Club tokens are used as rewards throughout the platform. All platform users
                                    will be able to claim specific Crypto Car Club Tokens on a daily basis.Players can earn, mod,
                                    and trade using Crypto Car Club NFT Ecosystem. Tokens can be used in the shop to enhance the car and increase
                                    its performance. A one-stop Marketplace, using its own suite of Smart Contracts and APIs, the Crypto Car Club Tokens Marketplace will be a hub for all vetted and approved games in the ecosystem. The decentralized Smart Contracts automatically divide the fees for these exchanges to the developers, exchanges, and the platform.
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-5 imgend " >
                            <div className="tekenIcon ">
                                <img src="coin.png" alt="" className='imgecoin' />
                            </div>
                        </div>
                    </div>
                    {/* <div className="tokenomicsInner">

                   
                </div> */}
                </div>

            </div>
        </div>
    )
}

export default Tokenomics
