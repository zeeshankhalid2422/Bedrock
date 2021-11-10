import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import APPCONFIG from 'constants/appConfig';
import DEMO from 'constants/demoData';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.history.push(DEMO.home2);
      }
    });
  };



  // Login Authentication Function

  // login() {
  //   console.warn('state', this.state);
  //   fetch('https://reqres.in/api/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(this.state),
  //   }).then(result => {
  //     result.json().then(resp => {
  //       // console.log(resp.token);
  //       localStorage.setItem('auth', JSON.stringify(resp.token));
  //     });
  //   });
  // }

  // Ends here

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="form-v1-container">
        <h2 style={{fontWeight: '600', marginBottom: '3.0rem'}}>Bedrock</h2>
        <p className="lead">Welcome, Connect your {APPCONFIG.brand} Wallet</p>
        <Form onSubmit={this.handleSubmit} className="form-v1">
          {/* <FormItem>
            {getFieldDecorator('login1-username', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input
                size="large"
                onChange={e => {
                  this.setState({ email: e.target.value });
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
                  this.setState({ password: e.target.value });
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
              // onClick={() => this.login()}
              className="btn-cta btn-block"
            >
              Connect wallet
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;
