# Travel App
A travel app using native device features, React Navigation, Redux and Redux-Thunk.

## Features
- displaying your favorite places.
- adding a place to favorites by taking a picture and setting your location, via GPS or on a map.
- showing place details with address and opening a fullscreen map.

## Native device features
- handling permissions with expo-permissions.
- taking pictures with the camera thanks to expo-image-picker.
- getting the location via GPS with expo-location.
- storing the image taken on the device with expo-file-system.
- using SQLite database to store the favorite places with expo-sqlite.
- handling SQLite queries to fetch data.

## Maps
- using React Native Maps to display maps and handle markers.
- using Google Maps Static API to display location preview.
- using Google Maps Geocoding API to retrieve an address from GPS coordinates.

## React Navigation
- handling stack of screens with createStackNavigator and createAppContainer.
- using props.navigation to navigate between screens.
- handling data from component to header with setParams and getParam.
- custom header title with navigationOptions.
- custom button in the header with react-navigation-header-buttons.

## Redux, React-Redux and Redux-Thunk
- using actions and reducers to store favorite places.
- using Redux-thunk as a middleware to add async code.
- using useSelector hook to get the state.
- using props.navigation to pass data to the header without re-render.
- using useDispatch hook to dispatch actions. 
- passing useDispatch to the header with useEffect and useCallback to limit re-render cycles.

## React Native
- using FlatList, TouchableOpacity, ScrollView, ActivityIndicator and Alert.
- custom components for place item, image picker, location picker and map preview.
- color constants.
- using React hooks (useState, useEffect, useCallback).

Based on [React Native - The Practical Guide](https://www.udemy.com/react-native-the-practical-guide/) by Maximilian Schwarzmüller.
