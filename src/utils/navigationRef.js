import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

// see GriRN+Hooks Vid#204:
// https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15708430#overview
