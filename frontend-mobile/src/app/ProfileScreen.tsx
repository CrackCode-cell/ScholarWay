/**
 * ScholarWay - Profile Screen
 *
 * Purpose:
 * Allows a student to enter and view basic academic/profile
 * information that can eventually be used by ScholarWay's
 * scholarship matching system.
 *
 * Current implementation:
 * - Uses React state for profile information.
 * - Uses TextInput components for user input.
 * - Uses a Button to demonstrate saving the profile locally.
 * - Does NOT yet send data to the backend.
 *
 * Planned implementation:
 * - Connect the profile to the Spring Boot REST API.
 * - Store the profile in PostgreSQL.
 * - Add additional academic, activity, and financial information.
 * - Use profile information in the scholarship matching system.
 */

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
  /*
   * React state stores the information currently entered
   * by the student.
   *
   * Each piece of state has:
   * - a current value
   * - a setter function used to update that value
   */
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');

  /*
   * Handles the Save Profile button.
   *
   * For now, this only displays a confirmation message.
   * Later, this function will send the profile data
   * to the ScholarWay Spring Boot API.
   */
  function handleSaveProfile() {
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

      {/* Student name */}
      <Text style={styles.label}>Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* GPA */}
      <Text style={styles.label}>GPA</Text>

      <TextInput
        style={styles.input}
        value={gpa}
        onChangeText={setGpa}
        placeholder="Enter your GPA"
        keyboardType="decimal-pad"
      />

      {/* Major */}
      <Text style={styles.label}>Major</Text>

      <TextInput
        style={styles.input}
        value={major}
        onChangeText={setMajor}
        placeholder="Enter your major"
      />

      {/* Interests */}
      <Text style={styles.label}>Interests</Text>

      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={interests}
        onChangeText={setInterests}
        placeholder="Example: AI, cybersecurity, hardware"
        multiline
      />

      {/* Save profile */}
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
