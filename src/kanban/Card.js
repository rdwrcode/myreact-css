import React from 'react';
//import Item from './Item';
import EditItem from './EditItem';
import './Card.css';

const Card = () => (
  <div className="card">
    <div className="card-header">
      <button className="card-add-item">
        <i className="fa fa-plus"/>
      </button>
      <EditItem />
      <button className="card-delete">
        <i className="fa fa-times"/>
      </button>
      <button className="card-move">
        <i className="fa fa-hand-grab-o"/>
      </button>
    </div>
    <div className="card-items">
      <div className="item">
        <EditItem />
        <button className="item-delete">
          <i className="fa fa-times"/>
        </button>
      </div>
      <div className="item">
        <EditItem />
        <button className="item-delete">
          <i className="fa fa-times"/>
        </button>
      </div>
    </div>
  </div>
);

export default Card;
