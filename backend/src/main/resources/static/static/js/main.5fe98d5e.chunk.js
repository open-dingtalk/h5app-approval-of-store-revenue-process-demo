(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{132:function(e,t,a){},151:function(e,t,a){},452:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(27),c=a.n(s),l=(a(132),a(12)),o=a(13),r=a(15),d=a(14),p=a(38),u=a.n(p),h=(a(151),a(152),a(40)),m=a(458),j=a(456),v=a(459),f=a(457),O=a(460),b=function(e){h.device.notification.alert({message:e,title:"\u63d0\u793a",buttonName:"\u786e\u5b9a",onSuccess:function(){},onFail:function(e){}})},x=function(){var e=navigator.userAgent;return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,Safari:-1==e.indexOf("Safari"),DingTalk:e.toLowerCase().indexOf("dingtalk")>-1,Windows:e.toLowerCase().indexOf("windows")>-1}}(),g=a(6),N=["\u652f\u4ed8\u5b9d\u5546\u5bb6","\u4e8c\u7ef4\u706b","\u997f\u4e86\u4e48\u5916\u5356","\u7f8e\u56e2\u5916\u5356"],k=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).saveAproval=function(e){n.setState({loading:!0}),u.a.post(n.props.domain+"/biz/create/model",e).then((function(e){n.setState({loading:!1}),console.log(JSON.stringify(e)),e.data.success?(b("\u6a21\u7248\u3010".concat(e.data.data,"\u3011\u521b\u5efa\u6210\u529f\uff01\u8bf7\u524d\u5f80 \u300c\u5de5\u4f5c\u53f0\u300d-\u300cOA\u5ba1\u6279\u300d\u53d1\u8d77\u5ba1\u6279")),n.setState({approvalName:e.data.data})):b("".concat(e.data.errorMsg))})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))},n.state={approvalName:"\u6536\u5165\u65e5\u62a5",moneyFieldList:[],selectFieldName:"\u95e8\u5e97",dateFieldName:"\u6536\u6b3e\u65e5\u671f",textFieldName:"\u5907\u6ce8",textFieldOpen:!0,selectFieldOpen:!0,dateFieldOpen:!0,loading:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.approvalName,n=t.moneyFieldList,i=t.selectFieldName,s=t.dateFieldName,c=t.textFieldName,l=t.textFieldOpen,o=t.selectFieldOpen,r=t.dateFieldOpen,d=t.loading;return Object(g.jsxs)("div",{className:"approval-body",children:[d?Object(g.jsx)("div",{className:"app-loading",children:Object(g.jsx)(j.a,{})}):null,Object(g.jsxs)("div",{className:"approval-contain-wrap",children:[Object(g.jsxs)("div",{className:"approval-line",children:[Object(g.jsx)("span",{className:"approval-line-label",children:"\u5ba1\u6279\u540d\u79f0\uff1a"}),Object(g.jsx)("span",{className:"approval-line-input",children:a})]}),Object(g.jsx)("div",{className:"approval-tip",children:"\u8868\u5355\u8bbe\u7f6e"}),Object(g.jsxs)("div",{className:"approval-form-wrap",children:[Object(g.jsxs)("div",{className:"approval-miti-line",children:[Object(g.jsx)("span",{className:"approval-miti-label",children:"\u6536\u6b3e\u8d26\u6237"}),Object(g.jsx)("div",{className:"approval-miti-checkbox-wrap",children:N.map((function(t){return Object(g.jsx)("div",{className:"approval-miti-checkbox",children:Object(g.jsx)(v.a,{checked:n.indexOf(t)>-1?"checked":"",onChange:function(a){var i=n.concat(),s=function(e,t,a){return e.target.checked?a.push(t):a=a.filter((function(e){return e!==t})),a}(a,t,i);e.setState({moneyFieldList:s})},children:t})},t)}))})]}),Object(g.jsxs)("div",{className:"approval-line approval-line-border",children:[Object(g.jsx)(f.a,{disabled:!o,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7ec4\u4ef6\u6807\u9898",value:i,onChange:function(t){e.setState({selectFieldName:t.target.value})}}),Object(g.jsx)("span",{className:"approval-line-switch-label",children:"\u5355\u9009\u6846"}),Object(g.jsx)(O.a,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed",checked:o,onChange:function(t){e.setState({selectFieldOpen:t})}})]}),Object(g.jsxs)("div",{className:"approval-line approval-line-border",children:[Object(g.jsx)(f.a,{disabled:!r,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7ec4\u4ef6\u6807\u9898",value:s,onChange:function(t){e.setState({dateFieldName:t.target.value})}}),Object(g.jsx)("span",{className:"approval-line-switch-label",children:"\u65e5\u671f"}),Object(g.jsx)(O.a,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed",checked:r,onChange:function(t){e.setState({dateFieldOpen:t})}})]}),Object(g.jsxs)("div",{className:"approval-line approval-line-border",children:[Object(g.jsx)(f.a,{disabled:!l,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7ec4\u4ef6\u6807\u9898",value:c,onChange:function(t){e.setState({textFieldName:t.target.value})}}),Object(g.jsx)("span",{className:"approval-line-switch-label",children:"\u5355\u884c\u8f93\u5165\u6846"}),Object(g.jsx)(O.a,{checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed",checked:l,onChange:function(t){e.setState({textFieldOpen:t})}})]})]})]}),Object(g.jsx)("div",{className:"approval-footer",children:Object(g.jsx)("div",{className:"approval-footer-btn",onClick:function(){if(!n.length)return b("\u6536\u6b3e\u8d26\u6237\u81f3\u5c11\u52fe\u9009\u4e00\u4e2a");if(o&&!i)return b("\u5355\u9009\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(i.length>16)return b("\u5355\u9009\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26");if(r&&!s)return b("\u65e5\u671f\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(s.length>16)return b("\u65e5\u671f\u7ec4\u4ef6\u7684\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26");if(l&&!c)return b("\u5355\u884c\u8f93\u5165\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(c.length>16)return b("\u5355\u884c\u8f93\u5165\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26");var t={moneyFieldList:n,selectFieldOpen:o,selectFieldName:i,dateFieldOpen:r,dateFieldName:s,textFieldOpen:l,textFieldName:c};e.saveAproval(t)},children:"\u65b0\u589e\u6a21\u7248"})})]})}}]),a}(i.a.Component),C=a(48),F=a(461),y={start:{text:"\u8fdb\u884c\u4e2d",color:"#E8A54C"},agree:{text:"\u5b8c\u6210",color:"#17C295"},refuse:{text:"\u62d2\u7edd",color:"#F2725E"},terminate:{text:"\u64a4\u9500",color:"#666666"},delete:{text:"\u5220\u9664",color:"#666666"},cancel:{text:"\u53d6\u6d88",color:"#666666"}},S=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getInstanceList=function(){u.a.get(n.props.domain+"/biz/list/instance").then((function(e){console.log(JSON.stringify(e)),e.data.success?n.setState({instanceList:e.data.data}):b("".concat(e.data.errorMsg))})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))},n.state={instanceList:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getInstanceList()}},{key:"previewApproval",value:function(e){var t="https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&dd_progress=false&back=native&corpid=".concat(this.props.corpId,"&swfrom=","XFN","#/approval?procInstId=").concat(e);x.mobile||x.ios||x.android||x.iPhone||x.iPad?function(e){h.biz.util.openLink({url:e,onSuccess:function(){},onFail:function(){}})}(t):function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title";h.biz.util.openSlidePanel({url:e,title:t,onSuccess:function(){},onFail:function(){}})}(t,"\u67e5\u770b\u5ba1\u6279")}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"approval-body",children:[Object(g.jsxs)("div",{className:"approval-contain-wrap",children:[Object(g.jsx)("div",{className:"approval-list-wrap",children:this.state.instanceList.map((function(t){return Object(g.jsxs)("div",{className:"approval-list-item",children:[Object(g.jsxs)("div",{className:"approval-list-item-line",children:[Object(g.jsx)("span",{className:"approval-list-item-name",children:t.processTitle}),Object(g.jsx)("span",{className:"approval-list-item-date",children:t.createTime})]}),Object(g.jsxs)("div",{className:"approval-list-item-line",children:[Object(g.jsx)("span",{className:"approval-list-item-state",style:{color:y[t.processStatus].color},children:y[t.processStatus].text}),Object(g.jsxs)("span",{className:"approval-list-item-link",onClick:e.previewApproval.bind(e,t.processInstanceId),children:["\u67e5\u770b\u8be6\u60c5 ",Object(g.jsx)(F.a,{})]})]})]},t.processInstanceId)}))}),this.state.instanceList.length?null:Object(g.jsx)(C.a,{imageStyle:{marginTop:"80px"},description:Object(g.jsxs)("div",{className:"approval-list-none-tip",children:[Object(g.jsx)("div",{children:"\u8fd8\u6ca1\u6709\u5ba1\u6279\u5b9e\u4f8b\u6570\u636e"}),Object(g.jsx)("div",{children:"\u8bf7\u524d\u5f80\u300c\u5de5\u4f5c\u53f0\u300d-\u300cOA\u5ba1\u6279\u300d\u53d1\u8d77\u5ba1\u6279"})]})}),Object(g.jsx)("div",{className:"approval-list-tip",style:{display:this.state.instanceList.length?"":"none"},children:"*\u4ec5\u663e\u793a\u5f53\u6b21\u8fd0\u884cdemo\u65f6\u53d1\u8d77\u7684\u5ba1\u6279\u5b9e\u4f8b"})]}),Object(g.jsx)("div",{className:"approval-footer",children:Object(g.jsx)("div",{className:"approval-footer-btn",onClick:function(){e.getInstanceList()},children:"\u5237\u65b0\u5217\u8868"})})]})}}]),a}(i.a.Component),w=S,I=[{name:"\u914d\u7f6e\u6a21\u7248",key:"temp"},{name:"\u5ba1\u6279\u6570\u636e",key:"list"}],A=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={domain:"",corpId:"",authCode:"",userId:"",userName:"",userAvatar:"",page:"temp"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){navigator.userAgent.toLowerCase().indexOf("dingtalk")>-1&&h.biz.navigation.setTitle({title:"\u6536\u5165\u65e5\u62a5demo"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.domain,n=t.corpId,i=t.page,s=t.userAvatar;return""===this.state.userId&&this.login(),Object(g.jsxs)("div",{className:"app-wrap",children:[Object(g.jsx)("div",{className:"app-tit-wrap",children:Object(g.jsxs)("div",{className:"app-tit-contain",children:[s?Object(g.jsx)("img",{style:{height:"20px",width:"20px"},src:s}):Object(g.jsx)(m.a,{shape:"square",style:{backgroundColor:"#0089FF",height:"20px",width:"20px"}}),Object(g.jsx)("div",{className:"app-tit-separate"}),I.map((function(t,a){return Object(g.jsx)("div",{className:i===t.key?"app-tit-item app-tit-item-cur":"app-tit-item",onClick:function(){e.setState({page:t.key})},children:t.name},t.key)}))]})}),"temp"===i?Object(g.jsx)(k,{domain:a,corpId:n}):Object(g.jsx)(w,{domain:a,corpId:n})]})}},{key:"login",value:function(){var e=this;u.a.get(this.state.domain+"/getCorpId").then((function(t){console.log(JSON.stringify(t)),t.data&&e.loginAction(t.data.data)})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))}},{key:"loginAction",value:function(e){console.log("corpId: "+e);var t=this;h.runtime.permission.requestAuthCode({corpId:e,onSuccess:function(a){t.state.authCode=a.code,u.a.get(t.state.domain+"/login?authCode="+t.state.authCode).then((function(a){if(a&&a.data.success){var n=a.data.data.userId,i=a.data.data.userName,s=a.data.data.userAvatar;alert("\u767b\u5f55\u6210\u529f\uff0c\u4f60\u597d"+i),setTimeout((function(){t.setState({userId:n,userName:i,corpId:e,userAvatar:s})}),0)}else console.log("login failed ---\x3e"+JSON.stringify(a))})).catch((function(e){console.log("httpRequest failed ---\x3e"+JSON.stringify(e))}))},onFail:function(e){console.log("requestAuthCode failed ---\x3e"+JSON.stringify(e))}})}}]),a}(i.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,462)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),L()}},[[452,1,2]]]);
//# sourceMappingURL=main.5fe98d5e.chunk.js.map