import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        padding: 32,
        fontSize: 12,
        fontFamily: "Helvetica",
        position: "relative",
    },
    container: {
        backgroundColor: "#ffffff",
        padding: 32,
        borderRadius: 12,
        paddingBottom: 80,
    },
    logoWrapper: {
        alignItems: "center",
        marginBottom: 24,
    },
    logo: {
        height: 80,
        objectFit: "contain",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 10,
        color: "#71717a",
        textAlign: "center",
        marginBottom: 32,
    },
    section: {
        gap: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    label: {
        fontSize: 10,
        color: "#71717a",
    },
    value: {
        fontSize: 12,
        fontWeight: "bold",
    },

    footer: {
        position: "absolute",
        bottom: 32,
        left: 32,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    footerImage: {
        height: 30,
        width: 30,
        objectFit: "contain",
        borderRadius: 4, // rounded-xl
    },
    footerText: {
        fontSize: 10,
        color: "#71717a",
    },
});

const RendemenPDF = ({
    name,
    date,
    jenis,
    sg,
    sc,
    title,
    subtitle,
    labelName,
    labelDate,
    labelJenis,
    labelSG,
    labelSC,
}) => (
    <Document>
        <Page size="A5" style={styles.page}>
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image src="/img/logo.png" style={styles.logo} />
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.label}>{labelName}</Text>
                        <Text style={styles.value}>{name}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>{labelDate}</Text>
                        <Text style={styles.value}>{date}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>{labelJenis}</Text>
                        <Text style={styles.value}>{jenis}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>{labelSG}</Text>
                        <Text style={styles.value}>{sg}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>{labelSC}</Text>
                        <Text style={styles.value}>{sc}%</Text>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Image src="/img/wadjahlogo.jpg" style={styles.footerImage} />
                <Text style={styles.footerText}>Wadjah Inovasi Indonesia</Text>
            </View>
        </Page>
    </Document>
);

export default RendemenPDF;
