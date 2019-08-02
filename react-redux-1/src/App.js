import React from 'react';
import { connect } from 'react-redux';

/*
 * use redux
 */
// class App extends React.Component {
//   constructor() {
//     super();
//   }
//   add1() {
//     this.props.store.dispatch({ type: 'add', payload: 1 });
//   }
//   add2() {
//     this.props.store.dispatch({ type: 'add', payload: 2 });
//   }
//   addIf() {
//     if (this.props.store.getState() % 2 === 1) {
//       this.props.store.dispatch({ type: 'add', payload: 1 });
//     }
//   }
//   addAsync() {
//     setTimeout(() => {
//       this.props.store.dispatch({ type: 'add', payload: 1 });
//     }, 2000);
//   }
//   render() {
//     return (
//       <div className="App">
//         你点击了{this.props.value}次
//         <div>
//           <button onClick={() => this.add1()}>+1</button>
//           <button onClick={() => this.add2()}>+2</button>
//           <button onClick={() => this.addIf()}>如果是单数就+1</button>
//           <button onClick={() => this.addAsync()}>两秒后+1</button>
//         </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        你点击了{this.props.n}次
        <div>
          <button onClick={() => this.props.add1()}>+1</button>
          <button onClick={() => this.props.add2()}>+2</button>
          <button>如果是单数就+1</button>
          <button>两秒后+1</button>
        </div>
        <div>
          <a href="https://codesandbox.io/s/heuristic-fermi-vnowd">
            React Context
          </a>
        </div>
        <div>
          <a href="https://codesandbox.io/s/cool-browser-5i794"> React-redux</a>
        </div>
      </div>
    );
  }
}

function getPartialState(state) {
  return {
    n: state.n
  };
}

const actionCreator = {
  add1: () => {
    return { type: 'add', payload: 1 };
  },
  add2: () => {
    return { type: 'add', payload: 2 };
  }
};

// export default App;
export default connect(
  getPartialState,
  actionCreator
)(App);
