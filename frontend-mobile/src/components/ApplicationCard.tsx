import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  deleteApplication,
  updateApplicationNotes,
  updateApplicationStatus,
} from '../services/applicationService';

import {
  ApplicationStatus,
  ScholarshipApplication,
} from '../types/ScholarshipApplication';

interface ApplicationCardProps {
  application: ScholarshipApplication;
  onChanged: () => void;
}

const statuses: ApplicationStatus[] = [
  'PLANNING',
  'STARTED',
  'SUBMITTED',
  'AWARDED',
  'NOT_AWARDED',
];

export default function ApplicationCard({
  application,
  onChanged,
}: ApplicationCardProps) {
  const [notes, setNotes] = useState(
    application.notes || ''
  );

  const [saving, setSaving] = useState(false);

  async function handleStatusChange(
    status: ApplicationStatus
  ) {
    try {
      setSaving(true);

      await updateApplicationStatus(
        application.applicationId,
        status
      );

      onChanged();
    } catch (error) {
      Alert.alert(
        'Unable to Update',
        'We could not update the application status.'
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveNotes() {
    try {
      setSaving(true);

      await updateApplicationNotes(
        application.applicationId,
        notes
      );

      Alert.alert(
        'Notes Saved',
        'Your application notes were updated.'
      );

      onChanged();
    } catch (error) {
      Alert.alert(
        'Unable to Save',
        'We could not update your notes.'
      );
    } finally {
      setSaving(false);
    }
  }

  function handleDelete() {
    Alert.alert(
      'Delete Application',
      'Remove this application from your tracker?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: deleteApplicationFromTracker,
        },
      ]
    );
  }

  async function deleteApplicationFromTracker() {
    try {
      setSaving(true);

      await deleteApplication(
        application.applicationId
      );

      onChanged();
    } catch (error) {
      Alert.alert(
        'Unable to Delete',
        'We could not remove this application.'
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {application.scholarship.name}
      </Text>

      <Text style={styles.provider}>
        {application.scholarship.provider}
      </Text>

      <Text style={styles.sectionTitle}>
        Application Status
      </Text>

      <View style={styles.statusContainer}>
        {statuses.map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.statusButton,
              application.status === status &&
                styles.selectedStatus,
            ]}
            onPress={() =>
              handleStatusChange(status)
            }
            disabled={saving}
          >
            <Text
              style={[
                styles.statusButtonText,
                application.status === status &&
                  styles.selectedStatusText,
              ]}
            >
              {status.replace('_', ' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        Notes
      </Text>

      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes about this application..."
        multiline
        style={styles.notesInput}
      />

      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleSaveNotes}
        disabled={saving}
      >
        <Text style={styles.actionButtonText}>
          {saving ? 'Saving...' : 'Save Notes'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        disabled={saving}
      >
        <Text style={styles.deleteButtonText}>
          Delete Application
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  provider: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },

  statusButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
  },

  selectedStatus: {
    borderWidth: 2,
  },

  statusButtonText: {
    fontSize: 12,
  },

  selectedStatusText: {
    fontWeight: 'bold',
  },

  notesInput: {
    minHeight: 90,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 10,
  },

  actionButton: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  actionButtonText: {
    fontWeight: '600',
  },

  deleteButton: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },

  deleteButtonText: {
    fontWeight: '600',
  },
});
