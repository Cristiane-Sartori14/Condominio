import { SafeAreaView, StatusBar, Text, View } from 'react-native';

function App() {

  const nome = "Cris"

  return <SafeAreaView>
    <StatusBar barStyle="dark-content" />
    <View>
       <Text>Hello nome</Text>
    </View>
    </SafeAreaView>
}

export default App;