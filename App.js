import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¡Mi Primera App Móvil! 📱</Text>
      <Text style={styles.subtitle}>Taller de Nuevas Tecnologías</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contador Interactivo</Text>
        <Text style={styles.counter}>{count}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.buttonDanger]}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tecnologías Utilizadas</Text>
        {['React Native', 'Expo', 'JavaScript', 'JSX'].map((tech) => (
          <View key={tech} style={styles.techItem}>
            <Text style={styles.techBullet}>✅</Text>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 16,
    textAlign: 'center',
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#4c51bf',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  buttonPrimary: {
    backgroundColor: '#4c51bf',
  },
  buttonDanger: {
    backgroundColor: '#e53e3e',
  },
  buttonSecondary: {
    backgroundColor: '#718096',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  techBullet: {
    fontSize: 16,
    marginRight: 10,
  },
  techText: {
    fontSize: 16,
    color: '#4a5568',
  },
});
