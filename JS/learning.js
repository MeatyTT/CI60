//create -> add

import { getDataFromDocs } from "./utils.js";

//read

// -Lấy document thông qua id;
async function getDocById(id) {
    let response = await firebase.firestore().collection("users").doc(id).get();
    console.log(response.data());
}
// getDocById("PuZi8YdWIZHwKiLvoDoh");
// -Lấy tất cả document có trong colection
async function getAllDocs() {
    let response = await firebase.firestore().collection("users").get();
    console.log(response.docs);
    console.log(getDataFromDocs(response.docs));
}
// getAllDocs();
// -Lấy các document thỏa mãn điều kiện cho trước
async function getDocsByCondition() {
    let response = await firebase.firestore().collection("users").where("age",">=",25).get();
    console.log(getDataFromDocs(response.docs));
}
// getDocsByCondition();

//update.delete,onSnapShot

