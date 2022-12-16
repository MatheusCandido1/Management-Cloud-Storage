import { StatusBar } from 'expo-status-bar';

import { StackNavigator } from './src/Stacks/StackNavigator';

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="dark" />
    </>
  );
}
