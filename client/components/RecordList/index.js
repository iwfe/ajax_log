import { filter } from 'lodash'
import RecordItem from '../RecordItem'

class RecordList extends React.Component {
  handleItemClick(index) {
    this.props.actions.changeCurrentRecord(index)
  }

  getFilterRecords() {
    const { records, filterText } = this.props.dashboard
    let filterRecords = records
    if (filterText) {
      filterRecords = filter(records, item => {
        if (item.url.toLowerCase().indexOf(filterText.toLowerCase()) > -1) {
          return item
        }
      })
    }
    return filterRecords
  }

  render() {
    const { currentRecordIndex, filterText } = this.props.dashboard
    const recordRows = this.getFilterRecords().map((item, index) => {
      return <RecordItem key={index}
                         item={item}
                         isActive={currentRecordIndex === index}
                         handleClick={() => this.handleItemClick(index) }/>
    })

    return (
      <div>
        {recordRows}
      </div>
    )
  }
}

export default RecordList
