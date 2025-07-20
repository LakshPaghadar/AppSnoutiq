import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { scaledSize, scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';

interface CustomTimePickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (time: string) => void;
  currentValue?: string;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  visible,
  onClose,
  onSelect,
  currentValue
}) => {
  const { colors } = useFlagTheme();
  const [selectedTime, setSelectedTime] = useState<string>(currentValue || '');

  const timeOptions = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'
  ];

  const handleSelect = (time: string) => {
    setSelectedTime(time);
    onSelect(time);
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
              Select Time
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={[styles.closeText, { color: colors.buttonColor }]}>
                ✕
              </Text>
            </TouchableOpacity>
          </View>

          {/* Time Options */}
          <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.timeGrid}>
              {timeOptions.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeOption,
                    {
                      backgroundColor: selectedTime === time ? colors.buttonColor : colors.colorFAFAFA,
                      borderColor: selectedTime === time ? colors.buttonColor : '#E5E5E5',
                    }
                  ]}
                  onPress={() => handleSelect(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      {
                        color: selectedTime === time ? 'white' : colors.textColor,
                      }
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
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
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeOption: {
    width: '48%',
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(8),
    borderRadius: scaleHeight(8),
    borderWidth: 1,
    alignItems: 'center',
  },
  timeText: {
    ...Typography.fontMedium,
    ...Typography.textSize14,
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

export default CustomTimePicker; 