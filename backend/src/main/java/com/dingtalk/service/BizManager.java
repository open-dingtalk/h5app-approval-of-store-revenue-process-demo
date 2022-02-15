package com.dingtalk.service;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.dingboot.common.event.Callback;
import com.aliyun.dingboot.common.token.ITokenManager;
import com.dingtalk.api.DefaultDingTalkClient;
import com.dingtalk.api.DingTalkClient;
import com.dingtalk.api.request.OapiCallBackRegisterCallBackRequest;
import com.dingtalk.api.request.OapiProcessSaveRequest;
import com.dingtalk.api.response.OapiCallBackRegisterCallBackResponse;
import com.dingtalk.api.response.OapiProcessSaveResponse;
import com.dingtalk.config.AppConfig;
import com.dingtalk.constant.Const;
import com.dingtalk.constant.UrlConstant;
import com.dingtalk.model.Model;
import com.dingtalk.model.ProcessInstance;
import com.taobao.api.ApiException;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * 主业务service，编写你的代码
 */
@Service
public class BizManager {
    @Resource
    private ITokenManager tokenManager;

    @Resource
    private Callback callback;

    @Resource
    private AppConfig appConfig;

    /**
     * 审批实例数据
     */
    public static final List<ProcessInstance> PROCESS_INSTANCES = new CopyOnWriteArrayList<>();

    /**
     * 创建审批模板
     */
    public String createModel(Model model) throws ApiException {
        String accessToken = tokenManager.getAccessToken(appConfig.getAppKey(), appConfig.getAppSecret());

        // 模板名称
        String modelName = UUID.randomUUID().toString().replaceAll("-", "").substring(28) + Const.MODEL_NAME;

        OapiProcessSaveRequest request = new OapiProcessSaveRequest();
        OapiProcessSaveRequest.SaveProcessRequest saveProcess = new OapiProcessSaveRequest.SaveProcessRequest();
        saveProcess.setName(modelName);
        saveProcess.setAgentid(appConfig.getAgentId());

        // 模板配置
        OapiProcessSaveRequest.ProcessConfig processConfig = new OapiProcessSaveRequest.ProcessConfig();
        processConfig.setDisableFormEdit(true);
        processConfig.setDisableStopProcessButton(true);
        processConfig.setDisableDeleteProcess(false);
        processConfig.setHidden(false);
        saveProcess.setProcessConfig(processConfig);

        // 模板控件
        List<OapiProcessSaveRequest.FormComponentVo> formComponentList = this.generateFormComponent(model);
        saveProcess.setFormComponentList(formComponentList);

        request.setSaveProcessRequest(saveProcess);

        DingTalkClient client = new DefaultDingTalkClient(UrlConstant.PROCESS_SAVE);
        OapiProcessSaveResponse response = client.execute(request, accessToken);

        // 注册回调
        this.registerCallBack(accessToken);

        return modelName;
    }

