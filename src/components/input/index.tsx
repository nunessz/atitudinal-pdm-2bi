import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../../theme/colors";
import { shadowStyle } from "../../styles";

interface InputProps extends TextInputProps {

}

export const Input: React.FC<InputProps> = ({style, ...rest}) => {
    return (
        <TextInput 
            style={[style, {

            },
            styles.container,
            shadowStyle
            ]}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 12,
    }
})