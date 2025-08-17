import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function Calendario({ navigation }) {

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  titulo: { fontSize: 18, fontWeight: "bold" },
});
