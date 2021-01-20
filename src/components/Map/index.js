import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Map() {
  const [position, setPosition] = useState({
    latitude: -12.0000,
    longitude: -54.0000,
    latitudeDelta: 40.0100,
    longitudeDelta: 40.0100,
});

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
          buttonPositive: 'OK'
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation()
      } else {
        Alert.alert('Permissão de localização negada');
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function getLocation(){
    Geolocation.getCurrentPosition(
      pos => {
        setPosition({
          ...position,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.0010,
          longitudeDelta: 0.0010,
        });
      },
      error => {
        console.log(error);
        Alert.alert('Falha ao buscar loalização. Verifique o GPS.');
      },
    );
  }


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={position}
        showsUserLocation={true}
        />

      
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => {
            request_location_runtime_permission();
          }}>
          <Icon name="my-location" color={'#fff'} size={40} />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Locais no </Text>
          <Text style={[styles.logoText, {color: '#e74c3c'}]}>Mapa</Text>
        </View>
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
  logo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    elevation: 5,
    marginTop: -730,
    alignSelf: 'center',
    marginRight: 10,
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  
  locationButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 150,
    marginTop: -100,
    width: 70,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
});