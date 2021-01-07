import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171d31',
    },
    title: {
      marginTop: 10,
      paddingBottom: 10,
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
    }, 
    fab: {
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor: '#0094FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      right: 25,
      bottom: 25,
      elevation: 2,
      zIndex: 100,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 1,
        height: 3
      }
    }, 
    modal: {
      flex: 1,
      backgroundColor: '#171d31'
    },
    modalHeader: {
      marginLeft: 10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalTitle: {
      marginLeft: 15,
      fontSize: 25,
      color: '#fff',
    },
    modelBody: {
      marginTop: 15
    },
    input: {
      fontSize: 15,
      margin: 10,
      backgroundColor: 'white',
      padding: 9,
      borderRadius: 15,
      height: 90,
      textAlignVertical: 'top',
      color: '#000'
    },
    handleAdd: {
      backgroundColor: 'white',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      height: 40,
    },
    handleAddText: {
      fontSize: 20
    },
    containerIdx: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5, 
        padding: 7,
        elevation: 1.5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 1,
            height: 3
        }
    },
    taskIdx: {
        color: '#121212',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
    }
  });

export default Styles;

