# react.list

[![Build Status](https://travis-ci.org/React-Components-Organization/react.list.svg?branch=master)](https://travis-ci.org/React-Components-Organization/react.list)
[![npm version](https://badge.fury.io/js/react.list.svg)](https://badge.fury.io/js/react.list)

A flexible and reusable react component, build with ES2015.

## Installation

Install the module directly from npm:

```
npm install react.list --save
```

## Usage

A basic usage of ReactVideo and how to call public methods available through this.refs['your-ref'];

```js
import React from 'react';
import ReactVideo from 'react.list';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Olivier',
          age: 34
        },
        {
          name: 'Dom',
          age: 33
        }
      ]
    }
  }

  onTapItem (dataItem, index, SyntheticMouseEvent, reactId) {
    // add new data object at position 0 in the ReactCompList data array.
    this.refs.ReactCompList.insert(index, {
      name: 'bob',
      age: 36,
      sexe: 'male'
    });
  }

  render () {
    const { data } = this.state;
    const CStyle = {
      border: '1px solid red',
      padding: 0,
      display: 'block',
      whiteSpace: 'nowrap',
      width: '100%',
      height: 50
    };
    const style = {
      height: "100%",
      width: '25%',
      float: 'left'
    };

    // Item Template to be generated following data received by ReactList
    const ItemTpl = (props) => {
      const { name, age } = props;
      return (
        <div className='inner-list' style={config}>
          <div style={style}>{name}</div>
          <div style={style}>{age}</div>
        </div>
      );
    };

    <ReactList ref={'ReactCompList'} data={data} cls={'malist'} itemCls={'my-item'}>
      <ItemTpl dataSet={'test'} onTapItem={this.onTapItem} />
    </ReactList>
  }
};
```

### Properties

#### cls {String}

>**NOTE:** The CSS class to add to this component's element.

```js
  <ReactList cls={'my-list'} />
```

#### config {Object}

>**NOTE:** The most important property, object CSS styles that will be rendered into an inline style attribute when the Component is rendered. Any CSS style can be set in config. By default a list is 'naked', so feel free to style it at will.

```js
  const configObj = {
    backgroundColor: red,
    height: 100,
    width: 100,
    position: 'relative'
  };

  <ReactList config={configObj} />
```

#### data {Array}

>**NOTE:** The initial set of data to apply to the child item to update the content area of the Component, 

```js
  const { data } = this.state;

  <ReactList data={data} />
```

#### height {number}

>**NOTE:** The height of this Component; must be a number value, e.g: 300. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
  <ReactList height={100} />
```

#### width {Number}

>**NOTE:** The width of this Component; must be number value, e.g: 300. By default, if this is not explicitly set, this Component's element will simply have its own natural size.

```js
 <ReactList width={100} />
```

#### itemCls {String}

>**NOTE:** An additional CSS class to apply to items within the list. This class will be applied to the itemTpl wrapper.

```js
 <ReactList itemCls={'item-class'} />
```

#### itemConfig {Object}

>**NOTE:** The config object to apply to items within the list.

```js
  const configObj = {
    backgroundColor: red,
    height: 100,
    width: 100,
    position: 'relative'
  };

  <ReactList itemConfig={configObj} />
```

### Api

>**NOTE:** All listed methods are available through the refs attribute. example 'this.refs['MyReactComponent'].addCls()'

#### addCls (cls = void 0, prefix = '', suffix = ''):void

>**NOTE:** Adds a CSS class (or classes) to this Component's rendered element.

* @param {String} cls The CSS class to add.
* @param {String} prefix(optional) Optional prefix to add to each class.
* @param {String} suffix(optional) Optional suffix to add to each class.

#### getAt (index = 0)

>**NOTE:** Return the data at the given index from the data.

* @param  {Number} index The index to be returned.
* @return {Object} object The data object.

#### getCls ()

>**NOTE:** Return all class.

* @return {String} classes Return the classes applied to the list.

#### getData ()

>**NOTE:** getData return the data list itself.

* @return {Array} data Array data given to the list component.

#### getItemAt (index = 0)

>**NOTE:** Returns an item at the specified index.

* @param  {Number} index Index of the item.
* @return {Object} object The data object item at the specified index.

#### getItemCls ()

>**NOTE:** Returns the value of itemCls.

* @return {String} itemCls

#### getItems ()

>**NOTE:** Returns the children object from the refs.ReactList.

* @return {Array/Object}

#### getHeight ()

>**NOTE:** Returns the value of height list.

* @return {Number}

#### getWidth ()

>**NOTE:** Returns the value of width's list.

* @return {Number}

#### insert (index = 0, item = {})

>**NOTE:** Adds a child Component at the given index. For example, here's how we can add a new item, making it the first child Component of this List.

* @param  {Number} index The index to insert the Component at.
* @param  {Object} item The Component to insert.

#### removeAll (destroy = true, everything = true)

>**NOTE:** Removes all items currently in the data Array.

#### removeAt (index = 0)

>**NOTE:** Removes the Component at the specified index: myList.removeAt(0); // removes the first item ...

* @param  {Number} index The index of the Component to remove.

#### removeCls (cls = void 0, prefix = '', suffix = '')

>**NOTE:** Removes the given CSS class(es) from this Component's rendered element.

* @param  {String} cls The class(es) to remove.
* @param  {String} prefix Optional prefix to prepend before each class.
* @param  {String} suffix Optional suffix to append to each class.

#### setCls (cls = '')

>**NOTE:** Sets the value of cls.

* @param {String} cls The new value.

#### setData (data = [])

>**NOTE:** Sets the value of data.

* @param {Array/Object} data The new value.

#### setHeight (height)

>**NOTE:** Sets the value of height.

* @param {Number} height The new value.

## Stats

[![NPM](https://nodei.co/npm-dl/react.list.png?months=1)](https://nodei.co/npm/react.list/)

[![NPM](https://nodei.co/npm-dl/react.list.png?downloads=true)](https://nodei.co/npm/react.list/)

## License

The MIT License (MIT)

Copyright (c) 2016 React-Components-Organization

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
