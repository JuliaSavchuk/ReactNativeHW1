import React from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const places = [
  {
    id: "1",
    name: "Парк імені Шевченка",
    description: "Центральний парк міста з алеями та фонтанами. Улюблене місце прогулянок мешканців.",
  },
  {
    id: "2",
    name: "Хмельницький обласний театр",
    description: "Драматичний театр з багатою програмою. Будівля є архітектурною пам'яткою міста.",
  },
  {
    id: "3",
    name: "Набережна Південного Бугу",
    description: "Мальовнича набережна з доріжками для велосипедистів та пішоходів.",
  },
  {
    id: "4",
    name: "Площа Незалежності",
    description: "Головна площа міста, де проходять державні свята та культурні заходи.",
  },
];

export default function CityScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.label}>МОЄ МІСТО</Text>
          <Text style={styles.title}>Хмельницький</Text>
          <Text style={styles.subtitle}>Місто на Поділлі</Text>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/images/city.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>254</Text>
            <Text style={styles.statLabel}>тис. мешканців</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1493</Text>
            <Text style={styles.statLabel}>рік заснування</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>90</Text>
            <Text style={styles.statLabel}>км² площа</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Про місто</Text>
          <Text style={styles.bodyText}>
            Хмельницький — обласний центр на заході України, розташований на
            берегах річки Південний Буг. Місто засноване у XVI столітті і
            сьогодні є одним із найбільших міст Поділля.
          </Text>
          <Text style={styles.bodyText}>
            Населення становить близько 254 тисячі мешканців. Місто відоме
            розвиненою промисловістю, університетами та затишним центром з
            парками і пішохідними вулицями.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Факти</Text>
          {[
            { label: "Рік заснування", value: "1493" },
            { label: "Площа", value: "90.1 км²" },
            { label: "Населення", value: "~254 тис. осіб" },
            { label: "Річка", value: "Південний Буг" },
          ].map((item, index) => (
            <View key={index} style={styles.factRow}>
              <Text style={styles.factLabel}>{item.label}</Text>
              <Text style={styles.factValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Визначні місця</Text>
        </View>
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.placesList}
          renderItem={({ item }) => (
            <View style={styles.placeCard}>
              <View style={styles.placeIconBox}>
                <Ionicons name="location" size={18} color="#f7ece2" />
              </View>
              <View style={styles.placeContent}>
                <Text style={styles.placeName}>{item.name}</Text>
                <Text style={styles.placeDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />
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

  imageWrapper: {
    marginHorizontal: 28,
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#2f4e7f",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  image: {
    width: "100%",
    height: 220,
  },

  statsRow: {
    flexDirection: "row",
    marginHorizontal: 28,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#869ccb",
    marginRight: 10,
  },
  statCardDark: {
    backgroundColor: "#2f4e7f",
    borderColor: "#2f4e7f",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f4e7f",
  },
  statNumberLight: {
    color: "#f7ece2",
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "500",
    color: "#869ccb",
    marginTop: 4,
    textAlign: "center",
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

  factRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(134,156,203,0.35)",
  },
  factLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#2f4e7f",
    opacity: 0.65,
  },
  factValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2f4e7f",
  },

  placesList: {
    paddingHorizontal: 28,
    paddingBottom: 8,
  },
  placeCard: {
    flexDirection: "row",
    alignItems: "flex-start",
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
  placeIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#2f4e7f",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  placeContent: {
    flex: 1,
  },
  placeName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2f4e7f",
    marginBottom: 4,
  },
  placeDescription: {
    fontSize: 13,
    fontWeight: "400",
    color: "#2f4e7f",
    lineHeight: 19,
    opacity: 0.65,
  },
});