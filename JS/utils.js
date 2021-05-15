export function getDataFromDoc(doc) {
    return doc.data();
}
/**
 * 
 * @param {Array} docs
 * @return  {Array} 
 */
export function getDataFromDocs(docs) {
    // let result =[];
    // for(let doc of docs){
    //     result.push(getDataFromDoc(doc));
    // }
    // return result;
    return docs.map(function (doc) {
        return getDataFromDoc(doc);
    });
}