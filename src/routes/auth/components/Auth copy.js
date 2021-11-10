import React, { Component } from 'react'
import { Form, Upload, Icon, Input, Button } from 'antd';
import DEMO from 'constants/demoData';
import axios from 'axios';
import '../style.scss'

export default class Auth extends Component {

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
      .post('https://617933d3aa7f34001740486d.mockapi.io/crud', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {

    // const {  files } = this.state;

    return (
      <div>
        <Form onSubmit={this.submitHandler} className="form-v1">
          <div className="container-fluid mt-5 authentication">
            <div className="row">
              <div className="col-md-6 text-center">
                <Form.Item name="thumbnail" valuePropName="fileList" noStyle>
                  <Upload.Dragger name="files">
                    <Icon type="camera" style={{ fontSize: 16, color: 'white' }} />
                    <p className="ant-upload-text text-white">Upload ID Photo with your Photo</p>
                  </Upload.Dragger>
                </Form.Item>
              </div>
              <div className="col-md-6 text-center">
                <Form.Item name="thumbnail" valuePropName="fileList" noStyle>
                  <Upload.Dragger name="files">
                    <Icon type="upload" style={{ fontSize: 16, color: 'white' }} />
                    <p className="ant-upload-text text-white">Upload ID Photo</p>
                  </Upload.Dragger>
                </Form.Item>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-md-12 text-center">
                <a href="">VERIFY</a>
              </div>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
