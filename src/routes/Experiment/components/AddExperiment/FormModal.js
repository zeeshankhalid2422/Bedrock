import React from 'react';
import { Modal, Checkbox, Button, Input } from 'antd';

class FormModal1 extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Checkbox onClick={this.showModal} style={{ color: 'white' }}>Terms and Condition</Checkbox>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          className="custom-modal-v1 text-center"
        >
          <h2>Terms and condition</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsum ullam cupiditate sed nam, laborum delectus molestiae in debitis aut at repellat autem distinctio reprehenderit iste totam quaerat alias nisi numquam iure minima, libero praesentium id adipisci. Quidem, et repellat?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis? Ratione, temporibus voluptate, quis blanditiis odit ipsa illo totam natus sint sit amet quod magnam minima qui, commodi illum error velit eum! Quas quis repellendus hic voluptas. Similique magnam deserunt corporis vero illo. Obcaecati modi autem molestiae iste numquam rem natus tempora perspiciatis, ea at illo laudantium omnis. Possimus similique consectetur iste, facilis voluptatem exercitationem voluptatum minima molestiae eaque, veritatis error eos magni expedita debitis molestias autem quam fugiat veniam unde ratione quis quaerat delectus nulla dolore? Nostrum, aut laudantium doloribus nisi facilis nihil aliquid dolore, minima itaque deserunt libero.</p>
        </Modal>
      </div>
    );
  }
}

const Section = () => (
 
    <FormModal1 />
      
)

export default Section;