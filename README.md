# ajax_log

- a simple web app to log ajax request and response data. 
- use koa2 + socket.io + react.
- usage:  
```shell
git clone https://github.com/iwfe/ajax_log
cd ajax_log 
npm i
cp config/config_template.js config/config.js
# modify host to your IP in config.js
npm start
# in another terminal
npm run dev
# open http://<your local IP and port> in a PC browser
# use a mobile, open wechat and scan the qrcode on your PC browser.
# open webpage that has the ajax log script on you mobile and you will see the result.
```
- 用法（本地启动）:  
```shell
git clone https://github.com/iwfe/ajax_log
cd ajax_log 
npm i
cp config/config_template.js config/config.js
# 把 config.js 中的 host 改成自己电脑的 IP 
npm start
# 打开另一个终端
npm run dev
# 在电脑的浏览器打开 http://<电脑IP和项目里配的端口> ，页面打开后会看到一个二维码
# 用手机微信扫一下电脑浏览器上的二维码，电脑浏览器上出现 `已经开始抓包，请在手机上打开要抓包的页面！` 字样之后，关掉微信扫码后出现的页面
# 手机打开想要抓包的页面进行相应操作，可以在电脑上看到抓包结果。
# （注意： 想要抓包的页面，ajax 必须做了全局拦截，而且要把拦截到的信息发送到该项目）
```
