import axios from 'axios';
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import * as dd from "dingtalk-jsapi";

import { Avatar } from 'antd';

import ApprovalTemplate from './pages/ApprovalTemplate'
import ApprovalList from './pages/ApprovalList'

const pageList = [{name: '配置模版', key: 'temp'}, {name: '审批数据', key: 'list'}]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //内网穿透工具介绍:
            // https://developers.dingtalk.com/document/resourcedownload/http-intranet-penetration?pnamespace=app
            // domain: "",
            domain: '',
            corpId: '',
            authCode: '',
            userId: '',
            userName: '',
            userAvatar: '',
            
            page: 'temp' // 两个页面： 配置模版：’temp‘  审批数据：’list‘
        } 
    }
    componentDidMount() {
        if (navigator.userAgent.toLowerCase().indexOf('dingtalk') > -1) {
            dd.biz.navigation.setTitle({ title: '收入日报demo' })
        }
    }

    render() {

        const { domain, corpId, page, userAvatar } = this.state
        
        if (this.state.userId === '') {
            // 免登操作
            this.login();
        }
        return (
            <div className='app-wrap'>
                <div className='app-tit-wrap'>
                    <div className='app-tit-contain'>
                        {
                            userAvatar ? 
                            <img style={{ height: '20px', width: '20px'}} src={userAvatar} />
                            :
                            <Avatar shape="square" style={{ backgroundColor: '#0089FF', height: '20px', width: '20px'}} />
                        }
                        <div className='app-tit-separate'></div>
                        {
                            pageList.map((v, i) => { 
                                return (
                                    <div
                                        key={v.key}
                                        className={page === v.key ? 'app-tit-item app-tit-item-cur' : 'app-tit-item'}
                                        onClick={() => {
                                            this.setState({page: v.key})
                                        }}
                                    >

                                        {v.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    page === 'temp' ? 
                    <ApprovalTemplate
                        domain={domain}
                        corpId={corpId}
                    />
                    :
                    <ApprovalList
                        domain={domain}
                        corpId={corpId}
                    />
                }    
            </div>
        );
    }

    //登录-获取corpId
    login() {
        axios.get(this.state.domain + "/getCorpId")
            .then(res => {
                console.log(JSON.stringify(res));
                if (res.data) {
                    this.loginAction(res.data.data);
                }
            }).catch(error => {
                console.log("corpId err, " + JSON.stringify(error))
            })     
    }

    //登录操作
    loginAction(corpId) {
        console.log("corpId: " +  corpId);
        let _this = this;
        dd.runtime.permission.requestAuthCode({
            corpId: corpId,//企业 corpId
            onSuccess: function (res) {
                // 调用成功时回调
                _this.state.authCode = res.code
                axios.get(_this.state.domain + "/login?authCode=" + _this.state.authCode
                ).then(res => {
                    if (res && res.data.success) {
                        let userId = res.data.data.userId;
                        let userName = res.data.data.userName;
                        let userAvatar = res.data.data.userAvatar;
                        alert('登录成功，你好' + userName);
                        setTimeout(function () {
                            _this.setState({
                                userId: userId,
                                userName: userName,
                                corpId: corpId,
                                userAvatar: userAvatar,
                            })
                        }, 0)
                    } else {
                        console.log("login failed --->" + JSON.stringify(res));
                    }
                }).catch(error => {
                    console.log("httpRequest failed --->" + JSON.stringify(error))
                })
            },
            onFail: function (err) {
                // 调用失败时回调
                console.log("requestAuthCode failed --->" + JSON.stringify(err))
            }
        });
    }
}

export default App;
