import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TaskList from './src/components/TaskList/';

import * as Animatable from 'react-native-animatable';

import Styles from './src/components/styles.js';

const styles = Styles

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {

  const [task, setTask] = useState([])
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  
  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');

      if(taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTasks();

  }, []);

  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }

    saveTasks();

  }, [task]);

  function handleAdd() {
    if(input === '') return;

    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback( (data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor='#171d31' barStyle='light-content'/>
      <View>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

    <FlatList
      marginHorizontal= {10}
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={ item => String(item.key) }
      renderItem={ ({item}) => <TaskList data={item} handleDelete={handleDelete}/>}
    />

    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>

        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={ () => setOpen(false)}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#FFF"/>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova tarefa</Text>
        </View>

        <Animatable.View 
          animation="fadeInUp"
          useNativeDriver
          style={styles.modalBody}
        >
          <TextInput
          multiline= {true}
          placeholderTextColor= "#747474"
          autoCorrect= {false}
          placeholder="O que precisa fazer hoje?"
          style={styles.input}
          value={input}
          onChangeText={ text => setInput(text) }
          />

          <TouchableOpacity 
            style={styles.handleAdd}
            onPress={handleAdd}
          >
            <Text style={styles.handleAddText}>Cadastrar</Text>
          </TouchableOpacity>

        </Animatable.View>

    </SafeAreaView>
    </Modal>
    
    <AnimatedBtn 
    style={styles.fab}
    useNativeDriver
    animation="bounceInUp"
    duration={1500}
    onPress={() => setOpen(true)}
    >
      <Ionicons name='ios-add' size={35} color='#FFF'/>
    </AnimatedBtn>

    </SafeAreaView>
  );
}
