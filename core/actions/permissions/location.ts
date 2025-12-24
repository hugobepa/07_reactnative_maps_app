import { PermissionStatus } from "@/infrastructure/interfaces/location";
import * as Location from "expo-location";

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      manualPermissionRequest();
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checktLocationPermission = async () => {
  const { status } = await Location.getBackgroundPermissionsAsync();

  switch (status) {
    case "granted":
      return PermissionStatus.GRANTED;
    case "denied":
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  //lanzar los ajustes de la applicacion
};
