import { StyleSheet, Text, View } from 'react-native';

import { MatchingResult } from '../types/MatchingResult';

interface MatchCardProps {
  match: MatchingResult;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{match.scholarshipName}</Text>

      <Text style={styles.score}>
        {match.score}/100 Match
      </Text>

      <Text style={styles.label}>
        {match.label}
      </Text>

      <Text style={styles.eligibility}>
        {match.eligible
          ? 'Eligible to apply'
          : 'Currently not eligible'}
      </Text>
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
    marginBottom: 8,
  },

  score: {
    fontSize: 16,
    marginBottom: 4,
  },

  label: {
    fontSize: 15,
    marginBottom: 4,
  },

  eligibility: {
    fontSize: 14,
  },
});
