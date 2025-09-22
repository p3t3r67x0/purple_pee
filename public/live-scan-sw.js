const workerScope = self

const toJson = async (response) => {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    try {
      return await response.json()
    } catch (error) {
      return { parseError: String(error) }
    }
  }

  try {
    const text = await response.text()
    return { raw: text }
  } catch (error) {
    return { parseError: String(error) }
  }
}

const postToClient = async (eventSource, message) => {
  if (eventSource) {
    try {
      eventSource.postMessage(message)
      return
    } catch (error) {
      // fall through to broadcast
    }
  }

  const clients = await workerScope.clients.matchAll({ includeUncontrolled: true, type: 'window' })

  for (const client of clients) {
    try {
      client.postMessage(message)
    } catch (error) {
      // ignore individual client errors
    }
  }
}

const runLiveScan = async (payload, eventSource) => {
  const { endpoint, requestId } = payload

  if (!endpoint) {
    await postToClient(eventSource, {
      type: 'LIVE_SCAN_ERROR',
      requestId,
      message: 'Missing endpoint for live scan'
    })
    return
  }

  await postToClient(eventSource, {
    type: 'LIVE_SCAN_STATUS',
    requestId,
    status: 'connecting'
  })

  try {
    const response = await fetch(endpoint, { credentials: 'omit', cache: 'no-store' })

    if (!response.ok) {
      await postToClient(eventSource, {
        type: 'LIVE_SCAN_ERROR',
        requestId,
        message: `Live scan failed with status ${response.status}`
      })
      return
    }

    const body = await toJson(response)

    await postToClient(eventSource, {
      type: 'LIVE_SCAN_RESULT',
      requestId,
      receivedAt: Date.now(),
      data: body
    })
  } catch (error) {
    await postToClient(eventSource, {
      type: 'LIVE_SCAN_ERROR',
      requestId,
      message: error instanceof Error ? error.message : 'Unknown live scan error'
    })
  }
}

workerScope.addEventListener('install', () => {
  workerScope.skipWaiting()
})

workerScope.addEventListener('activate', (event) => {
  event.waitUntil(workerScope.clients.claim())
})

workerScope.addEventListener('message', (event) => {
  const payload = event.data || {}

  if (payload.type === 'LIVE_SCAN_START') {
    event.waitUntil(runLiveScan(payload, event.source))
  }
})
