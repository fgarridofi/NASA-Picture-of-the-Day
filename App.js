import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/SplashScreen';  

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Nasalization': require('./assets/fonts/Nasalization.otf'),
        });

        if (Text.defaultProps == null) Text.defaultProps = {};
        Text.defaultProps.style = { fontFamily: 'Nasalization' };

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#061f4a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Nasalization',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image
                  source={require('./assets/lupa.png')}
                  style={{ width: 24, height: 24, marginRight: 16 }}
                />
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NASA Picture of the day" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
