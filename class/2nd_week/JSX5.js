import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 
        
        버튼에는 여러 속성이 이미 정해져! 있습니다.
        해당 속성을 공식문서 사용 설명서를 보며 적용하면 됩니다. 
        
        */}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={() => Alert.alert('팝업 알람입니다!!')}
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
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});