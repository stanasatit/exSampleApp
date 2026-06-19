import React, { useState, useEffect, useContext } from 'react'
import { View, Text, BackHandler, ImageBackground, Image, TextInput, TouchableOpacity, Linking } from 'react-native'
import { Box, Icon } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'
import Appbar from '../../components/appBar'

import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import theme from '../../theme/styles'
import styles from './styles';

import exDataMachine from './exdata';

const DataListScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const init = async () => {

    }

    useEffect(() => {
        if (didMount) {
            init();
        }
    }, []);

    return (
        <BoxView lockscreen={false}>
            <Appbar
                isStyleAppBar={0}
                textTitle={'List Data'}
                onClickBack={() => { goBack() }}
            />
        </BoxView>
    )
}

export default DataListScreen