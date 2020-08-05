import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  //화살표 함수 형식으로 함수를 정의하고
  //jSX문법 안에서 사용할 수 있습니다
  const customAlert = () => {
    Alert.alert("JSX 밖에서 함수 구현 가능!")
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* onPress에 밖에서 구현한 함수 이름을 고대로 넣을 수도 있고*/}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={customAlert}
        />
        {/* onPress를 누르면 속성에 바로 구현해 놓은 함수 안에 customALert함수를 두고 실행할 수 있게도 가능합니다 */}
        <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={() => {customAlert()}}
          />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});