    /**
     * 生成审批模板表单控件
     *
     * @param model 需要生成的控件
     * @return 生成后的控件
     */
    private List<OapiProcessSaveRequest.FormComponentVo> generateFormComponent(Model model) {
        model.initDefault();
        List<OapiProcessSaveRequest.FormComponentVo> formComponentList = new ArrayList<>();

        // 金额控件
        model.getMoneyFieldList().forEach(moneyField -> {
            OapiProcessSaveRequest.FormComponentVo formComponentVo = new OapiProcessSaveRequest.FormComponentVo();
            formComponentVo.setComponentName(Const.MONEY_FIELD);
            OapiProcessSaveRequest.FormComponentPropVo formComponentPropVo = new OapiProcessSaveRequest.FormComponentPropVo();

            formComponentPropVo.setId(Const.MONEY_FIELD + "-" + generateComponentId());
            formComponentPropVo.setLabel(moneyField + "（账户）");
            formComponentPropVo.setRequired(true);
            formComponentPropVo.setPlaceholder("请输入金额");
            formComponentVo.setProps(formComponentPropVo);
            formComponentList.add(formComponentVo);
        });

        // 单选框控件
        if (BooleanUtils.isTrue(model.getSelectFieldOpen()) && StringUtils.hasText(model.getSelectFieldName())) {
            OapiProcessSaveRequest.FormComponentVo formComponentVo = new OapiProcessSaveRequest.FormComponentVo();
            formComponentVo.setComponentName(Const.SELECT_FIELD);
            OapiProcessSaveRequest.FormComponentPropVo formComponentPropVo = new OapiProcessSaveRequest.FormComponentPropVo();

            formComponentPropVo.setId(Const.SELECT_FIELD + "-" + generateComponentId());
            formComponentPropVo.setLabel(model.getSelectFieldName());
            formComponentPropVo.setRequired(true);
            formComponentPropVo.setPlaceholder("请选择");

            List<String> selectList = new ArrayList<>();
            selectList.add("总店");
            selectList.add("解放路分店");
            selectList.add("中山路分店");

            formComponentPropVo.setOptions(selectList);


            formComponentVo.setProps(formComponentPropVo);
            formComponentList.add(formComponentVo);
        }

        // 日期控件
        if (BooleanUtils.isTrue(model.getDateFieldOpen()) && StringUtils.hasText(model.getDateFieldName())) {
            OapiProcessSaveRequest.FormComponentVo formComponentVo = new OapiProcessSaveRequest.FormComponentVo();
            formComponentVo.setComponentName(Const.DATE_FIELD);
            OapiProcessSaveRequest.FormComponentPropVo formComponentPropVo = new OapiProcessSaveRequest.FormComponentPropVo();

            formComponentPropVo.setId(Const.DATE_FIELD + "-" + generateComponentId());
            formComponentPropVo.setLabel(model.getDateFieldName());
            formComponentPropVo.setRequired(true);
            formComponentPropVo.setPlaceholder("请选择");

            formComponentPropVo.setUnit("天");

            formComponentVo.setProps(formComponentPropVo);
            formComponentList.add(formComponentVo);
        }

        // 单行输入框控件
        if (BooleanUtils.isTrue(model.getTextFieldOpen()) && StringUtils.hasText(model.getTextFieldName())) {
            OapiProcessSaveRequest.FormComponentVo formComponentVo = new OapiProcessSaveRequest.FormComponentVo();
            formComponentVo.setComponentName(Const.TEXT_FIELD);
            OapiProcessSaveRequest.FormComponentPropVo formComponentPropVo = new OapiProcessSaveRequest.FormComponentPropVo();

            formComponentPropVo.setId(Const.TEXT_FIELD + "-" + generateComponentId());
            formComponentPropVo.setLabel(model.getTextFieldName());
            formComponentPropVo.setRequired(true);
            formComponentPropVo.setPlaceholder("请输入");
            formComponentVo.setProps(formComponentPropVo);
            formComponentList.add(formComponentVo);
        }

        return formComponentList;
    }

    public String generateComponentId() {
        return "ZJ" + UUID.randomUUID().toString().replaceAll("-", "").toUpperCase().substring(26);
    }

    /**
     * 注册回调
     *
     * @param accessToken accessToken
     * @throws ApiException api调用异常
     */
    private void registerCallBack(String accessToken) throws ApiException {
        // 回调地址
        StringBuilder url = new StringBuilder();
        url.append("http://").append(appConfig.getDomain()).append(".vaiwan.com").append(Const.CALL_BACK_URL);

        // 注册回调
        DingTalkClient client = new DefaultDingTalkClient(UrlConstant.REGISTER_CALL_BACK);
        OapiCallBackRegisterCallBackRequest setRequest = new OapiCallBackRegisterCallBackRequest();
        setRequest.setUrl(url.toString());
        setRequest.setAesKey(Const.AES_KEY);
        setRequest.setToken(Const.TOKEN);
        setRequest.setCallBackTag(Collections.singletonList(Const.BPMS_INSTANCE_CHANGE));
        OapiCallBackRegisterCallBackResponse setResult = client.execute(setRequest, accessToken);
    }

    /**
     * 获取审批实例数据
     */
    public List<ProcessInstance> listInstance() {
        return PROCESS_INSTANCES;
    }

    /**
     * 处理审批回调
     */
    public Map<String, String> dingCallback(HttpServletRequest request, JSONObject jsonObject) {
        String msgSignature = request.getParameter("signature");
        String timeStamp = request.getParameter("timestamp");
        String nonce = request.getParameter("nonce");

        return this.callback.callback(Const.TOKEN, Const.AES_KEY, appConfig.getCorpId(), msgSignature, timeStamp, nonce, jsonObject);
    }
}
