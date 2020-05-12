/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-30 11:33:49
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-03-30 11:33:56
 */
import request from "@/utils/request";

export function getFacebook(params) {
  return request({
    url: "http://www.facebook.com/",
    method: "get",
    params
  });
}
