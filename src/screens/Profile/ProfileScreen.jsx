import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native";

import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.content}
        >

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    الملف الشخصي
                </Text>

                <Text style={styles.headerSubtitle}>
                    أدِر حسابك وتفضيلاتك
                </Text>
            </View>

            {/* Profile Card */}
            <View style={styles.profileCard}>

                <Image
                    source={require("../../assets/images/profile.png")}
                    style={styles.profileImage}
                />

                <View style={styles.profileInfo}>

                    <Text style={styles.name}>
                        NewsApp User
                    </Text>

                    <Text style={styles.email}>
                        user@newsapp.com
                    </Text>

                    <View style={styles.badge}>
                        <Ionicons
                            name="checkmark-circle"
                            size={15}
                            color="#FFFFFF"
                        />

                        <Text style={styles.badgeText}>
                            عضو نشط
                        </Text>
                    </View>

                </View>

            </View>

            {/* Statistics */}
            <View style={styles.statsContainer}>

                <View style={styles.statBox}>
                    <Ionicons
                        name="newspaper-outline"
                        size={24}
                        color="#C62828"
                    />

                    <Text style={styles.statNumber}>
                        24
                    </Text>

                    <Text style={styles.statLabel}>
                        أخبار مقروءة
                    </Text>
                </View>

                <View style={styles.statBox}>
                    <Ionicons
                        name="bookmark-outline"
                        size={24}
                        color="#C62828"
                    />

                    <Text style={styles.statNumber}>
                        8
                    </Text>

                    <Text style={styles.statLabel}>
                        محفوظة
                    </Text>
                </View>

                <View style={styles.statBox}>
                    <Ionicons
                        name="time-outline"
                        size={24}
                        color="#C62828"
                    />

                    <Text style={styles.statNumber}>
                        12
                    </Text>

                    <Text style={styles.statLabel}>
                        هذا الشهر
                    </Text>
                </View>

            </View>

            {/* Settings */}
            <View style={styles.section}>

                <Text style={styles.sectionTitle}>
                    الإعدادات
                </Text>

                <View style={styles.option}>

                    <View style={styles.iconBox}>
                        <Ionicons
                            name="notifications-outline"
                            size={21}
                            color="#0B1F33"
                        />
                    </View>

                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>
                            الإشعارات
                        </Text>

                        <Text style={styles.optionSubtitle}>
                            التحكم في إشعارات الأخبار
                        </Text>
                    </View>

                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color="#9AA3AB"
                    />

                </View>

                <View style={styles.option}>

                    <View style={styles.iconBox}>
                        <Ionicons
                            name="bookmark-outline"
                            size={21}
                            color="#0B1F33"
                        />
                    </View>

                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>
                            الأخبار المحفوظة
                        </Text>

                        <Text style={styles.optionSubtitle}>
                            الأخبار التي قمت بحفظها
                        </Text>
                    </View>

                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color="#9AA3AB"
                    />

                </View>

                <View style={styles.option}>

                    <View style={styles.iconBox}>
                        <Ionicons
                            name="information-circle-outline"
                            size={21}
                            color="#0B1F33"
                        />
                    </View>

                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>
                            عن NewsApp
                        </Text>

                        <Text style={styles.optionSubtitle}>
                            معلومات عن التطبيق
                        </Text>
                    </View>

                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color="#9AA3AB"
                    />

                </View>

            </View>

            <Text style={styles.version}>
                NewsApp • Version 1.0.0
            </Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
    },

    content: {
        paddingHorizontal: 18,
        paddingTop: 25,
        paddingBottom: 35,
    },

    header: {
        marginBottom: 20,
    },

    headerTitle: {
        color: "#0B1F33",
        fontSize: 28,
        fontWeight: "800",
        textAlign: "right",
        marginBottom: 6,
    },

    headerSubtitle: {
        color: "#7A858F",
        fontSize: 14,
        textAlign: "right",
    },

    profileCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        elevation: 3,
        marginBottom: 18,
    },

    profileImage: {
        width: 78,
        height: 78,
        borderRadius: 39,
    },

    profileInfo: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 15,
    },

    name: {
        color: "#0B1F33",
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 4,
        textAlign: "right",
    },

    email: {
        color: "#7A858F",
        fontSize: 13,
        marginBottom: 10,
    },

    badge: {
        backgroundColor: "#0B1F33",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },

    badgeText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
        marginLeft: 5,
    },

    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },

    statBox: {
        width: "31.5%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        alignItems: "center",
        paddingVertical: 16,
        elevation: 2,
    },

    statNumber: {
        color: "#0B1F33",
        fontSize: 20,
        fontWeight: "800",
        marginTop: 8,
        marginBottom: 3,
    },

    statLabel: {
        color: "#7A858F",
        fontSize: 11,
        textAlign: "center",
    },

    section: {
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingHorizontal: 15,
        paddingVertical: 6,
    },

    sectionTitle: {
        color: "#0B1F33",
        fontSize: 18,
        fontWeight: "800",
        textAlign: "right",
        marginVertical: 14,
    },

    option: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: "#EEF1F4",
    },

    iconBox: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#F1F4F7",
        alignItems: "center",
        justifyContent: "center",
    },

    optionText: {
        flex: 1,
        alignItems: "flex-end",
        marginHorizontal: 12,
    },

    optionTitle: {
        color: "#0B1F33",
        fontSize: 15,
        fontWeight: "700",
        textAlign: "right",
        marginBottom: 3,
    },

    optionSubtitle: {
        color: "#8A949D",
        fontSize: 12,
        textAlign: "right",
    },

    version: {
        color: "#A0A8AF",
        fontSize: 11,
        textAlign: "center",
        marginTop: 22,
    },

});