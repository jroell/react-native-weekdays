// import
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// create a react Component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function(){
    dayItems = [];

    for (var i = 0; i < 7; i++) {
      day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return dayItems;
  }
})

// style to Component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// show the React Component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
