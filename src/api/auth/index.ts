import request from "@/utils/request";
import { type AxiosPromise } from "axios";
import { type loginData } from "./type";
import { auth } from "../apiUrl";

/**
 * 登录
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: loginData): AxiosPromise<any> {
  return request({
    url: auth.LOGIN,
    method: "post",
    data,
  });
}
