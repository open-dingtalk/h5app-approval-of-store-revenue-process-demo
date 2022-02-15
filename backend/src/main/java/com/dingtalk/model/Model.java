package com.dingtalk.model;

import java.util.ArrayList;
import java.util.List;

/**
 * 审批模板
 */
public class Model {

    /**
     * 金额控件
     */
    private List<String> moneyFieldList;


    /**
     * 单选框控件
     */
    private String selectFieldName;

    private Boolean selectFieldOpen;


    /**
     * 日期控件
     */
    private String dateFieldName;

    private Boolean dateFieldOpen;

    /**
     * 单行输入框控件
     */
    private String textFieldName;

    private Boolean textFieldOpen;

    public void initDefault() {
        this.moneyFieldList = this.moneyFieldList == null ? new ArrayList<>(0) : this.moneyFieldList;
    }

    public Model() {
    }

    public List<String> getMoneyFieldList() {
        return moneyFieldList;
    }

    public void setMoneyFieldList(List<String> moneyFieldList) {
        this.moneyFieldList = moneyFieldList;
    }

    public String getSelectFieldName() {
        return selectFieldName;
    }

    public void setSelectFieldName(String selectFieldName) {
        this.selectFieldName = selectFieldName;
    }

    public Boolean getSelectFieldOpen() {
        return selectFieldOpen;
    }

    public void setSelectFieldOpen(Boolean selectFieldOpen) {
        this.selectFieldOpen = selectFieldOpen;
    }

    public String getDateFieldName() {
        return dateFieldName;
    }

    public void setDateFieldName(String dateFieldName) {
        this.dateFieldName = dateFieldName;
    }

    public Boolean getDateFieldOpen() {
        return dateFieldOpen;
    }

    public void setDateFieldOpen(Boolean dateFieldOpen) {
        this.dateFieldOpen = dateFieldOpen;
    }

    public String getTextFieldName() {
        return textFieldName;
    }

    public void setTextFieldName(String textFieldName) {
        this.textFieldName = textFieldName;
    }

    public Boolean getTextFieldOpen() {
        return textFieldOpen;
    }

    public void setTextFieldOpen(Boolean textFieldOpen) {
        this.textFieldOpen = textFieldOpen;
    }
}
