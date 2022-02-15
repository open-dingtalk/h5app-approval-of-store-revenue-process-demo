package com.dingtalk.callback.factory;

import com.aliyun.dingboot.common.event.factory.AbstractEventHandlerFactory;
import org.springframework.stereotype.Component;

/**
 * 审批事件工厂
 */
@Component
public class ProcessEventHandlerFactory extends AbstractEventHandlerFactory {

    public ProcessEventHandlerFactory() {
    }

    @Override
    public String getEventTypePrefix() {
        return "bpms";
    }

}
