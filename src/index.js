import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Clock from './components/Clock';
// import './index.css';
// import './bootstrap.min.css';
// import App from './App';
// import Main from './main/Main';

// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerId = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillMount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, World</h1>
//         <h2>ini {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
