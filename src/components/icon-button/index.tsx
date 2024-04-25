import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { shadowStyle } from "../../styles";

interface IconButtonProps {
    children: ReactNode
}

export const IconButton: React.FC<IconButtonProps> = ({children}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, shadowStyle]}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 12,
        width: 96
    }
})