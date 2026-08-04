import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"


const App = () => {
  return (
    <>
      <Header/>
      <div className="flex gap-6 justify-center mt-10">
        <ProfileCard name="Naeem" profession="Full Stack Engineer"/>
        <ProfileCard/>
      </div>
    </>
  )
}

export default App