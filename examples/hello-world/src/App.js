import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)}
        highlightDates={[moment().subtract(7, "days"), moment().add(7, "days")]}
        highlightDates2={[moment().subtract(3, "days"), moment().add(3, "days")]}
        highlightDates3={[moment().subtract(2, "days"), moment().add(9, "days")]}
      />
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default App;
