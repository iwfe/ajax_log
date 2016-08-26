import RecordItem from './RecordItem'

class RecordList extends React.Component {
  render() {
    const { records } = this.props.dashboard
    const recordRows = records.map((item, index) => {
      return <RecordItem key={index} item={item}></RecordItem>
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>url</th>
            <th>method</th>
            <th>req</th>
            <th>res</th>
          </tr>
        </thead>
        <tbody>
          {recordRows}
        </tbody>
      </table>
    )
  }
}

export default RecordList
