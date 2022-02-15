package com.dingtalk.callback.handler;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.dingboot.common.event.handler.EventHandler;
import com.aliyun.dingboot.common.token.ITokenManager;
import com.dingtalk.api.DefaultDingTalkClient;
import com.dingtalk.api.DingTalkClient;
import com.dingtalk.api.request.OapiProcessinstanceGetRequest;
import com.dingtalk.api.response.OapiProcessinstanceGetResponse;
import com.dingtalk.config.AppConfig;
import com.dingtalk.constant.Const;
import com.dingtalk.constant.UrlConstant;
import com.dingtalk.model.ProcessInstance;
import com.dingtalk.service.BizManager;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * 审批审批实例更改事件处理
 */
@Component
@Slf4j
public class ProcessHandler implements EventHandler {

    @Resource
    private AppConfig appConfig;

    @Resource
    private ITokenManager tokenManager;

    @Override
    public String getEventType() {
        return Const.BPMS_INSTANCE_CHANGE;
    }


    @SneakyThrows
    @Override
    public void doHandler(JSONObject eventJson) {
        String processInstanceId = eventJson.getString("processInstanceId");
        String result = eventJson.getString("result") == null
                ? eventJson.getString("type") : eventJson.getString("result");

        String accessToken = tokenManager.getAccessToken(appConfig.getAppKey(), appConfig.getAppSecret());
        // 获取审批实例详情
        DingTalkClient client = new DefaultDingTalkClient(UrlConstant.PROCESS_INSTANCE_GET);
        OapiProcessinstanceGetRequest request = new OapiProcessinstanceGetRequest();
        request.setProcessInstanceId(processInstanceId);
        OapiProcessinstanceGetResponse response = client.execute(request, accessToken);
        // 审批实例详情
        OapiProcessinstanceGetResponse.ProcessInstanceTopVo processInstanceInfo = response.getProcessInstance();

        // 示例业务逻辑处理...
        {
            boolean anyMatch = BizManager.PROCESS_INSTANCES.stream()
                    .anyMatch(instance -> instance.getProcessInstanceId().equals(processInstanceId));

            // 审批状态发生改变
            if (anyMatch) {
                BizManager.PROCESS_INSTANCES.stream()
                        .filter(instance -> instance.getProcessInstanceId().equals(processInstanceId))
                        .forEach(instance -> instance.setProcessStatus(result));
            } else {
                // 首次发起审批
                ProcessInstance processInstance = new ProcessInstance();
                processInstance.init(eventJson);
                BizManager.PROCESS_INSTANCES.add(processInstance);
            }
        }

    }

}
