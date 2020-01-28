import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const pickerTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: 'rgb(240, 92, 92)',
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: 'rgb(240, 92, 92)',
    },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: 'rgb(240, 92, 92)',
        '&:hover': {
          backgroundColor: 'rgb(240, 92, 92)',
        }
      },
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: 'rgb(240, 92, 92)',
    },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: 'rgb(240, 92, 92)',
    },
      thumb: {
        border: '14px solid rgb(240, 92, 92)',
    },
      noPoint: {
        backgroundColor: 'rgb(240, 92, 92)',
    },
    },
    MuiPickersClockNumber: {
      clockNumberSelected: {
        backgroundColor : 'rgb(240, 92, 92)',
    },
    },
    MuiButton: {
      label: {
        color : 'rgb(240, 92, 92)',
    },
    },
  },
});

class TodoItem extends React.Component{

  constructor(){
    super()
  }

  timeChanged

  render(){

    // const [selectedDate, handleDateChange] = useState(new Date());

    return (
      <tr className="selectItem">
  <td className="itemName" align="left"><input type="checkbox" className="checkBox" name={`${this.props.id}`} id={`${this.props.id}`} title={`${this.props.name}`} onClick={(e) => {this.props.changeStatus(e)}}></input><label htmlFor={`${this.props.id}`}>{this.props.name}</label></td>
        <td className="dtPicker dtPicker-left" align="left">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={pickerTheme}>
              <KeyboardDateTimePicker value={this.props.start_time} format="dd-MM-yy hh:mm" name={`start_time_${this.props.id}`} inputProps={{style: {fontSize: 10, width : 70}}} onChange={this.props.timeChange}/>
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </td>
        <td className="dtPicker dtPicker-left" align="left">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={pickerTheme}>
              <KeyboardDateTimePicker value={this.props.end_time} format="dd-MM-yy hh:mm" name={`end_time_${this.props.id}`} inputProps={{style: {fontSize: 10, width : 70}}} onChange={() => console.log("Changed")}/>
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
