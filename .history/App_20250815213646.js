import { SafeAreaView, StatusBar, Text, View } from 'react-native';

function App() {

  const nome = "Cris"

  return <SafeAreaView style={{
    backgroundColor: "#fff",
    flex: 1
  }}>
    <StatusBar barStyle="dark-content" />
    <View>
       <Text>Hello {nome}</Text>
    </View>
    </SafeAreaView>
}

export default App;