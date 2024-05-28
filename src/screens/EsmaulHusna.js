/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */

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
  {id: 1, zikirText: 'Er-Rahman'},
  {id: 2, zikirText: 'El-Melik'},
  {id: 3, zikirText: 'El-Muheymin'},
  {id: 4, zikirText: 'El-Aziz'},
  {id: 5, zikirText: 'El-Cebbar'},
  {id: 6, zikirText: 'El-Mütekebbir'},
  {id: 7, zikirText: 'El-Halık'},
  {id: 8, zikirText: 'El-Bari'},
  {id: 9, zikirText: 'El-Müşevvir'},
  {id: 10, zikirText: 'El-Gaffar'},
  {id: 11, zikirText: 'El-Kahhar'},
  {id: 12, zikirText: 'El-Vahhab'},
  {id: 13, zikirText: 'Er-Razzak'},
  {id: 14, zikirText: 'El-Fettah'},
  {id: 15, zikirText: 'El-Ali'},
  {id: 16, zikirText: 'El-Kabir'},
  {id: 17, zikirText: 'El-Halim'},
  {id: 18, zikirText: 'El-Azim'},
  {id: 19, zikirText: 'El-Gafur'},
  {id: 20, zikirText: 'Eş-Şekur'},
  {id: 21, zikirText: 'El-Aliyy'},
  {id: 22, zikirText: 'El-Kebir'},
  {id: 23, zikirText: 'El-Hafiz'},
  {id: 24, zikirText: 'El-Mukit'},
  {id: 25, zikirText: 'El-Hasib'},
  {id: 26, zikirText: 'El-Celil'},
  {id: 27, zikirText: 'El-Kerim'},
  {id: 28, zikirText: 'Er-Rakib'},
  {id: 29, zikirText: 'El-Mucib'},
  {id: 30, zikirText: 'El-Vasi'},
  {id: 31, zikirText: 'El-Hakim'},
  {id: 32, zikirText: 'El-Vedud'},
  {id: 33, zikirText: 'El-Mecid'},
  {id: 34, zikirText: 'El-Bais'},
  {id: 35, zikirText: 'Eş-Şehid'},
  {id: 36, zikirText: 'El-Hakk'},
  {id: 37, zikirText: 'El-Vekil'},
  {id: 38, zikirText: 'El-Kaviyy'},
  {id: 39, zikirText: 'El-Metin'},
  {id: 40, zikirText: 'El-Veliyy'},
  {id: 41, zikirText: 'El-Hamid'},
  {id: 42, zikirText: 'El-Muhsi'},
  {id: 43, zikirText: 'El-Mübdi'},
  {id: 44, zikirText: 'El-Muîd'},
  {id: 45, zikirText: 'El-Muhyi'},
  {id: 46, zikirText: 'El-Mumit'},
  {id: 47, zikirText: 'El-Hayy'},
  {id: 48, zikirText: 'El-Kayyum'},
  {id: 49, zikirText: 'El-Vacid'},
  {id: 50, zikirText: 'El-Macid'},
  {id: 51, zikirText: 'El-Vahid'},
  {id: 52, zikirText: 'Es-Samed'},
  {id: 53, zikirText: 'El-Kadir'},
  {id: 54, zikirText: 'El-Muktedir'},
  {id: 55, zikirText: 'El-Mukaddim'},
  {id: 56, zikirText: 'El-Muahhir'},
  {id: 57, zikirText: 'El-Evvêl'},
  {id: 58, zikirText: 'El-Ahir'},
  {id: 59, zikirText: 'Az-Zahir'},
  {id: 60, zikirText: 'El-Batin'},
  {id: 61, zikirText: 'El-Vâlî'},
  {id: 62, zikirText: 'El-Müteâlî'},
  {id: 63, zikirText: 'El-Berr'},
  {id: 64, zikirText: 'Et-Tevvâb'},
  {id: 65, zikirText: 'El-Müntekim'},
  {id: 66, zikirText: 'El-Afuw'},
  {id: 67, zikirText: 'Er-Rauf'},
  {id: 68, zikirText: 'Mâlikü’l-Mülk'},
  {id: 69, zikirText: 'Zü’l-Celâl-i ve’l-İkrâm'},
  {id: 70, zikirText: 'El-Muqsit'},
  {id: 71, zikirText: 'El-Câmî'},
  {id: 72, zikirText: 'El-Ganiyy'},
  {id: 73, zikirText: 'El-Muğnî'},
  {id: 74, zikirText: 'El-Mâni'},
  {id: 75, zikirText: 'Ed-Dârr'},
  {id: 76, zikirText: 'En-Nâfi’'},
  {id: 77, zikirText: 'En-Nûr'},
  {id: 78, zikirText: 'El-Hâdî'},
  {id: 79, zikirText: 'El-Bâki'},
  {id: 80, zikirText: 'El-Vâris'},
  {id: 81, zikirText: 'Er-Reşid'},
  {id: 82, zikirText: 'Es-Sabûr'},
  {id: 83, zikirText: "El-Mu'îd"},
  {id: 84, zikirText: 'El-Mübdi'},
  {id: 85, zikirText: 'El-Muîd'},
  {id: 86, zikirText: 'El-Muhyi'},
  {id: 87, zikirText: 'El-Mumît'},
  {id: 88, zikirText: 'El-Hayy'},
  {id: 89, zikirText: 'El-Kayyûm'},
  {id: 90, zikirText: 'El-Vâcid'},
  {id: 91, zikirText: 'El-Mâcid'},
  {id: 92, zikirText: 'El-Vâhid'},
  {id: 93, zikirText: 'Es-Semed'},
  {id: 94, zikirText: 'El-Kâdir'},
  {id: 95, zikirText: 'El-Muktedir'},
  {id: 96, zikirText: 'El-Muqtadir'},
  {id: 97, zikirText: 'El-Muqaddim'},
  {id: 98, zikirText: 'El-Muahhir'},
  {id: 99, zikirText: 'El-Evvel'},
];

export default function EsmaulHusna({navigation}) {
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
