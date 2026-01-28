"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { techStacks } from "@/data/techStacks";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

const styles = StyleSheet.create({
    page: { padding: 32, fontSize: 11, fontFamily: "Helvetica" },
    header: { marginBottom: 16 },
    name: { fontSize: 20, fontWeight: "bold" },
    section: { marginBottom: 14 },
    sectionTitle: { fontSize: 14, marginBottom: 6, fontWeight: "bold" },
    itemTitle: { fontSize: 12, fontWeight: "bold" },
    small: { fontSize: 10, color: "gray" },
    listItem: { marginLeft: 10, marginBottom: 2 },
});

export default function CVDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <View style={styles.header}>
                    <Text style={styles.name}>Feri Andriyanto Sandika</Text>
                    <Text style={styles.small}>Software Engineer</Text>
                    <Text>Email: andikaferi10@gmail.com</Text>
                    <Text>GitHub: github.com/feriumaha</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Technical Skills</Text>

                    {techStacks.map((group, i) => (
                        <View key={i} style={{ marginBottom: 4 }}>
                            <Text style={{ fontWeight: "bold" }}>{group.category}</Text>
                            <Text style={styles.small}>
                                {group.items.map(item => item.name).join(", ")}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Work Experience</Text>
                    {experiences.map((exp, i) => (
                        <View key={i} style={{ marginBottom: 6 }}>
                            <Text style={styles.itemTitle}>
                                {exp.role} — {exp.company}
                            </Text>
                            <Text style={styles.small}>{exp.period}</Text>
                            {exp.points.map((p, idx) => (
                                <Text key={idx} style={styles.listItem}>• {p}</Text>
                            ))}
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Key Projects</Text>
                    {projects.map((proj, i) => (
                        <View key={i} style={{ marginBottom: 6 }}>
                            <Text style={styles.itemTitle}>{proj.title}</Text>
                            <Text style={styles.small}>
                                {proj.clients.join(", ")} — {proj.categories.join(", ")}
                            </Text>
                            <Text>{proj.description}</Text>
                            <Text style={styles.small}>
                                Tech: {proj.tech.join(", ")}
                            </Text>
                        </View>
                    ))}
                </View>

            </Page>
        </Document>
    );
}
