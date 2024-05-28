/* eslint-disable prettier/prettier */

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const zikirList = [
  {id: 1, zikirText: 'La ilahe İllallah'},
  {id: 2, zikirText: 'Subhanallah'},
  {id: 3, zikirText: 'Elhamdülillah'},
  {id: 4, zikirText: 'Allahu ekber'},
  {id: 5, zikirText: 'La ilahe illallah'},
  {id: 6, zikirText: 'Subhanallahi ve Bihamdihi Subhanallahil Azim'},
  {id: 7, zikirText: 'Allahumme ecrina minennar'},
  {id: 8, zikirText: 'Subhanallahi ve Bihamdihi'},
  {id: 9, zikirText: 'Yarabbi Şükür'},
  {id: 10, zikirText: 'Fenerbahçe'},
];

export default function ZikirListScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.body}>
        {zikirList.map(zikirList => (
          <View style={styles.zikirBox} key={zikirList.id}>
            <Text style={styles.zikirText}>{zikirList.zikirText}</Text>
            <TouchableOpacity
              style={styles.zikirButton}
              onPress={() => {
                navigation.navigate('CounterScreen', {
                  zikirText: zikirList.zikirText,
                });
              }}>
              <Text style={styles.zikirButtonText}>Bu zikirle devam et</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
  },
  zikirBox: {
    width: '100%',
    height: '20px',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'brown',
    borderWidth: 2,
    marginVertical: 10,
    gap: 10,
  },
  zikirText: {
    fontSize: 20,
  },
  zikirButton: {
    padding: 10,
    backgroundColor: 'wheat',
    borderWidth: 3,
    borderColor: 'brown',
    borderRadius: 10,
  },
  zikirButtonText: {
    fontSize: 15,
    textAlign: 'center',
  },
});
