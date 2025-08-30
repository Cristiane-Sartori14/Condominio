import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ReservaProvider } from "./src/pages/contexts/ReservaContext";

export default function App() {
  return (
    <ReservaProvider>
      <AppNavigator />
    </ReservaProvider>
  );
}
