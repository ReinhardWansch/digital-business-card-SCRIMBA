import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"



function App() {

  return (
    <div id="pageCtn" className="bg-bg-page min-h-screen flex justify-center items-center text-[0.64rem] font-sans">
      <div id="card" className="bg-bg-card w-80 rounded-lg overflow-hidden">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
