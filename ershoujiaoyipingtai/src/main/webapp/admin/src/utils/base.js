const base = {
    get() {
        return {
            url : "http://localhost:8080/ershoujiaoyipingtai/",
            name: "ershoujiaoyipingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ershoujiaoyipingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手商品交易平台"
        } 
    }
}
export default base
