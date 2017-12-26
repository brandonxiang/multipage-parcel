const glob = require('glob')
const Bundler = require('parcel-bundler')

const htmlEntry = glob.sync('src/*.html')

htmlEntry.forEach((html) => {
    new Bundler(html, {watch: true}).bundle()
})

