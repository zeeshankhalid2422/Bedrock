import React from 'react';
import { Table } from 'antd';
import DEMO from 'constants/demoData';
import '../../style.scss';

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'key' },
  { title: 'Experiment Name', dataIndex: 'expname', key: 'age' },
  { title: 'Description', dataIndex: 'desc', key: '1' },
  { title: 'Raise Goal', dataIndex: 'fund', key: '2' },
  { title: 'Goal Date', dataIndex: 'date', key: '3' },
  { title: 'Markup', dataIndex: 'markup', key: '4' },
  { title: 'Contract Term', dataIndex: 'markup', key: '5' },
  { title: 'Initial Fund Tokens', dataIndex: 'markup', key: '6' },
  { title: 'Funding Amount', dataIndex: 'token', key: '7' },
  { title: 'Funding Amount %', dataIndex: 'markup', key: '8' },
  { title: 'Contract term left', dataIndex: 'markup', key: '9' },
  { title: 'Status', dataIndex: 'status', key: '5', fixed: 'right' },
];

const data = [
  {
    id: '1',
    expname: 'Zeeshan',
    desc: 'Testing',
    fund: '5000',
    date: '5000',
    markup: '5000',
    token: '5000',
    status: 'pending',
  },
];

const Article = () => {
  return (
    <article className="article p-4" style={{ overflowX: 'auto' }}>
      <h2 className="article-title">View Data</h2>
      {/* <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} className="ant-table-v1" /> */}

      <table class="table table-responsive viewdata" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Experiment Name</th>
            <th scope="col">Description</th>
            <th scope="col">Raise Goal</th>
            <th scope="col">Goal Date</th>
            <th scope="col">Markup</th>
            <th scope="col">Contract Term</th>
            <th scope="col">Initial Fund Tokens</th>
            <th scope="col">Funding Amount</th>
            <th scope="col">Funding Amount %</th>
            <th scope="col">Contract term left</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Zeeshan</td>
            <td>Testing</td>
            <td>50</td>
            <td>01/13/2022</td>
            <td>10</td>
            <td>178.57142857142856</td>
            <td>www.website.com</td>
            <td>1 month</td>
            <td>50</td>
            <td>1 month</td>
            <td style={{ display: 'flex' }}>
              <a className="btn btn-success mr-3">Start Project</a>{' '}
              {/* <a className="btn btn-danger">Deny</a>{' '} */}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Waqas</td>
            <td>Testing</td>
            <td>25</td>
            <td>01/13/2022</td>
            <td>10</td>
            <td>89.28571428571428</td>
            <td>www.website.com</td>
            <td>1 month</td>
            <td>50</td>
            <td>1 month</td>
            <td style={{ display: 'flex' }}>
              <a className="btn btn-success mr-3">Start Project</a>{' '}
              {/* <a className="btn btn-danger">Deny</a>{' '} */}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default Article;
