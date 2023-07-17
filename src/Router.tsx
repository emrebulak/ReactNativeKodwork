import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './app/store';
import { Provider } from 'react-redux';

//Pages
import Jobs from './pages/Jobs';
import FavoritedJobs from './pages/FavoritedJobs';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="JobsPage" screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#EF5350'
          },
          headerTitleAlign: 'center',
          headerTintColor: '#EF5350',
          drawerActiveBackgroundColor: '#FDEAEA',
          drawerActiveTintColor: '#EF5350'
        }}>
          <Drawer.Screen name="JobsPage" component={Jobs} options={{
            title: 'Jobs'
          }} />
          <Drawer.Screen name="FavoritedJobsPage" component={FavoritedJobs} options={{
            title: 'Favorited Jobs'
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}