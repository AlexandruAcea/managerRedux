import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableOpacity>
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
