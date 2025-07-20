import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import { Images } from '@src/assets';

interface CustomDatePickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (date: string) => void;
  currentValue?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  visible,
  onClose,
  onSelect,
  currentValue
}) => {
  const { colors } = useFlagTheme();
  const [selectedDate, setSelectedDate] = useState<string>(currentValue || '');

  const generateDateOptions = () => {
    const options = [];
    const today = new Date();
    
    // Today
    const todayFormatted = today.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: '2-digit'
    });
    options.push({ label: 'Today', value: todayFormatted });
    
    // Next 7 days
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formatted = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: '2-digit'
      });
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      options.push({ label: `${dayName}`, value: formatted });
    }
    
    // Next week options
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    const nextWeekFormatted = nextWeek.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: '2-digit'
    });
    options.push({ label: 'Next Week', value: nextWeekFormatted });
    
    return options;
  };

  const dateOptions = generateDateOptions();

  const handleSelect = (date: string) => {
    setSelectedDate(date);
    onSelect(date);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.container, { backgroundColor: 'white' }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.textColor }]}>
              Select Date
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={[styles.closeText, { color: colors.buttonColor }]}>
                ✕
              </Text>
            </TouchableOpacity>
          </View>

          {/* Date Options */}
          <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
            {dateOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionItem,
                  {
                    backgroundColor: selectedDate === option.value ? colors.buttonColor : colors.colorFAFAFA,
                                         borderColor: selectedDate === option.value ? colors.buttonColor : '#E5E5E5',
                  }
                ]}
                onPress={() => handleSelect(option.value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedDate === option.value ? 'white' : colors.textColor,
                    }
                  ]}
                >
                  {option.label}
                </Text>
                <Text
                  style={[
                    styles.optionValue,
                    {
                      color: selectedDate === option.value ? 'white' : colors.color828282,
                    }
                  ]}
                >
                  {option.value}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.cancelButton, { borderColor: colors.buttonColor }]}
              onPress={onClose}
            >
              <Text style={[styles.cancelText, { color: colors.buttonColor }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(20),
  },
  container: {
    width: '100%',
    maxHeight: '80%',
    borderRadius: scaleHeight(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(16),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    ...Typography.fontBold,
    ...Typography.textSize16,
  },
  closeButton: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: scaleWidth(18),
    fontWeight: 'bold',
  },
  optionsContainer: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(16),
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(12),
    marginBottom: scaleHeight(8),
    borderRadius: scaleHeight(8),
    borderWidth: 1,
  },
  optionText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
  },
  optionValue: {
    ...Typography.fontRegular,
    ...Typography.textSize12,
  },
  footer: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(16),
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  cancelButton: {
    paddingVertical: scaleHeight(12),
    borderRadius: scaleHeight(8),
    alignItems: 'center',
    borderWidth: 1,
  },
  cancelText: {
    ...Typography.fontBold,
    ...Typography.textSize14,
  },
});

export default CustomDatePicker; 