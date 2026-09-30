import { StyleSheet, Text, View } from 'react-native';

import { ScholarshipApplication } from '../types/ScholarshipApplication';

interface ApplicationCardProps {
  application: ScholarshipApplication;
}

export default function ApplicationCard({
  application,
}: ApplicationCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {application.scholarship.name}
      </Text>

      <Text style={styles.provider}>
        {application.scholarship.provider}
      </Text>

      <Text style={styles.status}>
        Status: {application.status}
      </Text>

      {application.notes ? (
        <Text style={styles.notes}>
          Notes: {application.notes}
        </Text>
      ) : null}
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
    marginBottom: 8,
  },

  status: {
    fontWeight: '600',
    marginBottom: 6,
  },

  notes: {
    marginTop: 4,
  },
});
