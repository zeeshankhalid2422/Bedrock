import React from 'react';
import { Form, Upload, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import DEMO from 'constants/demoData';
// import FormModal1 from './FormModal';
import FormModal1 from './FormModal';
import axios from 'axios';


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //     this.props.history.push(DEMO.home2);
    //   }
    // });
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push(DEMO.home2);
      }
    });
    console.log(this.state);
    axios
      .post('https://491b-103-228-159-23.ngrok.io/api/experiments', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const { name, description, raiseGoal, goalDate, interest, files, initialFund } = this.state;

    return (
      <section className="form-v1-container">
        <Form onSubmit={this.submitHandler} className="form-v1">
          <div className="container-fluid experiment">
            <div className="row">
              <div className="col-md-6">
                <FormItem label="Experiment Name">
                  {getFieldDecorator('experiment-name', {
                    rules: [{ required: true, message: 'Please enter your Experiment Name!' }],
                    value: { name },
                  })(<Input name="name" size="large" onChange={this.changeHandler} />)}
                </FormItem>
                <FormItem label="Experiment Description">
                  {getFieldDecorator('experiment-desc', {
                    rules: [{ required: false, message: 'Please input your Description!' }],
                    value: { description },
                  })(
                    <Input.TextArea
                      name="description"
                      size="large"
                      style={{ height: 184 }}
                      onChange={this.changeHandler}
                    />
                  )}
                </FormItem>
                <div className="row goals">
                  <div className="col-md-6">
                    <Form.Item label="Funding Goal">
                      {getFieldDecorator('funding-goal', {
                        rules: [{ required: true, message: 'Please enter your Funding Goal!' }],
                        value: { raiseGoal },
                      })(
                        <Input
                          name="raiseGoal"
                          onChange={this.changeHandler}
                          prefix={<Icon type="dollar" style={{ fontSize: 16, color: 'white' }} />}
                          type="number"
                        />
                      )}
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item label="Goal Date">
                      {getFieldDecorator('goal-date', {
                        rules: [{ required: true, message: 'Please enter your Goal Date!' }],
                        value: { goalDate },
                      })(
                        <Input
                          name="goalDate"
                          onChange={this.changeHandler}
                          prefix={<Icon type="calendar" style={{ fontSize: 16, color: 'white' }} />}
                          type="date"
                        />
                      )}
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item label="Interest">
                      {getFieldDecorator('mark-up', {
                        rules: [{ required: true, message: 'Please enter your Markup!' }],
                        value: { interest },
                      })(
                        <Input
                          name="interest"
                          onChange={this.changeHandler}
                          prefix={
                            <Icon type="percentage" style={{ fontSize: 16, color: 'white' }} />
                          }
                          type="number"
                        />
                      )}
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item label="Initial Fund Tokens">
                      {getFieldDecorator('fund-token', {
                        rules: [
                          { required: true, message: 'Please enter your Initial Fund Tokens!' },
                        ],
                        value: { initialFund },
                      })(
                        <Input
                          name="initialFund"
                          onChange={this.changeHandler}
                          prefix={<Icon type="dollar" style={{ fontSize: 16, color: 'white' }} />}
                          type="number"
                        />
                      )}
                    </Form.Item>
                  </div>
                  <div className="article col-md-12">
                    <FormModal1 />
                  </div>
                </div>
                <FormItem className="text-center m-4">
                  <Button htmlType="submit" className="btn-cta submit-btn">
                    Add Experiment
                  </Button>
                </FormItem>
              </div>
              <div className="offset-md-2" />
              <div className="col-md-4">
                <div className="col-md-12 mt-3">
                  <Form.Item>
                    <Form.Item name="thumbnail" valuePropName="fileList" noStyle>
                      {getFieldDecorator('image', {
                        rules: [{ required: true, message: 'Please upload your thumbnail here!' }],
                        value: { files },
                      })(
                        <Upload.Dragger name="files" action="/upload.do">
                          <p className="ant-upload-text">PLACE THUMBAIL HERE</p>
                        </Upload.Dragger>
                      )}
                    </Form.Item>
                  </Form.Item>
                </div>
                <div className="col-md-12 mt-3">
                  <Form.Item>
                    <Form.Item name="dragger" valuePropName="fileList" noStyle>
                      {getFieldDecorator('image', {
                        rules: [{ required: true, message: 'Please upload your image here!' }],
                        value: { files },
                      })(
                        <Upload.Dragger name="files" action="/upload.do">
                          <p className="ant-upload-text">PLACE IMAGE HERE</p>
                        </Upload.Dragger>
                      )}
                    </Form.Item>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </section>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;
