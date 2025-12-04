import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen({ navigation }) {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [dataUsage, setDataUsage] = useState(false);

  const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK', style: 'default' }]);
  };

  const settingsCategories = [
    {
      title: 'Compte et Sécurité',
      icon: '🔐',
      items: [
        {
          title: 'Authentification biométrique',
          subtitle: 'Utiliser l\'empreinte ou Face ID',
          type: 'switch',
          value: biometricAuth,
          onValueChange: setBiometricAuth,
          icon: '👆',
        },
        {
          title: 'Changer le mot de passe',
          subtitle: 'Dernière modification: il y a 2 mois',
          type: 'action',
          onPress: () => showAlert('Changement de mot de passe', 'Fonctionnalité à implémenter'),
          icon: '🔑',
        },
        {
          title: 'Sessions actives',
          subtitle: '3 appareils connectés',
          type: 'action',
          onPress: () => showAlert('Sessions actives', 'Gérer vos sessions connectées'),
          icon: '📱',
        },
      ],
    },
    {
      title: 'Notifications',
      icon: '🔔',
      items: [
        {
          title: 'Notifications push',
          subtitle: 'Recevoir des alertes en temps réel',
          type: 'switch',
          value: pushNotifications,
          onValueChange: setPushNotifications,
          icon: '📲',
        },
        {
          title: 'Notifications email',
          subtitle: 'Recevoir des résumés par email',
          type: 'switch',
          value: emailNotifications,
          onValueChange: setEmailNotifications,
          icon: '📧',
        },
        {
          title: 'Préférences détaillées',
          subtitle: 'Personnaliser par type d\'événement',
          type: 'action',
          onPress: () => showAlert('Notifications', 'Configurer les préférences détaillées'),
          icon: '⚙️',
        },
      ],
    },
    {
      title: 'Données et Stockage',
      icon: '💾',
      items: [
        {
          title: 'Sauvegarde automatique',
          subtitle: 'Sauvegarder sur le cloud',
          type: 'switch',
          value: autoBackup,
          onValueChange: setAutoBackup,
          icon: '☁️',
        },
        {
          title: 'Utiliser les données mobiles',
          subtitle: 'Pour la synchronisation',
          type: 'switch',
          value: dataUsage,
          onValueChange: setDataUsage,
          icon: '📶',
        },
        {
          title: 'Vider le cache',
          subtitle: '245 MB utilisés',
          type: 'action',
          onPress: () => showAlert('Cache', 'Vider le cache de l\'application'),
          icon: '🗑️',
        },
      ],
    },
  ];

  const renderSettingItem = (item, index, isLast) => {
    return (
      <View key={index} style={[styles.settingItem, isLast && styles.settingItemLast]}>
        <View style={styles.settingLeft}>
          <Text style={styles.settingItemIcon}>{item.icon}</Text>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{item.title}</Text>
            <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
        <View style={styles.settingRight}>
          {item.type === 'switch' ? (
            <Switch
              value={item.value}
              onValueChange={item.onValueChange}
              trackColor={{ false: '#E0E0E0', true: '#66BB6A' }}
              thumbColor={item.value ? '#4CAF50' : '#F4F3F4'}
            />
          ) : (
            <TouchableOpacity onPress={item.onPress}>
              <Text style={styles.settingArrow}>▶</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#388E3C" />
      
      {/* Header avec gradient vert */}
      <LinearGradient
        colors={['#388E3C', '#66BB6A']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>⚙️ Paramètres</Text>
        <Text style={styles.headerSubtitle}>Configurez votre application selon vos préférences</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {settingsCategories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>
              {category.icon} {category.title}
            </Text>
            <View style={styles.categoryCard}>
              {category.items.map((item, itemIndex) =>
                renderSettingItem(item, itemIndex, itemIndex === category.items.length - 1)
              )}
            </View>
          </View>
        ))}

        {/* Section informations de l'app */}
        <View style={styles.appInfoContainer}>
          <View style={styles.appInfo}>
            <Text style={styles.appInfoTitle}>📱 Informations de l'application</Text>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Version:</Text>
              <Text style={styles.appInfoValue}>1.2.3</Text>
            </View>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Build:</Text>
              <Text style={styles.appInfoValue}>2024.03.15</Text>
            </View>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Dernière mise à jour:</Text>
              <Text style={styles.appInfoValue}>15 mars 2024</Text>
            </View>
          </View>
        </View>

        {/* Section de déconnexion */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => showAlert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?')}
          >
            <Text style={styles.logoutText}>🚪 Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E8',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  scrollContent: {
    flex: 1,
    paddingTop: 20,
  },
  categoryContainer: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingItemIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  settingRight: {
    marginLeft: 10,
  },
  settingArrow: {
    fontSize: 12,
    color: '#4CAF50',
    paddingHorizontal: 10,
  },
  appInfoContainer: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  appInfo: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  appInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  appInfoLabel: {
    fontSize: 14,
    color: '#666',
  },
  appInfoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  logoutContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#FF5252',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});