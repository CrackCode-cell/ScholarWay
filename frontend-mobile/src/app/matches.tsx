import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MatchCard from '../components/MatchCard';
import { getMatchesForStudent } from '../services/matchingService';
import { MatchingResult } from '../types/MatchingResult';

export default function MatchesScreen() {
  const [matches, setMatches] = useState<MatchingResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const studentId = 1;

  useEffect(() => {
    loadMatches();
  }, []);

  async function loadMatches() {
    try {
      setLoading(true);
      setError('');

      const data = await getMatchesForStudent(studentId);

      setMatches(data);
    } catch (error) {
      setError('Unable to load scholarship matches.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Finding scholarships for you...</Text>
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
      <Text style={styles.title}>Your Scholarship Matches</Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.scholarshipId.toString()}
        renderItem={({ item }) => <MatchCard match={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No scholarship matches found yet.
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

  emptyText: {
    marginTop: 20,
    textAlign: 'center',
  },
});
