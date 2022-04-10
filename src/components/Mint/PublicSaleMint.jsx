import React, { useState } from 'react'
import PublicSale from "./PublicSale";
import PublicMint from "./PublicMint"
import {loadAccountAddress} from '../Api/Api'

function PublicSaleMint({publicMintCost}) {
    let [isDispaly, setIsDisplay] = useState(true);
    let [txt, setTxt]=useState("")

    const getAccount=async()=>{
        try{
            let acc= await loadAccountAddress();
            if(acc== "No Wallet"){
                setTxt(acc);
                setIsDisplay(true)
            }else if(acc== "Connect to Rinkeby"){
                setTxt(acc)
                setIsDisplay(true)
            }else{
                setIsDisplay(false)
            }
            console.log(acc);

        }catch(e){
            console.log("error while get account",e);
        }
    }
    return (
        <div>
            {
                isDispaly?
                <PublicSale getAccount={getAccount} txt={txt} publicMintCost={publicMintCost} />
                :
                <PublicMint publicMintCost={publicMintCost}/>
            }
        </div>
    )
}

export default PublicSaleMint
