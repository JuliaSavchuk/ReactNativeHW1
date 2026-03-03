import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function CityScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.labelRow}>
            <View style={styles.labelDot} />
            <Text style={styles.label}>МОЄ МІСТО</Text>
          </View>
          <Text style={styles.title}>Хмельницький</Text>
          <Text style={styles.subtitle}>Місто на Поділлі</Text>
        </View>

        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/images/city.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageOverlayText}>Хмельницький, Україна</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, styles.statCardDark]}>
            <Text style={[styles.statNumber, styles.statNumberLight]}>254</Text>
            <Text style={styles.statUnit}>тис.</Text>
            <Text style={styles.statLabel}>мешканців</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1493</Text>
            <Text style={styles.statUnit}>рік</Text>
            <Text style={styles.statLabel}>заснування</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>90</Text>
            <Text style={styles.statUnit}>км²</Text>
            <Text style={styles.statLabel}>площа</Text>
          </View>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ПРО МІСТО</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.section}>
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

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ФАКТИ</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.section}>
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

        <View style={styles.footer}>
          <View style={styles.footerDot} />
          <Text style={styles.footerText}>СЛАВА УКРАЇНІ</Text>
          <View style={styles.footerDot} />
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
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  labelDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#869ccb",
    marginRight: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#869ccb",
    letterSpacing: 5,
  },
  title: {
    fontSize: 44,
    fontWeight: "800",
    color: "#2f4e7f",
    letterSpacing: -1.5,
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 15,
    color: "#869ccb",
    marginTop: 6,
    letterSpacing: 0.5,
    fontWeight: "500",
  },
  imageWrapper: {
    marginHorizontal: 28,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#2f4e7f",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: 230,
  },
  imageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(47,78,127,0.55)",
  },
  imageOverlayText: {
    color: "#f7ece2",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 28,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    marginRight: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#869ccb",
  },
  statCardDark: {
    backgroundColor: "#2f4e7f",
    borderColor: "#2f4e7f",
  },
  statNumber: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2f4e7f",
    lineHeight: 30,
  },
  statNumberLight: {
    color: "#f7ece2",
  },
  statUnit: {
    fontSize: 11,
    fontWeight: "600",
    color: "#869ccb",
    letterSpacing: 0.5,
    marginTop: 1,
  },
  statLabel: {
    fontSize: 10,
    color: "#869ccb",
    marginTop: 4,
    textAlign: "center",
    letterSpacing: 0.3,
    fontWeight: "500",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 28,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#869ccb",
    opacity: 0.4,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2f4e7f",
    letterSpacing: 4,
    marginHorizontal: 14,
  },
  section: {
    marginHorizontal: 28,
    marginBottom: 32,
  },
  bodyText: {
    fontSize: 15,
    color: "#2f4e7f",
    lineHeight: 26,
    marginBottom: 14,
    fontWeight: "400",
  },
  factRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(134,156,203,0.35)",
  },
  factLabel: {
    fontSize: 14,
    color: "#2f4e7f",
    fontWeight: "400",
    opacity: 0.65,
  },
  factValue: {
    fontSize: 15,
    color: "#2f4e7f",
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  footerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#869ccb",
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 11,
    color: "#869ccb",
    fontWeight: "700",
    letterSpacing: 4,
  },
});