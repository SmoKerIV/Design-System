import React, { useState } from 'react';
import styles from './list.module.css'; 

const ListComponent = ({ initialItems = [] }) => {
  const [items] = useState(initialItems);
  const [visibleItems, setVisibleItems] = useState(5);
  
  const showMoreItems = () => {
    setVisibleItems(visibleItems + 5);
  };

  const showLessItems = () => {
    setVisibleItems(5);
  };

  return (
      <div className={styles.listContainer}>
        <div className={styles.header}>Header</div>
        <ul className={styles.list}>
          {items.slice(0, visibleItems).map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
        <div className={styles.footer}>Footer</div>
        <div className={styles.buttonContainer}>
          {visibleItems < items.length && (
            <button className={styles.loadMoreButton} onClick={showMoreItems}>Loading more</button>
          )}
          {visibleItems > 5 && (
            <button className={styles.loadLessButton} onClick={showLessItems}>Loading less</button>
          )}
        </div>
      </div>
    );
  };
export default ListComponent;

