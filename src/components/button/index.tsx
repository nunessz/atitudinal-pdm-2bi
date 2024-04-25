import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";

interface ButtonProps {
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: colors.primary,
        borderRadius: 12,
    }
})