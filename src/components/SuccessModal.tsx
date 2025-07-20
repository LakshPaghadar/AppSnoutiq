import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '@src/utils';
import { useFlagTheme } from '@src/utils/AppThemeContext';
import Typography from '@src/utils/typography';
import { Images } from '@src/assets';


interface SuccessModalProps {
    visible: boolean;
    onClose: () => void;
    onPrimaryAction: () => void;
    title?: string;
    message?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
    visible,
    onClose,
    onPrimaryAction,
    title = 'Booking Added',
    message = 'You have Added booking Successfully',
    primaryButtonText = 'Go to Booking Request',
    secondaryButtonText = 'Close'
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
                    <View>
                        <Image
                            source={Images.CHECK_SUCCESS}
                            style={{
                                width: scaleWidth(100),
                                height: scaleWidth(100),
                            }} />
                    </View>

                    {/* Title */}
                    <Text style={[styles.title, { color: colors.textColor }]}>
                        {title}
                    </Text>

                    {/* Message */}
                    <Text style={[styles.message, { color: colors.color828282 }]}>
                        {message}
                    </Text>

                    {/* Action Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.primaryButton, { backgroundColor: colors.buttonColor }]}
                            onPress={onPrimaryAction}
                        >
                            <Text style={styles.primaryButtonText}>
                                {primaryButtonText}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.secondaryButton, { borderColor: colors.buttonColor }]}
                            onPress={onClose}
                        >
                            <Text style={[styles.secondaryButtonText, { color: colors.buttonColor }]}>
                                {secondaryButtonText}
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
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: scaleHeight(16),
        padding: scaleWidth(32),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 10,
        width: '100%',
        maxWidth: scaleWidth(320),
    },
    successIconContainer: {
        width: scaleWidth(80),
        height: scaleWidth(80),
        borderRadius: scaleWidth(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scaleHeight(24),
    },
    checkmark: {
        color: 'white',
        fontSize: scaleWidth(40),
        fontWeight: 'bold',
    },
    title: {
        ...Typography.fontBold,
        ...Typography.textSize24,
        textAlign: 'center',
        marginBottom: scaleHeight(12),
        marginTop: scaleHeight(8)
    },
    message: {
        ...Typography.fontRegular,
        ...Typography.textSize16,
        textAlign: 'center',
        marginBottom: scaleHeight(32),
        lineHeight: scaleHeight(24),
    },
    buttonContainer: {
        width: '100%',
        gap: scaleHeight(12),
    },
    primaryButton: {
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        marginBottom: scaleHeight(8),
    },
    primaryButtonText: {
        color: 'white',
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
    secondaryButton: {
        paddingVertical: scaleHeight(16),
        borderRadius: scaleHeight(8),
        alignItems: 'center',
        borderWidth: 1,
    },
    secondaryButtonText: {
        ...Typography.fontBold,
        ...Typography.textSize16,
    },
});

export default SuccessModal; 