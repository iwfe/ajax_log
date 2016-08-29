import classnames from 'classnames'
import style from './style.css'

class RecordItem extends React.Component {
  render() {
    const { item, isActive, handleClick } = this.props
    return (
      <div className={classnames(style.item_wrap, { [style.active]: isActive })}
           onClick={() => handleClick()} >
        <div>{item.url}</div>
        <span>{item.method}</span>
        <span>{item.status}</span>
      </div>
    )
  }
}

export default RecordItem
