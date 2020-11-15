import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackScreens from "./src/Stacks/AppStackScreens";

export default App = () => {
  return (
    <NavigationContainer>
      <AppStackScreens />
    </NavigationContainer>
  );
};
