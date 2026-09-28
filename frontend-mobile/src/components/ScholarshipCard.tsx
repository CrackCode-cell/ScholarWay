import { router } from 'expo-router';

import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { Scholarship } from '@/types/Scholarship';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export default function ScholarshipCard({
  scholarship,
}: ScholarshipCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        router.push(
          `/scholarship/${scholarship.scholarshipId}`
        );
      }}
    >
      <Text style={styles.name}>
        {scholarship.name}
      </Text>

      <Text>{scholarship.provider}</Text>

      <Text>
        ${scholarship.awardAmount.toLocaleString()}
      </Text>

      <Text>
        Deadline: {scholarship.deadline}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
