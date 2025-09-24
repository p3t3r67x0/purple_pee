// Use indirect import path to satisfy TS in some environments
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { defineNitroPlugin } from '#internal/nitro'
import { $fetch } from 'ofetch'
import { execSync } from 'node:child_process'

// Helper: get last git commit date for a file (fallback to front-matter date)
function getGitUpdatedDate(path: string): string | null {
  try {
    const out = execSync(`git log -1 --format=%cI -- ${path}`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
    return out || null
  } catch {
    return null
  }
}

// Rough reading time (200 wpm)
function calcReading(meta: any) {
  const body = meta._body || meta.body
  if (!body || !body.children) return { words: 0, minutes: 1 }
  const text = body.children
    .map((c: any) => {
      if (c.type === 'text' && c.value) return c.value
      if (Array.isArray(c.children)) return c.children.map((k: any) => k.value).join(' ')
      return ''
    })
    .join(' ')
  const words = text.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return { words, minutes }
}

declare module 'h3' {
  interface H3EventContext {
    // marker
  }
}

export default defineNitroPlugin((nitroApp: any) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file: any) => {
    if (file._id?.includes('/blog/')) {
      const reading = calcReading(file)
      file.readingTime = reading.minutes
      file.wordCount = reading.words
      const gitDate = getGitUpdatedDate(file._id.replace(/^content:\/\//, ''))
      if (gitDate) {
        file.updated = gitDate
      } else if (!file.updated && file.date) {
        file.updated = file.date
      }
    }
  })
})
