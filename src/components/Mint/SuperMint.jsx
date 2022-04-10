import React,{useState,useEffect} from 'react'
import {contractAddress, contractAbi} from '../Utils/Constants'
import PreSaleMint from './PreSaleMint';
import PublicSaleMint from './PublicSaleMint';
import NoSale from './NoSale';
import Web3 from 'web3'
const webSupply = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

// const webSupply = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
function SuperMint() {
    let [isDisplay, setIsDisplay]=useState();
let [preMintCost, setPreMintCost]=useState(0);
let [publicMintCost, setPublicMintCost]=useState(0)
    const getSupply=async()=>{
        try{
            let contract = new webSupply.eth.Contract(contractAbi, contractAddress);
            let publicMintCost = await contract.methods.publicMintCost().call(); 
            publicMintCost= webSupply.utils.fromWei(publicMintCost)
            setPublicMintCost(publicMintCost);
            
             let presaleMintCost= await contract.methods.whitelistMintCost().call();
             presaleMintCost= webSupply.utils.fromWei(presaleMintCost)
            setPreMintCost(presaleMintCost)


            let totalSupply = await contract.methods.totalSupply().call(); 

            let isPreSaleStart= await contract.methods.isPresaleStart().call();
            let presaleMaxSupply= await contract.methods.presaleMaxSupply().call();

            let isPublicSale= await contract.methods.isPublicStart().call();
            let publicSaleMaxSupply = await contract.methods.publicSaleMaxSupply().call();

            if(isPreSaleStart== true && totalSupply <= presaleMaxSupply ){
                setIsDisplay("presale");
            }else if(isPublicSale == true && totalSupply <= publicSaleMaxSupply){
                setIsDisplay("publicsale");

            }
         
        }catch(e){
            console.log("error while supply", e);
        }
    }
    
    setInterval(() => {
        getSupply();
    }, 1000);
    useEffect(() => {
getSupply()
    }, [])

    if(isDisplay == "presale"){

        return (
            <div id='mint'>
       <Presale preMintCost={preMintCost}  />
            </div>
        )
    }else if(isDisplay == "publicsale" ){
        return (
            <div id='mint'>
                <Publicsale publicMintCost={publicMintCost} />
            </div>
        )
    }else{
        return (
            <div id='mint'>
                <Nosale publicMintCost={publicMintCost} />
            </div>
        )
    }
}

export default SuperMint


const Presale=({preMintCost})=>{

    return(
        <>
        <PreSaleMint preMintCost={preMintCost}  />
        </>
    )
}
const Publicsale=({publicMintCost})=>{

    return(
        <>
       <PublicSaleMint publicMintCost={publicMintCost}  />
        </>
    )
}
const Nosale=()=>{

    return(
        <>
       <NoSale/>
        </>
    )
}