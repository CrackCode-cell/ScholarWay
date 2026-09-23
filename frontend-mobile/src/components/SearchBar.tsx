import { StyleSheet, TextInput } from 'react-native';

interface SearchBarProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

export default function SearchBar({
  searchText,
  onSearchChange,
}: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      value={searchText}
      onChangeText={onSearchChange}
      placeholder="Search scholarships..."
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
});
