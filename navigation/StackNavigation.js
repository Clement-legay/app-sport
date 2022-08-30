import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";


import HomeScreen from "./tabs/HomeTab/HomeScreen";

import WorkoutsScreen from "./tabs/WorkoutsTab/WorkoutsScreen";
import AboutMuscleScreen from "./tabs/WorkoutsTab/AboutMuscleScreen";
import AboutBodyZoneScreen from "./tabs/WorkoutsTab/AboutBodyZoneScreen";
import AboutWorkoutScreen from "./tabs/WorkoutsTab/AboutWorkoutScreen";

import ProgrammeScreen from "./tabs/ProgrammeTab/ProgrammeScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Workouts"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="WelcomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export const WorkoutsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Workouts"
            screenOptions={ ({ route }) => ({
                    headerShown: route.name !== "WorkoutsScreen",
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderWidth: 0,
                    }
                }
            )}
        >
            <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} />
            <Stack.Screen name="AboutMuscleScreen" component={AboutMuscleScreen} />
            <Stack.Screen name="AboutBodyZoneScreen" component={AboutBodyZoneScreen} />
            <Stack.Screen name="AboutWorkoutScreen" component={AboutWorkoutScreen} />
        </Stack.Navigator>
    );
}

export const ProgrammeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Programme"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ProgrammeScreen" navigation={() => {useNavigation()}} component={ProgrammeScreen} />
        </Stack.Navigator>
    );
}