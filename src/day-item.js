// import some code
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// create our Component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// style our Component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: 'green'
  }
});

// make Component available
module.exports = DayItem;
