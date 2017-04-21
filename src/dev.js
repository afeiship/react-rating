import './dev.scss';
import ReactRating from './main';


class App extends React.Component{

  state = {
    count:10,
    value:2
  };

  _onChange(inEvent){
    console.log(inEvent.target.value);
  }


  _click1(){
    const value = Math.floor(Math.random()*10) ||  1;
    console.log(value);
    this.setState({value});
  }

  _click2(){
    const count = Math.floor(Math.random()*20) || 20;
    console.log(count);
    this.setState({count});
  }


  render(){
    return (
      <div className="hello-react-rating">
        <button onClick={this._click1.bind(this)}>Change Value</button>
        <button onClick={this._click2.bind(this)}>Change Count</button>
        <ReactRating value={this.state.value} count={this.state.count} onChange={this._onChange.bind(this)}>
          <span className="star"></span>
        </ReactRating>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
