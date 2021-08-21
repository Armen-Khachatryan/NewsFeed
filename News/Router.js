import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsFeed from './pages/NewsFeed';

import {TouchableOpacity, Image} from 'react-native';
import Search from './pages/Search';

export default function Router() {
  const searchIcon = require('../News/assets/search.png');

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NewsFeed}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Image style={{width: 25, height: 25}} source={searchIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
