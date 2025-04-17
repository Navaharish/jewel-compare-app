import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useComparison } from '../hooks/useComparison';

interface ComparisonButtonProps {
  item: {
    id: string;
    image: string;
    productType: string;
    goldKaratage: number;
    goldWeight: number;
    diamondWeight: number;
    totalPrice: number;
    laborCharges: number;
    designCode: string;
  };
}

const ComparisonButton = ({ item }: ComparisonButtonProps) => {
  const { addToComparison, isInComparison, removeFromComparison } = useComparison();
  const isComparing = isInComparison(item.id);

  const handlePress = () => {
    if (isComparing) {
      removeFromComparison(item.id);
    } else {
      addToComparison(item);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, isComparing && styles.activeButton]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, isComparing && styles.activeButtonText]}>
        {isComparing ? 'Remove from Comparison' : 'Add to Comparison'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
  },
  activeButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default ComparisonButton; 