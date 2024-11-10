# Checkin

GitHub Actions 实现 [GLaDOS][glados] 自动签到

([GLaDOS][glados] 可用邀请码: `74ZLJ-QD5MO-48TB3-1FUJS`, 双方都有奖励天数)

## 使用说明

1. Fork 这个仓库

1. 登录 [GLaDOS][glados] 获取 Cookie

1. 添加 Cookie 到 Secret `GLADOS`

1. 启用 Actions, 每天北京时间 00:10 自动签到

1. 如需推送通知, 可用 [WxPusher][wxpusher], 扫描下面的二维码，添加 SPT 到 Secret `NOTIFY`

[https://wxpusher.zjiecode.com/api/qrcode/RwjGLMOPTYp35zSYQr0HxbCPrV9eU0wKVBXU1D5VVtya0cQXEJWPjqBdW3gKLifS.jpg]

[glados]: https://github.com/glados-network/GLaDOS
<!-- [pushplus]: https://www.pushplus.plus/ -->
[wxpusher]: https://wxpusher.zjiecode.com/docs/#/?id=%e8%8e%b7%e5%8f%96spt
