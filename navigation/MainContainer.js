import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import { HomeStack, ProgrammeStack, WorkoutsStack } from './StackNavigation';

//Screen names
const homeName = "Home";
const workoutsScreen = "Workouts";
const programmeName = "Programme";

const Tab = createMaterialBottomTabNavigator();

function MainContainer() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                activeColor="blueviolet"
                inactiveColor="grey"
                barStyle={{ backgroundColor: 'white' }}
                shifting={true}

                >

                <Tab.Screen options={
                    {
                        tabBarLabel: homeName,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Ionicons name="home" size={24} color={color} />
                            );
                        },
                    }
                } name={homeName} component={HomeStack} />
                <Tab.Screen options={
                    {
                        tabBarLabel: workoutsScreen,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Ionicons name="barbell" size={24} color={color} />
                            );
                        },
                    }
                } name={workoutsScreen} component={WorkoutsStack} />
                <Tab.Screen options={
                    {
                        tabBarLabel: programmeName,
                        tabBarIcon: ({ color }) => {
                            return (
                                <Ionicons name="trending-up" size={24} color={color} />
                            );
                        },
                    }
                } name={programmeName} component={ProgrammeStack}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;