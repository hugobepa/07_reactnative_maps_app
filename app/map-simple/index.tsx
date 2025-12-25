import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        //showsPointsOfInterest={false}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.38,
          longitude: 2.15,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.38, longitude: 2.15 }}
          title="Aqui estoy"
          description="esta es mi casa"
        />

        <Marker
          coordinate={{ latitude: 41.415, longitude: 2.1955 }}
          title="Aqui estoy"
          description="esta es mi casa"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    //backgroundColor: "red",
  },
});
