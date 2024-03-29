import React from 'react'
import './ItemList.css'

const ItemList = (props) => {

  const { data, onItemSelected, children: renderlabel } = props

  

  const items = data.map((item) => {
    const { id } = item

    const label = renderlabel(item)

    return (
      <li className="list-group-item itemhover"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    )
  })

  ItemList.defaultProps = {
    onItemSelected: () => {}
  }
  
  return (
    <div>{items}</div>
  )
}

export default ItemList

