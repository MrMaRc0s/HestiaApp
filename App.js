// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/button';

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
    <View style={styles.container}>
      <Text style={styles.title}>Hestia</Text>
      <Image
        source={require('./assets/hestia.jpg')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text style={styles.infoText}>Welcome to Hestia!</Text>
      {/* <Text style={styles.infoText}>Button pressed: {count} times</Text> */}
      <Button title="Create a New Family" /*onPress={handlePress}*/ style={styles.buttonSpacing} />

      {/* <Text style={styles.infoText}>
        The toggle is <Text style={{ fontWeight: '600' }}>{toggled ? 'ON' : 'OFF'}</Text>
      </Text> */}
      <Button
        // title={toggled ? 'Turn OFF' : 'Turn ON'}
        title={'Join a Family'}
        // onPress={handleToggle}
        style={styles.buttonSpacing}
      />

      <StatusBar style="auto" />
    </View>
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
