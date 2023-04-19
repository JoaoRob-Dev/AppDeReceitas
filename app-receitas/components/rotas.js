import * as React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Queijo from './queijo';
import Panqueca from './panqueca';
import Home from './home';
import Chocolate from './chocolate';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
  <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{title: null}} />
    <Stack.Screen name="Queijo" component={Queijo} options={{title: 'Queijo'}} />
    <Stack.Screen name="Panqueca" component={Panqueca} options={{title: 'Panqueca'}} />
    <Stack.Screen name="Chocolate" component={Chocolate} options={{title: 'Chocolate'}} />
    </Stack.Navigator>
</NavigationContainer>
)
}