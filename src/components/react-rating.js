import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    count:PropTypes.number,
    onChange:PropTypes.func,
    value:PropTypes.number
  };

  static defaultProps = {
    count:5,
    onChange:noop,
    value:0
  };

  constructor(props) {
    super(props);
    this.state = {
      value:props.value
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.props.value){
      this.setState({value:nextProps.value});
    }
  }


  getChildren(){
    let newChildren= [];
    const {count,children} = this.props;
    const {value} = this.state;

    for(let i =0;i<count;i++){
      newChildren.push(
        this.getChild(i < value,i)
      );
    }

    return newChildren;
  }

  getChild(inValue,inKey){
    const {children} = this.props;
    return React.cloneElement(children,{
      'data-active':inValue,
      key:inKey,
      onClick:this._onClick.bind(this,inKey)
    });
  }

  _onClick(inKey,inEvent){
    const {onChange} = this.props;
    const value = inKey + 1;
    this.setState({value},()=>{
      onChange({
        event:inEvent,
        target:{value}
      });
    });
  }

  render(){
    return (
      <div className={classNames('react-rating',this.props.className)}>
        {this.getChildren()}
      </div>
    );
  }
}
