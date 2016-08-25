const router = require('koa-router')()
const sutil = require('../common/sutil')
const serverSocket = require('../socket/server')

router.get('open_dashboard', async (ctx, next) => {
  ctx.state = {
    dashboard_page_id: ctx.query.dashboard_page_id,
    mobile_ip: sutil.clientIP(ctx.ip)
  }
  await ctx.render('open_dashboard')
})

router.all('ajax_log_req', async (ctx) => {
  sutil.allowCORS(ctx)

  serverSocket.sendToClient('on_req', sutil.clientIP(ctx.ip), ctx.request.body)

  ctx.body = ''
  return
})

router.all('ajax_log_res', async (ctx) => {
  sutil.allowCORS(ctx)

  serverSocket.sendToClient('on_res', sutil.clientIP(ctx.ip), ctx.request.body)

  ctx.body = ''
  return
})

router.get('*', async (ctx, next) => {
  await ctx.render('index')
})

module.exports = router
