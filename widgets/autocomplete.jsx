import React from 'react';

class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.searchResult = this.searchResult.bind(this);
  }

  search(e) {
    this.setState({inputValue: e.currentTarget.value});
  }

  searchResult() {
    const validNames =this.props.names.filter((name)=> name.startsWith(this.state.inputValue));
    return validNames.map((name)=><li key={name}>{name}</li>);

  }

  render() {

    return (
      <div>
        <input onChange={this.search.bind(this)}/>
        <ul>
          {this.searchResult()}
        </ul>
      </div>
    );
  }

}

export default Autocomplete;
