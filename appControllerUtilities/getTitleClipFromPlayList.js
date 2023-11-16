async function getTitleClipFromPlayList(fileContent){
    const retArra = fileContent.match(/<title>.+?(?=<)/)[0].slice("<title>".length + 1, -1)
    return retArra;
}

module.exports = getTitleClipFromPlayList;