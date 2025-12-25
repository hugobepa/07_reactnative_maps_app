import { LatLng } from "@/infrastructure/interfaces/lat-lng";
import { useLocationStore } from "@/presentation/store/useLocationStore";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import MapView from "react-native-maps";
import FAB from "../FAB";

interface Props extends ViewProps {
  initialLocation: LatLng;
  showUserLocation?: boolean;
}

const CustomMap = ({
  initialLocation,
  showUserLocation = true,
  ...rest
}: Props) => {
  const mapRef = useRef<MapView>(null);
  const { watchLocation, clearWatchLocation, lastKnownLocation } =
    useLocationStore();

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation]);

  const moveCameraToLocation = (latLng: LatLng) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({ center: latLng });
  };

  return (
    <View {...rest}>
      <MapView
        ref={mapRef}
        showsPointsOfInterest={false}
        //provider={PROVIDER_GOOGLE}
        showsUserLocation={showUserLocation}
        style={styles.map}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <FAB
        iconName="airplane-outline"
        onPress={() => {}}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
    </View>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    //backgroundColor: "red",
  },
});
