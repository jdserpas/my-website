import NavBar from '@/components/navbar'
import './globals.css'
import Construction from '@/components/construction'
import ElevatorPitch from '@/components/elevatorPitch'

export default function Home() {
  return (
    <main className='background'>
      <NavBar/>
      <ElevatorPitch/>
    </main>
  )
}
