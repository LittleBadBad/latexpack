const path = require("path")

const DEFAULT_TEX = 'main'
const ASSETS = 'assets'

const template = path.join(__dirname, ASSETS, DEFAULT_TEX + ".tex")
const schema = require(path.join(__dirname, ASSETS, DEFAULT_TEX + ".js")) || {}
const target = path.join(__dirname, "dist")//"D:\\workspace\\IdeaProjects\\latex\\resume\\src"//
const imgs = path.join(__dirname, ASSETS, "imgs")
const langs = ["cn", "en"]

module.exports = [{
    template,
    schema,
    target,
    langs,
    imgs
}]
