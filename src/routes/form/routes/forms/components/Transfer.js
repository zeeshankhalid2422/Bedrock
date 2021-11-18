import React, { useEffect } from 'react';
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



  const TransferWeth = () => {
    const {fetch, error, isFetching} = useWeb3Transfer({
      amount: Moralis.Units.Token(20, 18),
      receiver: "0x570518Df163057c134C8d7aef02E4D70b6E5A6Fa",
      type: "erc20",
      contractAddress: "0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a",
    });
  
    return (
      
      <FormItem>
      <Button
        style={{borderRadius: "9px", width: "250px", background: "#E26534", border: "none" }}
        type="primary"
        htmlType="submit"
        onClick={() => fetch()}
        className="btn-cta btn-lg"
        id="submit"
        disabled={isFetching}
      >
        Transfer
      </Button>
    </FormItem>)
    
  }


  const { getFieldDecorator } = props.form;
  return (
    <section className="form-v1-container">
      <TransferWeth/>
    </section>
  );
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;