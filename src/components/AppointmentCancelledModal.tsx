import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';

interface AppointmentCancelledModalProps {
    visible: boolean;
    onClose: () => void;
    onGoToAppointments: () => void;
}

const AppointmentCancelledModal: React.FC<AppointmentCancelledModalProps> = ({
    visible,
    onClose,
    onGoToAppointments
}) => {
    const { colors } = useFlagTheme();

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Icon */}
                    <View style={styles.iconContainer}>
                        <View style={[styles.purpleCircle, { backgroundColor: colors.buttonColor }]}>
                            <Text style={styles.checkIcon}>✓</Text>
                        </View>
                    </View>

                    {/* Title */}
                    <Text style={[styles.title, { color: colors.textColor }]}>
                        Appointment Cancelled
                    </Text>

                    {/* Message */}
                    <Text style={[styles.message, { color: colors.color828282 }]}>
                        Your appointment has been successfully Cancelled.
                    </Text>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.goToAppointmentsButton, { backgroundColor: colors.buttonColor }]}
                            onPress={onGoToAppointments}
                        >
                            <Text style={styles.goToAppointmentsButtonText}>Go to Appointments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.closeButton, { borderColor: '#828282' }]}
                            onPress={onClose}
                        >
                            <Text style={[styles.closeButtonText, { color: '#828282' }]}>
                                Close
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
        maxWidth: scaleWidth(320),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconContainer: {
        marginBottom: scaleHeight(16),
    },
    purpleCircle: {
        width: scaleWidth(60),
        height: scaleWidth(60),
        borderRadius: scaleWidth(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        color: 'white',
        fontSize: scaleWidth(24),
        fontWeight: 'bold',
    },
    title: {
        ...Typography.fontBold,
        ...Typography.textSize16,
        textAlign: 'center',
        marginBottom: scaleHeight(12),
    },
    message: {
        ...Typography.fontRegular,
        ...Typography.textSize14,
        textAlign: 'center',
        marginBottom: scaleHeight(24),
        lineHeight: scaleHeight(20),
    },
    buttonContainer: {
        width: '100%',
        gap: scaleHeight(12),
    },
    goToAppointmentsButton: {
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
    },
    goToAppointmentsButtonText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    closeButton: {
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        borderWidth: 1,
    },
    closeButtonText: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
});

export default AppointmentCancelledModal; 