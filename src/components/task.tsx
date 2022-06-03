import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ITaskProp {
  name: string,
  isDone: boolean
}

export const Task = (props:ITaskProp) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.name}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {

  },
  itemLeft: {

  },
  square: {

  },
  itemText: {},
  circular: {}
});
