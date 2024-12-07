import Header from "./components/Header"
import Destination from "./components/Destination"
import data from "./data"

export default function App(){
  return (
    <>
      <Header />
      <main>
        {data.map(destData =>{
          return <Destination {...destData} />
        })}
      </main>
    </>
  )
} 
