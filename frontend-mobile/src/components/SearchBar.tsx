import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  onSearch,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search scholarships..."
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSearch}
      >
        <View>
          <View style={styles.buttonLine} />
          <View style={styles.buttonLine} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  buttonLine: {
    width: 18,
    height: 2,
    marginVertical: 2,
  },
});
