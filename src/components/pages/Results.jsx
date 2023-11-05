import { useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { Categories } from '../ui/Categories';
import { Search } from '../ui/Search';
import { List } from '../ui/List';

export function Results() {
  let { state } = useLocation()

  const onFilter = (e, genre) => {
    e.preventDefault()
    console.log(genre.toLowerCase())
  }

  return (
    <>
      <div className="results">
        <div className="results__content">
          <Breadcrumbs title={state.title} />
          <Search />
          <Categories 
            listMode={false}
            handleFilter={onFilter}
          />          
          <List></List>
        </div>
      </div>
    </>
  )
}