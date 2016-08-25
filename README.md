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
# use a mobile which you want to log the ajax, open wechat or other app to scan the qrcode on your PC browser, and then click the open dashboard button.
# open webpage that has the ajax log script on you mobile and you will see the result.
```
