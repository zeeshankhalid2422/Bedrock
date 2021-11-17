import React from 'react';
import { Form, Upload, Select , Icon, Input, Button, Popover } from 'antd';
import { withRouter } from 'react-router-dom';
import DEMO from 'constants/demoData';
import QueueAnim from 'rc-queue-anim';
// import FormModal1 from './FormModal';
import FormModal1 from './FormModal';
import $ from 'jquery';
import busd from './busd.png'

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

  update = e => {
    $("#field2").val($('#field1').val());
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginKeyUp = e => {

    var x = document.getElementById("funding-goal").value;
    console.log(x)
    document.getElementById("fund-token").value = x / 2;
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push(DEMO.home2);
      }
    });
    console.log(this.state);

    // let  obj = {
    //   name:"Zeeshan",
    //   phone:""
    // }
    // FormData.append('seperateDetails',JSON.stringify(obj))
    // FormData.append('file',this.state.file)

    axios
      .post('https://617933d3aa7f34001740486d.mockapi.io/crud', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };



  render() {
    const { getFieldDecorator } = this.props.form;

    const { expname, expdesc, expgoal, expdate, markup, files, fund, bwebsite } = this.state;

    return (
      <section className="form-v1-container">
        <QueueAnim type="bottom" className="ui-animate">

          <Form onSubmit={this.submitHandler} className="form-v1">
            <div className="container-fluid experiment">
              <div className="row">
                <div className="col-md-6">
                  <FormItem label="Experiment Name">
                    {getFieldDecorator('experiment-name', {
                      rules: [{ required: true, message: 'Please enter your Experiment Name!' }],
                      value: { expname },
                    })(<Input name="expname" size="large" onChange={this.changeHandler} />)}
                  </FormItem>
                  <FormItem label="Experiment Description">
                    {getFieldDecorator('experiment-desc', {
                      rules: [{ required: false, message: 'Please input your Description!' }],
                      value: { expdesc },
                    })(
                      <Input.TextArea
                        name="expdesc"
                        size="large"
                        style={{ height: 184 }}
                        onChange={this.changeHandler}
                      />
                    )}
                  </FormItem>
                  <div className="row goals">

                    <div className="col-md-6">
                      <Form.Item label="Funding Goal">
                        <img style={{ zIndex: "5", position: 'absolute', top: '0', left: '10px' }} src={busd} width="20" alt="" />
                        {getFieldDecorator('funding-goal', {
                          rules: [{ required: true, message: 'Please enter your Funding Goal!' }],
                          value: { expgoal },
                        })(
                          <Input
                            name="expgoal"
                            onKeyUp={this.handleLoginKeyUp}
                            onChange={this.changeHandler}
                            // onKeyUp={this.update}
                            // prefix={<Icon type="dollar" style={{ fontSize: 16, color: 'white' }} />}
                            type="number"
                          />
                        )}
                      </Form.Item>
                    </div>

                    <div className="col-md-6">
                      <Form.Item label="Goal Date">
                        {getFieldDecorator('goal-date', {
                          rules: [{ required: true, message: 'Please enter your Goal Date!' }],
                          value: { expdate },
                        })(
                          <Input
                            name="expdate"
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
                          value: { markup },
                        })(
                          <Input
                            name="markup"
                            onChange={this.changeHandler}
                            prefix={
                              <Icon type="percentage" style={{ fontSize: 16, color: 'white' }} />
                            }
                            type="number"
                          />
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-md-6 mt-3">
                      <Popover content="More markup, more chance of quicker funding!">
                        <label style={{ color: "white", fontSize: '16px' }} for="fund-token" class="" title="Initial Fund Tokens">
                          Initial Fund Tokens
                        </label>
                      </Popover>
                      <Form.Item>
                        {getFieldDecorator('fund-token', {
                          rules: [
                            { required: false, message: 'Please enter your Initial Fund Tokens!' },
                          ],
                          value: { fund },
                        })(
                          <Input
                            name="fund"
                            id="field2"
                            disabled={true}
                            onChange={this.changeHandler}
                            prefix={<Icon type="dollar" style={{ fontSize: 16, color: 'white' }} />}
                            type="number"
                          />
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-md-6">
                      <Form.Item label="Business website">
                        {getFieldDecorator('b-website', {
                          rules: [{ required: true, message: 'Please enter your Business website!' }],
                          value: { bwebsite },
                        })(
                          <Input
                            name="bwebsite"
                            onChange={this.changeHandler}
                            prefix={
                              <Icon type="ie" style={{ fontSize: 16, color: 'white' }} />
                            }
                            type="text"
                          />
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-md-6 mt-3 mb-3">
                      <label style={{ color: "white", fontSize: '16px' }} for="term-contract" class="" title="Term of contracts">
                      Term of contracts
                      </label> <br />
                      <Select defaultValue="1 month">
                        <option value="2 months">2 month</option>
                        <option value="3 months">3 month</option>
                        <option value="6 months">6 month</option>
                      </Select>
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
                {/* <div className="offset-md-1" /> */}
                <div className="col-md-6">
                  <div className="col-12 grid-margin mb-5 mt-3">
                    <h4 className="text-white">Currency Converter Calculator</h4>
                    <coin-ponent dark-mode border-radius="10" decimals="4"></coin-ponent>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <Form.Item name="thumbnail" valuePropName="fileList1" noStyle>
                        {getFieldDecorator('image1', {
                          rules: [{ required: true, message: 'Please upload upto four images here!' }],
                          value: { files },
                        })(
                          <Upload.Dragger name="files1" action="/upload.do">
                            <p className="ant-upload-text">PLACE THUMBAIL HERE</p>
                          </Upload.Dragger>
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-md-6 mt-3">
                      <Form.Item name="dragger" valuePropName="fileList" noStyle>
                        {getFieldDecorator('image', {
                          rules: [{ required: true, message: 'Please upload your Bussiness Logo here!' }],
                          value: { files },
                        })(
                          <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-text">PLACE LOGO HERE</p>
                          </Upload.Dragger>
                        )}
                      </Form.Item>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Form>

        </QueueAnim>
      </section>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(withRouter(NormalLoginForm));

export default WrappedNormalLoginForm;
