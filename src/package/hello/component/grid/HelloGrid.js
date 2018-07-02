import React from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "../../../../core/utils/UtilsEditTable"

/** utility */
import HelloCombo from '../combo/HelloCombo'
import { handleToast } from "../../../../core/utils/UtilsToast"
import { reducerHello } from '../../../../core/utils/UtilsOther'
import { HelloGridColumn } from './column/HelloGridColumn'
/** context menu */

import { ContextMenu, Item, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

export default class HelloGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: makeData()
        };
        this.renderEditable = this.renderEditable.bind(this);
        this.handleClickAddRows = this.handleClickAddRows.bind(this);
        this.onClick = this.onClick.bind(this);
        this._onSelect = this._onSelect.bind(this);
      }

      _onSelect(e, cellInfo) {
        const data = [...this.state.data];
        data[cellInfo.index][cellInfo.column.id] = e.value;
        this.setState({ data });
      }

      renderEditable(cellInfo) {
        return (
          <div
            contentEditable
            suppressContentEditableWarning>
            <HelloCombo 
                defaultOpt={this.state.data[cellInfo.index][cellInfo.column.id]} 
                cellInfo = {cellInfo}
                callBack = {this._onSelect}
            />
          </div>
        );
       
      }

      handleClickAddRows(e) {
        let newData = {
          firstName: 'triadi',
          lastName: 'tes',
          age: 30
        }

        this.setState({data: [...this.state.data, newData]});
      }

      onClick({ event, ref, data, dataFromProvider }, action) {
        
        if (action === 'edit') {
            handleToast(dataFromProvider.original.lastName)
          return;
        }
        
        let id = dataFromProvider.original.firstName;

        let origin = this.state.data

        let filter = origin.filter(v => v.firstName === id),
        index = origin.indexOf(filter[0]);

        origin.splice(index, 1);

        this.setState({data: origin})
        handleToast("data berhasil di hapus")
      }
      
      render() {
        /** hardcode example */
        const MyAwesomeMenu = () => (
            <ContextMenu id='menu_id'>
              <Item onClick={(row) => this.onClick(row, 'edit')}>Edit</Item>
              <Item onClick={(row) => this.onClick(row, 'delete')}>Hapus</Item>
            </ContextMenu>
        );

        const { data }  = this.state;

        return(
            <div>
                <ReactTable
                    filterable
                    defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value}
                    data={data}
                    columns={HelloGridColumn(ContextMenuProvider, this.renderEditable)}
                    defaultPageSize={10}
                    className="-striped -highlight"

                />
                <br />
                
                <button onClick={this.handleClickAddRows}> add rows </button>

                <br />

                Total Data = {this.state.data.length} <br/>
                Total All combain string = {
                    this.state.data.reduce(reducerHello)
                }
            
                <MyAwesomeMenu />
    
            </div>
        )
      }


}