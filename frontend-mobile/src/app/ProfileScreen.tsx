import { useState } from 'react';

import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');

  function handleSaveProfile() {
    if (name.trim() === '') {
      Alert.alert(
        'Error',
        'Please enter your name.'
      );
      return;
    }

    const gpaNumber = Number(gpa);

    if (
      gpa === '' ||
      gpaNumber < 0 ||
      gpaNumber > 4
    ) {
      Alert.alert(
        'Error',
        'Please enter a GPA between 0 and 4.'
      );
      return;
    }

    Alert.alert(
      'Profile Saved',
      `Name: ${name}\nGPA: ${gpa}\nMajor: ${major}\nInterests: ${interests}`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.subtitle}>
        Tell ScholarWay about yourself so we can eventually
        personalize your scholarship matches.
      </Text>

      <Text style={styles.label}>Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>GPA</Text>

      <TextInput
        style={styles.input}
        value={gpa}
        onChangeText={setGpa}
        placeholder="Enter your GPA"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Major</Text>

      <TextInput
        style={styles.input}
        value={major}
        onChangeText={setMajor}
        placeholder="Enter your major"
      />

      <Text style={styles.label}>Interests</Text>

      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={interests}
        onChangeText={setInterests}
        placeholder="Example: AI, cybersecurity, hardware"
        multiline
      />

      <Button
        title="Save Profile"
        onPress={handleSaveProfile}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
