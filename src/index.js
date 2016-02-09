/* jshint strict: true */
/* jshint esversion: 6 */

/**
 * @author oliviercolonna@gmail.com
 * Copyright(c) 2016 Olivier Colonna
 * All rights reserved
 * MIT Licensed
 *
 * ReactList
 */

import React from 'react';

class ReactList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [],
      focused: null
    }
  }

  componentDidMount () {
    const { data } = this.props;

    this.setState({data: data});
  }

  /**
   * [addCls description]
   * @param {[type]} cls    [description]
   * @param {[type]} prefix [description]
   * @param {[type]} suffix [description]
   */
  addCls (cls = void 0, prefix = void 0, suffix = void 0) {
    const me = this;

    if(typeof cls != 'string' || typeof prefix != 'string' || typeof suffix != 'string') {
      console.warn(`Invalid ${cls} ${prefix} ${suffix} must be a string`);
      return false;
    }

    const kls = `${me.refs.ReactList.className} ${prefix}${cls}${suffix}`;

    me.refs.ReactList.className = kls;
  }

  /**
   * [getAt description]
   * @param  {Number} index [description]
   * @return {[type]}       [description]
   */
  getAt (index = 0) {
    if(typeof index != 'number') {
      console.warn(`Invalid index of ${index} must be a valid number`);
      return false;
    }

    return this.state.data[index];
  }

  /**
   * [getCls description]
   * @return {[type]} [description]
   */
  getCls () {
    if(this.props.cls === null || this.props.cls.length === 0) {
      return `list`;
    } else {
      return `list ${this.props.cls}`;
    }
  }

  /**
   * [getData description]
   * @return {[type]} [description]
   */
  getData () {
    return this.props.data;
  }

  /**
   * [getItemAt description]
   * @param  {Number} index [description]
   * @return {[type]}       [description]
   */
  getItemAt (index = 0) {
    return this.refs.ReactList.children[index];
  }

  /**
   * [getItemCls description]
   * @return {[type]} [description]
   */
  getItemCls () {
    return this.props.itemCls;
  }

  /**
   * [getItems description]
   * @return {[type]} [description]
   */
  getItems () {
    return this.refs.ReactList.children;
  }

  /**
   * [getHeight description]
   * @return {[type]} [description]
   */
  getHeight () {
    return this.refs.ReactList.offsetHeight;
  }

  /**
   * [getWidth description]
   * @return {[type]} [description]
   */
  getWidth () {
    return this.refs.ReactList.offsetWidth;
  }

  /**
   * [insert description]
   * @param  {Number} index [description]
   * @param  {Object} item  [description]
   * @return {[type]}       [description]
   */
  insert (index = 0, item = {}) {
    const me = this;
    const i = void 0;
    const array = me.state.data;

    if(typeof index != 'number') {
      console.warn(`Invalid index of ${index} must be a valid number`);
      return false;
    }

    array.splice(index, 0, item);
    me.setState({data: array});
  }

  /**
   * [onItemTap description]
   * @param  {[type]} dataItem   [description]
   * @param  {[type]} index      [description]
   * @param  {[type]} touchEvent [description]
   * @param  {[type]} reactId    [description]
   * @param  {[type]} e          [description]
   * @return {[type]}            [description]
   */
  onItemTap (dataItem, index, touchEvent, reactId, e) {
    this.setState({focused: index});
  }

  /**
   * [onItemTapEnd description]
   * @param  {[type]} dataItem   [description]
   * @param  {[type]} index      [description]
   * @param  {[type]} touchEvent [description]
   * @param  {[type]} reactId    [description]
   * @param  {[type]} e          [description]
   * @return {[type]}            [description]
   */
  onItemTapEnd (dataItem, index, touchEvent, reactId, e) {
    this.props.children.props.onTapItem(dataItem, index, touchEvent, reactId, e);
    this.setState({focused: index});
  }

  /**
   * [removeAll description]
   * @param  {Boolean} destroy    [description]
   * @param  {Boolean} everything [description]
   * @return {[type]}             [description]
   */
  removeAll (destroy = true, everything = true) {
    this.setState({saveData: this.state.data});
    // TO DO: find if it is a ref of item of really data to be destroyed
    this.setState({data: []});
  }

  /**
   * [removeAt description]
   * @param  {Number} index [description]
   * @return {[type]}       [description]
   */
  removeAt (index = 0) {
    if(typeof index != 'number') {
      console.warn(`Invalid index of ${index} must be a valid number`);
      return false;
    }

    const me = this;
    const array = me.state.data;
    array.splice(index, 1);

    me.setState({data: array});
  }

  /**
   * [removeCls description]
   * @param  {[type]} cls    [description]
   * @param  {[type]} prefix [description]
   * @param  {[type]} suffix [description]
   * @return {[type]}        [description]
   */
  removeCls (cls, prefix, suffix) {
    // remove a specific class
  }

  /**
   * [setCls description]
   * @param {[type]} cls [description]
   */
  setCls (cls = void 0) {
    if(cls === void 0) {
      console.log('cls must have be a string value');
      return false;
    }

    this.refs.ReactList.className = cls;
  }

  /**
   * [setData description]
   * @param {[type]} data [description]
   */
  setData (data = []) {
    const me = this;

    me.setState({data: data});

    return me.state.data;
  }

  /**
   * [setHeight description]
   * @param {[type]} height [description]
   */
  setHeight (height) {
    if(typeof height != 'number') {
      console.warn(`Invalid height of ${height} must be a valid number`);
      return false;
    }

    const heightToString = `${height}px`;
    this.refs.ReactList.style.height = heightToString;
  }

  /**
   * [setItems description]
   * @param {[type]} items [description]
   */
  setItems (items) {

  }

  render () {
    const { baseCls, itemCls, itemTpl, config, itemConfig, children } = this.props;

    return (
      <div ref={'ReactList'} className={this.getCls()} style={config}>
        {
          this.state.data.map((item, i) => {
            return (
              <div className={itemCls} key={i} style={itemConfig}
                onClick={this.onItemTapEnd.bind(this, item, i)}>
                {
                  React.Children.map(children, (child) => {
                    return React.cloneElement(child, item);
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
};

ReactList.defaultProps = {
    cls: null,
    config: {},
    data: null,
    height: null,
    width: null,
    itemCls: '',
    itemConfig: {
      height: 60,
      borderBottom: '1px solid black'
    },
    items: [],
    padding: null,
    margin: null,
    pressedCls: null,
    itemTpl: ''
};

ReactList.propTypes = {
  cls: React.PropTypes.string,
  config: React.PropTypes.object,
  data: React.PropTypes.array,
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  inline: React.PropTypes.array,
  itemCls: React.PropTypes.string,
  itemConfig: React.PropTypes.object,
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ]),
  padding: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  margin: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  pressedCls: React.PropTypes.string,
  tpl: React.PropTypes.string
};

export default ReactList;