import React from 'react';
import { Link } from 'react-router-dom';
import './bread.css';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
            aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
          >
            {index === breadcrumbs.length - 1 ? (
              breadcrumb.label
            ) : (
              <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
