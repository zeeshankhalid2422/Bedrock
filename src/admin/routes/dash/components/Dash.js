import React from 'react';
import QueueAnim from 'rc-queue-anim';
import '../style.scss';



const dash = () => (
  <div className="container-fluid no-breadcrumb page-dash">
    <QueueAnim type="bottom" className="ui-animate">
      This is the admin dashboard
    </QueueAnim>
  </div>
);

export default dash;
