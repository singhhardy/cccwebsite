import React, { useEffect } from 'react'
import "./NFT.css"
import Aos from "aos";
import "aos/dist/aos.css";


function NFT() {
    useEffect(() =>{
        Aos.init({duration: 3000});
    }, [])

    return (
        <div data-aos="fade-up" id='nft'>
        <div className='NFTcontainer' >
            <div className='NFTinner'>
                <div className='NFTtext'>
                    <span>10,000 UNIQUE 3D NFT CARS</span>
                    <p className='mt-5'>All 10,000 NFTs fully 3D car designs are minted on the Ethereum Blockchain.</p>
                    <p>Members’ contribution to the ecosystem will add
                        a flexible royalties governance portal and additional trade for every NFT Holder. </p>
                    <p>A rarity list For each car and limited amount car will be featured as ONLY One
                        and will be listed on the Honorary Board Member List.</p>
                </div>
                <div className='NFTimage'>
                    <img src='Car.gif' />
                </div>
                <br />
            </div>
        </div>                
        </div>
    )
}

export default NFT
