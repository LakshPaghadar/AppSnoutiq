import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';

interface CancelAppointmentModalProps {
    visible: boolean;
    onClose: () => void;
    onCancelAppointment: () => void;
}

const CancelAppointmentModal: React.FC<CancelAppointmentModalProps> = ({
    visible,
    onClose,
    onCancelAppointment
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
                        <View style={styles.redCircle}>
                            <Text style={styles.xIcon}>✕</Text>
                        </View>
                    </View>

                    {/* Title */}
                    <Text style={[styles.title, { color: colors.textColor }]}>
                        Cancel Appointment!
                    </Text>

                    {/* Message */}
                    <Text style={[styles.message, { color: colors.color828282 }]}>
                        Are you sure you want to cancel your booking with Gr. Ankita Pawar on 10 July at 10:00 AM?
                    </Text>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onCancelAppointment}
                        >
                            <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
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
    redCircle: {
        width: scaleWidth(60),
        height: scaleWidth(60),
        borderRadius: scaleWidth(30),
        backgroundColor: '#FF4444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    xIcon: {
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
    cancelButton: {
        backgroundColor: '#FF4444',
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
    },
    cancelButtonText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    goBackButton: {
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        borderWidth: 1,
    },
    goBackButtonText: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
});

export default CancelAppointmentModal; 