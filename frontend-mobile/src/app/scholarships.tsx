import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ScholarshipCard from '../components/ScholarshipCard';

import {
  getScholarships,
  getScholarshipsByType,
  searchScholarships,
} from '../services/scholarshipService';

import {
  Scholarship,
} from '../types/Scholarship';

export default function ScholarshipsScreen() {
  const [scholarships, setScholarships] =
    useState<Scholarship[]>([]);

  const [searchText, setSearchText] =
    useState('');

  const [selectedType, setSelectedType] =
    useState('ALL');

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  useEffect(() => {
    loadScholarships();
  }, []);

  async function loadScholarships() {
    try {
      setLoading(true);
      setError('');

      const data = await getScholarships();

      setScholarships(data);
    } catch (error) {
      setError(
        'Unable to load scholarships.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    try {
      setLoading(true);
      setError('');

      if (!searchText.trim()) {
        await loadScholarships();
        return;
      }

      const data = await searchScholarships(
        searchText.trim()
      );

      setScholarships(data);
    } catch (error) {
      setError(
        'Unable to search scholarships.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleTypeFilter(
    type: string
  ) {
    try {
      setSelectedType(type);
      setLoading(true);
      setError('');

      if (type === 'ALL') {
        await loadScholarships();
        return;
      }

      const data =
        await getScholarshipsByType(type);

      setScholarships(data);
    } catch (error) {
      setError(
        'Unable to filter scholarships.'
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
          Loading scholarships...
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
        Scholarships
      </Text>

      <Text style={styles.subtitle}>
        Find scholarships that fit your profile.
      </Text>

      <View style={styles.searchContainer}>
        <Text
          style={styles.searchText}
          onPress={handleSearch}
        >
          Search: {searchText || 'Tap to search'}
        </Text>
      </View>

      <Text style={styles.filterTitle}>
        Scholarship Type
      </Text>

      <View style={styles.filters}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === 'ALL' &&
              styles.selectedFilter,
          ]}
          onPress={() =>
            handleTypeFilter('ALL')
          }
        >
          <Text>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === 'MERIT' &&
              styles.selectedFilter,
          ]}
          onPress={() =>
            handleTypeFilter('MERIT')
          }
        >
          <Text>Merit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === 'NEED_BASED' &&
              styles.selectedFilter,
          ]}
          onPress={() =>
            handleTypeFilter('NEED_BASED')
          }
        >
          <Text>Need Based</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedType === 'MERIT_AND_NEED' &&
              styles.selectedFilter,
          ]}
          onPress={() =>
            handleTypeFilter(
              'MERIT_AND_NEED'
            )
          }
        >
          <Text>Merit + Need</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={scholarships}
        keyExtractor={(item) =>
          item.scholarshipId.toString()
        }
        renderItem={({ item }) => (
          <ScholarshipCard
            scholarship={item}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No scholarships found.
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
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    marginBottom: 18,
  },

  searchContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
  },

  searchText: {
    fontSize: 16,
  },

  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },

  filterButton: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
  },

  selectedFilter: {
    borderWidth: 2,
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
  },
});
