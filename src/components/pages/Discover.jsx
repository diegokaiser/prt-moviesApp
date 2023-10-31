import { Breadcrumbs } from '../ui/Breadcrumbs'
import { Categories } from '../ui/Categories'
import { List } from '../ui/List'

export function Discover() {
  return (
    <>
      <div className="discover">
        <div className="discover__content">
          <Breadcrumbs />
          <Categories />
          <List />
        </div>
      </div>
    </>
  )
}