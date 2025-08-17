import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { styles} from "./style";

function App() {

  const nome = "Cris"

  return <SafeAreaView style={}>
    <StatusBar barStyle="dark-content" />
    <View>
       <Text>Hello {nome}</Text>
    </View>
    </SafeAreaView>
}

export default App;