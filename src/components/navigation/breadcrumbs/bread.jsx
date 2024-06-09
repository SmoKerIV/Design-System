import React from "react";
import { useLocation } from "react-router-dom";
import "./bread.css";

const Breadcrumbs = ({ breadcrumbs }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => {
          const isActive = currentPath === breadcrumb.path;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? (
                breadcrumb.label
              ) : (
                <a href={breadcrumb.path}>{breadcrumb.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
