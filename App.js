// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/button';

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Hestia</Text>
      <Image
        source={require('./assets/hestia.jpg')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text style={styles.infoText}>Welcome to Hestia!</Text>
      {/* <Text style={styles.infoText}>Button pressed: {count} times</Text> */}
      <Button title="Create a New Family" onPress={() => navigation.navigate('Create')} style={styles.buttonSpacing} />

      {/* <Text style={styles.infoText}>
        The toggle is <Text style={{ fontWeight: '600' }}>{toggled ? 'ON' : 'OFF'}</Text>
      </Text> */}
      <Button
        // title={toggled ? 'Turn OFF' : 'Turn ON'}
        title={'Join a Family'}
        onPress={() => navigation.navigate('Join')}
        style={styles.buttonSpacing}
      />

      {/* <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Second')}
        style={styles.buttonSpacing}
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

function PermissionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permission Screen</Text>
      <Text style={styles.infoText}>This is the permission screen!</Text>
    </View>
  );
}

function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Screen</Text>
      <Text style={styles.infoText}>This is the third screen!</Text>
    </View>
  );
}

function FourthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fourth Screen</Text>
      <Text style={styles.infoText}>This is the fourth screen!</Text>
    </View>
  );
}

function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Family</Text>
      <Text style={styles.infoText}>This is the create family screen!</Text>
    </View>
  );
}

function JoinScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Family</Text>
      <Text style={styles.infoText}>This is the join family screen!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  // const [count, setCount] = useState(0);
  // const [toggled, setToggled] = useState(false);

  // const handlePress = () => {
  //   setCount(prev => prev + 1);
  // };

  // const handleToggle = () => {
  //   setToggled(prev => !prev);
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        <Stack.Screen name="Create" component={CreateScreen} options={{title: "Create Family"}} />
        <Stack.Screen name="Join" component={JoinScreen} options={{title: "Join Family"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    marginTop: 8,
  },
  buttonSpacing: {
    marginTop: 12,
    width: '60%',
  },
});
