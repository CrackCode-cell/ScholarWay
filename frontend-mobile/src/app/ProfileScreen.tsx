import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  getStudent,
  updateStudent,
} from '../services/studentService';

import { Student } from '../types/Student';

export default function ProfileScreen() {
  const studentId = 1;

  const [student, setStudent] =
    useState<Student | null>(null);

  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');
  const [financialNeed, setFinancialNeed] =
    useState('');
  const [fafsaCompleted, setFafsaCompleted] =
    useState('');
  const [activities, setActivities] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadStudent();
  }, []);

  async function loadStudent() {
    try {
      setLoading(true);

      const data = await getStudent(studentId);

      setStudent(data);

      setName(data.name);
      setGpa(data.gpa.toString());
      setMajor(data.major);
      setInterests(data.interests);
      setLocation(data.location);
      setFinancialNeed(
        data.financialNeed ? 'yes' : 'no'
      );
      setFafsaCompleted(
        data.fafsaCompleted ? 'yes' : 'no'
      );
      setActivities(data.activities);
    } catch (error) {
      Alert.alert(
        'Unable to Load Profile',
        'We could not load your student profile.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    const parsedGpa = Number(gpa);

    if (!name.trim()) {
      Alert.alert(
        'Invalid Profile',
        'Please enter your name.'
      );
      return;
    }

    if (
      Number.isNaN(parsedGpa) ||
      parsedGpa < 0 ||
      parsedGpa > 4
    ) {
      Alert.alert(
        'Invalid GPA',
        'GPA must be between 0 and 4.'
      );
      return;
    }

    if (!major.trim()) {
      Alert.alert(
        'Invalid Profile',
        'Please enter your major.'
      );
      return;
    }

    if (!location.trim()) {
      Alert.alert(
        'Invalid Profile',
        'Please enter your location.'
      );
      return;
    }

    if (
      financialNeed !== 'yes' &&
      financialNeed !== 'no'
    ) {
      Alert.alert(
        'Invalid Financial Need',
        'Enter yes or no.'
      );
      return;
    }

    if (
      fafsaCompleted !== 'yes' &&
      fafsaCompleted !== 'no'
    ) {
      Alert.alert(
        'Invalid FAFSA Status',
        'Enter yes or no.'
      );
      return;
    }

    try {
      setSaving(true);

      const updatedStudent = {
        name: name.trim(),
        gpa: parsedGpa,
        major: major.trim(),
        interests: interests.trim(),
        location: location.trim(),
        financialNeed:
          financialNeed === 'yes',
        fafsaCompleted:
          fafsaCompleted === 'yes',
        activities: activities.trim(),
      };

      const data = await updateStudent(
        studentId,
        updatedStudent
      );

      setStudent(data);

      Alert.alert(
        'Profile Updated',
        'Your ScholarWay profile has been updated.'
      );
    } catch (error) {
      Alert.alert(
        'Unable to Save',
        'We could not update your profile.'
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />

        <Text>
          Loading your profile...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        Student Profile
      </Text>

      <Text style={styles.subtitle}>
        Keep your information updated so ScholarWay
        can personalize your scholarship matches.
      </Text>

      <Text style={styles.label}>
        Name
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Your name"
      />

      <Text style={styles.label}>
        GPA
      </Text>

      <TextInput
        value={gpa}
        onChangeText={setGpa}
        style={styles.input}
        placeholder="0.0 - 4.0"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>
        Major
      </Text>

      <TextInput
        value={major}
        onChangeText={setMajor}
        style={styles.input}
        placeholder="Computer Engineering"
      />

      <Text style={styles.label}>
        Interests
      </Text>

      <TextInput
        value={interests}
        onChangeText={setInterests}
        style={styles.input}
        placeholder="AI, hardware, cybersecurity..."
      />

      <Text style={styles.label}>
        Location
      </Text>

      <TextInput
        value={location}
        onChangeText={setLocation}
        style={styles.input}
        placeholder="Washington"
      />

      <Text style={styles.label}>
        Financial Need
      </Text>

      <TextInput
        value={financialNeed}
        onChangeText={setFinancialNeed}
        style={styles.input}
        placeholder="yes or no"
        autoCapitalize="none"
      />

      <Text style={styles.label}>
        FAFSA Completed
      </Text>

      <TextInput
        value={fafsaCompleted}
        onChangeText={setFafsaCompleted}
        style={styles.input}
        placeholder="yes or no"
        autoCapitalize="none"
      />

      <Text style={styles.label}>
        Activities
      </Text>

      <TextInput
        value={activities}
        onChangeText={setActivities}
        style={[
          styles.input,
          styles.multilineInput,
        ]}
        placeholder="Clubs, leadership, volunteering..."
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={styles.buttonText}>
          {saving
            ? 'Saving...'
            : student
              ? 'Save Profile'
              : 'Create Profile'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },

  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  button: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
