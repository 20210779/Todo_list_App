//Mi primera app React
// Importar módulos desde react-native
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// Definir el componente principal de la app
export default function App() {

  //Estado que almacena las tareas
  const [tasks, setTasks] = useState([]);
  //Estado que almacena el texto
  const [inputt, setInput] = useState('');

  // Función que agrega una tarea a la lista
  const handleAddTask = () => {
      if (inputt.trim() !== '') {
          setTasks([...tasks, inputt.trim()]);
          setInput('');
      }
  };

  // Función donde maneja el cambio del input del texto
  const handleInputChange = (text) => {
      setInput(text);
  };

// Función para eliminar tareas
  const handleDeleteTask = (index) => {
      const newTasks = tasks.filter((task, i) => i !== index);
      setTasks(newTasks);
  };


  // Estructura del componente
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Todo List</Text>
      <View style={styles.row}>
        <TextInput 
          style={styles.borde} 
          value={inputt}
          onChangeText={handleInputChange}
          placeholder="Add a task " />
        <TouchableOpacity onPress={handleAddTask} style={styles.boton}>
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cont}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskRow}>
            <TouchableOpacity
              onPress={() => handleDeleteTask(index)}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// CSS del componente
const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  cont: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "aliceblue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  borde: {
    flex: 1,
    borderRadius: 4,
    textAlign: "left",
    paddingLeft: 10,
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 13,
  },
  boton: {
    borderRadius: 4,
    backgroundColor: "blue",
    padding: 10,
  },
  taskRow: {
    backgroundColor:'white',
    flexDirection: "row",
    paddingVertical: 4,
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5
  },
  deleteButton: {
    padding: 5,
    color:'red',
    borderRadius: 4,
    marginLeft:10,
    marginRight: 10,
  },
  deleteButtonText: {
    color: "red",
    fontSize:20,
    fontWeight: "bold"
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
});
