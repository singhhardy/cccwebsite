import React, {useEffect} from 'react';
import './Roadmap.css';
import Aos from "aos";
import "aos/dist/aos.css";


function Roadmap() {
    useEffect(() =>{
        Aos.init({duration: 2000});
    }, [])

    return (
        <div >
        <div className='roadMapContainer' id='Roadmap'>
            <h1 className='roadMapHeading'>ROADMAP</h1>
            <div className='roadMapInner'>
                <div  className='roadMapItem roadMapItem1'>
                    <div className='roadMapImage'>
                        <img src='roadmap-image1.png' className='no1roadmap' />
                        <div className="line"></div>
                    </div>
                    
                    <div data-aos="fade-left"  className='roadMapItemText'>
                        <h4>PHASE I - 2021 Q4</h4>
                        <p>Start 10,000 unique NFT car designs</p>
                        <p>Start marketing campaign</p>
                        <p>Website and social media development</p>
                        <p>Initializing VIP Club membership</p>
                        <p>Develop race and competitions between players</p>

                    </div>
                </div>
                <div className='roadMapItem roadMapItem2'>
                    <div className='roadMapImage'> <img src='roadmap-image2.png' className='no1roadmap' />
                        <div className="line2"></div>
                    </div>
                    <div data-aos="fade-left" className='roadMapItemText'>
                        <h4>PHASE II - 2022 Q1</h4>
                        <p>Deploy NFT smart contract address on Ethereum Blockchain</p>
                        <p>Initializing CCC PASS, the most exclusive item in the CCC ecosystem!</p>
                        <p>Start CCC Whitelist registration</p>
                        <p>Partnerships and collaboration in the metaverse</p>
                        <p>Weekly tasks and daily competitions and rewards</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem3'>
                    <div className='roadMapImage'><img src='roadmap-image3.png' className='no1roadmap' />
                        <div className="line3"></div>
                    </div>
                    <div data-aos="fade-left" className='roadMapItemText'>
                        <h4>PHASE III -2022 Q2</h4>
                        <p>One time PASS sale and launch Ambassador Program</p>
                        <p>Testing beta version for Crypto Car Club Game</p>
                        <p>Launch CCC NFT Collection (Presale + Public Sale)</p>
                        <p>Initiate Crypto Car Club Gaming Token</p>
                        <p>Start Live Events and Car Shows  </p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem3'>
                    <div className='roadMapImage'><img src='roadmap-image3.png' className='no1roadmap' />
                        <div className="line3"></div>
                    </div>
                    <div data-aos="fade-left" className='roadMapItemText'>
                        <h4>PHASE IV - 2022 Q3</h4>
                        <p>Launch Crypto Car Club P2E Game</p>
                        <p>Integrate social networks in Crypto Car Club for players</p>
                        <p>Boost ecosystem and rewards program</p>
                        <p>Develop and integrate our marketplace for earning, trading, and selling platforms</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem4'>
                    <div className='roadMapImage'><img src='roadmap-image5.png'  className='no1roadmap' />
                        <div className="line4"></div>
                    </div>
                    <div data-aos="fade-left" className='roadMapItemText'>
                        <h4 className=''>Phase V 2022 Q4</h4>
                        <p>CCC Merchandise and branding </p>
                        <p>Start developing a VR version of the game</p>
                        <p>Integrate Logitech equipment for real steering wheels and shifters</p>
                        <p>Integrate unlocked premium contacts of the game assets</p>
                    </div>
                </div>
            </div>
            </div>
            <div id='Team'></div>
        </div>
    )
}

export default Roadmap
