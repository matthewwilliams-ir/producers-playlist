import React, {Component} from 'react';
import {AutoComplete} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      searchText : ''
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

    const url = 'https://api.genius.com/search?q=' + this.state.searchText +
    "&access_token=W1Hzi8KvAYuZ5BAjlOvz_N1zsR1FjN6SuyvhTIJX8EVUr8h6lk-FOeJ2YDiBAEdp";

    fetch(url, {
      method : 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({
      dataSource: json.response.hits
        .map(song => song.result.primary_artist.id)
        .filter((value, index, artist) => artist.indexOf(value) === index)
    }))
    .catch(error => console.error('Error:', error))
  }

  findArtistTracks() {
    const url = "https://api.genius.com/artists/1421/songs?sort=popularity&access_token=W1Hzi8KvAYuZ5BAjlOvz_N1zsR1FjN6SuyvhTIJX8EVUr8h6lk-FOeJ2YDiBAEdp";

    fetch(url, {
      method : 'GET'
    })
    .then(response => response.json())
    .then(json => console.log(json.response.songs.map(song => song.full_title)))
    .catch(error => console.error('Error:', error))
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="search-box">
        <AutoComplete
          floatingLabelText="Search Producer"
          dataSource = {this.state.dataSource}
          onUpdateInput = {this.onUpdateInput}/>
        <FlatButton
          label="Search"
          onClick = {this.findArtistTracks}/>
      </div>
      </MuiThemeProvider>
  }
}

export default SearchBox;
