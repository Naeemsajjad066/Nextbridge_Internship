import YupForm from './components/YupForm'
import ReactForm from './pages/ReactForm'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <ReactForm />
      <YupForm/>
    </div>
  )
}

export default App
