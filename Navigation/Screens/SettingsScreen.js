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

export default function SettingsScreen({ navigation }) {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(false);

  const showInfo = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  };

  const settingsSections = [
    {
      title: 'Notifications',
      items: [
        {
          title: 'Notifications push',
          subtitle: 'Alertes instantanées',
          type: 'switch',
          value: pushEnabled,
          onValueChange: setPushEnabled,
          icon: '📱',
        },
        {
          title: 'Email',
          subtitle: 'Résumés quotidiens',
          type: 'switch',
          value: emailEnabled,
          onValueChange: setEmailEnabled,
          icon: '📧',
        },
      ],
    },
    {
      title: 'Confidentialité',
      items: [
        {
          title: 'Localisation',
          subtitle: 'Partager ma position',
          type: 'switch',
          value: locationEnabled,
          onValueChange: setLocationEnabled,
          icon: '📍',
        },
        {
          title: 'Données et confidentialité',
          subtitle: 'Gérer mes informations',
          type: 'action',
          onPress: () => showInfo('Confidentialité', 'Gérer vos paramètres de confidentialité'),
          icon: '🔒',
        },
      ],
    },
    {
      title: 'Compte',
      items: [
        {
          title: 'Synchronisation auto',
          subtitle: 'Sync en arrière-plan',
          type: 'switch',
          value: autoSyncEnabled,
          onValueChange: setAutoSyncEnabled,
          icon: '🔄',
        },
        {
          title: 'Changer mot de passe',
          subtitle: 'Sécuriser votre compte',
          type: 'action',
          onPress: () => showInfo('Sécurité', 'Modifier votre mot de passe'),
          icon: '🔑',
        },
        {
          title: 'Aide',
          subtitle: 'Support et FAQ',
          type: 'action',
          onPress: () => showInfo('Aide', 'Accéder au centre d\'aide'),
          icon: '❓',
        },
      ],
    },
  ];

  const renderSettingItem = (item, index, isLast) => {
    return (
      <View key={index} style={[styles.settingItem, isLast && styles.settingItemLast]}>
        <View style={styles.settingLeft}>
          <Text style={styles.settingIcon}>{item.icon}</Text>
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
              trackColor={{ false: '#E5E5EA', true: '#34C759' }}
              thumbColor={'white'}
            />
          ) : (
            <TouchableOpacity onPress={item.onPress}>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionCard}>
              {section.items.map((item, itemIndex) =>
                renderSettingItem(item, itemIndex, itemIndex === section.items.length - 1)
              )}
            </View>
          </View>
        ))}

        {/* Info app */}
        <View style={styles.appInfoContainer}>
          <View style={styles.appInfo}>
            <Text style={styles.appInfoTitle}>Informations</Text>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Version</Text>
              <Text style={styles.appInfoValue}>1.2.0</Text>
            </View>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Dernière MAJ</Text>
              <Text style={styles.appInfoValue}>Dec 2024</Text>
            </View>
          </View>
        </View>

        {/* Déconnexion */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => showInfo('Déconnexion', 'Voulez-vous vraiment vous déconnecter ?')}
          >
            <Text style={styles.logoutText}>Se déconnecter</Text>
          </TouchableOpacity>
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
  scrollContent: {
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 2,
  },
  settingRight: {
    marginLeft: 10,
  },
  settingArrow: {
    fontSize: 16,
    color: '#8E8E93',
    paddingHorizontal: 8,
  },
  appInfoContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  appInfo: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  appInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  appInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  appInfoLabel: {
    fontSize: 14,
    color: '#6c757d',
  },
  appInfoValue: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  logoutContainer: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});