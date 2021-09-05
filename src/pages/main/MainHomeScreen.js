import React, {Component} from 'react';
import MainSectionItem from 'component/main/MainSectionItem';
import { movies } from 'common/Constants';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const aLoop = movies.map((unit, idx) => {
//   console.log(unit);
//   return unit;
// });

export default class MainHomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: Colors.light}}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View style={{backgroundColor: Colors.white}}>
                {movies?.map((item,idx) => (
                  <MainSectionItem title={item.title} key={idx}>{item.view}</MainSectionItem>
                ))}
              </View>
            </ScrollView>
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });