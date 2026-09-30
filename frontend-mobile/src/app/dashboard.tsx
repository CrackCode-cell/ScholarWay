import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getDashboard } from '../services/dashboardService';
import { StudentDashboard } from '../types/StudentDashboard';

export default function DashboardScreen() {
  const [dashboard, setDashboard] =
    useState<StudentDashboard | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const studentId = 1;

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setLoading(true);
      setError('');

      const data = await getDashboard(studentId);

      setDashboard(data);
    } catch (error) {
      setError('Unable to load your dashboard.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading your ScholarWay dashboard...</Text>
      </View>
    );
  }

  if (error || !dashboard) {
    return (
      <View style={styles.center}>
        <Text>
          {error || 'Dashboard data is unavailable.'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Welcome, {dashboard.student.name}
      </Text>

      <Text style={styles.subtitle}>
        Here's your ScholarWay overview.
      </Text>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.number}>
            {dashboard.matches.length}
          </Text>

          <Text>Matches</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.number}>
            {dashboard.savedScholarships.length}
          </Text>

          <Text>Saved</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.number}>
            {dashboard.applications.length}
          </Text>

          <Text>Applications</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Student Profile
        </Text>

        <Text>Name: {dashboard.student.name}</Text>

        <Text>GPA: {dashboard.student.gpa}</Text>

        <Text>Major: {dashboard.student.major}</Text>

        <Text>Location: {dashboard.student.location}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Top Matches
        </Text>

        {dashboard.matches.length === 0 ? (
          <Text>No matches available yet.</Text>
        ) : (
          dashboard.matches.slice(0, 3).map((match) => (
            <View
              key={match.scholarshipId}
              style={styles.item}
            >
              <Text style={styles.itemTitle}>
                {match.scholarshipName}
              </Text>

              <Text>
                {match.score}/100 — {match.label}
              </Text>
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Saved Scholarships
        </Text>

        {dashboard.savedScholarships.length === 0 ? (
          <Text>No saved scholarships yet.</Text>
        ) : (
          dashboard.savedScholarships
            .slice(0, 3)
            .map((saved) => (
              <View
                key={saved.savedScholarshipId}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {saved.scholarship.name}
                </Text>

                <Text>
                  {saved.scholarship.provider}
                </Text>
              </View>
            ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Applications
        </Text>

        {dashboard.applications.length === 0 ? (
          <Text>No applications tracked yet.</Text>
        ) : (
          dashboard.applications
            .slice(0, 3)
            .map((application) => (
              <View
                key={application.applicationId}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {application.scholarship.name}
                </Text>

                <Text>
                  Status: {application.status}
                </Text>
              </View>
            ))
        )}
      </View>
    </ScrollView>
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
    fontSize: 16,
    marginBottom: 24,
  },

  summaryContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },

  summaryCard: {
    flex: 1,
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },

  number: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  section: {
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
});
