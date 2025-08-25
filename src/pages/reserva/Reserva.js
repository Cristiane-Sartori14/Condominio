import { MaterialIcons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Button from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
import { dias, diasAbreviado, meses, mesesAbreviado } from "./LocaleBrasil";
import { formatarData } from "../../utils/formatarData";

const { height } = Dimensions.get("window");

export default function Reserva() {
  const [selected, setSelected] = useState("");
  const [visible, setVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [local, setLocal] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [ocupados, setOcupados] = useState([
    "2025-08-25",
    "2025-08-28",
    "2025-09-01",
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    const newMarked = {
      ...ocupados.reduce((acc, date) => {
        acc[date] = {
          selected: true,
          selectedColor: "red",
          selectedTextColor: "white",
        };
        return acc;
      }, {}),
      [today]: {
        selected: true,
        selectedColor: "#1E4DC3",
        selectedTextColor: "white",
      },
      ...(selected
        ? {
            [selected]: {
              selected: true,
              selectedColor: "#00B383",
              selectedTextColor: "white",
            },
          }
        : {}),
    };

    setMarkedDates(newMarked);
  }, [selected, ocupados]);

  LocaleConfig.locales["br"] = {
    monthNames: meses,
    monthNamesShort: mesesAbreviado,
    dayNames: dias,
    dayNamesShort: diasAbreviado,
    today: "Hoje",
  };
  LocaleConfig.defaultLocale = "br";

  function handleDayPress(day) {
    setSelected(day.dateString);
    setVisible(true);
  }

  const formatHora = (text) => {
    let cleanText = text.replace(/\D/g, "");

    if (cleanText.length > 4) cleanText = cleanText.slice(0, 4);

    let formatted = cleanText;
    if (cleanText.length >= 3) {
      formatted = `${cleanText.slice(0, 2)}:${cleanText.slice(2)}`;
    }

    return formatted;
  };
  const handleReservar = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          handleDayPress(day);
        }}
        enableSwipeMonths={true}
        markedDates={markedDates}
        theme={{
          todayTextColor: "#1E4DC3",
          arrowColor: "black",
        }}
      />
      <View style={styles.reservas}>
        <Button
          title="Minhas Reservas"
          onPress={() => navigation.navigate("MinhasReservas")}
        />
      </View>
      {selected && visible && (
        <Modal visible={visible} transparent={true} animationType="slide">
          <TouchableOpacity
            pointerEvents="box-none"
            style={styles.overlay}
            activeOpacity={1}
            onPressOut={() => {
              setVisible(false);
              setSelected(null);
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.label}>Data selecionada:</Text>
              <View style={styles.containerData}>
                <TextInput
                  caretHidden
                  value={formatarData(selected)}
                  editable={false}
                  accessibilityState={{ disabled: true }}
                  style={[styles.input, styles.inputDisabled]}
                />
                <MaterialIcons
                  name="calendar-today"
                  size={22}
                  color="#6B7280"
                  style={styles.icon}
                />
              </View>
              <View style={styles.row}>
                <View style={styles.field}>
                  <Text style={styles.label}>Início:</Text>
                  <TextInput
                    style={styles.inputHora}
                    placeholder="HH:MM"
                    keyboardType="numeric"
                    maxLength={5}
                    value={inicio}
                    onChangeText={(t) => setInicio(formatHora(t))}
                  />
                </View>

                <View style={styles.field}>
                  <Text style={styles.label}>Fim:</Text>
                  <TextInput
                    style={styles.inputHora}
                    placeholder="HH:MM"
                    keyboardType="numeric"
                    maxLength={5}
                    value={fim}
                    onChangeText={(t) => setFim(formatHora(t))}
                  />
                </View>
              </View>

              <Text style={styles.label}>Local:</Text>
              <View style={styles.select}>
                <Picker
                  selectedValue={local}
                  onValueChange={(itemValue) => setLocal(itemValue)}
                >
                  <Picker.Item label="Selecione" value="" />
                  <Picker.Item label="Quadra" value="quadra" />
                  <Picker.Item label="Salão" value="salao" />
                  <Picker.Item label="Churrasqueira" value="churrasqueira" />
                </Picker>
              </View>
              <View style={styles.reservarButton}>
                <Button title="Reservar" onPress={() => handleReservar()} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  reservarButton: {
    marginTop: 20,
    marginBottom: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    height: height / 2,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  form: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reservas: {
    margin: 20,
  },
  input: {
    height: 48,
    paddingHorizontal: 0,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: "#FFF",
    color: "#111827",
  },
  inputDisabled: {
    backgroundColor: "#F3F4F6",
    color: "black",
  },
  containerData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F3F4F6",
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 15,
    height: 48,
  },
  inputHora: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: 150,
  },
  field: {
    gap: 6,
  },
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
});
