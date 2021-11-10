import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import DEMO from 'constants/demoData';

const Page = () => {
  return(
    <div className="page-err">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <div className="err-container text-center">
            <div className="err-code-container">
              <div className="err-code mt-5"> <h1 style={{fontSize: '100px'}}>400</h1> </div>
            </div>
            <h1 className="mb-5">Sorry, page not found</h1>
            <Button style={{fontSize: '20px', padding: '20px', lineHeight: '0'}} 
            className="btn-primary" href={DEMO.home}>Go Back to Home Page</Button>
          </div>
        </div>
      </QueueAnim>
    </div>
  );
}

export default Page;
