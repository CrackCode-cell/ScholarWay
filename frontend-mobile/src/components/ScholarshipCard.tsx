import { StyleSheet, Text, View } from 'react-native';

interface ScholarshipCardProps {
  name: string;
  provider: string;
  awardAmount: number;
  deadline: string;
}

export default function ScholarshipCard({
  name,
  provider,
  awardAmount,
  deadline,
}: ScholarshipCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{provider}</Text>
      <Text>${awardAmount}</Text>
      <Text>Deadline: {deadline}</Text>
    </View>
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
