import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Keyboard, Animated, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width / 7;

export default class App extends Component {
  constructor(props){
    super(props);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT)
  }

  componentWillMount(){
    if(Platform.OS === 'ios'){
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }else{
      this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
    // 动态切换安卓键盘与界面的交互样式，这里把交互方式改为adjust resize,
    Platform.OS === 'android' && AndroidKeyboardAdjust.setAdjustResize();
  }

  componentWillUnmount(){
    this.keyboardWillHideSub.remove();
    this.keyboardWillShowSub.remove();
    // 恢复为原本的键盘不影响布局 adjust nothing
    Platform.OS === 'android' && AndroidKeyboardAdjust.setAdjustNothing();
  }

  keyboardWillShow = () =>{
    Animated.timing(this.imageHeight,{
      toValue:IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = () => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT
    }).start();
  };


  keyboardDidShow = () =>{
    Animated.timing(this.imageHeight,{
      toValue:IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = () => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT
    }).start();
  };


  render() {
    const imageStyle = [styles.logo,{height: this.imageHeight}];
    return (
      <View style={styles.container} >
        {/*<Animated.Image*/}
          {/*source={require('./logo.png')}*/}
          {/*style={imageStyle}*/}
        {/*/>*/}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          style={styles.scroll}
          bounces={false}
        >
          <TextInput
            placeholder={'Name'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Surname'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Password'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Confirm Password'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Name'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Surname'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Password'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Confirm Password'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Name'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Surname'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Password'}
            style={styles.input}
          />
          <TextInput
            placeholder={'Confirm Password'}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.register}
          >
            <Text>Done</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c69a5',
  },

  logo: {
    height: IMAGE_HEIGHT,
    resizeMode:'contain', //短边适应
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },
  scroll:{
    flex: 1,

  },
  scrollContent:{
    alignItems:'center',
  },
  inputGroup:{
    backgroundColor:'#4c69a5',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  register:{
    marginBottom: 20,
    width: window.width - 100,
    alignItems: 'center',
    justifyContent:'center',
    height: 50,
    backgroundColor:'#ffae'
  },
  input:{
    height: 50,
    backgroundColor:'#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
  }
});


