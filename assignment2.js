const data = {
    "weatherData" : {
        "Thunderstorm": {
            "iconName": "weather-lightning",
            "gradient": ["#373B44", "#4286f4"],
            "title": "천둥 번개가 치고 있어요!!",
            "subtitle": "집에 있긔..."
        },
        "Drizzle": {
            "iconName": "weather-hail",
            "gradient": ["#89F7FE", "#66A6FF"],
            "title": "이슬비가 내려요~",
            "subtitle": "분위기 있게 내리는 중 🏳️‍🌈"
        },
        "Rain": {
            "iconName": "weather-rainy",
            "gradient": ["#00C6FB", "#005BEA"],
            "title": "비가 내리고 있습니다 ☂️",
            "subtitle": "밖에 비온다 주륵주륵 :)"
        },
        "Snow": {
            "iconName": "weather-snowy",
            "gradient": ["#7DE2FC", "#B9B6E5"],
            "title": "눈이 내려와요",
            "subtitle": "눈싸움 ㄱ? ☃️ "
        },
        "Atmosphere": {
            "iconName": "weather-hail",
            "gradient": ["#89F7FE", "#66A6FF"]
        },
        "Clear": {
            "iconName": "weather-sunny",
            "gradient": ["#FF7300", "#FEF253"],
            "title": "화창한 날이에요",
            "subtitle": "오늘 같은 날은 데이트...애인 있으면"
        },
        "Clouds": {
            "iconName": "weather-cloudy",
            "gradient": ["#D7D2CC", "#304352"],
            "title": "구름이 많습니다!",
            "subtitle": "우울해 하지말고 나가 놀기 ㅎ"
        },
        "Mist": {
            "iconName": "weather-hail",
            "gradient": ["#4DA0B0", "#D39D38"],
            "title": "(엷은) 안개가 낀",
            "subtitle": "뿌연 안개, 차조심! 🤚"
        },
        "Dust": {
            "iconName": "weather-hail",
            "gradient": ["#4DA0B0", "#D39D38"],
            "title": "먼지가 많습니다, 미세먼지?",
            "subtitle": "마스크 있죠?"
        },
        "Haze": {
            "iconName": "weather-hail",
            "gradient": ["#4DA0B0", "#D39D38"],
            "title": "안개까 낀것 처럼 흐린 날...",
            "subtitle": "흐리니 우울우울 하지말긔"
        }
  }
}

const weatherCheck = (option)=>{
    console.log(data['weatherData'][option])
}
weatherCheck('Haze')