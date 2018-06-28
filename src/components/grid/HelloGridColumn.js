import matchSorter from 'match-sorter'
import React from 'react'

export const HelloGridColumn = (ContextMenuProvider, renderEditable) => {
    return [
        {
          Header: "First Name",
          accessor: "firstName",
          filterMethod: (filter, row) =>
                row[filter.id].startsWith(filter.value) &&
                row[filter.id].endsWith(filter.value),
          Cell: renderEditable
          },
          {
          Header: "Last Name",
          accessor: "lastName",
          filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["lastName"] }),
          filterAll: true,
          Cell: renderEditable
          },
          {
          Header: "Full Name",
          id: "full",
          filterable: false,
          accessor: d =>
              <div
              dangerouslySetInnerHTML={{
                  __html: d.firstName + " " + d.lastName
              }}
              />
          },
          {
            Header: "action",
            id: "test",
            filterable: false,
            Cell: row => (
              <ContextMenuProvider id="menu_id" data={row} event="onClick">
                  <p>click</p>
              </ContextMenuProvider>
              
            )
            
          }
      ]
} 
