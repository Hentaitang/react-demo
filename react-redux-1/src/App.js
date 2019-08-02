import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }
  add1() {
    this.props.store.dispatch({ type: 'add', payload: 1 });
  }
  add2() {
    this.props.store.dispatch({ type: 'add', payload: 2 });
  }
  addIf() {
    if (this.props.store.getState() % 2 === 1) {
      this.props.store.dispatch({ type: 'add', payload: 1 });
    }
  }
  addAsync() {
    setTimeout(() => {
      this.props.store.dispatch({ type: 'add', payload: 1 });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        你点击了{this.props.value}次
        <div>
          <button onClick={() => this.add1()}>+1</button>
          <button onClick={() => this.add2()}>+2</button>
          <button onClick={() => this.addIf()}>如果是单数就+1</button>
          <button onClick={() => this.addAsync()}>两秒后+1</button>
        </div>
      </div>
    );
  }
}

export default App;
