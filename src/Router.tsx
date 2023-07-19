import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './app/store';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages
import Jobs from './pages/Jobs';
import FavoritedJobs from './pages/FavoritedJobs';
import JobDetail from './pages/JobDetail/JobDetail';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigate() {
  return (
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
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drawer" component={DrawerNavigate} options={{ headerShown: false }} />
          <Stack.Screen name="JobDetailPage" component={JobDetail} options={({ route }: any) => ({ title:route.params.name.length > 25 ? route.params.name.substring(0,25)+"...": route.params.name, headerTintColor: '#EF5350', headerTitleAlign: 'center' })} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}