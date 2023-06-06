import Image from "next/image"
import construction from '../../public/under-construction_geek_man_01.svg'

export default function Construction() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-80'>
          <Image src={construction} alt="The current page is not yet finished" className='mx-auto'/>
      </div>
    </div>
  )
}