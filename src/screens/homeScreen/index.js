import React, { useState, useEffect, useContext } from 'react'
import { View, BackHandler, ImageBackground, Image, TextInput, TouchableOpacity, Linking } from 'react-native'
import { Box, Icon, Text } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Line from '@xmartlabs/react-native-line'

import { AppContext } from '../../context/appContext';
import useDidMount from '../../helper/useDidMount'
import BoxView from '../../components/boxView'
import Appbar from '../../components/appBar'

import { checkPermissionsAccept, requestPermissionsAccept } from '../../utils/permissions'
import { navigate, goBack, navigateReset } from '../../utils/navigation';
import { COLOR, FAMILY, SIZE } from '../../theme/typography'
import { delAsyncStorage } from '../../helper/asyncStorage';
import theme from '../../theme/styles'
import styles from './styles';

const HomeScreen = () => {
    const didMount = useDidMount();
    const { props, dispatch } = useContext(AppContext);

    const [userdata] = useState(props.lineloginresult)
    const [userId, setUserID] = useState('')
    const [fullName, setFullName] = useState('')
    const [pictureURL, setPictureURL] = useState('https://media.istockphoto.com/id/1252491414/vector/freelance-photographer-operator-pixel-perfect-linear-icon-photojournalist-paparazzi-thin.jpg?s=612x612&w=0&k=20&c=NBFN6HC7Jd0zxYoNvpV9_e4raaKmlOwKyMsPFjZCUn0=');

    const init = async () => {
        let checkPermissions = await checkPermissionsAccept();
        if (checkPermissions != true) {
            await requestPermissionsAccept();
        }
        setPictureURL('https://media.istockphoto.com/id/1252491414/vector/freelance-photographer-operator-pixel-perfect-linear-icon-photojournalist-paparazzi-thin.jpg?s=612x612&w=0&k=20&c=NBFN6HC7Jd0zxYoNvpV9_e4raaKmlOwKyMsPFjZCUn0=')
        setUserID(userdata.userProfile.displayName);
        // setFullName(userobj.fristName + ' ' + userobj.lastName);
    }

    useEffect(() => {
        // if (didMount) {
        //     init();
        // }
        init();
    }, [])

    const onLogoutHandler = async () => {
        await Line.logout()
        delAsyncStorage('remem');
        setTimeout(() => {
            navigateReset('LoginScreen')
        }, 500);
    }

    const onClickOpenApp = async () => {

    }

    return (
        <BoxView lockscreen={true}>
            <Appbar
                isStyleAppBar={1}
                textTitle={'Home'}
                onClickLogout={() => { onLogoutHandler() }}
            />
            <View style={styles.memberContainer}>
                <ImageBackground source={require('@asset/images/bg_main.png')} imageStyle='cover' style={styles.curveImg} >
                    <View style={styles.profile}>
                        <Image source={{ uri: pictureURL ? pictureURL : '' }} resizeMode='cover' style={styles.avatar} />
                        <View style={{ marginLeft: 5 }} >
                            <Text style={styles.profileName}>{userId}</Text>

                        </View>
                    </View>
                    <View style={styles.btnLayout}>
                        <TouchableOpacity style={styles.btnBox} onPress={() => { navigate('QrCodeScreen') }}>
                            <Image source={require('@asset/images/btn-ads.png')} style={styles.btnImg} />
                            <Text style={styles.btnText}>{'QrCodeScreen'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnBox} onPress={() => { onClickOpenApp(); }} >
                            <Image source={require('@asset/images/btn-message.png')} resizeMode='cover' style={styles.btnImg} />
                            <Text style={styles.btnText}>{'Upload'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnBox} onPress={() => { navigate('MapScreen') }} >
                            <Image source={require('@asset/images/btn-car.png')} style={styles.btnImg} />
                            <Text style={styles.btnText}>{'Map Location'}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </BoxView>
    )
}

export default HomeScreen