# 代码模板——审批助力连锁门店收入上报

> 收集门店每日的营业数据用作经营指导、账务处理，是餐饮连锁企业极其高频、极其重要的数据工作之一。小番财务通过与钉钉OA审批的深度融合、数据互通，实现了门店上报营业数据的流程化、数据统计的自动化，提升营收数据的及时性、准确性，助力数据驱动的门店经营管理。

## 项目结构

backend：后端模块，springboot构建，钉钉接口功能包括：获取token，免登陆，创建审批模板，创建审批实例，接收审批回调事件等。

frontend：前端模块，react构建，场景功能包括：免登操作、创建审批模版、更新审批消息等。



## 研发环境准备

1. 需要有一个钉钉注册企业，如果没有可以创建：https://oa.dingtalk.com/register_new.htm#/

2. 成为钉钉开发者，参考文档：https://developers.dingtalk.com/document/app/become-a-dingtalk-developer

3. 登录钉钉开放平台后台创建一个H5应用： https://open-dev.dingtalk.com/#/index

4. 配置应用

   配置开发管理，参考文档：https://developers.dingtalk.com/document/app/configure-orgapp

    - **此处配置“应用首页地址”需公网地址，若无公网ip，可使用钉钉内网穿透工具：**

      https://developers.dingtalk.com/document/resourcedownload/http-intranet-penetration

![image-2021120201](https://z3.ax1x.com/2021/12/02/otwOot.png)



配置相关权限：https://developers.dingtalk.com/document/app/address-book-permissions

本demo使用接口相关权限：

“成员信息读权限”、“企业调用接口执行审批操作的权限”、“审批流数据管理权限”

![image-2021120202](https://z3.ax1x.com/2021/12/02/ot0ot0.png)

## 脚本启动（推荐）

### 脚本说明

脚本中内置了内网穿透工具，不需要再额外启动

```shell
dingBoot-linux.sh     # linux版本
dingBoot-mac.sh       # mac版本
dingBoot-windows.bat  # windows版本
```

### 启动命令

执行时将其中参数替换为对应的应用参数，在backend目录下执行（脚本同级目录），参数获取方法：

1. 获取corpId——开发者后台首页：https://open-dev.dingtalk.com/#/index
2. 进入应用开发-企业内部开发-点击进入应用-基础信息-获取appKey、appSecret、agentId

- **启动linux脚本**

```shell
./dingBoot-linux.sh start {项目名} {端口号} {appKey} {appSecret} {agentId} {corpId}
```
- **mac系统(mac m1芯片暂不支持)**

```shell
./dingBoot-mac.sh start {项目名} {端口号} {appKey} {appSecret} {agentId} {corpId}
```
- **windows系统 使用cmd命令行启动**

```shell
./dingBoot-windows.bat {项目名} {端口号} {appKey} {appSecret} {agentId} {corpId}
```

- **示例（linux脚本执行）**

```sh
 ./dingBoot-linux.sh start h5-demo 8080 ding1jmkwa4o19bxxxx ua2qNVhleIx14ld6xgoZqtg84EE94sbizRvCimfXrIqYCeyj7b8QvqYxxx 122549400 ding9f50b15bccd1000
```

### 启动后配置

1. **配置地址**

启动完成会自动生成临时域名，配置方法：进入开发者后台->进入应用->开发管理->应用首页地址和PC端首页地址

2. **发布应用**

配置好地址后进入“版本管理与发布页面”，发布应用，发布后即可在PC钉钉或移动钉钉工作台访问应用

## 手动启动

### 下载本项目至本地

```shell
git clone https://github.com/open-dingtalk/h5app-approval-of-store-revenue-process-demo.git
```

### 获取相应参数

获取到以下参数，修改后端application.yaml

```yaml
app:
  app_key: *****
  app_secret: *****
  agent_id: *****
  corp_id: *****
```

参数获取方法：登录开发者后台

1. 获取corpId：https://open-dev.dingtalk.com/#/index
2. 进入应用开发-企业内部开发-点击进入应用-基础信息-获取appKey、appSecret、agentId

### 修改前端页面

**打开项目，命令行中执行以下命令，编译打包生成build文件**

```shell
cd frontend
npm install
npm run build
```

**将打包好的静态资源文件放入后端**

![image-20210706173224172](https://img.alicdn.com/imgextra/i2/O1CN01QLp1Qw1TCVrPddfjZ_!!6000000002346-2-tps-322-521.png)

### 启动项目

- 启动springboot
- 移动端钉钉点击工作台，找到应用，进入应用

### 页面展示

创建模版展示

![](https://img.alicdn.com/imgextra/i1/O1CN01aUIK4T1yvd0pYEms7_!!6000000006641-2-tps-700-397.png)

审批更新信息展示

![](https://img.alicdn.com/imgextra/i2/O1CN012eDrbY27BfoWfTBIr_!!6000000007759-2-tps-700-397.png)

审批详情内容

![](https://img.alicdn.com/imgextra/i4/O1CN01vfeEIL1qXL4sMNhaW_!!6000000005505-2-tps-700-402.png)

### **参考文档**

1. OA审批权限申请，文档链接：https://open.dingtalk.com/document/orgapp-server/permission-application-and-basic-concepts
2. 获取企业内部应用的access_token，文档链接：https://open.dingtalk.com/document/orgapp-server/obtain-orgapp-token
3. 通过免登码获取用户信息，文档链接：https://open.dingtalk.com/document/orgapp-server/obtain-the-userid-of-a-user-by-using-the-log-free
4. 创建或更新审批模板，文档链接：https://open.dingtalk.com/document/orgapp-server/create-or-update-approval-templates
5. 查询订阅事件，文档链接：https://open.dingtalk.com/document/isvapp-server/query-subscribed-events
6. 注册回调事件，文档链接：https://open.dingtalk.com/document/orgapp-server/registers-event-callback-interfaces
7. 审批事件发生后、回调推送事件，文档链接：https://open.dingtalk.com/document/orgapp-server/approval-events
8. 获取审批实例详情，文档链接：https://open.dingtalk.com/document/orgapp-server/obtains-the-details-of-a-single-approval-instance
