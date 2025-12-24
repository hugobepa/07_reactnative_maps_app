import { PermissionStatus } from "@/infrastructure/interfaces/location";
import { router } from "expo-router";
import React, { PropsWithChildren, useEffect } from "react";
import { usePermissionStore } from "../store/usePermissions";

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace("/map");
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  //TODO:
  //estar pendiente cuando el estado app cambia

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
