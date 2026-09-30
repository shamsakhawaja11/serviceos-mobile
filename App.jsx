import {Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState([]);

 
  const Add = () => {
    
    const userInput = {
      name: name,
      age: age
    };

    setUser([...user, userInput]);
  };

  const Check = () => {
    const result = user.find(v => v.name === name);

    if (result === null) {
      Alert.alert('Not found');
    } else {
      Alert.alert('Found');
    }
  };

  return (
    <View style={styles.main}>

      <Text>Name</Text>

      <TextInput style={styles.input}
       onChangeText={setName}
        value={name}
      />
      <Text>Age</Text>
      <TextInput style={styles.input}
        onChangeText={setAge}
        value={age}
      />

      <View style={styles.button}>
        <Button
          title="Add"
          onPress={Add}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Check"
          onPress={Check}
        />
      </View>

      <View>
        {user.map((v, index) => (
          <Text
            key={index}
            style={{ color: (v.age) < 18 ? 'red' : 'green' }}
          >
            {v.name} - {v.age}
          </Text>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
    padding: 20
  },

  input: {
    marginBottom: 10,
    padding: 8
  },

  button: {
    marginBottom: 10
  },

  userText: {
    color: 'red',
    fontSize: 18,
    marginTop: 5
  }
});