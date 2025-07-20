import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import AppHeader from '@src/components/AppHeader';
import RescheduleModal from '../../components/RescheduleModal';
import CancelAppointmentModal from '../../components/CancelAppointmentModal';
import AppointmentRescheduledModal from '../../components/AppointmentRescheduledModal';
import { Images } from '@src/assets';
import { useNavigation } from '@react-navigation/native';

const AppointmentDetailsScreen = () => {
    const { colors } = useFlagTheme();
    const navigation = useNavigation();
    const [showRescheduleModal, setShowRescheduleModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showRescheduledModal, setShowRescheduledModal] = useState(false);
    const [rescheduledDate, setRescheduledDate] = useState('');
    const [rescheduledTime, setRescheduledTime] = useState('');

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleGetDirection = () => {
        // Handle get direction action
        console.log('Get Direction pressed');
    };

    const handleChat = () => {
        // Handle chat action
        console.log('Chat pressed');
    };

    const handleCall = () => {
        // Handle call action
        console.log('Call pressed');
    };

    const handleReschedule = () => {
        console.log('Reschedule button pressed, setting modal to true');
        setShowRescheduleModal(true);
    };

    const handleCancelAppointment = () => {
        console.log('Cancel Appointment button pressed');
        setShowCancelModal(true);
    };

    const handleRescheduleConfirm = (date: string, time: string) => {
        console.log('Reschedule confirmed:', date, time);
        setRescheduledDate('Thursday, 11 July 2025');
        setRescheduledTime('11:00 AM – 12:00 PM');
        setShowRescheduleModal(false);
        setShowRescheduledModal(true);
    };

    const handleCancelConfirm = () => {
        console.log('Cancel appointment confirmed');
        setShowCancelModal(false);
        // Handle cancel confirmation
    };

    const handleGoToAppointments = () => {
        console.log('Go to appointments pressed');
        setShowRescheduledModal(false);
        // Navigate to appointments screen
    };

    const renderDetailRow = (label: string, value: string, icon?: any) => (
        <View style={styles.detailRow}>
            {icon && (
                <Image
                    source={icon}
                    style={styles.detailIcon}
                    resizeMode="contain"
                />
            )}
            <View style={styles.detailContent}>
                <Text style={[styles.detailLabel, { color: colors.color828282 }]}>
                    {label}
                </Text>
                <Text style={[styles.detailValue, { color: colors.textColor }]}>
                    {value}
                </Text>
            </View>
        </View>
    );

    const renderSection = (title: string, children: React.ReactNode) => (
        <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textColor }]}>
                {title}
            </Text>
            <View style={styles.sectionContent}>
                {children}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <AppHeader
                title="Appointment Details"
                onBackPress={handleBackPress}
            />

            {/* Content */}
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                {/* Appointment Details Section */}
                {renderSection('Appointment Details', (
                    <>
                        {renderDetailRow('Date', 'Tuesday, 10 July 2025')}
                        {renderDetailRow('Time', '10:00 AM - 11:00 AM')}
                        {renderDetailRow('Duration', '60 min')}
                        {renderDetailRow('Location', 'Home Visit - 123 Main St')}
                    </>
                ))}

                {/* Service Details Section */}
                {renderSection('Service Details', (
                    <>
                        {renderDetailRow('Service Name', 'Full Grooming')}
                        {renderDetailRow('Includes', 'Bath, haircut, nail trim, ear cleaning')}
                        {renderDetailRow('Service Type', 'Home Visit')}
                        {renderDetailRow('Duration', '60 Minutes')}
                        {renderDetailRow('Groomer', 'Gr. Ankita Pawar')}
                    </>
                ))}

                {/* Pet Details Section */}
                {renderSection('Pet Details', (
                    <>
                        {renderDetailRow('Pet Name', 'Jack')}
                        {renderDetailRow('Species / Breed', 'Dog - Labrador')}
                        {renderDetailRow('Age & Gender', '3 yrs, Male')}
                        {renderDetailRow('Temperament', 'Friendly')}
                        {renderDetailRow('Special Notes', 'Allergic to strong perfumes')}
                    </>
                ))}

                {/* Owner Details Section */}
                {renderSection('Owner Details', (
                    <>
                        {renderDetailRow('Name', 'Prajwal Pachpinde')}
                        {renderDetailRow('Mobile', '+919876543210')}
                        {renderDetailRow('Email', 'prajwal@email.com')}

                        {/* Action Buttons */}
                        <View style={styles.actionButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.getDirectionButton, { backgroundColor: colors.buttonColor }]}
                                onPress={handleGetDirection}
                            >
                                <Text style={styles.getDirectionText}>Get Direction</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.iconButton, { borderColor: colors.buttonColor }]}
                                onPress={handleChat}
                            >
                                <Image
                                    source={Images.CHAT_PURPLE}
                                    style={[styles.iconButtonIcon, { tintColor: colors.buttonColor }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.iconButton, { borderColor: colors.buttonColor }]}
                                onPress={handleCall}
                            >
                                <Image
                                    source={Images.CALL_ICON}
                                    style={[styles.iconButtonIcon, { tintColor: colors.buttonColor }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                ))}

                {/* Payment Summary Section */}
                {renderSection('Payment Summary', (
                    <>
                        <View style={styles.paymentRow}>
                            <Text style={[styles.paymentLabel, { color: colors.color828282 }]}>
                                Consultation Fee
                            </Text>
                            <Text style={[styles.paymentValue, { color: colors.textColor }]}>
                                ₹699.00
                            </Text>
                        </View>

                        <View style={styles.paymentRow}>
                            <Text style={[styles.paymentLabel, { color: colors.color828282 }]}>
                                Service/Platform Fee
                            </Text>
                            <Text style={[styles.paymentValue, { color: colors.textColor }]}>
                                ₹30.00
                            </Text>
                        </View>

                        <View style={styles.paymentRow}>
                            <Text style={[styles.paymentLabel, { color: colors.color828282 }]}>
                                Discount Applied
                            </Text>
                            <Text style={[styles.paymentValue, { color: '#4CAF50' }]}>
                                -₹50.00
                            </Text>
                        </View>

                        <View style={styles.paymentRow}>
                            <Text style={[styles.paymentLabel, { color: colors.color828282 }]}>
                                GST (18%)
                            </Text>
                            <Text style={[styles.paymentValue, { color: colors.textColor }]}>
                                ₹117.00
                            </Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.paymentRow}>
                            <Text style={[styles.totalLabel, { color: colors.textColor }]}>
                                Total Payable
                            </Text>
                            <Text style={[styles.totalValue, { color: colors.textColor }]}>
                                ₹564.00
                            </Text>
                        </View>

                        <Text style={[styles.paymentMethod, { color: colors.color828282 }]}>
                            (Paid online - Razorpay • UPI)
                        </Text>
                    </>
                ))}
            </ScrollView>

            {/* Footer Buttons */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.rescheduleButton, { backgroundColor: colors.buttonColor }]}
                    onPress={handleReschedule}
                >
                    <Text style={styles.rescheduleButtonText}>Reschedule</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.cancelButton, { borderColor: colors.buttonColor }]}
                    onPress={handleCancelAppointment}
                >
                    <Text style={[styles.cancelButtonText, { color: colors.buttonColor }]}>
                        Cancel Appointment
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Reschedule Modal */}
            <RescheduleModal
                visible={showRescheduleModal}
                onClose={() => setShowRescheduleModal(false)}
                onConfirm={handleRescheduleConfirm}
            />

            {/* Cancel Appointment Modal */}
            <CancelAppointmentModal
                visible={showCancelModal}
                onClose={() => setShowCancelModal(false)}
                onCancelAppointment={handleCancelConfirm}
            />

            {/* Appointment Rescheduled Modal */}
            <AppointmentRescheduledModal
                visible={showRescheduledModal}
                onClose={() => setShowRescheduledModal(false)}
                onGoToAppointments={handleGoToAppointments}
                newDate={rescheduledDate}
                newTime={rescheduledTime}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: scaleWidth(20),
        paddingVertical: scaleHeight(16),
    },
    section: {
        marginBottom: scaleHeight(32),
    },
    sectionTitle: {
        ...Typography.fontBold,
        ...Typography.textSize16,
        marginBottom: scaleHeight(16),
    },
    sectionContent: {
        backgroundColor: 'white',
        borderRadius: scaleHeight(12),
        padding: scaleWidth(16),
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: scaleHeight(12),
    },
    detailIcon: {
        width: scaleWidth(16),
        height: scaleWidth(16),
        marginRight: scaleWidth(12),
        marginTop: scaleHeight(2),
        tintColor: '#828282',
    },
    detailContent: {
        flex: 1,
    },
    detailLabel: {
        ...Typography.fontRegular,
        ...Typography.textSize12,
        marginBottom: scaleHeight(2),
    },
    detailValue: {
        ...Typography.fontMedium,
        ...Typography.textSize14,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(16),
        gap: scaleWidth(12),
    },
    getDirectionButton: {
        flex: 1,
        paddingVertical: scaleHeight(12),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
    },
    getDirectionText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize14,
    },
    iconButton: {
        width: scaleWidth(44),
        height: scaleWidth(44),
        borderRadius: scaleHeight(8),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButtonIcon: {
        width: scaleWidth(20),
        height: scaleWidth(20),
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleHeight(8),
    },
    paymentLabel: {
        ...Typography.fontRegular,
        ...Typography.textSize14,
    },
    paymentValue: {
        ...Typography.fontMedium,
        ...Typography.textSize14,
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: scaleHeight(12),
    },
    totalLabel: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    totalValue: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    paymentMethod: {
        ...Typography.fontRegular,
        ...Typography.textSize12,
        textAlign: 'center',
        marginTop: scaleHeight(8),
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: scaleWidth(20),
        paddingVertical: scaleHeight(16),
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        gap: scaleWidth(12),
    },
    rescheduleButton: {
        flex: 1,
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
    },
    rescheduleButtonText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        borderWidth: 1,
    },
    cancelButtonText: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
});

export default AppointmentDetailsScreen; 