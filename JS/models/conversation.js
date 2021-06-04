export async function createConversation(users) {
    let response = await firebase.firestore().collection('conversations').add({
        users: users,
        messages: [],
    });
    return response;
}