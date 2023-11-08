import { Breadcrumbs } from '../ui/Breadcrumbs';
import { List } from '../ui/List';

export function Bookmarks() {
  let title = 'Bookmarks'

  return (
    <>
      <div className="bookmarks">
        <div className="bookmarks__content">
          <Breadcrumbs title={state.title} />
          <List />
        </div>
      </div>
    </>
  )
}