export const tabless = {
    'address': 'ims_imeepos_runner3_address',
    'cities': 'ims_imeepos_runner4_cities',
    'push_msg': 'ims_imeepos_runner4_push_msg', // 推送记录
    'agent': 'ims_imeepos_runner4_agent'
}

// 用户发布任务 - 发布成功后 - 添加推送任务 - 推送服务器通知客户服务器 - 推送消息给用户

// id, openid, nickname, realname, mobile, attach_data, create_time, title, content, type, status, desc

// title 推送标题
// content 推送内容
// attach_data 附加信息
// desc 备注
// status 0等待推送， 1推送完成

// type = push.to.all.runner - 推送给所有跑腿员
// type = push.to.near.runner - 推送给附近跑腿员
// type = push.to.all.shoper - 推送给所有商户
// type = push.to.near.shoper - 推送给附近商户
// type = push.to.all.member - 推送给所有粉丝
// type = push.to.near.member - 推送给附近粉丝
// type = push.to.all.manager - 推送给所有管理员
// type = push.to.all.admin - 推送给所有站长
