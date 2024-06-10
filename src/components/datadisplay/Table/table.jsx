import React from 'react';
import './table.css';
import cancelIcon from './assets/cancel-iconsvg.svg';

const TableComponent = ({ initialRows, columnTitles, name }) => {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            {columnTitles.map((title, idx) => <th key={idx}>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {initialRows.map((row, index) => (
            <tr key={index}>
              {row.columns.map((text, columnIndex) => (
                <td key={columnIndex}>{text}</td>
              ))}
              <td>
                <div className="tag-container tag1">
                  {row.tag1}<img src={cancelIcon} alt="cancel icon" className="cancel-icon" />
                </div>
              </td>
              <td>
                <div className="tag-container tag2">
                  {row.tag2}<img src={cancelIcon} alt="cancel icon" className="cancel-icon" />
                </div>
              </td>
              <td><button className="invite-button">Invite</button></td>
              <td><p>{name}</p></td>
              <td><button className="delete-button">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
