import React from "react";
import { Text, StyleSheet } from "react-native";

type ScholarshipBadgeProps = {
    type: "MERIT" | "NEED_BASED" | "MERIT_AND_NEED";
};

export default function ScholarshipBadge({
    type,
}: ScholarshipBadgeProps) {
    let label = "";

    if (type === "MERIT") {
        label = "MERIT";
    } else if (type === "NEED_BASED") {
        label = "NEED-BASED";
    } else {
        label = "MERIT + NEED";
    }

    return (
        <Text style={styles.badge}>
            {label}
        </Text>
    );
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: "#eeeeee",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: "600",
        alignSelf: "flex-start",
    },
});
