/* eslint-disable prettier/prettier */

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = ({route, navigation}) => {
  const {zikirText} = route.params;

  const [zikirCounter, addzikirCounter] = useState(0);

  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('ZikirListScreen')}>
        <Image
          source={require('../images/back.png')}
          style={styles.backButtonPhoto}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.counterReset}
        onPress={() => {
          addzikirCounter(zikirCounter - zikirCounter);
        }}>
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
          addzikirCounter(zikirCounter + 1);
        }}>
        <Text style={styles.zikirButtonText}>ZİKİR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
    // Android
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
  },
  zikirButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
