import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedTabIndex: 0};
  }


  // {tabs: [
  //   {title: something, content: somethingelse}
  //   {title: something, content: somethingelse}
  //   {title: something, content: somethingelse}
  //   {title: something, content: somethingelse}
  //   {title: something, content: somethingelse}
  // ]}
  selectTab(index){
    this.setState({selectedTabIndex: index});
  }

  render() {

    const tabTitles = this.props.tabs.map((tab, i) => (
      <li key={tab.title + i} onClick={this.selectTab.bind(this,i)}>
        <h1> { tab.title } </h1>
      </li>
    ));

    return (
      <div>
        <ul>
          { tabTitles }
        </ul>
        <article>
          { this.props.tabs[this.state.selectedTabIndex].content }
        </article>
      </div>
    );
  }
}

export default Tabs;
