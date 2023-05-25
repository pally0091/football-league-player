
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Componants/Main'
import Home from './Componants/Home'
import CountryList from './Componants/CountryList'
import LeagueList from './Componants/LeagueList'
import Teams from './Componants/Teams'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/countries',
          element: <CountryList></CountryList>,
          loader: ()=> fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=Bangladesh')
        },
        {
          path: '/:id',
          element: <CountryList></CountryList>,
          loader: ({params})=> fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=${params.id}`)
        },
        {
          path: '/leagues',
          element: <LeagueList></LeagueList>,
          loader: ()=> fetch ('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
        },
        {
          path: '/teams/:id',
          element: <Teams></Teams>,
          loader: ({params})=> fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${params.id}`)
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
