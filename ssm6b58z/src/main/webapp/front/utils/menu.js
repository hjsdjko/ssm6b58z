const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"产品分类","menuJump":"列表","tableName":"chanpinfenlei"}],"menu":"产品分类管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论"],"menu":"产品信息","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除"],"menu":"评分信息","menuJump":"列表","tableName":"pingfenxinxi"}],"menu":"评分信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"产品资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["评分"],"menu":"产品信息列表","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"评分信息","menuJump":"列表","tableName":"pingfenxinxi"}],"menu":"评分信息管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["评分"],"menu":"产品信息列表","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;