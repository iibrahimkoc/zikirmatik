/* eslint-disable prettier/prettier */
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
        <Text style={{textAlign: 'center'}}>Ayarlar</Text>
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
    margin: 25,
  },
  headerSetting: {
    width: '100%',
  },
  backButton: {
    zIndex: 100,
    position: 'absolute',
    left: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonLogo: {
    width: 30,
    height: 30,
  },
  textBoxs: {},
  textBox: {
    textAlign: 'center',
  },
});
