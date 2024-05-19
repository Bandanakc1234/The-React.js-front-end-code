import React from 'react'
import Navbar from '../layout/Navbar'
import './Home.css'

const Home = () => {
  return (
   <>
   <Navbar />

   <div className="main ">
            <p className="main lg:p-20 lg:text-xl lg:w-3/5 md:p-10 md:text-base md:w-5/6 p-3 w-full text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, voluptatem provident. Corporis
              dolores nisi cupiditate sunt minus voluptas molestiae necessitatibus voluptates, consequuntur,
              non rem optio nemo quam sit quis accusantium quas omnis. Molestiae voluptatem officia nesciunt,
              blanditiis aperiam eligendi adipisci.</p>
          </div>

   </>
  )
}

export default Home