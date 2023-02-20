import { StyleSheet, Text, View } from "react-native";

interface DividerProps {
  color: string | undefined;
  width: number | undefined;
  textColor: string | undefined;
  margin: number | undefined;
  text: string | undefined;
}

const Divider = (props: DividerProps) => {
  const { text } = props;

  let color = props.color || "#DDD";
  let width = props.width || 1;
  let textColor = props.textColor || color;
  let margin = props.margin || 5;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginLeft: margin, justifyContent: "center" }}>
        <View style={{ height: width, backgroundColor: color }}></View>
      </View>
      {text && (
        <View style={{ justifyContent: "center" }}>
          <Text style={{ paddingLeft: 15, paddingRight: 15, color: textColor }}>{text}</Text>
        </View>
      )}
      <View style={{ flex: 1, marginRight: margin, justifyContent: "center" }}>
        <View style={{ height: width, backgroundColor: color }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Divider;
