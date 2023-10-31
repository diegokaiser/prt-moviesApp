import { Item } from './Item'
import { List } from './List'


export function TopFive() {
  return (
    <div className="topfive">
      <div className="topfive__content">
        <h2>Top Five<span>.</span></h2>
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </div>
    </div>
  )
}