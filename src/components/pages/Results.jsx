import { Breadcrumbs } from '../ui/Breadcrumbs';
import { Search } from '../ui/Search';
import { List } from '../ui/List';

export function Results() {
  return (
    <>
      <div className="results">
        <div className="results__content">
          <Breadcrumbs />
          <Search />
          <List />
        </div>
      </div>
    </>
  )
}