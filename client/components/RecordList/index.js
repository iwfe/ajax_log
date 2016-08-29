import RecordItem from '../RecordItem'

class RecordList extends React.Component {
  handleItemClick(index) {
    this.props.actions.changeCurrentRecord(index)
  }

  render() {
    const { records, currentRecordIndex } = this.props.dashboard
    const recordRows = records.map((item, index) => {
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
