import { StatusBar } from 'expo-status-bar';
import { float } from 'getenv';
import { left } from 'inquirer/lib/utils/readline';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerIngame}>
        <Text style={styles.welcomeText}>Hail my king!</Text>
        <View style={styles.headerInline}>
          <Text style={styles.flagsLeft}>
            40
          </Text>
          <Avatar style={styles.avatarPerson} rounded title="MD" />
          <Text style={styles.timePast}>
            00
          </Text>
        </View>
      </View>
      <View style={styles.bodyIngame}>
        <Text>Fail my king!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerIngame: {
    flexDirection: 'column',
    color: 'red',
    width: '100%',
    height: '40%',
    maxHeight: '40%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
  },
  headerInline: {
    flexDirection: 'column',
  },
  welcomeText: {
    marginTop: '7%',
    top: '25px',
    marginHorizontal: '15%',
    paddingVertical: '.5rem',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'red',
    backgroundColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    color: "black",
  },
  bodyIngame: {
    color: 'blue',
    width: '100%',
    height: '60%',
    maxHeight: '60%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'blue',
    backgroundColor: 'grey',
  },
  avatarPerson: {

  },
  timePast: {
    position: 'absolute',
    width: '17%',
    paddingVertical: '.5rem',
    left: '15%',
    textAlign: 'center',
    marginTop: '7%',
    fontSize: '1rem',
    fontWeight: '600',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    color: 'red',
    backgroundColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  flagsLeft: {
    position: 'absolute',
    width: '17%',
    paddingVertical: '.5rem',
    right: '15%',
    textAlign: 'center',
    marginTop: '7%',
    fontSize: '1rem',
    fontWeight: '600',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    color: 'red',
    backgroundColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  headerInline: {
    flexDirection: 'row',
  },
});
