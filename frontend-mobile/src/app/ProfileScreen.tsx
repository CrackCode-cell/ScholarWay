import { useState } from 'react';

import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import { createStudent } from '@/services/studentService';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');
  const [financialNeed, setFinancialNeed] = useState('');
  const [fafsaCompleted, setFafsaCompleted] = useState('');
  const [activities, setActivities] = useState('');

  async function handleSaveProfile() {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name.');
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

    if (major.trim() === '') {
      Alert.alert('Error', 'Please enter your major.');
      return;
    }

    if (location.trim() === '') {
      Alert.alert('Error', 'Please enter your location.');
      return;
    }

    if (
      financialNeed !== 'yes' &&
      financialNeed !== 'no'
    ) {
      Alert.alert(
        'Error',
        'Please enter yes or no for financial need.'
      );
      return;
    }

    if (
      fafsaCompleted !== 'yes' &&
      fafsaCompleted !== 'no'
    ) {
      Alert.alert(
        'Error',
        'Please enter yes or no for FAFSA completion.'
      );
      return;
    }

    try {
      const student = await createStudent({
        name,
        gpa: gpaNumber,
        major,
        interests,
        location,
        financialNeed: financialNeed === 'yes',
        fafsaCompleted: fafsaCompleted === 'yes',
        activities,
      });

      Alert.alert(
        'Profile Saved',
        `Welcome, ${student.name}!`
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to save your profile.'
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.subtitle}>
        Tell ScholarWay about yourself so we can
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

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Example: Washington"
      />

      <Text style={styles.label}>Financial Need</Text>
      <TextInput
        style={styles.input}
        value={financialNeed}
        onChangeText={setFinancialNeed}
        placeholder="Enter yes or no"
        autoCapitalize="none"
      />

      <Text style={styles.label}>FAFSA Completed</Text>
      <TextInput
        style={styles.input}
        value={fafsaCompleted}
        onChangeText={setFafsaCompleted}
        placeholder="Enter yes or no"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Activities</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={activities}
        onChangeText={setActivities}
        placeholder="Example: Chess, CyberPatriot, Math Club"
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
