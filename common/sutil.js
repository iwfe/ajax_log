module.exports = {
  clientIP(ip) {
    const ipMatch = /(?:\d{1,3}\.){3}\d{1,3}$/.exec(ip)
    return ipMatch ? ipMatch[0] : '127.0.0.1'
  },

  allowCORS(ctx) {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type,accept,X-Requested-With')
  }
}
