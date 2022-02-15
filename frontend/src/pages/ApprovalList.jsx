import axios from 'axios';
import React from 'react';
import { Empty, } from 'antd';
import { RightOutlined } from '@ant-design/icons'
import { openLink, openSlidePanel, alert, browserNavigator } from './utils'

const approvalState = {
    'start': {text:'进行中', color: '#E8A54C'},
    'agree': { text: '完成', color: '#17C295'},
    'refuse': { text: '拒绝', color: '#F2725E'},
    'terminate': { text: '撤销', color: '#666666'},
    'delete': { text: '删除', color: '#666666'},
    'cancel': { text: '取消', color: '#666666'},
}

class ApprovalList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            instanceList: [],
        } 
    }
    componentDidMount() {
        this.getInstanceList()
    }

    previewApproval (processInstanceId) {
        const url = `https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&dd_progress=false&back=native&corpid=${this.props.corpId}&swfrom=${'XFN'}#/approval?procInstId=${processInstanceId}`
        
        if (browserNavigator.versions.mobile || browserNavigator.versions.ios || browserNavigator.versions.android || browserNavigator.versions.iPhone || browserNavigator.versions.iPad) {
            openLink(url);
        } else {
            openSlidePanel(url, '查看审批')
        }
        
    }

    render () {
        return (
            <div className='approval-body'>
                <div className='approval-contain-wrap'>
                    <div className='approval-list-wrap'>
                        {
                            this.state.instanceList.map(v => {
                                return (
                                    <div className='approval-list-item' key={v.processInstanceId}>
                                        <div className='approval-list-item-line'>
                                            <span className='approval-list-item-name'>{v.processTitle}</span>
                                            <span className='approval-list-item-date'>{v.createTime}</span>
                                        </div>
                                        <div className='approval-list-item-line'>
                                            <span className='approval-list-item-state' style={{color: approvalState[v.processStatus].color}}>{approvalState[v.processStatus].text}</span>
                                            <span
                                                className='approval-list-item-link'
                                                onClick={this.previewApproval.bind(this, v.processInstanceId)}
                                            >
                                                查看详情 <RightOutlined />
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        !this.state.instanceList.length ?
                        <Empty
                            imageStyle={{marginTop: '80px'}}
                            description={<div className='approval-list-none-tip'>
                                <div>还没有审批实例数据</div>
                                <div>请前往「工作台」-「OA审批」发起审批</div>
                            </div>}
                        />
                        : null
                    }
                    <div className='approval-list-tip' style={{display: this.state.instanceList.length ? '' : 'none'}}>
                        *仅显示当次运行demo时发起的审批实例
                    </div>
                </div>
                <div className='approval-footer'>
                    <div
                        className='approval-footer-btn' 
                        onClick={() => {
                            this.getInstanceList()
                        }}
                    >
                        刷新列表
                    </div>
                </div>
            </div>
        );
    }

    // 获取审批列表
    getInstanceList = () => {
        axios.get(this.props.domain + "/biz/list/instance")
        .then(res => {
            console.log(JSON.stringify(res));
            if (res.data.success) {
                this.setState({instanceList: res.data.data})
            } else {
                alert(`${res.data.errorMsg}`)
            }
        }).catch(error => {
            console.log("corpId err, " + JSON.stringify(error))
        })
    }
}

export default ApprovalList;