class RecordItem extends React.Component {
  render() {
    const { item } = this.props
    return (
      <tr>
        <td>{item.url}</td>
        <td>{item.method}</td>
        <td>{JSON.stringify(item.req)}</td>
        <td>{JSON.stringify(item.res)}</td>
      </tr>
    )
  }
}

export default RecordItem
