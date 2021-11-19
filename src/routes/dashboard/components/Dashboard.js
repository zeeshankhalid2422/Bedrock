import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Icon, Table, Avatar, Progress  } from 'antd';
import 'echarts/theme/macarons';
import CHARTCONFIG from 'constants/chartConfig';
import ReactEcharts from 'echarts-for-react';
import DEMO from 'constants/demoData';
import '../style.scss';
import Slider from "react-slick";

const columns = [
  { title: 'Transaction Hash', width: 10, dataIndex: 'key', key: 'name' },
  { title: 'BTC', width: 10, dataIndex: 'btc', key: 'age' },
  { title: 'Time', width: 10, dataIndex: 'time', key: '1' },
  { title: 'Minor Preference', width: 10, dataIndex: 'minor', key: '2' },
  { title: 'Status', width: 10, dataIndex: 'status', key: '2' },
];

const data = [{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'Medium',
  status: 'Confirmed',
},
{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'HIGH',
  status: 'Confirmed',
},
{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'Medium',
  status: 'Confirmed',
},
{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'HIGH',
  status: 'Confirmed',
},
{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'Medium',
  status: 'Confirmed',
},
{
  key: '17d231564sadf..',
  btc: '1.0011224214 BTC',
  time: '2 minutes ago',
  minor: 'Medium',
  status: 'Confirmed',
}];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1
};


let bar1 = {};

bar1.option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Bedrock', 'Precipitation'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true, title: 'save' }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Bedrock',
      type: 'bar',
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Average' }
        ]
      }
    },
    // {
    //   name: 'Precipitation',
    //   type: 'bar',
    //   data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    //   markPoint: {
    //     data: [
    //       { name: 'Highest', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
    //       { name: 'Lowest', value: 2.3, xAxis: 11, yAxis: 3 }
    //     ]
    //   },
    //   markLine: {
    //     data: [
    //       { type: 'average', name: 'Average' }
    //     ]
    //   }
    // }
  ]
};

const dash = () => (
  <div className="container-fluid no-breadcrumb page-dash">
    <QueueAnim type="bottom" className="ui-animate">
      <div className="row">

        <div className="col-md-8 dashspecs">
          <div className="row">
            <div className="col-md-4 mb-4 details">
              <div className="bg">
                <div className="col-md-12 p-0 m-1">
                  <p className="currency">$</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="amount">1,820</h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <Icon type="line-chart" className="text-primary" />
                  </div>
                </div>
                <div className="row desc mt-2">
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 details">
              <div className="bg">
                <div className="col-md-12 p-0 m-1">
                  <p className="currency">$</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="amount">1,820</h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <Icon type="line-chart" className="text-primary" />
                  </div>
                </div>
                <div className="row desc mt-2">
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 details">
              <div className="bg">
                <div className="col-md-12 p-0 m-1">
                  <p className="currency">$</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="amount">1,820</h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <Icon type="line-chart" className="text-primary" />
                  </div>
                </div>
                <div className="row desc mt-2">
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                  <div className="col-md-4">
                    <h4>1,820</h4>
                    <p>+ 2.80%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div style={{background: "#191c1b", padding: "25px", borderRadius: "10px"}}>
                <h4>Funding from BackersCamp</h4>
                <hr style={{background: "#ffffff33"}} />

                <div className="row">
                  <div className="col-md-6">
                      Hello
                  </div>
                  <div className="col-md-6">
                      Hello
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <article className="article">
                <h4 className="article-title">Transaction History</h4>
                <Table
                  columns={columns}
                  dataSource={data}
                  scroll={{ x: 100 }}
                  className="ant-table-v1"
                />
              </article>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* <div className="row mb-4 text-center" style={{ display: "block" }}>
            <div>
              <img style={{ maxWidth: "350px", width: "100%" }} src="assets/sneakxenergy.png" alt="sneak" />
            </div>
          </div> */}


          <div className="card mb-4" style={{background: "#191c1b"}}>
            <img style={{ maxHeight: "300px", width: "100%" }} src="assets/sneakxenergy.png" alt="sneak" />
            <div className ="card-body">
              <h4>Sneak X Energy</h4>
              <p> The future of Energy Drinks </p>
              <Progress percent={80} />
              {/* <Progress percent={70} status="exception" /> */}
              <div className="row prodetail mt-3">
                <div className="col-md-4">
                  <h5>PLEDGED</h5>
                  <p>$ 268,742</p>
                </div>
                <div className="col-md-4">
                  <h5>FUNDED</h5>
                  <p>80%</p>
                </div>
                <div className="col-md-4">
                  <h5>BACKERS</h5>
                  <p>100,200</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <a className="text-white" href="">Visit Project <Icon type="arrow-right" style={{ fontSize: 16, color: 'white' }} /></a>
                </div>
              </div>
            </div>
          </div>


          <div className="row mb-4">
            <div className="col-12 grid-margin">
              <h4>Currency Converter Calculator</h4>
              <coin-ponent dark-mode border-radius="10" decimals="4"></coin-ponent>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 grid-margin">
              <h4>Currency Converter Calculator</h4>
              <coin-ponent dark-mode border-radius="10" token="ETH" decimals="4"></coin-ponent>
            </div>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="box box-default mb-4">
            <div className="box-header">ATC Live Statistics</div>
            <div className="box-body">
              <ReactEcharts option={bar1.option} theme={"macarons"} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="balance">
                <p>BTC BALANCE</p>
                <h4>124.53 <span>BTC</span></h4>
                <div className="row mt-4 mb-3">
                  <div className="col-md-6">
                    <a className="send" href="">SEND</a>
                  </div>
                  <div className="col-md-6">
                    <a className="receive" href="">RECEIVE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="balance">
                <p>USD BALANCE</p>
                <h4>724.53 <span>USD</span></h4>
                <div className="row mt-4 mb-3">
                  <div className="col-md-6">
                    <a className="send1" href="">SEND</a>
                  </div>
                  <div className="col-md-6">
                    <a className="receive1" href="">RECEIVE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="quicktrans">
                <h4>Quick Transfer</h4>
                <div className="col-md-12 avatar">
                  <Avatar size={64} />
                  <Avatar size={64} />
                  <Avatar size={64} />
                  <Avatar size={64} />
                  <Avatar size={64} />
                </div>
                <div className="row mt-3 amount">
                  <div className="col-md-6 text-center">
                    <p>Amount BTC</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <p>1,2000000</p>
                  </div>
                  <a className="btn btn-block mt-4" href="">Transfer Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 bg-dark p-4 mt-4 sliderr" style={{ borderRadius: '10px' }}>
        <Slider {...settings}>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="row" style={{ borderRight: "2px solid white", width: "80%" }}>
              <div className="col-md-12" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>ETH/BTC</h3>
                <p style={{ fontsize: 10, color: '#30AC12', margin: '0' }}>+1.58</p>
              </div>
              <div className="col-md-12 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ fontSize: 14, margin: '0 20px 0 0' }}>$159.73</h3>
                <Icon type="line-chart" className="text-primary" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </QueueAnim>
  </div>
);

export default dash;
