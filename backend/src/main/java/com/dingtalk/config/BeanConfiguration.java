package com.dingtalk.config;

import com.aliyun.dingboot.common.event.handler.impl.CheckUrlEventHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 注意：该类必须存在！否则无法注册回调！
 */
@Configuration
public class BeanConfiguration {

    /**
     * 注册回调时，钉钉服务器会向URL发起“测试回调URL”事件，来验证填写URL的合法性，
     * URL服务器需要在接收到回调之后返回带有success的加密字符串，才能完成订阅。
     *
     * @return 向IOC注入处理 "测试回调URL"事件类
     */
    @Bean
    public CheckUrlEventHandler checkUrlEventHandler() {
        return new CheckUrlEventHandler();
    }
}
