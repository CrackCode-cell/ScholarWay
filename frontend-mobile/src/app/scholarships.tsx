import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import SearchBar from '@/components/SearchBar';
import ScholarshipCard from '@/components/ScholarshipCard';
import { Scholarship } from '@/types/Scholarship';
import { getScholarships } from '@/services/scholarshipService';

export default function ScholarshipsScreen() {
  const [searchText, setSearchText] = useState('');
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchScholarships() {
      try {
        const data = await getScholarships();

        setScholarships(data);
      } catch (error) {
        setError('Unable to load scholarships.');
      } finally {
        setLoading(false);
      }
    }

    fetchScholarships();
  }, []);

  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scholarships</Text>

      <Text style={styles.subtitle}>
        Find scholarships that fit your profile.
      </Text>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      {loading && (
        <ActivityIndicator size="large" />
      )}

      {error !== '' && (
        <Text style={styles.error}>{error}</Text>
      )}

      {!loading &&
        error === '' &&
        filteredScholarships.map((scholarship) => (
          <ScholarshipCard
            key={scholarship.scholarshipId}
            scholarship={scholarship}
          />
        ))}
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
    fontSize: 18,
    marginTop: 8,
    marginBottom: 16,
  },

  error: {
    fontSize: 16,
    marginTop: 20,
  },
});
