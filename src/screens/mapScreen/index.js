import React, { useState, useEffect, useMemo, useContext } from 'react'
import { TouchableOpacity, BackHandler, ScrollView, ActivityIndicator } from 'react-native'
import { Box, View, Text, Input, Icon, HStack, VStack, Divider } from 'native-base'
import { Popup } from 'react-native-popup-confirm-toast'
import DeviceInfo from 'react-native-device-info'
import { useNetInfo } from '@react-native-community/netinfo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RNGeolocation from 'react-native-geolocation-service';

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helpers/useDidMount'
import MapView from '../../components/map'

import { navigateReset, navigate } from '../../utils/navigation'
import { FAMILY, COLOR, SIZE } from '../../theme/styles';

const MapScreen = () => {
  const { props, dispatch } = useContext(AppContext);
  const didMount = useDidMount();

  const [watchGeolocation, setWatchGeolocation] = useState();

  const init = async () => {

  }

  useEffect(() => {
    if (didMount) {
      init();
    } else {

    }
    const backAction = () => { return true };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction);
    return () => backHandler.remove();
  }, [])

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default MapScreen