import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { List } from '../ui/List';

export function Bookmarks() {
  let { state } = useLocation()

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