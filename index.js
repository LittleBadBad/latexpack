const path = require("path")
const config = require(path.join(__dirname, "latex.config.js"))
const fs = require("fs")
const fse = require('fs-extra');

config.map(({template, schema, target, langs, imgs}) => {
    langs = Array.isArray(langs) && langs.length ? langs : ["cn"]

    !fs.existsSync(target) && fs.mkdirSync(target, {recursive: true})
    fs.existsSync(template) && fs.promises.readFile(template)
        .then(r => langs.map(lang => {
            const params = {lang}
            const s = typeof schema === "function" ? schema(params) : schema
            return fs.promises.writeFile(path.join(target,
                    lang + "_" + path.basename(template)),
                r.toString().replace(/{{\w+}}/g, key => {
                    key = key.replace(/{{|}}/g, "")
                    return (typeof s[key] === "function" && s[key](params)) || s[key] || key
                }))
        }))
    fs.existsSync(imgs) && fse.copySync(imgs, path.join(target,path.basename(imgs)), {overwrite: true})

})
