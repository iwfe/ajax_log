class Header extends React.Component {
  handleStartRecord = () => {
    this.props.actions.startRecord()
  }

  handleStopRecord = () => {
    this.props.actions.stopRecord()
  }

  handleClearAll = () => {
    this.props.actions.clearAll()
  }

  render() {
    const recordBtn = this.props.dashboard.recording ? (
      <a className="button is-danger" onClick={this.handleStopRecord}>停止抓包</a>
    ) : (
      <a className="button is-success" onClick={this.handleStartRecord}>开始抓包</a>
    )
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="columns is-desktop" style={{ alignItems: 'center' }}>
            <div className="column">
              {recordBtn}
            </div>
            <div className="column">
              <a className="button is-warning" onClick={this.handleClearAll}>清除</a>
            </div>
            <div className="column">
              <p className="control">
                <input className="input" type="text" placeholder="搜索..." />
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
