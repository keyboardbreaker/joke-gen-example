import './App.css';
import React from 'react';
const BASE_URL = "https://official-joke-api.appspot.com/random_ten";
  
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateData: [],
    }
  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        stateData: data
      });
      console.log(this.state.stateData);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.stateData.map((dataRow) => {
            return <div key={dataRow.id}>{dataRow.id}, {dataRow.setup}</div>
          })
        }
      </div>
    )
  }
}

export default App;
