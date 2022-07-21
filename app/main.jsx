import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DataResult, process, State } from '@progress/kendo-data-query';
import {
  Grid,
  GridColumn as Column,
  GridDataStateChangeEvent,
} from '@progress/kendo-react-grid';
import { rowRender } from './rowRender.js';

import products from './products.json';

const initialDataState = {
  filter: {
    logic: 'and',
    filters: [],
  },
  take: 15,
  skip: 0,
};
const App = () => {
  const [dataState, setDataState] = React.useState(initialDataState);

  return (
    <Grid
      // ref={_grid}
      style={{
        height: '600px',
      }}
      rowHeight={63}
      filterable={true}
      resizable={true}
      reorderable={true}
      sortable={true}
      scrollable="virtual"
      data={process(products, dataState)}
      rowRender={rowRender}
      dataItemKey={'ProductID'}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
      {...dataState}
    >
      <Column field="ProductID" title="Product Id" filter={'numeric'} />
      <Column field="ProductName" />
      <Column field="UnitPrice" filter={'numeric'} />
      <Column field="Discontinued" filter={'boolean'} />
    </Grid>
  );
};

const container = document.querySelector('my-app');
const root = createRoot(container);
root.render(<App />);
