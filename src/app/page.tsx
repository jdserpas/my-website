import NavBar from '@/components/navbar'
import './globals.css'
import ElevatorPitch from '@/components/elevatorPitch'

export default function Home() {
  return (
    <main className='background'>
      <NavBar/>
      <ElevatorPitch/>
    </main>
  )
}
