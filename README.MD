# react-rating
> React component for stars rating.


## properties:
```javascript
  static propTypes = {
    className:PropTypes.string,
    count:PropTypes.number,
    onChange:PropTypes.func,
    value:PropTypes.number
  };
```

## usage:
```jsx
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
```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

