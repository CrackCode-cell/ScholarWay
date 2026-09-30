import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'ScholarWay',
        }}
      />

      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />

      <Stack.Screen
        name="scholarships"
        options={{
          title: 'Scholarships',
        }}
      />

      <Stack.Screen
        name="matches"
        options={{
          title: 'Matches',
        }}
      />

      <Stack.Screen
        name="saved"
        options={{
          title: 'Saved Scholarships',
        }}
      />

      <Stack.Screen
        name="applications"
        options={{
          title: 'Applications',
        }}
      />

      <Stack.Screen
        name="ProfileScreen"
        options={{
          title: 'Profile',
        }}
      />

      <Stack.Screen
        name="scholarship/[id]"
        options={{
          title: 'Scholarship Details',
        }}
      />
    </Stack>
  );
}
