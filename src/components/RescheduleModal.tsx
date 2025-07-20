import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';

interface RescheduleModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (date: string, time: string) => void;
}

const RescheduleModal: React.FC<RescheduleModalProps> = ({
    visible,
    onClose,
    onConfirm
}) => {
    const { colors } = useFlagTheme();
    const [selectedDate, setSelectedDate] = useState('Sat Jul 05');
    const [selectedTimeTab, setSelectedTimeTab] = useState('Morning');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('07:00 AM - 08:00 AM');

    const dates = [
        { day: 'Sat', date: 'Jul 05', full: 'Sat Jul 05' },
        { day: 'Sun', date: 'Jul 06', full: 'Sun Jul 06' },
        { day: 'Mon', date: 'Jul 07', full: 'Mon Jul 07' },
        { day: 'Tue', date: 'Jul 08', full: 'Tue Jul 08' },
        { day: 'Wed', date: 'Jul 09', full: 'Wed Jul 09' },
        { day: 'Thu', date: 'Jul 10', full: 'Thu Jul 10' },
    ];

    const timeTabs = ['Morning', 'Afternoon', 'Evening'];

    const morningSlots = [
        { time: '06:00 AM - 07:00 AM', status: 'Available' },
        { time: '07:00 AM - 08:00 AM', status: 'Selected' },
        { time: '08:00 AM - 09:00 AM', status: 'Available' },
        { time: '10:00 AM - 11:00 AM', status: 'Available' },
        { time: '08:00 AM - 09:00 AM', status: 'Available' },
        { time: '10:00 AM - 11:00 AM', status: 'Not Available' },
    ];

    const afternoonSlots = [
        { time: '12:00 PM - 01:00 PM', status: 'Available' },
        { time: '01:00 PM - 02:00 PM', status: 'Available' },
        { time: '02:00 PM - 03:00 PM', status: 'Available' },
        { time: '03:00 PM - 04:00 PM', status: 'Available' },
        { time: '04:00 PM - 05:00 PM', status: 'Available' },
        { time: '05:00 PM - 06:00 PM', status: 'Available' },
    ];

    const eveningSlots = [
        { time: '06:00 PM - 07:00 PM', status: 'Available' },
        { time: '07:00 PM - 08:00 PM', status: 'Available' },
        { time: '08:00 PM - 09:00 PM', status: 'Available' },
        { time: '09:00 PM - 10:00 PM', status: 'Available' },
    ];

    const getTimeSlots = () => {
        switch (selectedTimeTab) {
            case 'Morning':
                return morningSlots;
            case 'Afternoon':
                return afternoonSlots;
            case 'Evening':
                return eveningSlots;
            default:
                return morningSlots;
        }
    };

    const handleTimeSlotPress = (time: string) => {
        setSelectedTimeSlot(time);
    };

    const handleConfirm = () => {
        onConfirm(selectedDate, selectedTimeSlot);
        onClose();
    };

    const getSlotStyle = (status: string) => {
        if (status === 'Selected') {
            return [styles.timeSlot, { backgroundColor: 'white', borderColor: colors.buttonColor }];
        } else if (status === 'Not Available') {
            return [styles.timeSlot, { backgroundColor: '#E5E5E5', borderColor: '#E5E5E5' }];
        } else {
            return [styles.timeSlot, { backgroundColor: colors.buttonColor, borderColor: colors.buttonColor }];
        }
    };

    const getSlotTextStyle = (status: string) => {
        if (status === 'Selected') {
            return [styles.slotText, { color: colors.buttonColor }];
        } else if (status === 'Not Available') {
            return [styles.slotText, { color: '#828282' }];
        } else {
            return [styles.slotText, { color: 'white' }];
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Header */}
                    <Text style={[styles.title, { color: colors.textColor }]}>
                        Reschedule Appointment
                    </Text>
                    <Text style={[styles.subtitle, { color: colors.color828282 }]}>
                        Choose a slot
                    </Text>

                    {/* Date Selection */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.dateContainer}
                        style={styles.dateScrollView}
                    >
                        {dates.map((date, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.dateCard,
                                    {
                                        backgroundColor: selectedDate === date.full ? colors.buttonColor : 'white',
                                        borderColor: selectedDate === date.full ? colors.buttonColor : '#E5E5E5',
                                    }
                                ]}
                                onPress={() => setSelectedDate(date.full)}
                            >
                                <Text style={[
                                    styles.dateDay,
                                    { color: selectedDate === date.full ? 'white' : colors.textColor }
                                ]}>
                                    {date.day}
                                </Text>
                                <Text style={[
                                    styles.dateDate,
                                    { color: selectedDate === date.full ? 'white' : colors.textColor }
                                ]}>
                                    {date.date}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Time Tabs */}
                    <View style={styles.timeTabsContainer}>
                        {timeTabs.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.timeTab,
                                    {
                                        borderBottomWidth: selectedTimeTab === tab ? 2 : 0,
                                        borderBottomColor: selectedTimeTab === tab ? colors.buttonColor : 'transparent',
                                    }
                                ]}
                                onPress={() => setSelectedTimeTab(tab)}
                            >
                                <Text style={[
                                    styles.timeTabText,
                                    { color: selectedTimeTab === tab ? colors.buttonColor : colors.textColor }
                                ]}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Time Slots Grid */}
                    <View style={styles.timeSlotsContainer}>
                        <View style={styles.timeSlotsGrid}>
                            {getTimeSlots().map((slot, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={getSlotStyle(slot.status)}
                                    onPress={() => slot.status !== 'Not Available' && handleTimeSlotPress(slot.time)}
                                    disabled={slot.status === 'Not Available'}
                                >
                                    <Text style={getSlotTextStyle(slot.status)}>
                                        {slot.status}
                                    </Text>
                                    <Text style={[
                                        styles.slotTime,
                                        { color: slot.status === 'Selected' ? colors.buttonColor : slot.status === 'Not Available' ? '#828282' : 'white' }
                                    ]}>
                                        {slot.time}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Action Buttons - Flex Row */}
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            style={[styles.confirmButton, { backgroundColor: colors.buttonColor }]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.confirmButtonText}>Confirm Reschedule</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.goBackButton, { borderColor: colors.buttonColor }]}
                            onPress={onClose}
                        >
                            <Text style={[styles.goBackButtonText, { color: colors.buttonColor }]}>
                                Go Back
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scaleWidth(20),
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: scaleHeight(16),
        padding: scaleWidth(24),
        width: '100%',
        maxWidth: scaleWidth(350),
        maxHeight: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        ...Typography.fontBold,
        ...Typography.textSize16,
        textAlign: 'center',
        marginBottom: scaleHeight(8),
    },
    subtitle: {
        ...Typography.fontRegular,
        ...Typography.textSize14,
        textAlign: 'center',
        marginBottom: scaleHeight(24),
    },
    dateContainer: {
        paddingHorizontal: scaleWidth(4),
        gap: scaleWidth(12),
        marginBottom: scaleHeight(24),
    },
    dateScrollView: {
        marginBottom: scaleHeight(24),
    },
    dateCard: {
        paddingHorizontal: scaleWidth(16),
        paddingVertical: scaleHeight(12),
        borderRadius: scaleHeight(8),
        borderWidth: 1,
        alignItems: 'center',
        minWidth: scaleWidth(80),
        marginRight: scaleWidth(8),
    },
    dateDay: {
        ...Typography.fontBold,
        ...Typography.textSize12,
        marginBottom: scaleHeight(2),
    },
    dateDate: {
        ...Typography.fontMedium,
        ...Typography.textSize10,
    },
    timeTabsContainer: {
        flexDirection: 'row',
        marginBottom: scaleHeight(20),
        gap: scaleWidth(24),
    },
    timeTab: {
        paddingVertical: scaleHeight(8),
        paddingHorizontal: scaleWidth(4),
    },
    timeTabText: {
        ...Typography.fontMedium,
        ...Typography.textSize14,
    },
    timeSlotsContainer: {
        marginBottom: scaleHeight(24),
    },
    timeSlotsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: scaleWidth(12),
    },
    timeSlot: {
        width: '48%',
        paddingVertical: scaleHeight(12),
        paddingHorizontal: scaleWidth(16),
        borderRadius: scaleHeight(8),
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: scaleHeight(8),
    },
    slotText: {
        ...Typography.fontBold,
        ...Typography.textSize12,
        marginBottom: scaleHeight(4),
    },
    slotTime: {
        ...Typography.fontRegular,
        ...Typography.textSize10,
    },
    actionButtons: {
        flexDirection: 'row',
        gap: scaleWidth(12),
    },
    confirmButton: {
        flex: 1,
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',

    },
    confirmButtonText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize12,
    },
    goBackButton: {
        flex: 1,
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        borderWidth: 1,

        // ...Typography.textSize12
    },
    goBackButtonText: {
        ...Typography.fontBold,
        ...Typography.textSize12,
    },
});

export default RescheduleModal; 