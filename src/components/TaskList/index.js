import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import Styles from '../styles.js';

const styles = Styles

export default function TaskList({ data, handleDelete }) {
    return (
        <Animatable.View 
        style = { styles.containerIdx } 
        animation= "bounceIn"
        useNativeDriver
        >
            <TouchableOpacity 
                onPress={ () => handleDelete(data)} 
            >
                <Ionicons name='md-checkmark-circle' size={30} color='#121212'/>
            </TouchableOpacity>
            <View>
                <Text style={ styles.taskIdx }>{ data.task }</Text>
            </View>
        </Animatable.View>
    )
}
