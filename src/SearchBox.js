import React, {Component} from 'react';
import {AutoComplete} from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : '',
    }
  }

  onUpdateInput(inputValue) {
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        hintText="Enter Producer Name"
        dataSource = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput}/>
      </MuiThemeProvider>
  }
}

export default SearchBox;
