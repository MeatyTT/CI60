export async function register(name, email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        });
        alert("Create account successfully");
        console.log(firebase.auth().currentUser);
    } catch (error) {
        alert(error.message);
    }
    console.log("This code must be excuted");
}

export async function login(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Login succesfully")
    } catch (error) {
        alert(error.message);
    }
}

export function authStateChanged() {
    //dangwd ký, đăng nhập, đăng xuất
    firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {
            console.log(user);
        } else {
            console.log("User logged out");
        }
    })
}