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
    };
  }

  componentDidMount () {
    const { data, cls } = this.props;

    this.setState({
      data: data,
      kls: cls
    });
  }

  /**
   * Adds a CSS class (or classes) to this Component's rendered element.
   * 
   * @param {String} cls The css class to add the list.
   * @param {String} prefix The prefix to add to cls. Before the cls. prefix+cls.
   * @param {String} suffix The suffix to add to cls. After the cls. cls+suffix.
   */
  addCls (cls = void 0, prefix = '', suffix = '') {
    const me = this;
    const oldCls = me.getCls();
    let newCls = (oldCls) ? oldCls.split(' ') : [];
    let ln;
    let cache;

    if(typeof cls === 'string') {
      cls = [cls];
    }

    ln = cls.length;

    if(!newCls.length && prefix === '' && suffix === '') {
      newCls = cls;
    } else {
      for(let i = 0; i < ln; ++i) {
        cache = `${prefix}${cls[i]}${suffix}`;
        if(newCls.indexOf(cache) === -1) {
          newCls.push(cache);
        }
      }
    }

    me.setCls(newCls.join(' '));
  }

  /**
   * Return the data at the given index from the data.
   * @param  {Number} index The index to be returned.
   * @return {Object} object The data object.
   */
  getAt (index = 0) {
    if(typeof index != 'number') {
      console.warn(`Invalid index of ${index} must be a valid number`);
      return false;
    }

    return this.state.data[index];
  }

  /**
   * Return all class.
   * @return {String} classes Return the classes applied to the list.
   */
  getCls () {
    if(this.props.cls === null || this.props.cls.length === 0) {
      return `list`;
    } else {
      return this.state.kls;
    }
  }

  /**
   * getData return the data list itself.
   * @return {Array} data Array data given to the list component.
   */
  getData () {
    return this.props.data;
  }

  /**
   * Returns an item at the specified index.
   * @param  {Number} index Index of the item.
   * @return {Object} object The data object item at the specified index.
   */
  getItemAt (index = 0) {
    return this.refs.ReactList.children[index];
  }

  /**
   * Returns the value of itemCls.
   * @return {String} itemCls
   */
  getItemCls () {
    return this.props.itemCls;
  }

  /**
   * Returns the children object from the refs.ReactList.
   * @return {Array/Object}
   */
  getItems () {
    return this.refs.ReactList.children;
  }

  /**
   * Returns the value of height list.
   * @return {Number}
   */
  getHeight () {
    return this.refs.ReactList.offsetHeight;
  }

  /**
   * Returns the value of width list.
   * @return {Number}
   */
  getWidth () {
    return this.refs.ReactList.offsetWidth;
  }

  /**
   * Adds a child Component at the given index. For example, here's how we can add a new item, making it the first child Component of this List.
   * @param  {Number} index The index to insert the Component at.
   * @param  {Object} item The Component to insert.
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
   * Fires whenever an item is tapped.
   * @param  {Object} dataItem The object data of the item tapped.
   * @param  {Number} index The index of the item tapped.
   * @param  {Object} touchEvent The React event Object.
   * @param  {String} reactId The React id of the item.
   * @param  {Object} e The native event object.
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
   */
  removeAll () {
    this.setState({data: []});
  }

  /**
   * Removes the Component at the specified index.
   * @param  {Number} index The index of the Component to remove.
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
   * Removes the given CSS class(es) from this Component's rendered element.
   * @param  {String} cls The class(es) to remove.
   * @param  {String} prefix Optional prefix to prepend before each class.
   * @param  {String} suffix Optional suffix to append to each class.
   */
  removeCls (cls = void 0, prefix = '', suffix = '') {
    const me = this;
    const oldCls = me.getCls();
    let newCls = (oldCls) ? oldCls.split(' ') : [],
        ln, i;

      if (typeof cls == 'string') {
        const index = newCls.indexOf(prefix + cls + suffix);
        newCls.splice(index, 1);
      } else {
        ln = cls.length;
        for (i = 0; i < ln; i++) {
          if(cls[i] === newCls[i]) {
            newCls.splice(i, 1);
          }
        }
      }

      me.setCls(newCls);
  }

  /**
   * Sets the value of cls.
   * @param {String} cls The new value.
   */
  setCls (cls = '') {
    const me = this;

    if(cls === void 0) {
      console.log('cls must have be a string value');
      return false;
    }

    me.setState({
      kls: cls
    });

    me.refs.ReactList.className = me.state.kls;
  }

  /**
   * Sets the value of data.
   * @param {Array/Object} data The new value.
   */
  setData (data = []) {
    const me = this;

    me.setState({data: data});

    return me.state.data;
  }

  /**
   * Sets the value of height.
   * @param {Number} height The new value.
   */
  setHeight (height) {
    if(typeof height != 'number') {
      console.warn(`Invalid height of ${height} must be a valid number`);
      return false;
    }

    const heightToString = `${height}px`;
    this.refs.ReactList.style.height = heightToString;
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
    }
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
  itemCls: React.PropTypes.string,
  itemConfig: React.PropTypes.objecta
};

export default ReactList;