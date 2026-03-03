import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const skills = [
  { id: "1", icon: "phone-portrait-outline", label: "React Native" },
  { id: "2", icon: "logo-javascript",        label: "JavaScript / TypeScript" },
  { id: "3", icon: "color-palette-outline",  label: "UI / UX дизайн" },
  { id: "4", icon: "git-branch-outline",     label: "Git та командна робота" },
  { id: "5", icon: "layers-outline",         label: "Основи баз даних" },
];

export default function AboutScreen() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(true);
    Alert.alert(
      "Дякую за перегляд!",
      "Рада познайомитись. Сподіваюсь, моя сторінка вам сподобалась.",
      [{ text: "Закрити", onPress: () => setPressed(false) }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Шапка */}
        <View style={styles.header}>
          <Text style={styles.label}>ПРО МЕНЕ</Text>
          <Text style={styles.title}>Юлія Савчук</Text>
          <Text style={styles.subtitle}>Студентка та розробник</Text>
        </View>

        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Мій шлях</Text>
          <Text style={styles.bodyText}>
            Мене звати Юлія, я студентка ItStep
          </Text>
          <Text style={styles.bodyText}>
            У вільний час люблю читати, вишивати та майструвати щось своїми руками. Зараз активно вивчаю мобільну розробку на React Native.
          </Text>
          <Text style={styles.bodyText}>
            Мета — стати мобільним розробником і створювати додатки.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Навички</Text>
          {skills.map((skill) => (
            <View key={skill.id} style={styles.skillCard}>
              <View style={styles.skillIconBox}>
                <Ionicons name={skill.icon as any} size={18} color="#f7ece2" />
              </View>
              <Text style={styles.skillLabel}>{skill.label}</Text>
              <Ionicons name="checkmark-circle" size={18} color="#869ccb" />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.button, pressed && styles.buttonPressed]}
            onPress={handlePress}
            activeOpacity={0.85}
          >
            <Ionicons name="mail-outline" size={20} color="#f7ece2" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Написати мені</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7ece2",
  },
  scrollContent: {
    paddingBottom: 48,
  },

  header: {
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 24,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#869ccb",
    letterSpacing: 5,
    marginBottom: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#2f4e7f",
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#869ccb",
    marginTop: 4,
  },

  avatarSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#2f4e7f",
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#2f4e7f",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },

  section: {
    marginHorizontal: 28,
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2f4e7f",
    marginBottom: 14,
  },
  bodyText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#2f4e7f",
    lineHeight: 26,
    marginBottom: 12,
    opacity: 0.85,
  },

  skillCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(134,156,203,0.3)",
    elevation: 2,
    shadowColor: "#2f4e7f",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  skillIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#2f4e7f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  skillLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#2f4e7f",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f4e7f",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 24,
    elevation: 4,
    shadowColor: "#2f4e7f",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  buttonPressed: {
    backgroundColor: "#253d63",
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#f7ece2",
    letterSpacing: 0.5,
  },
});