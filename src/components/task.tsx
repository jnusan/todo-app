import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ITaskProp } from '../interfaces/ITaskProp';

export const Task = (props:ITaskProp) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        {
          props.isDone 
            ? <Text style={[styles.itemText, styles.taskDone]}>{props.name}</Text>
            : <Text style={styles.itemText}>{props.name}</Text>
        }
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFF',
    padding: 15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth:'80%',
  },
  taskDone: {
    textDecorationLine: 'line-through'
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  }
});
