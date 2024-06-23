// src/App.jsx
import React from 'react';
import Card from '../components/card/Cards';
import './style.css';

function Home() {
  const routes = [
    { title: 'Menu', path: '/Menu' ,img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KeyQQL5iKkkAAAAAAAAAAAAADrJ8AQ/original'},
    { title: 'Breadcrumbs', path: '/breadcrumbs',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Tabs', path: '/tabs' ,img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*72NDQqXkyOEAAAAAAAAAAAAADrJ8AQ/original'},
    { title: 'Input', path: '/Input',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Y3R0RowXHlAAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Radio & Checkboxes', path: '/rnc',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*DzgiRbW3khIAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Form', path: '/Form',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*-lcdS5Qm1bsAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Buttons', path: '/Buttons' ,img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original'},
    { title: 'Alerts', path: '/Alerts',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QsvtS41m45UAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Lists and Progress', path: '/Lists',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*EYuhSpw1iSwAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Table', path: '/Table',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*3yz3QqMlShYAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Modal', path: '/Modal',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Z9vzQZAdJDQAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Rows and Cols', path: '/RowsAndCols',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*mfJeS6cqZrEAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Divider and Space', path: '/DividerSpace',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original' },
    { title: 'Layout', path: '/Layout',img :'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*4i58ToAcxaYAAAAAAAAAAAAADrJ8AQ/original' },
    {title :'Cards',path:'/Cards',img:'https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QXO1SKEdIzYAAAAAAAAAAAAADrJ8AQ/original'}
  ];

  return (
    <div className="app">
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'15px'}}>PureTik Components</h1>
      <div className="card-container">
        {routes.map((route, index) => (
          <Card key={index} img={route.img} title={route.title} path={route.path} />
        ))}
      </div>
    </div>
  );
}

export default Home;
