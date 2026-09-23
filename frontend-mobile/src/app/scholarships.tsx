/**
 * ScholarWay - Scholarships Screen
 *
 * Purpose:
 * Displays scholarships, provides scholarship search functionality,
 * and renders reusable ScholarshipCard components.
 *
 * Current implementation:
 * - Uses temporary hardcoded scholarship data.
 * - Stores search text with React state.
 * - Filters scholarships based on the user's search.
 * - Uses reusable SearchBar and ScholarshipCard components.
 *
 * Planned implementation:
 * - Replace hardcoded data with the Spring Boot REST API.
 * - Add loading and error states.
 * - Eventually support navigation to scholarship details.
 */

import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import SearchBar from '@/components/SearchBar';
import ScholarshipCard from '@/components/ScholarshipCard';

export default function ScholarshipsScreen() {
  // Stores the text currently entered into the search bar.
  const [searchText, setSearchText] = useState('');

  /*
   * Temporary scholarship data used while building the frontend.
   * This will eventually be replaced by data returned by
   * the ScholarWay Spring Boot API.
   */
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

  /*
   * Filters scholarships based on the user's search text.
   * toLowerCase() makes the search case-insensitive.
   */
  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scholarships</Text>

      <Text style={styles.subtitle}>
        Find scholarships that fit your profile.
      </Text>

      {/* Reusable search component controlled by parent state. */}
      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      {/*
       * Create one ScholarshipCard for every scholarship
       * that matches the current search.
       */}
      {filteredScholarships.map((scholarship) => (
        <ScholarshipCard
          key={scholarship.scholarshipId}
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
