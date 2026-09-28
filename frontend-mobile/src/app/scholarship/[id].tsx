import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import ScholarshipDetails from '@/app/ScholarshipDetails';
import { Scholarship } from '@/types/Scholarship';
import { getScholarshipById } from '@/services/scholarshipService';

export default function ScholarshipDetailsRoute() {
  const { id } = useLocalSearchParams();

  const [scholarship, setScholarship] =
    useState<Scholarship | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchScholarship() {
      try {
        const scholarshipId = Number(id);

        if (Number.isNaN(scholarshipId)) {
          throw new Error('Invalid scholarship ID');
        }

        const data = await getScholarshipById(
          scholarshipId
        );

        setScholarship(data);
      } catch (error) {
        setError('Unable to load scholarship.');
      } finally {
        setLoading(false);
      }
    }

    fetchScholarship();
  }, [id]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error !== '') {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (scholarship === null) {
    return (
      <View>
        <Text>Scholarship not found.</Text>
      </View>
    );
  }

  return (
    <ScholarshipDetails
      scholarshipId={scholarship.scholarshipId}
      name={scholarship.name}
      provider={scholarship.provider}
      awardAmount={scholarship.awardAmount}
      deadline={scholarship.deadline}
      description={scholarship.description}
    />
  );
}
