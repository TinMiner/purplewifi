import React, { Component } from 'react';
import mock from './data/mock.json';

class App extends Component {

  state = {
    mock,
    names: [],
	frequencies: []
  }

  componentDidMount() {
    let { mock, names, frequencies} = this.state;

    names = mock.map(n => n.name);
	frequencies = mock.map(f => f.frequency);
    this.setState({ names });
	this.setState({ frequencies });
  }

  sortAscending = () => {
    const { names } = this.state;
    names.sort()    
    this.setState({ names })
  }

  sortDescending = () => {
    const { names } = this.state;
    names.reverse()
    this.setState({ names })
  }

  render() {
    const { names } = this.state;
    const { frequencies } = this.state;
	
    return (
      <div>
        <table style={{ background: '#efefef', width: '100%', border: '10px solid purple' }}>
		  <tr style={{ background: '#ccc', width: '100%' }}>
		    <th>Name</th><th>Frequency</th>
          </tr>
          {
            names.map((n, f) => {
              return (
			    <tr>
					<td style={{ textAlign: "center" }}>{n}</td>
					<td style={{ textAlign: "center" }}>hello</td>
				</tr>
				);
            })
          }
        </table>
		<br />
        <button onClick={this.sortAscending}>Asc</button>&nbsp;&nbsp;
        <button onClick={this.sortDescending}>Desc</button>
      </div>
    );
  }
}

export default App;