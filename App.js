import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet, Text, Image, View, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Icons, Themes, Profiles} from './assets/Themes';
import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import { color, shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {


  Themes
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
   <>
   <SafeAreaView style={styles.mainContainer}>

      {/* top menu */}
      <View style={styles.topMenu}>
        <Image source={Icons.menu.light} style={styles.iconImage}/>
        <Text style={styles.headerTexts}>Ensom</Text>
        <Image source={Icons.sun} style={styles.iconImage} />
      </View>

      {/* profile */}
      <View style={styles.profile}>

        {/* profile picture*/}
        <ImageBackground source={Profiles.mtl.image} style={styles.imageBackground} imageStyle={styles.profileImage}>
          {/* <Text>MTL</Text> */}

        </ImageBackground>

        {/* voice */}
        <View style={styles.squareShapeView}> 
          <Text style={styles.profileText}>My hottest take</Text>
          <View style={styles.voiceMemo}>
            <Image source={Icons.player.light} style={styles.iconImage}/>
            <Image source={Icons.audioWave.light} style={styles.soundwave}/>
          </View>
        </View>

      </View>

      {/* bottom menu */}
    
    </SafeAreaView>
      <View style={styles.bottomMenu}>

      {/* discover */}
      <View>
        <Image source={Icons.discover.light} style={styles.iconImage}/>
        <Text style={styles.bottomText}>Discover</Text>
      </View>

      {/* matches */}
      <View>
        <Image source={Icons.heart.light} style={styles.iconImage} />
        <Text style={styles.bottomText}>Matches</Text>
      </View>

      {/* dms */}
      <View>
        <Image source={Icons.messages.light} style={styles.iconImage} />
        <Text style={styles.bottomText}>DMs</Text>
      </View>

    </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEE9E9',
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%'
  },
  bottomMenu: { 
    paddingHorizontal: 70,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    color: '#fff',
    fontFamily: 'Sydney',
    fontSize: 20
  },
  profileText: {
    fontSize: 30,
    fontFamily: 'Sydney',
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTexts: {
    fontSize: 32,
    fontFamily: 'SydneyBold',
  },
  iconImage: {
    width: 41,
    height: 41
  },
  soundwave: {
    width: 200,
    height: 40,
  },
  imageBackground: {
   alignItems: 'center',
   width: windowWidth,
   height: windowHeight * 0.4,
   aspectRatio: 1/1.1,
   margin: 20,
  },
  profileImage: {
    resizeMode: 'contain',
    position: 'relative',
    borderRadius: 10
  },
  voiceMemo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 15,
  },
  squareShapeView: {
    width: '85%',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    shadowColor: '#808080',
    shadowOffset: {
      height: 5
  },
  shadowOpacity: 50
  },

});
