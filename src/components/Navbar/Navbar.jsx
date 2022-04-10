import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navbar.css'
import Aos from "aos";
import "aos/dist/aos.css";


function NavbarCrypto({setAll,setfaq, setmint}) {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" variant="dark" className='navContainer' fixed="top">

        <Navbar.Brand href="#home" className='me-3'><img src='Cryptologo .jpeg' width="190px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='Navbuttonres' />
        <Navbar.Collapse id="responsive-navbar-nav" className='navLink'>
          <Nav  >
          <a href="#overview" className='me-3 text-white  navText' onClick={setAll}>OVERVIEW</a>
          <a href='#Pass' className='me-3 text-white  navText' onClick={setAll}>PASS</a>
            {/* <a href="#mint" className='me-3 text-white  navText' onClick={setmint}>MINT</a> */}
            <a href="#nft" className='me-3 text-white  navText' onClick={setAll}>NFT</a>
            <a href="#Game" className='me-3 text-white  navText' onClick={setAll}>GAME</a>
            <a href="#Tokenoic" className='me-3 text-white  navText' onClick={setAll}>TOKENOMICS</a>
            <a href="#Roadmap" className='me-3 text-white  navText' onClick={setAll}>ROADMAP</a>
            <a href="#Team" className='me-3 text-white  navText' onClick={setAll}>TEAM</a>
            <a href="#Partners" className='me-3 text-white  navText' onClick={setAll}>PARTNERSHIP</a>
            <a href="#" className='me-3 text-white  navText' onClick={()=>{setfaq()}}>FAQ</a>

          </Nav>
        </Navbar.Collapse>
        <div className='me-1 pt-1 maindivnavnav'>
          <div className='navLinks '>

            <a href="https://discord.com/invite/br9aMBhJCT" target="_blank"><button className='btn btn-outline-light joinBtn me-3 p-2 '>Join Our Discord</button></a>
            <a href="https://twitter.com/_CryptoCarClub " target="_blank"><span><i class="fab fa-twitter me-3 "></i></span></a>
            <a href='https://www.instagram.com/_cryptocarclub/' target="_blank"><span><i class="fab fa-instagram me-3"></i></span></a>
            {/* <span><BsMedium className='fa-instagram me-3 ' /></span> */}
            <a href='https://cryptocarclub.medium.com/' target="_blank"><i className='fa fa-medium text-white fs-3'></i></a>
          </div>
        </div>

      </Navbar>

    </div>
  )
}

export default NavbarCrypto