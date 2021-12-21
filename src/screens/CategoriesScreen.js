import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CategoriesScreen = ({ navigation }) => {
  async function fetchRequestedDoctors(specialist) {
    navigation.navigate('FilteredDoctorsScreen', {
      specialist,
    });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Select your problem</Text>
        <Pressable
          style={styles.item}
          onPress={() => fetchRequestedDoctors('bone')}
        >
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name='bone' size={24} color='black' />
          <Text style={styles.title}>Bone</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: 115,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'green',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  title: {
    fontSize: 20,
  },
  heading: {
    width: '100%',
    alignSelf: 'center',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default CategoriesScreen;
