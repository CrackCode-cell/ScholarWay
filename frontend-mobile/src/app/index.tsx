import { Link } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ScholarWay
      </Text>

      <Text style={styles.subtitle}>
        Your personalized scholarship platform
      </Text>

      <Link
        href="/dashboard"
        style={styles.link}
      >
        Dashboard
      </Link>

      <Link
        href="/scholarships"
        style={styles.link}
      >
        Browse Scholarships
      </Link>

      <Link
        href="/matches"
        style={styles.link}
      >
        My Matches
      </Link>

      <Link
        href="/saved"
        style={styles.link}
      >
        Saved Scholarships
      </Link>

      <Link
        href="/applications"
        style={styles.link}
      >
        Application Tracker
      </Link>

      <Link
        href="/ProfileScreen"
        style={styles.link}
      >
        Student Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 17,
    marginBottom: 32,
  },

  link: {
    fontSize: 18,
    marginBottom: 18,
  },
});
