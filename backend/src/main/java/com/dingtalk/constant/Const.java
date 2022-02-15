package com.dingtalk.constant;

public class Const {

    /**
     * 加解密需要用到的token，可以随机填写，长度大于等于6个字符且少于64个字符。
     */
    public static final String TOKEN = "dingCallBack";

    /**
     * 数据加密密钥。用于回调数据的加密，长度固定为43个字符，从a-z，A-Z，0-9共62个字符中选取，您可以随机生成，
     * ISV(服务提供商)推荐使用注册套件时填写的EncodingAESKey
     */
    public static final String AES_KEY = "ZTI0YWU4ODFlOWEyNDFmNGE3NjkwN2FmNDAwYTI0YTk";

    /**
     * 接收事件回调的url，必须是公网可以访问的url地址。
     */
    public static final String CALL_BACK_URL = "/biz/ding/callback";

    /**
     * 注册的事件类型__审批实例更改事件
     */
    public static final String BPMS_INSTANCE_CHANGE = "bpms_instance_change";

    /**
     * 审批模板名称
     */
    public static final String MODEL_NAME = "收入日报";

    /**
     * 单行输入框控件
     */
    public static final String TEXT_FIELD = "TextField";

    /**
     * 金额控件
     */
    public static final String MONEY_FIELD = "MoneyField";

    /**
     * 日期控件
     */
    public static final String DATE_FIELD = "DDDateField";

    /**
     * 单选框控件
     */
    public static final String SELECT_FIELD = "DDSelectField";


}
