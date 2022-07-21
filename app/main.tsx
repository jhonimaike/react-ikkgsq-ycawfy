import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  const [dataState, setDataState] = React.useState<State>(initialDataState);

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
      onColumnReorder={(event) => {
        // handleColumnReorderOrResize(event);
      }}
      // onColumnResize={(event) => {
      //   if (event.nativeEvent.type === 'pointerup')
      //     // handleColumnReorderOrResize(event);
      // }}
      // cellRender={loadingCell}
      rowRender={rowRender}
      dataItemKey={'id'}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
      {...dataState}
    >
      {/* <Grid
      style={{
        height: '800px',
      }}
      rowHeight={63}
      data={process(products, dataState)}
      dataItemKey={'ProductID'}
      filterable={true}
      resizable={true}
      reorderable={true}
      sortable={true}
      scrollable="virtual"
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
      {...dataState}
    > */}
      <Column field="ProductID" title="Product Id" filter={'numeric'} />
      <Column field="ProductName" />
      <Column field="UnitPrice" filter={'numeric'} />
      <Column field="Discontinued" filter={'boolean'} />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
