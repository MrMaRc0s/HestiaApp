// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Gesture, GestureDetector, Directions} from 'react-native-gesture-handler';
import Button from './components/button';

function HomeScreen({ navigation }) {
  const onFlingLeft = Gesture.Fling()
  .direction(Directions.LEFT)
  .onEnd(() => {
      navigation.navigate('AskName');
  });
  const onFlingRight = Gesture.Fling()
  .direction(Directions.RIGHT)
  .onEnd(() => {
      navigation.navigate('Create');
  });

  const gesture = Gesture.Race(onFlingLeft, onFlingRight)
  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Text style={styles.title}>Hestia</Text>
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
        <Text style={styles.infoText}>Welcome to Hestia!</Text>
        <Text style={styles.hint}>Swipe left (quick fling) to go to Family.</Text>
        {/* <Text style={styles.infoText}>Button pressed: {count} times</Text> */}
        <Button title="Create a New Family" onPress={() => navigation.navigate('Create')} style={styles.buttonSpacing} />

        {/* <Text style={styles.infoText}>
          The toggle is <Text style={{ fontWeight: '600' }}>{toggled ? 'ON' : 'OFF'}</Text>
        </Text> */}
        <Button
          // title={toggled ? 'Turn OFF' : 'Turn ON'}
          title={'Join a Family'}
          onPress={() => navigation.navigate('AskName')}
          style={styles.buttonSpacing}
        />

        {/* <Button
          title="Go to Second Screen"
          onPress={() => navigation.navigate('Second')}
          style={styles.buttonSpacing}
        /> */}

        <StatusBar style="auto"/>
      </View>
    </GestureDetector>
  );
}

function AskNameScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello friend? How should I call you?</Text>
      <Text style={styles.infoText}>Please tell me or enter your name below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text style={styles.infoText}>Say next or swipe to continue</Text>
      <Button title="Next" onPress={() => navigation.navigate('AskPhone')} style={styles.buttonSpacing} />
    </View>
  );
}

function AskPhoneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your phone number?</Text>
      <Text style={styles.infoText}>Please enter your phone number below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
      />
      <Text style={styles.infoText}>Say next or swipe to continue</Text>
      <Button title="Next" onPress={() => navigation.navigate('Family')} style={styles.buttonSpacing} />
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

function FamilyScreen({ navigation, route }) {
  const sampleMembers = [
    { id: '1', name: 'Alice Smith'},
    { id: '2', name: 'Bob Smith'},
    { id: '3', name: 'Charlie Smith'},
  ];

  const familyMembers = route?.params?.familyMembers ?? sampleMembers;
  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Family</Text>
      {familyMembers.length === 0 ? (
        <Text style={styles.infoText}>No family members to display.</Text>
      ) : (
        <FlatList
          data={familyMembers}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={{ paddingTop: 8 }}
        />
      )}
      <Button title="Home" onPress={() => navigation.navigate('Home')} style={styles.buttonSpacing} />
    </View>
  )
}

// function JoinScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Join Family</Text>
//       <Text style={styles.infoText}>T</Text>
//     </View>
//   );
// }

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen name="" component={AskNameScreen} options={{tiAskNametle: "What's your name?"}} /> */}
          <Stack.Screen name="Family" component={FamilyScreen} options={{title: "Family"}} />
          <Stack.Screen name="AskPhone" component={AskPhoneScreen} options={{title: "What's your phone number?"}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
          <Stack.Screen name="Create" component={CreateScreen} options={{title: "Create Family"}} />
          <Stack.Screen name="AskName" component={AskNameScreen} options={{title: "Join Family"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE',
    marginLeft: 60, // align under text
  },
  hint: { fontSize: 14, color: '#666', textAlign: 'center' },
});
