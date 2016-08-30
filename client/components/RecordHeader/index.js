import classnames from 'classnames'
import style from './style.css'

class Header extends React.Component {
  handleClearAll() {
    this.props.actions.clearAll()
  }

  render() {
    const { dashboard } = this.props

    return (
      <div className={style.head}>
        <div className={style.control}>
          <button className="pure-button pure-button-primary" onClick={() => this.handleClearAll()}>清 除</button>
          <input type="text" placeholder="筛选..." />
        </div>
        <div className={style.row_title}>
          <div>url</div>
          <span>method</span>
          <span>status</span>
        </div>
      </div>
    )
  }
}

export default Header
