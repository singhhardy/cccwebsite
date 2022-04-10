import React, {useEffect} from 'react';
import './Team.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Team() {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className='teamContainer' >
            <h1 className='teamHeading'>TEAM</h1>
            <div className="teamInnerContainer">
                <div className="teamInnerContainer1">
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Kero-B-CEO-_-Co-founder.png' />
                        <h4>KERO B</h4>
                        <p>CEO & Co-Founder</p>
                        <div class="tlink">
                        <a href="https://twitter.com/ksala70?s=21 " target="_blank"><span><i class="fab fa-twitter me-3 "></i></span></a>
                        <a href='https://instagram.com/k.sla7/' target="_blank"><span><i class="fab fa-instagram me-3"></i></span></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Marco-G-CFO-_-Co-founder.png' />
                        <h4>MARCO G</h4>
                        <p>CFO  & Co-Founder</p>
                        <div class="tlink">
                        <a href="https://www.linkedin.com/in/markoghattes/ " target="_blank"><span><i class="fab fa-linkedin me-3 "></i></span></a>
                        <a href='https://twitter.com/BarsoumPeter' target="_blank"><span><i class="fab fa-instagram me-3"></i></span></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Matt-B-CTO.png' />
                        <h4>MATT B</h4>
                        <p>CTO</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Nick-P-COO.png' />
                        <h4>PETER B</h4>
                        <p>COO</p>
                        <div class="tlink">
                        <a href="https://www.linkedin.com/in/peter-bishay-305792196/ " target="_blank"><span><i class="fab fa-linkedin me-3 "></i></span></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Michael-H-Development-manager.png' />
                        <h4>MAZEN E</h4>
                        <p>Development Manager</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='David-P-Blockchain-advisor-.png' />
                        <h4>GHULAM A</h4>
                        <p>Blockchain Advisor</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Jose-G-Head-of-Marketing.png' />
                        <h4>JEFF S</h4>
                        <p>Marketing Manager</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='AMY B.jpg' />
                        <h4>BRANDON</h4>
                        <p>Social Media Managaer</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Alica-T-Graphic-Designer.png' />
                        <h4> ALICE T</h4>
                        <p>Graphic Designer</p>
                    </div>
                    <div data-aos="fade-up" className='teamItem'>
                        <img src='Alex-E-Game-Designer-.png' />
                        <h4>HARDIK S</h4>
                        <p>Game Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
