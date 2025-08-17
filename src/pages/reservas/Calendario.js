import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function Calendario({ navigation }) {
    const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
        <Text>Calendário de Reservas</Text>
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  titulo: { fontSize: 18, fontWeight: "bold" },
});
