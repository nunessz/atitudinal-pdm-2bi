import React from "react"
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { colors } from "../theme/colors"
import logo from "../assets/images/cignifi-logo.jpg"
import { Input } from "../components/input"
import { AntDesign } from '@expo/vector-icons';
import { Button } from "../components/button"
import { IconButton } from "../components/icon-button"
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"

export const Register: React.FC = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{
                width: "100%",
                marginTop: 40,
                alignItems: "flex-start",
                paddingHorizontal: 32
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Image 
                    source={logo}
                    style={{
                        width: 128,
                        height: 128
                    }}
                />
            </View>

            <View style={{
                paddingHorizontal: 32
            }}>
                <Text style={styles.title}>Create your Account</Text>

                <Input placeholder="Email" style={{
                    marginTop: 24
                }}/>
                <Input placeholder="Password" style={{
                    marginTop: 16,
                }}/>
                <Input placeholder="Confirm password" style={{
                    marginTop: 16,
                    marginBottom: 24
                }}/>

                <Button>
                    <Text style={{
                        color: colors.white,
                        fontWeight: "bold"
                    }}>Sign up</Text>
                </Button>

                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 48
                }}>
                    <Text>- Or sign up with -</Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 16
                    }}
                >
                    <IconButton>
                        <AntDesign name="google" size={24} color="black" />
                    </IconButton>

                    <IconButton>
                        <FontAwesome name="facebook" size={24} color="black" />
                    </IconButton>

                    <IconButton>
                        <AntDesign name="twitter" size={24} color="black" />
                    </IconButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})