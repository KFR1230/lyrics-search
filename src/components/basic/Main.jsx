import MainLyrics from "./MainLyrics"
import MainNav from "./MainNav"

const Main = ()=>{
  return (
    <div className="container">
      <div className="main_wrapper">
        <MainNav />
        <MainLyrics />
      </div>
    </div>
  )
}

export default Main