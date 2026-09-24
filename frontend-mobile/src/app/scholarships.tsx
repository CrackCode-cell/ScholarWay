import { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import SearchBar from '@/components/SearchBar';
import ScholarshipCard from '@/components/ScholarshipCard';

export default function ScholarshipsScreen() {
  const [searchText, setSearchText] = useState('');

  const scholarships = [
    {
      scholarshipId: 1,
      name: 'Future Leaders Scholarship',
      provider: 'Example Foundation',
      awardAmount: 5000,
      deadline: 'March 15, 2027',
    },
    {
      scholarshipId: 2,
      name: 'STEM Excellence Award',
      provider: 'STEM Foundation',
      awardAmount: 2500,
      deadline: 'April 1, 2027',
    },
    {
      scholarshipId: 3,
      name: 'Community Impact Scholarship',
      provider: 'Community Foundation',
      awardAmount: 3000,
      deadline: 'May 10, 2027',
    },
  ];

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

      {filteredScholarships.map((scholarship) => (
        <ScholarshipCard
          key={scholarship.scholarshipId}
          scholarshipId={scholarship.scholarshipId}
          name={scholarship.name}
          provider={scholarship.provider}
          awardAmount={scholarship.awardAmount}
          deadline={scholarship.deadline}
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
});
