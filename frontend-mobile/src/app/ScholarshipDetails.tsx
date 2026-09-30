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

  const requirements = scholarship.requirements;

  async function handleSave() {
    try {
      setSaving(true);

      await saveScholarship(
        studentId,
        scholarship.scholarshipId
      );

      Alert.alert(
        'Scholarship Saved',
        `${scholarship.name} has been added to your saved scholarships.`
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

  function formatScholarshipType() {
    if (scholarship.scholarshipType === 'MERIT_AND_NEED') {
      return 'Merit + Need Based';
    }

    if (scholarship.scholarshipType === 'NEED_BASED') {
      return 'Need Based';
    }

    return 'Merit Based';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {scholarship.name}
      </Text>

      <Text style={styles.provider}>
        {scholarship.provider}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Scholarship Information
        </Text>

        <Text>
          Type: {formatScholarshipType()}
        </Text>

        <Text>
          Award: ${scholarship.awardAmount}
        </Text>

        <Text>
          Deadline: {scholarship.deadline}
        </Text>

        <Text>
          Status: {scholarship.status}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Description
        </Text>

        <Text style={styles.description}>
          {scholarship.description}
        </Text>
      </View>

      {requirements && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Requirements
          </Text>

          {requirements.minimumGpa !== null && (
            <Text>
              Minimum GPA: {requirements.minimumGpa}
            </Text>
          )}

          {requirements.major && (
            <Text>
              Major: {requirements.major}
            </Text>
          )}

          {requirements.location && (
            <Text>
              Location: {requirements.location}
            </Text>
          )}

          {requirements.financialNeedRequired !== null && (
            <Text>
              Financial Need Required:{' '}
              {requirements.financialNeedRequired
                ? 'Yes'
                : 'No'}
            </Text>
          )}

          {requirements.fafsaRequired !== null && (
            <Text>
              FAFSA Required:{' '}
              {requirements.fafsaRequired
                ? 'Yes'
                : 'No'}
            </Text>
          )}

          {requirements.requiredActivity && (
            <Text>
              Required Activity:{' '}
              {requirements.requiredActivity}
            </Text>
          )}
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
        disabled={saving}
      >
        <Text style={styles.buttonText}>
          {saving
            ? 'Saving...'
            : 'Save Scholarship'}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  provider: {
    fontSize: 18,
    marginBottom: 20,
  },

  section: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
