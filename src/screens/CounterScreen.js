/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CounterScreen = ({route, navigation}) => {
  const {zikirText} = route.params;

  const [zikirCounter, setZikirCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const storedCount = await getData(zikirText);
      if (storedCount !== null) {
        setZikirCounter(storedCount);
      }
    };
    fetchData();
  }, [zikirText]);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString());
    } catch (error) {
      console.error(`Error storing data for key ${key}: `, error);
    }
  };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return parseInt(value);
      }
      return 0;
    } catch (error) {
      console.error(`Error retrieving data for key ${key}: `, error);
      return 0;
    }
  };

  const resetCounter = async () => {
    setZikirCounter(0);
    await storeData(zikirText, '0');
    console.log(await getData(zikirText));
  };

  const incrementCounter = async () => {
    const newCounterValue = zikirCounter + 1;
    setZikirCounter(newCounterValue);
    await storeData(zikirText, newCounterValue.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../images/back.png')}
          style={styles.backButtonPhoto}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.counterReset} onPress={resetCounter}>
        <Image
          source={require('../images/restart.png')}
          style={styles.resetPhoto}
        />
      </TouchableOpacity>

      <View style={styles.zikirBox}>
        <Text style={styles.zikirBoxText}>{zikirText}</Text>
      </View>

      <View style={styles.zikirCounter}>
        <Text style={styles.zikirCounterText}>{zikirCounter}</Text>
      </View>

      <TouchableOpacity
        style={styles.zikirButton}
        onPress={() => {
          incrementCounter();
        }}>
        <Text style={styles.zikirButtonText}>ZİKİR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonPhoto: {
    width: 30,
    height: 30,
  },
  counterReset: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetPhoto: {
    width: 40,
    height: 40,
  },
  zikirBox: {
    position: 'absolute',
    top: 100,
    width: '70%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'brown',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  zikirBoxText: {
    fontSize: 20,
    textAlign: 'center',
  },
  zikirCounter: {
    position: 'absolute',
    top: '40%',
  },
  zikirCounterText: {
    fontSize: 40,
  },
  zikirButton: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 80,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zikirButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CounterScreen;
