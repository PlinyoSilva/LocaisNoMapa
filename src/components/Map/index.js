import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Map() {
    const [position, setPosition] = useState({
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

    const [watchID, setWatchID] = useState(0);

    async function callLocation() {
        if(Platform.OS === 'ios') {
            await getLocation()
            setInitialLocation(position)
        }
        else {
            await requestLocationPermission(),
            await getLocation(),
            setInitialLocation(position)
        }
    };

    async function requestLocationPermission(){
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Permissão de Localização',
                message: 'Esta aplicação precisa da permissão de localização.',
                buttonPositive: 'OK'
              },
            );
            
        } catch (err) {
             Alert.alert('Permissão de localização negada');
        } 
    };

    async function getLocation() {
        Geolocation.getCurrentPosition(
            pos => {
                setPosition({
                  ...position,
                  latitude: pos.coords.latitude,
                  longitude: pos.coords.longitude,
                });
            },
            error => {
                Alert.alert('Falha ao buscar sua localização. Verifique se o GPS está ativo.');
              },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        const watchID = Geolocation.watchPosition((position) => {
            pos => {
                setPosition({
                  ...position,
                  latitude: pos.coords.latitude,
                  longitude: pos.coords.longitude,
                });
            }
            
        });
        setWatchID(watchID)
        
    };

    return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            region={initialLocation}
            showsUserLocation={true}
            />

            <TouchableOpacity style={styles.locationButton} onPress={() => {callLocation()}}>
                <Icon name="my-location" color={'#fff'} size={40} />
            </TouchableOpacity>
            <View style={styles.logo}>
            <Text style={styles.logoText}>Map</Text>
            <Text style={[styles.logoText, {color: '#e74c3c'}]}>Companys</Text>
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
        marginTop: -80,
        width: 60,
        height: 60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 8,
      },
    
  });