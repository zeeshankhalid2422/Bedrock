import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import { Icon } from 'antd';
import '../../style.scss'

class View extends Component {

    constructor() {
        super();
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch('https://617933d3aa7f34001740486d.mockapi.io/crud').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result)
                this.setState({ users: result })
            })
        })
    }




    render() {
        return <div>
            <div className="container-fluid no-breadcrumb page-dash">
              <QueueAnim type="bottom" className="ui-animate">
                <div className="row">
                  <div className="col-md-12">
                    <article className="article">
                      <h4 className="article-title">View Experiment</h4>
                      <table className="ant-table-fixed" style={{ width: '100%' }}>
                        <thead className="ant-table-thead">
                          <tr>
                            <th className="">
                              <div>Name</div>
                            </th>
                            <th className="">
                              <div>SR.No </div>
                            </th>
                            <th className="">
                              <div>Photos</div>
                            </th>
                            <th className="">
                              <div>Goal raised</div>
                            </th>
                            <th className="">
                              <div>Total Funded</div>
                            </th>
                            <th className="">
                              <div>Time left</div>
                            </th>
                            <th className="">
                              <div>Collateral Amount</div>
                            </th>
                            <th className="">
                              <div>Status</div>
                            </th>
                            <th className="">
                              <div>Action</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="ant-table-tbody">
                        <tr>
                            <td>Kadin Herwitz</td>
                            <td>123456789</td>
                            <td>NULL</td>
                            <td>50000</td>
                            <td>50000</td>
                            <td>30 days</td>
                            <td>25000</td>
                            <td className="status"><a href="">Active</a></td>
                            <td>
                                <a href="" className="mr-3"><Icon type="edit" style={{ fontSize: 16, color: 'white' }} /></a>
                                <a href=""><Icon type="delete" style={{ fontSize: 16, color: 'white' }} /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Kadin Herwitz</td>
                            <td>123456789</td>
                            <td>NULL</td>
                            <td>50000</td>
                            <td>50000</td>
                            <td>30 days</td>
                            <td>25000</td>
                            <td className="status"><a href="">Active</a></td>
                            <td>
                                <a href="" className="mr-3"><Icon type="edit" style={{ fontSize: 16, color: 'white' }} /></a>
                                <a href=""><Icon type="delete" style={{ fontSize: 16, color: 'white' }} /></a>
                            </td>
                          </tr>
                          <tr>
                            <td>Kadin Herwitz</td>
                            <td>123456789</td>
                            <td>NULL</td>
                            <td>50000</td>
                            <td>50000</td>
                            <td>30 days</td>
                            <td>25000</td>
                            <td className="status"><a href="">Active</a></td>
                            <td>
                                <a href="" className="mr-3"><Icon type="edit" style={{ fontSize: 16, color: 'white' }} /></a>
                                <a href=""><Icon type="delete" style={{ fontSize: 16, color: 'white' }} /></a>
                            </td>
                          </tr>
                          {/* 
                                            {
                                                this.state.users ?
                                                    this.state.users.map((item, i) =>
                                                        <tr>
                                                            <td>{item.expname}</td>
                                                            <td>{item.expdesc}</td>
                                                            <td>{item.expgoal}</td>
                                                            <td>{item.expdate}</td>
                                                            <td>{item.markup}</td>
                                                            <td>{item.fund}</td>
                                                            <td>Pending</td>
                                                        </tr>
                                                    )
                                                    :
                                                    null
                                            } */}
                        </tbody>
                      </table>
                    </article>
                  </div>
                </div>
              </QueueAnim>
            </div>
          </div>;
    }
}

export default View;