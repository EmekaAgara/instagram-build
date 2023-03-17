import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Homescreen from './src/screens/Homescreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>

          <Stack.Screen
            name='Homescreen'
            component={Homescreen}
            options={{
            headerShown:false,
            }}
          />

{/* 
          <Stack.Screen
            name='CreateTrustlineOp'
            component={CreateTrustlineOp}
            options={{
            headerShown:true,
            title: 'Create Trustline',
            headerStyle: {
              backgroundColor: '#fafafa'
            },
            headerTintColor: 'black',
            }}
          /> */}


        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}