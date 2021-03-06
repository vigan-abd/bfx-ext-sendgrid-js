/* eslint-env mocha */

'use strict'

const assert = require('assert')

const template = require('../templates/bitfinex.js')

describe('Unit test on template emails', () => {
  it('Passing subject & text to template would send and English email', () => {
    const subject = 'subject'
    const text = 'text'
    const res = template(subject, text)
    assert.ok(res)
    assert.ok(res.includes('Read more about the mobile apps'))
  })

  it('Passing language = "ru" should send a Russian email', () => {
    const subject = 'subject'
    const text = 'text'
    const language = 'ru'
    const res = template(subject, text, null, language)
    assert.ok(res)
    assert.ok(res.includes('Подробнее о мобильных приложениях'))
  })

  it('Passing language = "zh-CN" should send a Simple Chinese email', () => {
    const subject = 'subject'
    const text = 'text'
    const language = 'zh-CN'
    const res = template(subject, text, null, language)
    assert.ok(res)
    assert.ok(res.includes('阅读更多有关移动应用的信息'))
  })

  it('Passing language = "zh-TW" should send a Traditional Chinese email', () => {
    const subject = 'subject'
    const text = 'text'
    const language = 'zh-TW'
    const res = template(subject, text, null, language)
    assert.ok(res)
    assert.ok(res.includes('閱讀更多有關行動 apps 的資訊'))
  })
})
