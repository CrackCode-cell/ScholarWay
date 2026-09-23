/**
 * ScholarWay - Scholarship Details Screen
 *
 * Purpose:
 * Displays detailed information about a selected scholarship.
 *
 * Current implementation:
 * - Receives scholarship information through props.
 * - Displays the scholarship name, provider, award amount,
 *   deadline, and description.
 * - Uses a button for a future "Save Scholarship" action.
 * - Does NOT yet use navigation or the backend.
 *
 * Planned implementation:
 * - Connect this screen to Expo Router navigation.
 * - Pass a scholarship ID through navigation.
 * - Retrieve the selected scholarship from the backend.
 * - Add Save Scholarship functionality.
 * - Add an Apply button that opens the scholarship application.
 */

import { Alert, Button, ScrollView, StyleSheet, Text } from 'react-native';

/*
 * TypeScript blueprint describing the information
 * that this component expects from its parent.
 */
interface ScholarshipDetailsProps {
  scholarshipId: number;
  name: string;
  provider: string;
  awardAmount: number;
  deadline: string;
  description: string;
}

/*
 * ScholarshipDetails receives scholarship information
 * through props.
 */
export default function ScholarshipDetails({
  scholarshipId,
  name,
  provider,
  awardAmount,
  deadline,
  description,
}: ScholarshipDetailsProps) {
  /*
   * Temporary save handler.
   *
   * Later, this will send a request to the backend
   * to save the scholarship for the current student.
   */
  function handleSaveScholarship() {
    Alert.alert(
      'Scholarship Saved',
      `${name} has been added to your saved scholarships.`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.provider}>{provider}</Text>

      <Text style={styles.award}>
        ${awardAmount.toLocaleString()}
      </Text>

      <Text style={styles.deadline}>
        Deadline: {deadline}
      </Text>

      <Text style={styles.sectionTitle}>
        Description
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.scholarshipId}>
        Scholarship ID: {scholarshipId}
      </Text>

      <Button
        title="Save Scholarship"
        onPress={handleSaveScholarship}
      />
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
    marginBottom: 8,
  },

  provider: {
    fontSize: 18,
    marginBottom: 20,
  },

  award: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  deadline: {
    fontSize: 16,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },

  scholarshipId: {
    fontSize: 14,
    marginBottom: 20,
  },
});
