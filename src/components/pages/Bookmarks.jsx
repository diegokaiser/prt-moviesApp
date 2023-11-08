import { Breadcrumbs } from '../ui/Breadcrumbs';
import { List } from '../ui/List';

export function Bookmarks() {
  let title = 'Bookmarks'

  return (
    <>
      <div className="bookmarks">
        <div className="bookmarks__content">
          <Breadcrumbs title={title} />
          <List />
        </div>
      </div>
    </>
  )
}