//create -> add

import { getDataFromDocs } from "./utils.js";

//read

// -Lấy document thông qua id;
async function getDocById(id) {
    let respone = await firebase.firestore().collection("users").doc(id).get();
    console.log(respone.data());
}
// getDocById("PuZi8YdWIZHwKiLvoDoh");
// -Lấy tất cả document có trong colection
async function getAllDocs() {
    let respone = await firebase.firestore().collection("users").get();
    console.log(respone.docs);
    console.log(getDataFromDocs(respone.docs));
}
// getAllDocs();
// -Lấy các document thỏa mãn điều kiện cho trước
async function getDocsByCondition() {
    let respone = await firebase.firestore().collection("users").where("age",">=",25).get();
    console.log(getDataFromDocs(respone.docs));
}
getDocsByCondition();

//update.delete,onSnapShot

