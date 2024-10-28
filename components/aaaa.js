import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";

const Home1 = () => {
  return (
    <View style={styles.view1}>
      <div style={styles.div1}>
        <div style={styles.div2}>
          <div style={styles.div3}>
            <View style={styles.view2}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c68bf470c3ab88787e2c4fc86e73fa3145fdb95e464681660876954b542fc4a8?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
                }}
                style={styles.image1}
              />
              <View style={styles.view3}>
                <View style={styles.view4}>
                  <Text>Search</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ceee35d297d4c0fe5453107e73e7fbb494e6164c747eb1afdb410a1be3052fd4?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
                  }}
                  style={styles.image2}
                />
              </View>
            </View>
          </div>
          <div style={styles.div4}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b6b6c3da1393a2a24abd74e161d46af97895a2cdc978c39c75dbecd7576bb9b?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
              }}
              style={styles.image3}
            />
          </div>
        </div>
      </div>
      <View style={styles.view5}>
        <View style={styles.view6}>
          <View style={styles.view7}>
            <View style={styles.view8}>
              <Text>#SpecialForYou</Text>
            </View>
            <View style={styles.view9}>
              <Text>See All</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7deec49bd47673ddc1f00a8be5e0bad22190a8b026f8845d31829e92c7e356fb?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
        }}
        style={styles.image4}
      />
      <View style={styles.view10}>
        <View style={styles.view11}>
          <Text>Categories</Text>
        </View>
        <View style={styles.view12}>
          <Text>See All</Text>
        </View>
      </View>
      <View style={styles.view13}>
        <View style={styles.view14}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf0e713b2de6f1ac794a9e002bcceecf35fb587504bc1578cd4d6ccf5ea11ffe?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image5}
          />
          <View style={styles.view15}>
            <Text>Electronic</Text>
          </View>
        </View>
        <View style={styles.view16}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b12882f942c842f1f7644a6193a7d46b656586ffbc9dd12492e6ce19d8df6c3c?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image6}
          />
          <View style={styles.view17}>
            <Text>Furniture</Text>
          </View>
        </View>
        <View style={styles.view18}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c26b5f1a5c08e59c81d35736d4e72f1c2adcadb76be709b76cd186f49157b444?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image7}
          />
          <View style={styles.view19}>
            <Text>Sports</Text>
          </View>
        </View>
        <View style={styles.view20}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b88377de121c431b44259700d4fb2e6a36f3cc0f8c38d61a6101d7e9116131d2?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image8}
          />
          <View style={styles.view21}>
            <Text>Fashion</Text>
          </View>
        </View>
        <View style={styles.view22}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/13df6841a21a06c9f3fbd920fa48ccf34705831d65158d19f882a068e6f346be?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image9}
          />
          <View style={styles.view23}>
            <Text>Vehicles</Text>
          </View>
        </View>
      </View>
      <View style={styles.view24}>
        <View style={styles.view25}>
          <Text>Popular Bidder</Text>
        </View>
        <View style={styles.view26}>
          <Text>See All</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7deec49bd47673ddc1f00a8be5e0bad22190a8b026f8845d31829e92c7e356fb?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
        }}
        style={styles.image10}
      />
      <View style={styles.view27}>
        <View style={styles.view28}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/70d53dacdd95921279eebd1815f168abf2e09db0cb2f0ea0caa95f7e27bd79b3?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image11}
          />
          <View style={styles.view29}>
            <Text>Home</Text>
          </View>
        </View>
        <View style={styles.view30}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7ee6b3118e2a963d3862d6e005f2dc3ac45ea84e3028078dc4462a8d9e77099?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image12}
          />
          <View style={styles.view31}>
            <Text>Browse</Text>
          </View>
        </View>
        <View style={styles.view32}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3f6e68b427cfd745f14e3f98354c931ab4cb6f176b9b6cedde175baea6996cb?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image13}
          />
          <View style={styles.view33}>
            <Text>Create Bid</Text>
          </View>
        </View>
        <View style={styles.view34}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8fd0c85d47d1e040a3dd9ce81d25d780ed8dc22970053c55fc948730e41ca44?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image14}
          />
          <View style={styles.view35}>
            <Text>My Bidding</Text>
          </View>
        </View>
        <View style={styles.view36}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e50e90667eb2b28fd3942cbef9ca77b0216cd0595631ca4603f68c9560564ad?placeholderIfAbsent=true&apiKey=91d6d53fcdbd452cbd28f552901cb66b",
            }}
            style={styles.image15}
          />
          <View style={styles.view37}>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 102,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "start",
    margin: "0 auto",
  },
  div1: {
    borderRadius: "22px 22px 0px 0px",
    backgroundColor: "rgba(72, 59, 153, 1)",
    width: "100%",
    overflow: "hidden",
    padding: "22px 26px",
  },
  div2: { gap: 20, display: "flex" },
  div3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "79%",
  },
  view2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    color: "var(--sds-color-text-default-tertiary)",
    whiteSpace: "nowrap",
    font: "var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium)/1 var(--sds-typography-body-font-family) ",
  },
  image1: {
    position: "relative",
    display: "flex",
    width: 44,
    aspectRatio: "1",
  },
  view3: {
    borderRadius: 9999,
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    marginTop: 40,
    minHeight: 40,
    alignItems: "center",
    gap: 8,
    overflow: "hidden",
    justifyContent: "end",
    padding: "12px 16px",
    border: "1px solid rgba(217, 217, 217, 1)",
  },
  view4: {
    opacity: "var(--sds-size-stroke-border)",
    alignSelf: "stretch",
    width: 183,
    margin: "auto 0",
  },
  image2: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 16,
    flexShrink: 0,
    margin: "auto 0",
    aspectRatio: "1",
  },
  div4: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "21%",
    marginLeft: 20,
  },
  image3: {
    position: "relative",
    display: "flex",
    marginTop: 6,
    width: 64,
    flexShrink: 0,
    flexGrow: "1",
    aspectRatio: "0.54",
  },
  view5: {
    display: "flex",
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    justifyContent: "start",
  },
  view6: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "start",
  },
  view7: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "40px 87px",
    justifyContent: "space-between",
    padding: "0 27px 0 28px",
  },
  view8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    alignSelf: "stretch",
    width: 191,
    margin: "auto 0",
  },
  view9: {
    color: "rgba(51, 102, 204, 1)",
    fontSize: 16,
    textAlign: "right",
    alignSelf: "stretch",
    width: 67,
    margin: "auto 0",
  },
  image4: {
    position: "relative",
    display: "flex",
    marginTop: 16,
    width: "100%",
    aspectRatio: "2.35",
  },
  view10: {
    display: "flex",
    marginTop: 16,
    width: "100%",
    alignItems: "start",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    justifyContent: "space-between",
    padding: "0 29px",
  },
  view11: {
    minWidth: 240,
    fontSize: 22,
    color: "rgba(0, 0, 0, 1)",
    whiteSpace: "nowrap",
    flex: "1",
    flexShrink: "1",
  },
  view12: {
    color: "rgba(51, 102, 204, 1)",
    fontSize: 16,
    textAlign: "right",
    width: 67,
  },
  view13: {
    alignSelf: "center",
    display: "flex",
    marginTop: 16,
    width: "100%",
    alignItems: "center",
    gap: 6,
    color: "rgba(0, 0, 0, 1)",
    whiteSpace: "nowrap",
    textAlign: "center",
    justifyContent: "space-between",
    font: "600 14px Poppins, sans-serif ",
  },
  view14: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    width: 75,
    margin: "auto 0",
    padding: "0 2px 6px",
  },
  image5: {
    position: "relative",
    display: "flex",
    width: 68,
    aspectRatio: "1.36",
  },
  view15: { marginTop: 16 },
  view16: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    width: 75,
    margin: "auto 0",
    padding: "0 4px 6px",
  },
  image6: {
    position: "relative",
    display: "flex",
    width: 68,
    aspectRatio: "1.36",
  },
  view17: { marginTop: 16 },
  view18: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    width: 75,
    margin: "auto 0",
    padding: "1px 4px",
  },
  image7: {
    position: "relative",
    display: "flex",
    width: 68,
    aspectRatio: "1.36",
  },
  view19: { alignSelf: "center", marginTop: 17 },
  view20: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    width: 75,
    margin: "auto 0",
    padding: "0 4px 6px",
  },
  image8: {
    position: "relative",
    display: "flex",
    width: 68,
    aspectRatio: "1.36",
  },
  view21: { alignSelf: "center", marginTop: 16 },
  view22: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    width: 75,
    margin: "auto 0",
    padding: "0 4px 6px",
  },
  image9: {
    position: "relative",
    display: "flex",
    width: 68,
    aspectRatio: "1.36",
  },
  view23: { marginTop: 16 },
  view24: {
    display: "flex",
    marginTop: 16,
    width: "100%",
    alignItems: "start",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    justifyContent: "space-between",
    padding: "0 29px",
  },
  view25: {
    minWidth: 240,
    fontSize: 22,
    color: "rgba(0, 0, 0, 1)",
    flex: "1",
    flexShrink: "1",
  },
  view26: {
    color: "rgba(51, 102, 204, 1)",
    fontSize: 16,
    textAlign: "right",
    width: 67,
  },
  image10: {
    position: "relative",
    display: "flex",
    marginTop: 16,
    width: "100%",
    aspectRatio: "2.35",
  },
  view27: {
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
    display: "flex",
    marginTop: 16,
    width: "100%",
    alignItems: "start",
    gap: 20,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "space-between",
    padding: "7px 24px 32px",
    font: "700 13px Inter, sans-serif ",
  },
  view28: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    whiteSpace: "nowrap",
  },
  image11: {
    position: "relative",
    display: "flex",
    width: 24,
    aspectRatio: "1",
  },
  view29: { marginTop: 4 },
  view30: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    whiteSpace: "nowrap",
  },
  image12: {
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 24,
    aspectRatio: "1",
  },
  view31: { marginTop: 4 },
  view32: { display: "flex", flexDirection: "column", alignItems: "stretch" },
  image13: {
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 24,
    aspectRatio: "1",
  },
  view33: { marginTop: 4 },
  view34: { display: "flex", flexDirection: "column", alignItems: "stretch" },
  image14: {
    alignSelf: "center",
    position: "relative",
    display: "flex",
    width: 24,
    aspectRatio: "1",
  },
  view35: { marginTop: 4 },
  view36: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    whiteSpace: "nowrap",
  },
  image15: {
    position: "relative",
    display: "flex",
    width: 24,
    aspectRatio: "1",
  },
  view37: { marginTop: 4 },
});

export default Home1;