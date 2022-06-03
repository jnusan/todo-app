import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import todoList from './data/todoList.json';
import { Task } from './src/components/task';
import { ITaskProp } from './src/interfaces/ITaskProp';

export default function App() {

  // Here I can use the useReducer instead of useState to handle the state, when it's an object
  const [task, setTask] = useState<ITaskProp>({name: '', isDone: false});
  const [tasks, setTasks] = useState<ITaskProp[]>(todoList);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask({name: '', isDone: false});
  };

  const completeTask = (index: number) => {
    let tasksCopy = [...tasks];
    let currentTask = tasksCopy[index];
    currentTask.isDone = !currentTask.isDone;
    tasksCopy[index] = currentTask;
    setTasks(tasksCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TODO List</Text>
        <View style={styles.items}>
          {
            tasks.map((x, i) => {
              return (
                <TouchableOpacity key={i} onPress={() =>completeTask(i)}>
                  <Task name={x.name} isDone={x.isDone}></Task>
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>

      {/* This input test could be a new component */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task.name} onChangeText={text => setTask({ name: text, isDone: false})}></TextInput>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText} onPress={() => handleAddTask()}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    aligItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {

  }
});
