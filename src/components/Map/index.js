import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function Map() {
    const [currentPosition, setPosition] = useState({
        latitude: 0.0000,
        longitude: 0.0000,
        latitudeDelta: 0.0020,
        longitudeDelta: 0.0020,
    });

    const [initialLocation, setInitialLocation] = useState({
        latitude: -12.0000,
        longitude: -54.0000,
        latitudeDelta: 40.0100,
        longitudeDelta: 40.0100,
    });


    return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            region={initialLocation}
            showsUserLocation={true}
            />
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      height: '100%',
      width: '100%',
    },
    
  });