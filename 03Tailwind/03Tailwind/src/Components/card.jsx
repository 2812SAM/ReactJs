import React from 'react'
function Card(props){
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29875437/pexels-photo-29875437/free-photo-of-two-women-enjoying-winter-outdoors-with-luggage-cart.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1tps://source.unsplash.com/300x300/?random"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet{props.obj.age}
        </p>
      </div>
    )
}
export default Card