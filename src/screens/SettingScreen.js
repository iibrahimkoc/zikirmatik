/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function SettingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.headerSetting}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('ZikirListScreen')}>
          <Image
            source={require('../images/back.png')}
            style={styles.backButtonLogo}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
          Ayarlar
        </Text>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#E9E9E9',
            marginVertical: 15,
          }}
        />
      </View>
      <View style={styles.textBoxs}>
        <Text style={styles.textBox}>Version 1.0</Text>
        <Text style={styles.textBox}>-- iibrahimkoc --</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 25,
    height: '100%',
    backgroundColor: 'white',
  },
  headerSetting: {
    width: '100%',
  },
  backButton: {
    zIndex: 100,
    position: 'absolute',
    left: 0,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonLogo: {
    width: 25,
    height: 25,
  },
  textBoxs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    textAlign: 'center',
  },
});
