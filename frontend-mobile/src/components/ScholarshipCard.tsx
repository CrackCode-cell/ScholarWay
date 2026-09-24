import { router } from 'expo-router';

import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

interface ScholarshipCardProps {
  scholarshipId: number;
  name: string;
  provider: string;
  awardAmount: number;
  deadline: string;
}

export default function ScholarshipCard({
  scholarshipId,
  name,
  provider,
  awardAmount,
  deadline,
}: ScholarshipCardProps) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        router.push(`/scholarship/${scholarshipId}`);
      }}
    >
      <Text style={styles.name}>{name}</Text>

      <Text>{provider}</Text>

      <Text>${awardAmount}</Text>

      <Text>Deadline: {deadline}</Text>
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
