package com.dingtalk.controller;

import com.alibaba.fastjson.JSONObject;
import com.dingtalk.model.Model;
import com.dingtalk.model.ProcessInstance;
import com.dingtalk.model.RpcServiceResult;
import com.dingtalk.service.BizManager;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * 主业务Controller，编写你的代码
 */
@RestController
@RequestMapping("/biz")
@CrossOrigin
public class BizController {

    @Resource
    private BizManager bizManager;

    /**
     * 创建审批模板
     */
    @PostMapping("/create/model")
    public RpcServiceResult createModel(@RequestBody Model model) {
        try {
            String modelName = bizManager.createModel(model);
            return RpcServiceResult.getSuccessResult(modelName);
        } catch (Exception ex) {
            ex.printStackTrace();
            return RpcServiceResult.getFailureResult("-1", ex.getMessage());
        }
    }

    /**
     * 查询审批数据
     */
    @GetMapping("/list/instance")
    public RpcServiceResult listInstance() {
        try {
            List<ProcessInstance> instance = bizManager.listInstance();
            return RpcServiceResult.getSuccessResult(instance);
        } catch (Exception ex) {
            ex.printStackTrace();
            return RpcServiceResult.getFailureResult("-1", "获取审批失败");
        }
    }


    /**
     * 钉钉审批回调
     */
    @PostMapping("/ding/callback")
    public Map<String, String> dingCallback(HttpServletRequest request,
                                            @RequestBody JSONObject jsonObject) {
        return bizManager.dingCallback(request, jsonObject);
    }


}
