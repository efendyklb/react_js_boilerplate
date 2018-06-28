import React from 'react'

/** dropdown */
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class HelloCombo extends React.Component {

    constructor(props) {
        super(props);

    }
    getDropDown() {

        const options = [
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two', className: 'myOptionClassName' },
          {
          type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
          ]
          },
          {
          type: 'group', name: 'group2', items: [
              { value: 'five', label: 'Five' },
              { value: 'six', label: 'Six' }
            ]
          }
        ]

        const defaultOption = options[0]

        return {
          opt: options,
          defaultOpt: defaultOption
        }
    
    }

    render() {

        let { opt } = this.getDropDown()
        //let defaultOpt = this.state.data[cellInfo.index][cellInfo.column.id]
        let defaultOpt = this.props.defaultOpt
        let cellInfo = this.props.cellInfo
        let callBack = this.props.callBack
        return(
            <Dropdown 
                options={opt}
                onChange={(e) => callBack(e, cellInfo)}
                value={defaultOpt}
                placeholder="Select an option" />
        )
    }
      
}