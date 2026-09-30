import { useState } from 'react';

import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';

import { removeSavedScholarship } from '../services/savedScholarshipService';

import { SavedScholarship } from '../types/SavedScholarship';

interface SavedScholarshipCardProps {
  savedScholarship: SavedScholarship;
  onRemoved: () => void;
}

export default function SavedScholarshipCard({
  savedScholarship,
  onRemoved,
}: SavedScholarshipCardProps) {
  const router = useRouter();

  const [removing, setRemoving] = useState(false);

  const scholarship = savedScholarship.scholarship;

  function handleOpenDetails() {
    router.push(
      `/scholarship/${scholarship.scholarshipId}`
    );
  }

  function handleRemove() {
    Alert.alert(
      'Remove Scholarship',
      `Remove ${scholarship.name} from your saved scholarships?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: removeScholarship,
        },
      ]
    );
  }

  async function removeScholarship() {
    try {
      setRemoving(true);

      await removeSavedScholarship(
        1,
        scholarship.scholarshipId
      );

      onRemoved();
    } catch (error) {
      Alert.alert(
        'Unable to Remove',
        'We could not remove this scholarship right now.'
      );
    } finally {
      setRemoving(false);
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {scholarship.name}
      </Text>

      <Text style={styles.provider}>
        {scholarship.provider}
      </Text>

      <Text style={styles.amount}>
        Award: ${scholarship.awardAmount}
      </Text>

      <Text style={styles.deadline}>
        Deadline: {scholarship.deadline}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleOpenDetails}
        >
          <Text style={styles.buttonText}>
            View Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRemove}
          disabled={removing}
        >
          <Text style={styles.buttonText}>
            {removing
              ? 'Removing...'
              : 'Remove'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  provider: {
    marginBottom: 6,
  },

  amount: {
    fontWeight: '600',
    marginBottom: 6,
  },

  deadline: {
    marginBottom: 14,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: '600',
  },
});
