import { COLOR, FAMILY, SIZE } from '../../theme/typography'
const React = require("react-native");
const { Platform } = React;

export default {

    bgCover: {
        flex: 1
    },
    section: {
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    logo: {
        marginVertical: 20,
    },
    signBg: {
        width: '100%',
        backgroundColor: COLOR.light,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    textInput: {
        width: '100%',
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        borderBottomWidth: 1,
        borderColor: COLOR.smoke,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.default,
        padding: 20
    },
    btn2: {
        width: '100%',
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.primary,
        borderWidth: 0.5,
        borderColor: '#909090',
        padding: 20
    },
    btnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.dark,
        alignSelf: 'center'
    },
    loginBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: COLOR.light,
        justifyContent:'center'
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        paddingVertical: 15,
        textAlign: 'right',
        fontSize: 13,
    },
    loginBtnIcon: {
        color: COLOR.light,
        fontSize: SIZE.SIZE18
    },
    login: {
        marginVertical: 30,
        alignItems: 'center'
    },
    account: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.light
    },
    btnLogin: {
        fontFamily: FAMILY.regular,
        color: COLOR.light,
        fontSize: SIZE.medium,
        justifyContent: 'center',
        padding: 10,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
}