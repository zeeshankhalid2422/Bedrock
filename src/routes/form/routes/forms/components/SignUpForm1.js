import React from 'react';
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import DEMO from 'constants/demoData';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push(DEMO.home2);
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('signup1-password')) {
      callback('Passwords doesnt match');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  register() {
    console.warn("state", this.state)
    fetch('https://1df6-119-160-58-8.ngrok.ioapi/login,api/register-merchant', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    }).then((result)=> {
      result.json().then((resp)=> {
        console.log(resp.success.token);
        localStorage.setItem("auth", JSON.stringify(resp.success.token))
      })
    })
  }






  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <section className="form-v1-container">
        <h2>Create an Account</h2>
        <p className="lead col-lg-10 mx-lg-auto">
          Discovering and connecting with creative talent around the globe.
        </p>
        <Form onSubmit={this.handleSubmit} className="form-v1">
          <FormItem
            {...formItemLayout}
            label={
              <span>
                First Name&nbsp;
              </span>
            }
            hasFeedback
          >
            {getFieldDecorator('signup1-firstname', {
              rules: [{ required: true, message: 'Please input your First Name!', whitespace: true }],
            })(<Input onChange={(e)=> {this.setState({first_name: e.target.value})}} />)}
          </FormItem>


          <FormItem
            {...formItemLayout}
            label={
              <span>
                Last Name&nbsp;
              </span>
            }
            hasFeedback
          >
            {getFieldDecorator('signup2-lastname', {
              rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
            })(<Input onChange={(e)=> {this.setState({last_name: e.target.value})}} />)}
          </FormItem>



          <FormItem {...formItemLayout} label="E-mail" hasFeedback>
            {getFieldDecorator('signup1-email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input onChange={(e)=> {this.setState({email: e.target.value})}} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Password" hasFeedback>
            {getFieldDecorator('signup1-password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.checkConfirm,
                },
              ],
            })(<Input onChange={(e)=> {this.setState({password: e.target.value})}} type="password" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
            {getFieldDecorator('signup1-confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.checkPassword,
                },
              ],
            })(<Input onChange={(e)=> {this.setState({password_confirmation: e.target.value})}} type="password" onBlur={this.handleConfirmBlur} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Phone Number" hasFeedback>
            {getFieldDecorator('signup1-phone', {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ],
            })(<Input onChange={(e)=> {this.setState({mobile_number: e.target.value})}} type="number" />)}
          </FormItem>
     
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" onClick={()=> this.register()} htmlType="submit" className="btn-cta">
              Register
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

const WrappedRegistrationForm = Form.create()(withRouter(RegistrationForm));

export default WrappedRegistrationForm;
