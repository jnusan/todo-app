import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import todoList from './data/todoList.json';
import { Task } from './src/components/task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODO List</Text>
        <View style={styles.items}>

          {
            todoList.map((x) => {
              return <Task name={x.name} isDone={x.isDone}></Task>
            })
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }
});
