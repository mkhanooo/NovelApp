import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  StatusBar,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";
import ScreenModal from "../../components/Modal";

const logo = require("../../assets/foodie.png");
const window = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <StatusBar></StatusBar>
      <ScrollView>
        {/* <ScreenModal /> */}
        <View style={styles.pageWrapper}>
          <Feather
            name="arrow-left"
            style={styles.headerIcon}
            onPress={() => navigation.goBack()}
          />
          <Text
            name="arrow-left"
            style={styles.headerSkip}
            onPress={() => navigation.navigate("Library")}
          >
            Skip
          </Text>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={logo} />
            <Text style={styles.logoText}>Hi, NovelCat</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.facebook}>
              <Entypo name="facebook-with-circle" size={24} color="#fff" />
              <Text style={styles.facebookText}>Sign in with Facebook</Text>
            </View>
            <View style={styles.google}>
              <FontAwesome5 name="google-plus" size={24} color="#fff" />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomOr}>
              ---------------- Or ----------------
            </Text>
            <View style={styles.bottomIcons}>
              <View style={styles.bottomLineWrapper}>
                <Ionicons
                  name="md-chatbubble-ellipses-sharp"
                  style={styles.bottomIcon}
                />
              </View>
              <View style={styles.bottomMailWrapper}>
                <FontAwesome style={styles.bottomIcon} name="envelope" />
              </View>
            </View>
            <Text style={styles.bottomText}>
              By creating an account, I accept NovelCat's
            </Text>
            <Text style={styles.bottomLink}>Terms of Services</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    minHeight: window.height,
    maxHeight: window.height,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    top: "2%",
    left: "5%",
    fontSize: 22,
  },
  headerSkip: {
    position: "absolute",
    top: "2%",
    right: "5%",
    fontWeight: "bold",
  },
  logo: {
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "800",
  },
  buttons: {},
  facebook: {
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 100,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  facebookText: {
    color: "#fff",
    marginLeft: 5,
  },
  google: {
    backgroundColor: "rgb(219, 68, 55)",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
  },
  googleText: {
    color: "#fff",
    marginLeft: 5,
  },
  bottom: { textAlign: "center", marginVertical: 20 },
  bottomOr: {
    textAlign: "center",
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  bottomLineWrapper: {
    backgroundColor: "#00B900",
    borderRadius: 100,
    padding: 10,
  },
  bottomMailWrapper: {
    backgroundColor: "#FD5DAB",
    borderRadius: 100,
    padding: 10,
  },
  bottomIcon: {
    fontSize: 25,
    color: "#fff",
  },
  bottomText: {
    justifyContent: "center",
    color: "#222",
  },
  bottomLink: {
    textAlign: "center",
    marginBottom: 10,
    textDecorationLine: "underline",
    color: "#413ACA",
  },
});
