import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeCreate();
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: "black",
    paddingLeft: 15
  }
};

export default ListItem;
