import { scaleHeight, scaleWidth } from '../dimensions';
import Font from '../font';

const Typography = {
  flex1: { flex: 1 },
  paddingHorizontal20: { paddingHorizontal: scaleWidth(20) },
  marginVerticle8: { marginVertical: scaleHeight(8) },
  width185: { width: scaleWidth(185) },
  height75: { height: scaleHeight(75) },
  resizeModeContain: { resizeMode: 'contain' },
  resizeModeCover: { resizeMode: 'cover' },
  resizeModeStretch: { resizeMode: 'stretch' },
  resizeModeRepeat: { resizeMode: 'repeat' },
  resizeModeCenter: { resizeMode: 'center' },
  resizeModeNone: { resizeMode: 'none' },

  fontBold: { fontFamily: Font.Bold },
  fontRegular: { fontFamily: Font.Regular },
  fontMedium: { fontFamily: Font.Medium },
  fontSemiBold: { fontFamily: Font.SemiBold },
  fontExtraBold: { fontFamily: Font.ExtraBold },
  fontBlack: { fontFamily: Font.Black },
  fontExtraLight: { fontFamily: Font.ExtraLight },
  fontLight: { fontFamily: Font.Light },

  alignCenter: { textAlign: 'center' },
  alignLeft: { textAlign: 'left' },
  alignRight: { textAlign: 'right' },
  alignJustify: { textAlign: 'justify' },
  alignStart: { textAlign: 'start' },
  alignEnd: { textAlign: 'end' },
  alignBaseline: { textAlign: 'baseline' },

  alignItemsCenter: { alignItems: 'center' },
  alignItemsStart: { alignItems: 'flex-start' },
  alignItemsEnd: { alignItems: 'flex-end' },
  alignItemsBaseline: { alignItems: 'baseline' },
  alignItemsStretch: { alignItems: 'stretch' },

  alignSelfCenter: { alignSelf: 'center' },
  alignSelfStart: { alignSelf: 'flex-start' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  alignSelfBaseline: { alignSelf: 'baseline' },
  alignSelfStretch: { alignSelf: 'stretch' },

  justifyCenter: { justifyContent: 'center' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },

  flexDirectionRow: { flexDirection: 'row' },
  flexDirectionColumn: { flexDirection: 'column' },
  flexDirectionRowReverse: { flexDirection: 'row-reverse' },
  flexDirectionColumnReverse: { flexDirection: 'column-reverse' },

  textSize16: { fontSize: 16 },
  textSize24: { fontSize: 24 },
  textSize12: { fontSize: 12 },
  textSize10: { fontSize: 10 },
  textSize8: { fontSize: 8 },
  textSize6: { fontSize: 6 },
  textSize4: { fontSize: 4 },
};

export default Typography;
