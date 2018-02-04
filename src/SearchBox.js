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
      searchText : '',
    }
  }

  onUpdateInput(searchText) {
    this.setState({
      searchText: searchText
    }, function() {
      this.performSearch();
    });
  }

  performSearch() {
    const url = 'api.genius.com/search/artist?q=' + this.state.searchText;

    fetch(url, {
      method : 'GET',
      headers : new Headers({
        'Authorization': 'Bearer W1Hzi8KvAYuZ5BAjlOvz_N1zsR1FjN6SuyvhTIJX8EVUr8h6lk-FOeJ2YDiBAEdp'
      })
    })
    .then(response => console.log('Success', response))
    .catch(error => console.error('Error:', error))
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
