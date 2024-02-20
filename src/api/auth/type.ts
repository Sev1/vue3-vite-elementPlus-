/**
 * 登录请求参数
 */
export interface loginData {
  /**
   * 用户名-工号
   */
  username: string;
  /**
   * 密码
   */
  password: string;

  /**
   * 验证码
   */
  captchaCode?: string;
}
