const sanitizeHtml = require('sanitize-html')

exports.handler = (ev, ctx, cb) => {
  console.log(sanitizeHtml("some <b>string</b> containing <i>HTML</i>"))
}
