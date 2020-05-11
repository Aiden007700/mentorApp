import { createSwitchNavigator } from "@react-navigation/core";
import Main from '../screens/Main';
import Details from '../screens/Details';
import Other from '../screens/Other';
import SignIn from '../screens/SignIn';

const Router = createSwitchNavigator({
    Main,
    Details,
    Other,
    SignIn,
}, {
    backBehavior: "history"
})

export default Router;