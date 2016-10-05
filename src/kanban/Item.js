import React from 'react';
import EditItem from './EditItem';
import './Item.css';

const Item = () => (
  <div className="item">
    <EditItem />
    <button className="item-delete">
      <i className="fa fa-times"/>
    </button>
  </div>
)

export default Item;
