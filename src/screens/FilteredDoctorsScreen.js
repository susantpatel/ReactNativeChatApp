import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import AppLoading from 'expo-app-loading';

import { db } from '../../firebase/firebaseCofig';

export default function FilteredDoctorsScreen({ route, navigation }) {
  const { specialist } = route.params;
  const [doctorDetails, setDoctorDetails] = useState();

  useEffect(() => {
    const fetchDoctorData = async () => {
      const q = query(
        collection(db, 'Doctors'),
        where('specialist', '==', specialist)
      );
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setDoctorDetails(data);
      console.log('data', data);
      console.log('DoctorDetails', doctorDetails);
    };
    fetchDoctorData();
  }, []);

  if (!doctorDetails) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView>
        {doctorDetails.map((item) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>Name:{item.name}</Text>
              <Text style={styles.text}>Experience:{item.experience}</Text>
              <Text style={styles.text}>Specialist:{item.specialist}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
