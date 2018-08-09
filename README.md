## mock服务器
1. 创建脚手架
2. 添加mock数据 mock/data.json
3. routes/index.js/中编写路由
 ```
router.get('/goods', function (req, res) {
  res.send({
    code: 0,
    data: data.goods
  })
})
```   
4. 在客户端config/index.js文件中配置代理
```
'/mock': { // 匹配所有以 '/mock'开头的请求路径
  target: 'http://localhost:3000', // 代理目标的基础路径
  changeOrigin: true, // 支持跨域
  pathRewrite: {// 重写路径: 去掉路径中开头的'/mock'
    '^/mock': '' // 转发请求时去掉 /mock
  }
}
```    
5. 更改客户端的api
```
export const reqGoods = () => ajax('/mock/goods')
```
