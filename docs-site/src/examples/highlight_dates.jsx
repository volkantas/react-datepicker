import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default React.createClass({
  displayName: 'highlightDates',

  getInitialState () {
    return {
      startDate: null
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {'<DatePicker'}<br />
              {'selected={this.state.startDate}'}<br />
              {'onChange={this.handleChange}'}<br />
              <strong>{'highlightDates={[moment().subtract(7, "days"), moment().add(7, "days")]}'}</strong><br />
              {'placeholderText="This highlights a week ago and a week from today" />'}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            highlightDates={[moment().subtract(7, 'days'), moment().add(7, 'days')]}
            highlightDates2={[moment().subtract(2, 'days'), moment().add(9, 'days')]}
            highlightDates3={[moment().subtract(5, 'days'), moment().add(3, 'days')]}
            placeholderText="This highlights a week ago and a week from today" />
      </div>
    </div>
  }
})
