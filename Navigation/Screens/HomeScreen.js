import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const dashboardItems = [
    { title: 'En cours', value: '7', color: '#2196F3', icon: '⏳' },
    { title: 'Terminé aujourd\'hui', value: '3', color: '#4CAF50', icon: '✓' },
    { title: 'Messages non lus', value: '2', color: '#FF5722', icon: '💬' },
    { title: 'En retard', value: '1', color: '#F44336', icon: '⚠️' },
  ];

  const quickActions = [
    { title: 'Ajouter une tâche', icon: '+', action: () => {} },
    { title: 'Voir agenda', icon: '📅', action: () => {} },
    { title: 'Équipe', icon: '👥', action: () => {} },
    { title: 'Fichiers', icon: '📁', action: () => {} },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Header simple */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Salut!</Text>
        <Text style={styles.headerSubtitle}>Voyons ce que tu as à faire</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Vue d'ensemble */}
        <View style={styles.statsContainer}>
          {dashboardItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.statCard}>
              <View style={styles.statLeft}>
                <Text style={styles.statIcon}>{item.icon}</Text>
                <View>
                  <Text style={styles.statValue}>{item.value}</Text>
                  <Text style={styles.statTitle}>{item.title}</Text>
                </View>
              </View>
              <View style={[styles.statIndicator, { backgroundColor: item.color }]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Actions rapides */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accès rapide</Text>
          <View style={styles.actionsContainer}>
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionCard} onPress={action.action}>
                <Text style={styles.actionIcon}>{action.icon}</Text>
                <Text style={styles.actionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Activité récente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Récent</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityItem}>
              <Text style={styles.activityTime}>Il y a 2h</Text>
              <Text style={styles.activityText}>Sarah a commenté "Design mobile"</Text>
            </View>
            <View style={styles.activityItem}>
              <Text style={styles.activityTime}>Hier</Text>
              <Text style={styles.activityText}>3 nouvelles tâches dans "Backend"</Text>
            </View>
            <View style={styles.activityItem}>
              <Text style={styles.activityTime}>Lundi</Text>
              <Text style={styles.activityText}>Réunion équipe - notes ajoutées</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '400',
  },
  scrollContent: {
    flex: 1,
  },
  statsContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  statTitle: {
    fontSize: 14,
    color: '#6c757d',
  },
  statIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: (width - 44) / 2,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
    color: '#495057',
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    textAlign: 'center',
  },
  activityContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  activityItem: {
    marginBottom: 16,
  },
  activityTime: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 4,
    fontWeight: '500',
  },
  activityText: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
  },
});
