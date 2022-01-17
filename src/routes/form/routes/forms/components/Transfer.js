import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import { useMoralis, useWeb3Transfer } from 'react-moralis';

const FormItem = Form.Item;

const NormalLoginForm = props => {
  const { authenticate, isWeb3Enabled, isAuthenticated, enableWeb3, Moralis } = useMoralis();

  const TransferWeth = () => {
    let initial = localStorage.getItem('InitialTokens');
    const { fetch, error, isFetching } = useWeb3Transfer({
      amount: Moralis.Units.Token(initial, 18),
      receiver: '0x0E5f48b7177F9E390dB0AdAF72A1576DAbb644dF',
      type: 'erc20',
      contractAddress: '0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a',
    });

    return (
      <FormItem>
        <Button
          style={{ borderRadius: '9px', width: '250px', background: '#E26534', border: 'none' }}
          type="primary"
          htmlType="submit"
          onClick={() => fetch()}
          className="btn-cta btn-lg"
          id="submit"
          disabled={isFetching}
        >
          Add Experiment
        </Button>
      </FormItem>
    );
  };

  const { getFieldDecorator } = props.form;
  return (
    <section className="form-v1-container">
      <TransferWeth />
    </section>
  );
};

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;
