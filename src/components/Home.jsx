import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import LandPage from './LandPage/LandPage'
import Overview from './Overview/Overview';
import PASS from './PASS/Pass';
import NFT from './NFT/NFT';
import Slides from './Carousel/Carousel';
import Game from './Game/Game';
import Tokenomics from './Tokenomics/Tokenomics';
import Roadmap from './Roadmap/Roadmap';
import Team from './Team/Team';
import Partners from './Partners/Partners';
import TermsServices from './TERMSOFSERVICES/TermsServices'
import Footer from './Footer/Footer';
import PrivacyPolicey from './PRIVACY POLICY/PrivacyPolicey'
import Faq from  '../components/Faq/Faq'
import { Routes, Route, Link } from "react-router-dom";
import SuperMint from './Mint/SuperMint';
import Aos from "aos";
import "aos/dist/aos.css";


function Home() {
    let [isRouting, setIsRouting]=useState("all")
    const setAll=()=>{
        setIsRouting("all")
    }
    const setPolicy=()=>{
        setIsRouting("policy")
        
    }
    const setTerms=()=>{
        setIsRouting("terms")
    }
    
    const setfaq=()=>{
        setIsRouting("faq")
    }
    const setmint=()=>{
        setIsRouting("mint")
    }

 if(isRouting=="all"){
     return(
         <>
         <AllComponents setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} setfaq={setfaq} setmint={setmint} />
         </>
     )
 }else if(isRouting=="policy"){
    return(
        <>
        <Privacy setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} setfaq={setfaq} setmint={setmint}/>
        </>
    )
 }else if(isRouting=="faq"){
    return(
        <>
        <Faqs setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} setfaq={setfaq} setmint={setmint}/>
        </>
    ) 
}else if(isRouting=="terms"){
    return (
        <>
        <Terms setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} setfaq={setfaq} setmint={setmint}/>

         </>
     )
 }else if(isRouting=="mint"){
     return (
         <><Mint setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} setfaq={setfaq} setmint={setmint} /></>
     )
 }else {
    return (
        <div>not found </div>
    ) 
 }
}

export default Home

const AllComponents=({setAll,setPolicy,setTerms,setfaq,setmint})=>{
    return (
        <>
        <Navbar setAll={setAll} setfaq={setfaq} setmint={setmint} />
            <LandPage/>
            <Overview/>
            <PASS/>
            <NFT/>
            <Slides/>
            <Game/>
            <Tokenomics/>
          <Roadmap/>
            <Team/>
            <Partners/>
            <Footer setPolicy={setPolicy} setTerms={setTerms}/>
        </>
    )
}
const Privacy=({setAll,setPolicy,setTerms,setfaq,setmint})=>{
    return (
        <>
        <Navbar setAll={setAll} setfaq={setfaq} setmint={setmint}/>
        <PrivacyPolicey />
        <Footer setPolicy={setPolicy} setTerms={setTerms}/>

        </>
    )
}
const Terms=({setAll,setPolicy,setTerms,setfaq, setmint})=>{
    return (
        <>
        <Navbar setAll={setAll} setfaq={setfaq} setmint={setmint} />
       <TermsServices/> 
        <Footer setPolicy={setPolicy} setTerms={setTerms}/>

        </>
    )
}
const Faqs=({setAll,setPolicy,setTerms,setfaq, setmint})=>{
    return (
        <>
        <Navbar setAll={setAll} setfaq={setfaq} setmint={setmint} />
        <Faq/>
        <Footer setPolicy={setPolicy} setTerms={setTerms}/>

        </>
    )
}

const Mint=({setAll,setPolicy,setTerms,setfaq, setmint})=>{
    return (
        <>
        <Navbar setAll={setAll} setfaq={setfaq} setmint={setmint} />
        <SuperMint/>
        <Footer setPolicy={setPolicy} setTerms={setTerms}/>

        </>
    )
}