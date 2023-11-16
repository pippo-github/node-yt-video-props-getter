async function getImgClipPlayList(fileContent){
    let findText = fileContent.match(/\{\"thumbnails\"\:\[\{\"url\"\:\".+?(?=\s)/)[0];
    const imgText = findText.slice("\{\"thumbnails\"\:\[\{\"url\"\:\"".length);
    return imgText;
}

module.exports = getImgClipPlayList;