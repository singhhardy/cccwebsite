import React, { useState } from 'react'
import { loadAccountAddress } from "../Api/Api";
import { contractAbi, contractAddress } from '../Utils/Constants'
import './Minnt.css'
import Web3 from 'web3'
const webSupply = new Web3('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

function Mint({ getAccount, txt, preMintCost }) {

    

    return (
        <div>
            <div className="mainMintdiv">
            <br/><br/>
                <div className="innerMintdiv "><br /><br />
                    <h3 className="Firstdivheading">Pre - Sale is live</h3><br />
                    <h1 className='ConnectDiv'>Please Connect</h1>
                    <p className='ConnectdivPP'>Connect to the Ethereum Mainnet Network (Accepted Wallet:Metamask).</p>
                    <p className='ConnectdivPP'>{txt}</p>
                    <div className="btnconnecthere">

                        <button
                            onClick={getAccount}
                            className='btn btn-sm Connectbtn'>CONNECT</button>
                    </div>
                    <div className="afterconnecttext">click mint to mint your NFT.</div>
                    <p className="Salepricetext"> Pre - Sale Price : {preMintCost} ETH (+ Gas fee)</p>


                </div>

                <br /><br />
            </div>


        </div>
    )
}

export default Mint
