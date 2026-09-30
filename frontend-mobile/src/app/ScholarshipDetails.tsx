import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { saveScholarship } from '../services/savedScholarshipService';
import { createApplication } from '../services/applicationService';
import { Scholarship } from '../types/Scholarship';

interface ScholarshipDetailsProps {
  scholarship: Scholarship;
}

export default function ScholarshipDetails({
  scholarship,
}: ScholarshipDetailsProps) {
  const [saving, setSaving] = useState(false);
  const [tracking, setTracking] = useState(false);

  const studentId = 1;

  async function handleSave() {
    try {
      setSaving(true);

      await saveScholarship(
        studentId,
        scholarship.scholarshipId
      );

      Alert.alert(
        'Scholarship Saved',
        `${scholarship.name} has been saved.`
      );
    } catch (error) {
      Alert.alert(
        'Unable to Save',
        'We could not save this scholarship right now.'
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleTrackApplication() {
    try {
      setTracking(true);

      await createApplication(
        studentId,
        scholarship.scholarshipId
      );

      Alert.alert(
        'Application Added',
        `${scholarship.name} is now in your application tracker.`
      );
    } catch (error) {
      Alert.alert(
        'Unable to Add',
        'We could not add this scholarship to your application tracker.'
      );
    } finally {
      setTracking(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {scholarship.name}
      </Text>

      <Text style={styles.provider}>
        {scholarship.provider}
      </Text>

      <Text style={styles.description}>
        {scholarship.description}
      </Text>

      <Text style={styles.amount}>
        Award Amount: ${scholarship.awardAmount}
      </Text>

      <Text style={styles.deadline}>
        Deadline: {scholarship.deadline}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={styles.buttonText}>
          {saving ? 'Saving...' : 'Save Scholarship'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleTrackApplication}
        disabled={tracking}
      >
        <Text style={styles.buttonText}>
          {tracking
            ? 'Adding...'
            : 'Track Application'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  provider: {
    fontSize: 18,
    marginBottom: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },

  amount: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },

  deadline: {
    fontSize: 16,
    marginBottom: 24,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
