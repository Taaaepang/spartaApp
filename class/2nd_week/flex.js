import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//Dimensions 또한 리액트 네이티브에서 제공해주는 기능힙니다.
//Dimensions를 통해 현재 화면 높이 넓이 값을 가져와
//몇 등분 할 지 결정 할 수 있습니다.
//그리곤 하단의 스타일 코드에서 사용 할 수 있습니다.
const windowWidth = Dimensions.get('window').width / 1;
const windowHeight = Dimensions.get('window').height / 3;

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.content}>

          <View style={styles.subContent}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>스파르타코딩 클럽</Text>
            </View>
            <View style={styles.userComment}>
              <Text>안녕하세요 대표 이범규입니다</Text>
            </View>
          </View>

          <View style={styles.subContent}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>김건희</Text>
            </View>
            <View style={styles.userComment}>
              <Text>좀만 참아보세요 오늘 강의 거의 다왔습니다</Text>
            </View>
          </View>

        </View>
        <View style={styles.footer} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:60,
    backgroundColor:'green',
  },
  footer: {
    height:60,
    backgroundColor:'red',
  },
  content: {
    flex:1,
  },
  subContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:1,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
  },
  name: {
    paddingLeft: 10,
  }
});