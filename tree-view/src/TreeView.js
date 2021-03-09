import React from "react";

export const TreeView = ({ data, className }) => {


  return (
    <React.Fragment>
      {data.map((item, idx) => (
        <ul key={`${item.name}-${idx}`} className={className}>
          {item.children && Array.isArray(item.children) ? (
            <React.Fragment>
              <li className={item.type}>{item.name}</li>
              <TreeView data={item.children} />
            </React.Fragment>
          ) : (
            <li className={item.type}>{item.name}</li>
          )}
        </ul>
      ))}
    </React.Fragment>
  );
};
