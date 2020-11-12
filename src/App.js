import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    employees: [],
    filteredEmployees: []
  }
  componentDidMount() {
    fetch ('https://randomuser.me/api/?results=20').then(res => res.json()).then(res => {
      this.setState({employees: res.results, filteredEmployees: res.results})
    });
  }
  handleChange(event){
    console.log(event.target.value)
    const filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({filteredEmployees})
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange = {this.handleChange.bind(this)}/>
        <table>
          <thead>
            <tr>
              <td>First name</td>
              <td>Last name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map(employee => {
              return(
                <tr>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
