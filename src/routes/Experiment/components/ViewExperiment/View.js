import React from 'react';
import { Table } from 'antd';
import DEMO from 'constants/demoData';
import '../../style.scss'

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'key'},
  { title: 'Experiment Name', dataIndex: 'expname', key: 'age'},
  { title: 'Description', dataIndex: 'desc', key: '1' },
  { title: 'Funding Goal', dataIndex: 'fund', key: '2' },
  { title: 'Goal Date', dataIndex: 'date', key: '3' },
  { title: 'Markup', dataIndex: 'markup', key: '4' },
  { title: 'Initial Funding Token', dataIndex: 'token', key: '5' },
  { title: 'Status', dataIndex: 'status', key: '5', fixed: 'right', },
];

const data = [{
  id: '1',
  expname: 'Zeeshan',
  desc: 'Testing',
  fund: '5000',
  date: '5000',
  markup: '5000',
  token: '5000',
  status: 'pending',
}];

const Article = () => {
  return(
    <article className="article p-4">
      <h2 className="article-title">View Data</h2>
      <Table 
        columns={columns} 
        dataSource={data}
        scroll={{ x: 1300 }} 
        className="ant-table-v1"
      />
    </article>
  )
}

export default Article;



