
import { COLOR, FAMILY, SIZE } from '../../theme/typography'

const React = require("react-native");
const { Platform } = React;
export default {
    memberContainer: {
        flex: 1,
        width: '100%',
    },
    profile: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingTop: 10
    },
    avatar: {
        marginRight: SIZE.tiny,
        width: 120,
        height: 120,
    },
    profileName: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.SIZE16,
        color: '#FFF',
        marginBottom: 3,
        marginTop: 15,
        marginLeft: 10,
    },
    profileLocation: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.SIZE16,
        color: '#FFF',
        opacity: 0.7
    },
    curveImg: {
        flex: 1
    },
    btnLayout: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: '#FFF',
        borderRadius: 0,
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
    btnBox: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
        marginBottom: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: COLOR.smoke,
    },
    btnImg: {
        marginBottom: SIZE.tiny
    },
    btnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: '#333',
        textAlign: 'center'
    },
    /* Messages */
    messageContainer: {
        width: '100%'
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 20
    },
    messageCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageTitle: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: COLOR.primary,
        textTransform: 'uppercase',
        marginLeft: 10
    },
    message: {
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        width: '100%'
    },
    messageDetail: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        marginLeft: 0,
        paddingVertical: SIZE.tiny,
        paddingHorizontal: 15,
        backgroundColor: '#FFF'
    },
    memberImg: {
        width: 48,
        height: 48,
        borderRadius: 50
    },
    messageInfo: {
        flex: 1,
        paddingHorizontal: 15
    },
    messangerName: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.small,
        color: '#333',
        marginBottom: 0
    },
    messangerText: {
        fontFamily: FAMILY.regular,
        fontSize: 11,
        color: '#666',
        marginBottom: 5,
        lineHeight: 16
    },
    postedDate: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: '#999'
    },
    /* Common Styles */
    btnMore: {
        paddingHorizontal: 15,
        paddingVertical: SIZE.tiny,
        borderRadius: 5
    },
    btnMoreText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.tiny,
        color: COLOR.greyDark,
        textTransform: 'uppercase'
    },
}