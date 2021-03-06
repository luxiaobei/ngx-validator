import { InjectionToken } from '@angular/core';
import { IValidationFeedbackStrategy } from './strategies';

export interface Dictionary<T> {
    [key: string]: T;
}

export declare type NgxValidationMessages = Dictionary<Dictionary<string>>;

export interface NgxValidatorConfig {
    validationFeedbackStrategy?: IValidationFeedbackStrategy;
    validationMessages?: NgxValidationMessages;
}
export interface NgxValidatorGlobalConfig extends NgxValidatorConfig {
    globalValidationMessages?: Dictionary<string>;
}

export const NGX_VALIDATOR_CONFIG = new InjectionToken<NgxValidatorGlobalConfig>('NGX_VALIDATION_CONFIG');

export const DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
    required: '该选项不能为空',
    maxlength: '该选项输入值长度不能大于{requiredLength}',
    minlength: '该选项输入值长度不能小于{requiredLength}',
    ngxUniqueCheck: '输入值已经存在，请重新输入',
    email: '输入邮件的格式不正确',
    repeat: '两次输入不一致',
    pattern: '该选项输入格式不正确',
    number: '必须输入数字',
    url: '输入URL格式不正确',
    max: '该选项输入值不能大于{max}',
    min: '该选项输入值不能小于{min}'
};
