import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ScholarshipBadge from "./ScholarshipBadge";

type ScholarshipCardProps = {
    scholarshipId: number;
    name: string;
    provider: string;
    description: string;
    awardAmount: number;
    deadline: string;
    scholarshipType: "MERIT" | "NEED_BASED" | "MERIT_AND_NEED";
    onPress?: () => void;
};

export default function ScholarshipCard({
    scholarshipId,
    name,
    provider,
    description,
    awardAmount,
    deadline,
    scholarshipType,
    onPress,
}: ScholarshipCardProps) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.provider}>{provider}</Text>

            <View style={styles.badgeContainer}>
                <ScholarshipBadge type={scholarshipType} />
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.amount}>
                    ${awardAmount.toLocaleString()}
                </Text>

                <Text style={styles.amountLabel}>
                    Award
                </Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.label}>
                    Deadline
                </Text>

                <Text style={styles.deadline}>
                    {deadline}
                </Text>
            </View>

            <Text style={styles.description}>
                {description}
            </Text>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    View Details
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    name: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 4,
    },

    provider: {
        fontSize: 14,
        color: "#666666",
        marginBottom: 12,
    },

    badgeContainer: {
        marginBottom: 16,
    },

    infoSection: {
        marginBottom: 12,
    },

    amount: {
        fontSize: 24,
        fontWeight: "700",
    },

    amountLabel: {
        fontSize: 12,
        color: "#666666",
    },

    label: {
        fontSize: 12,
        color: "#666666",
        marginBottom: 2,
    },

    deadline: {
        fontSize: 16,
        fontWeight: "600",
    },

    description: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 4,
        marginBottom: 18,
    },

    buttonContainer: {
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#eeeeee",
    },

    buttonText: {
        fontSize: 15,
        fontWeight: "600",
    },
});
