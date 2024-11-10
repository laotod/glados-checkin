const glados = async () => {
  const cookie = process.env.GLADOS
  if (!cookie) return
  try {
    const headers = {
      'cookie': cookie,
      'referer': 'https://glados.rocks/console/checkin',
      'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    }
    const checkin = await fetch('https://glados.rocks/api/user/checkin', {
      method: 'POST',
      headers: { ...headers, 'content-type': 'application/json' },
      body: '{"token": "glados.one"}',
    }).then((r) => r.json())
    const status = await fetch('https://glados.rocks/api/user/status', {
      method: 'GET',
      headers,
    }).then((r) => r.json())
    return [
      // 'Checkin OK',
      `${checkin.message}`,
      `Points ${Number(checkin.list[0].balance)}`,
      `Left Days ${Number(status.data.leftDays)}`,
    ]
  } catch (error) {
    return [
      // 'Checkin Error',
      `${error}`,
      `<${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}>`,
    ]
  }
}

// 推送加
const notify_push_plus = async (contents) => {
  const token = process.env.NOTIFY
  if (!token || !contents) return
  await fetch(`https://www.pushplus.plus/send`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      token,
      title: contents[0],
      content: contents.join('<br>'),
      template: 'markdown',
    }),
  })
}

// WxPusher
const notify_wx_pusher = async (contents) => {
  const spt = process.env.NOTIFY
  if (!spt || !contents) return
  await fetch(`https://wxpusher.zjiecode.com/api/send/message/simple-push`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      spt,
      summary: contents[0],
      content: contents.join('<br>'),
      contentType: 3,
    }),
  })
}

const main = async () => {
  await notify_wx_pusher(await glados())
}

main()
