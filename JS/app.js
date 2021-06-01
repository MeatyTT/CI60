import InputWrapper from "./component/InputWrapper.js"
import RegisterForm from "./component/RegisterForm.js"
import SignInput from "./SignIn/SignInput.js"
import SignForm from "./SignIn/SignForm.js"
import AppStart from "./component/AppStart.js";
import UserAction from "./component/UserActions.js"
import MessageContainer from "./component/MessageContainer.js";
import MessageList from "./component/MessageList.js";

import AuthScreen from "./screen/AuthScreen.js";
import ChatScreen from "./screen/ChatScreen.js";

import { authStateChanged } from "./models/user.js";

authStateChanged();
