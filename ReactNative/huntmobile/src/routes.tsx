import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../src/pages/Main";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "#DA552F" },
        }}>
        <Screen name="JSHunt" component={Main} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Routes;
