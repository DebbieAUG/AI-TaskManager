import Header from './components/Header.jsx'
import { StudentManagement } from './components/Management.jsx'

function App() {
  return (
    <div id = "container" className="w-full bg-grey-100">
      <Header />
      <div className='justify-between'>
        <StudentManagement />
      </div>
    </div>
  )
}

export default App;