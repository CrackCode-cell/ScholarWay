import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SavedScholarshipCard from '../components/SavedScholarshipCard';

import { getSavedScholarships } from '../services/savedScholarshipService';

import { SavedScholarship } from '../types/SavedScholarship';

export default function SavedScreen() {
  const [savedScholarships, setSavedScholarships] =
    useState<SavedScholarship[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const studentId = 1;

  useEffect(() => {
    loadSavedScholarships();
  }, []);

  async function loadSavedScholarships() {
    try {
      setLoading(true);
      setError('');

      const data = await getSavedScholarships(
        studentId
      );

      setSavedScholarships(data);
    } catch (error) {
      setError(
        'Unable to load saved scholarships.'
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />

        <Text>
          Loading your saved scholarships...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Saved Scholarships
      </Text>

      <Text style={styles.subtitle}>
        Scholarships you've saved for later.
      </Text>

      <FlatList
        data={savedScholarships}
        keyExtractor={(item) =>
          item.savedScholarshipId.toString()
        }
        renderItem={({ item }) => (
          <SavedScholarshipCard
            savedScholarship={item}
            onRemoved={loadSavedScholarships}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            You haven't saved any scholarships yet.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 20,
  },

  empty: {
    marginTop: 20,
    textAlign: 'center',
  },
});
