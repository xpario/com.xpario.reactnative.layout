// ************************************************************
// Layout Components
// ************************************************************
import {View, StyleSheet} from "react-native";

// ************************************************************
// Constants
// ************************************************************
const debug = false;

// ************************************************************
// Spacer Component
// ************************************************************
function Spacer(props) {

    // Define various properties for the component
    const properties = {
        style: props.style,
        size: props.size || 10,
        factor: props.factor || 1,
    };

    let size = properties.size * properties.factor;
    return (
        <View style={[
            properties.style,
            debug && styles.debug,
            {
                width: size,
                height: size,
            }
        ]}>
        </View>
    )
}

// ************************************************************
// Row Component
// ************************************************************
function Row(props) {

    // Define various properties for the component
    const properties = {
        style: props.style,
    };

    return (
        <View
            {...props}
            style={[
                row_styles.defaults,
                properties.style,
                debug && styles.debug,
            ]}
        >
            {props.children}
        </View>
    )
}

// ************************************************************
// Styles
// ************************************************************
const row_styles = StyleSheet.create({
    defaults: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})

const styles = StyleSheet.create({
    debug: {
        borderWidth: 1, borderColor: 'red',
    },
});

// ************************************************************
// Exports
// ************************************************************
export {Row, Spacer};