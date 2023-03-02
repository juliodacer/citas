import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Citas from './components/Citas'

const App = () => {
  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'Hook',
      propietario: 'Juan',
      sintomas: 'No come',
    },
    {
      id: '2',
      paciente: 'Redux',
      propietario: 'Itzel', 
      sintomas: 'No come',
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Josue',
      sintomas: 'No come',
    },
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <FlatList
        data={citas}
        renderItem={ ({item}) => <Citas item={item} />
        } // Apariencia que tendra la informacion cuando se muestre
        keyExtractor={ cita => cita.id}
      />

      {/* {
        citas.map(cita => (
          <View>
            <Text>{cita.paciente}</Text>
          </View>
        ))
      }     */}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#AA076B',
  },
  titulo: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
