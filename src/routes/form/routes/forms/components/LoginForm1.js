import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import APPCONFIG from 'constants/appConfig';
import DEMO from 'constants/demoData';
import { useMoralis } from "react-moralis";

const FormItem = Form.Item;

const NormalLoginForm=(props)=> {

  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        props.history.push(DEMO.home2);
      }
    });
  };

  const LogoutButton = () => {
    const { logout, isAuthenticating } = useMoralis();
  
    return (
      <Button
        display={"block"}
        colorScheme="red"
        variant="solid"
        isLoading={isAuthenticating}
        onClick={() => logout()}
        disabled={isAuthenticating}>
        Logout
      </Button>
    );
  };

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 56 });
      console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
  });

  const authWalletConnect=async()=> {
    alert('reached')
   const user = authenticate({
      provider: "walletconnect",
      chainId: 56,
      // mobileLinks: [
      //   "metamask",
      //   "trust",
      //   "rainbow",
      //   "argent",
      //   "imtoken",
      //   "pillar",
      // ],
      signingMessage: "Welcome!",
    })
    console.log(user)
  }
  


  const { getFieldDecorator } = props.form;
  return (
    <section className="form-v1-container">
      <h2 style={{fontWeight: '600', marginBottom: '3.0rem'}}>Bedrock</h2>
      <p className="lead">Welcome, Connect your {APPCONFIG.brand} Wallet</p>
      <Form onSubmit={handleSubmit} className="form-v1">
        {/* <FormItem>
          {getFieldDecorator('login1-username', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input
              size="large"
              onChange={e => {
                setState({ email: e.target.value });
              }}
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('login1-password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              size="large"
              onChange={e => {
                setState({ password: e.target.value });
              }}
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem> */}
        <FormItem>
          <Button
            style={{fontSize: '1.0rem'}}
            type="primary"
            htmlType="submit"
            onClick={() => authenticate({ signingMessage: "Hello youtube" })}
            
            className="btn-cta btn-block"
          >
            Connect wallet
          </Button>
        </FormItem>

        <LogoutButton/>
      </Form>
    </section>
  );
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;