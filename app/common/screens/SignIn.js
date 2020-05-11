import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Animated,
  Text,
  TextInput,
} from "react-native";
import commonStyles from "common/themes/styles";
import NavigationBar from "common/components/NavigationBar";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appContainer}>
        <Text style={[styles.animatedText]}>{"SignIn"}</Text>
        <TextInput
          placeholder={"login"}
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder={"password"}
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <View />
        <NavigationBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.mainView,
  },
  appContainer: {
    flex: 1,
    alignSelf: "stretch",
    padding: 16,
    justifyContent: "space-between",
    paddingTop: 70,
  },
  title: {
    ...commonStyles.title,
  },
  subtitle: {
    ...commonStyles.subtitle,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  animatedText: {
    fontSize: 40,
    fontWeight: "900",
    color: "white",
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: "white",
  },
});

export default SignIn;
