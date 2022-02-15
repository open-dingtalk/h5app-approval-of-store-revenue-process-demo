package com.dingtalk.constant;

/**
 * 钉钉开放接口网关常量
 */
public class UrlConstant {

    /**
     * 通过免登授权码获取用户信息
     */
    public static final String GET_USER_INFO = "https://oapi.dingtalk.com/topapi/v2/user/getuserinfo";
    /**
     * 根据用户id获取用户详情
     */
    public static final String USER_GET = "https://oapi.dingtalk.com/topapi/v2/user/get";
    /**
     * 创建模板
     */
    public static final String PROCESS_SAVE = "https://oapi.dingtalk.com/topapi/process/save";

    /**
     * 注册审批回调事件
     */
    public static final String REGISTER_CALL_BACK = "https://oapi.dingtalk.com/call_back/register_call_back";

    /**
     * 获取回调地址
     */
    public static final String GET_CALL_BACK = "https://oapi.dingtalk.com/call_back/get_call_back";

    /**
     * 获取审批实例详情
     */
    public static final String PROCESS_INSTANCE_GET = "https://oapi.dingtalk.com/topapi/processinstance/get";

}
