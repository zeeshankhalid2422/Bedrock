import React, { Component } from "react";
import axios from "axios";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedfield: "",
    };
  }

  myHandler = (events) => {
    this.setState({
      selectedfield: events.target.files[0],
    },()=>console.log(this.state.selectedfield));
    // console.log(events.target.files[0])
  };

  submitHandler = async (event) => {
    event.preventDefault();
    var url = "https://1df6-119-160-58-8.ngrok.io/api/test";
    // const url = "https://61811fb58bfae60017adfe3a.mockapi.io/Upload"

    const formdata = new FormData();
    formdata.append(
      "id_photo",
      this.state.selectedfield
    );
    // formdata.append("name", "demo");

    let response = await axios.post(url, formdata,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    // console.log(this.state.selectedfield)
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <input type="file" name="id_photo" onChange={this.myHandler} />
          <button type="submit" value="upload">
            Upload
          </button>
        </form>
      </div>
    );
  }
}
