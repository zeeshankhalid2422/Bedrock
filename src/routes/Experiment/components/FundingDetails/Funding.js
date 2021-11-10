import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';

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
        return (
            <div>
                <div className="container-fluid no-breadcrumb page-dash">
                    <QueueAnim type="bottom" className="ui-animate">

                        <div className="row">
                            <div className="col-md-12">
                                <article className="article">
                                    <h4 className="article-title mb-3">Funding Details</h4>
                                    <table className="ant-table-fixed" style={{ width: '100%' }}>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th className="">
                                                    <div>User Name</div>
                                                </th>
                                                <th className="">
                                                    <div>Hash</div>
                                                </th>
                                                <th className="">
                                                    <div>Funded Amount</div>
                                                </th>
                                                <th className="">
                                                    <div>Markup Amount</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            
                                            <tr>
                                                <td>Zeeshan Khalid</td>
                                                <td>13214561</td>
                                                <td>50000</td>
                                                <td>25000</td>
                                            </tr>
                                            <tr>
                                                <td>Zeeshan Khalid</td>
                                                <td>13214561</td>
                                                <td>50000</td>
                                                <td>25000</td>
                                            </tr>

                                            {/* {
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
            </div>
        )
    }
}

export default View;