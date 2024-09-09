import {Dimensions, Platform, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export const colors = {
  Primary: '#D23232',
  SecondaryColor: '#7D1128',
  LightPink: '#FFE4EB',
  Heading: '#171717',
  FieldText: '#6C2133',
  Para: '#2D2D2D',
  White: '#fff',
  FieldBg: '#F3EFF0',
  LightText:'#4B4B4B',
  CatgoryText:'#1D59A0',
  borderColor:'#EDEDED',
  blue:'#1E6AA1',
  star:'#F1C644',
  green:'#01955F',
  LightGreen:'#E3F6F0',
  lightOrange:'#F9ECE1',
  lightBlue:'#E7EBF8',
  Green:'#1EA16A',
  Black:'#000',
  Text_Black: '#191919',
  Text_GRAY: '#555555',
  Gray:'#D4D4D4',
  LightGray:'#F9F9F9'

};
export const FONT_FAMILY = {
  REGULAR: 'Inter_18pt-Regular.ttf',
  LIGHT: 'Poppins-Light.ttf',
  MEDIUM: 'Inter_18pt-Medium.ttf',
  BOLD: 'Poppins-Bold.ttf',
  SEMIBOLD: 'Inter_18pt-SemiBold.ttf',
  BLACK: 'Poppins-Black.ttf',
  EXTRA_BOLD: 'Poppins-ExtraBold.ttf',
  ROBOTO_REGULAR: 'Roboto-Regular.ttf',
  ROBOTO_BOLD: 'Roboto-Bold.ttf',
  ROBOTO_MEDIUM: 'Roboto-Medium.ttf',
  ROBOTO_BLACK: 'Roboto-Black.ttf',
  ROBOTO_THIN: 'Roboto-Thin.ttf',
};

export const FONT = {
  Regular: 'Inter-Regular',
  Bold: 'Inter-Bold',
  Semibold: 'Inter-SemiBold',
  Medium: 'Inter-Medium',
  Light: 'Inter-Light',
  BoldInter: 'Inter-Bold',
  MediumInter: 'Inter-Medium',
  RegularInter: 'Inter-Regular',
};

export const FONTS_SIZE = {
  smaller: 10,
  small: 12,
  xsmall: 14,
  xsmall2: 16,
  regular: 18,
  large: 20,
  xlarge: 22,
  xxlarge: 24,
  xxxlarge: 34,
  extralarge: 28,
  largeUlta: 40,
};


export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenWidth: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
 
  
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  ImageSize: {
    width: '100%',
    height: '100%',
  },

  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  around: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  alignItems: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowsection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  Heading: {
    fontFamily: FONT_FAMILY.ROBOTO_BOLD,
    fontSize: FONTS_SIZE.regular,
    textAlign: 'center',
    color: '#191919',
  },
  SubHeading: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    fontWeight: '300',
   
    textAlign: 'center',
    color: colors.Para,
  },
  Linking: {
    fontFamily: FONT_FAMILY.SEMIBOLD,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22.5,
    textAlign: 'right',
    color: colors.Primary,
  },
  marginBotton_20:{
    marginBottom:20
  },
  marginBotton_40:{
    marginBottom:40
  },
  marginBotton_50:{
    marginBottom:50
  },
  marginBotton_30:{
    marginBottom:30
  },
  marginTop_20:{
    marginTop:20
  },
  marginTop_30:{
    marginTop:30
  },
  marginTop_40:{
    marginTop:40
  },
  marginTop_50:{
    marginTop:50
  },
  paddingTop_30:{
    paddingTop:30
  }
,
marginTop_90:{
  marginTop:90
},
shadow: {
  width: '100%',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  backgroundColor: colors.White,
  paddingBottom: 15,
},
headerContainer: {
  marginBottom: '10%',
  paddingTop: '10%',
  paddingHorizontal: '5%',
},
Nodatafound:{
  textAlign:'center',
  marginBottom:10,
  color:colors.Primary,
  fontFamily:FONT_FAMILY.BOLD,
  fontWeight:'700',
  fontSize:16,
  marginTop:30
}
});
