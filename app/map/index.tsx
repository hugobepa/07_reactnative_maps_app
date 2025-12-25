import CustomMap from "@/presentation/components/shared/maps/CustomMap";
import { useLocationStore } from "@/presentation/store/useLocationStore";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomMap initialLocation={lastKnownLocation} />
      {/* <MapView
        //showsPointsOfInterest={false}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.38,
          longitude: 2.15,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
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
