module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '!**/index.js',
    '!**/node_modules/**',
    '!<rootDir>/*.config.js',
    '**/*.{js,jsx,ts,tsx}',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|@sentry/react-native|native-base|react-native-svg|@agriness-mobile/react-native-components|victory|@agriness/365-agriness-translate|victory-core|@sentry/core|uuid)',
  ],
};
