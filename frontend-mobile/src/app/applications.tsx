import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ApplicationCard from '../components/ApplicationCard';
import { getApplications } from '../services/applicationService';
import { ScholarshipApplication } from '../types/ScholarshipApplication';

export default function ApplicationsScreen() {
  const [applications, setApplications] = useState<
    ScholarshipApplication[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const studentId = 1;

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setLoading(true);
      setError('');

      const data = await getApplications(studentId);

      setApplications(data);
    } catch (error) {
      setError('Unable to load your applications.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading your applications...</Text>
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
        Application Tracker
      </Text>

      <FlatList
        data={applications}
        keyExtractor={(item) =>
          item.applicationId.toString()
        }
        renderItem={({ item }) => (
          <ApplicationCard application={item} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            You don't have any tracked applications yet.
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  empty: {
    marginTop: 20,
    textAlign: 'center',
  },
});
