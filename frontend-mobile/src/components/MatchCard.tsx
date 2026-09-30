import { StyleSheet, Text, View } from 'react-native';

import { MatchingResult } from '../types/MatchingResult';

interface MatchCardProps {
  match: MatchingResult;
}

function MatchFactor({
  name,
  matched,
}: {
  name: string;
  matched: boolean;
}) {
  return (
    <Text style={styles.factor}>
      {matched ? '✓' : '✗'} {name}
    </Text>
  );
}

export default function MatchCard({
  match,
}: MatchCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {match.scholarshipName}
      </Text>

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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Match Factors
        </Text>

        <MatchFactor
          name="GPA"
          matched={match.gpaMatch}
        />

        <MatchFactor
          name="Major"
          matched={match.majorMatch}
        />

        <MatchFactor
          name="Location"
          matched={match.locationMatch}
        />

        <MatchFactor
          name="Financial Need"
          matched={match.financialNeedMatch}
        />

        <MatchFactor
          name="FAFSA"
          matched={match.fafsaMatch}
        />

        <MatchFactor
          name="Activities"
          matched={match.activitiesMatch}
        />
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
    marginBottom: 8,
  },

  score: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },

  label: {
    fontSize: 15,
    marginBottom: 6,
  },

  eligibility: {
    fontSize: 14,
    marginBottom: 14,
  },

  section: {
    borderTopWidth: 1,
    paddingTop: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  factor: {
    fontSize: 14,
    marginBottom: 5,
  },
});
