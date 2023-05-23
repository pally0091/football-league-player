
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Componants/Main'
import Home from './Componants/Home'
import CountryList from './Componants/CountryList'
import LeagueList from './Componants/LeagueList'

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
          // loader: ()=> fetch('https://www.thesportsdb.com/api/v1/json/3/all_countries.php')
        },
        {
          path: '/:id',
          element : <CountryList></CountryList>
        },
        {
          path: '/leagues',
          element: <LeagueList></LeagueList>
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
