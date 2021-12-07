import React, { useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import { useMoralis, useWeb3Transfer } from "react-moralis";


const FormItem = Form.Item;

const NormalLoginForm=(props)=> {

  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    enableWeb3,
    Moralis,
  } = useMoralis();

  useEffect(() => {
    TokenPrice();
  }, []);

  const [price, setPrice] = useState(0);

  const TokenPrice = async() => {
    //Get token price on PancakeSwap v2 BSC
     const options = {
       address: "0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a",
       chain: "bsc",
       exchange: "Pancakeswap"
     };
     const _price = await Moralis.Web3API.token.getTokenPrice(options) 
     setPrice(_price)
     localStorage.setItem("bedRockPrice",_price.usdPrice)

    //  console.log(price.usdPrice);
   }


  const PriceWeth = () => {
    const {fetch} = useWeb3Transfer({
      amount: Moralis.Units.Token(20, 18),
      receiver: "0x570518Df163057c134C8d7aef02E4D70b6E5A6Fa",
      type: "erc20",
      contractAddress: "0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a",
    });
  
    return (
        <div>
            <span style={{fontSize: "20px", fontWeight: "bold", maxWidth: "98px", overflow: "hidden", display: "block"}}>${price.usdPrice}</span>
        </div>
      )
    
  }


  const { getFieldDecorator } = props.form;
  return (
    <section className="form-v1-container">
      <PriceWeth/>
    </section>
  );
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;