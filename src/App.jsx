import React from "react"


function App() {

  const projects = [
    { id: 1, title: "Project 1:- UserCard", date: "18/06/2025" },
    { id: 2, title: "Project 2:- Contact Form", date: "19/06/2025" },
    { id: 3, title: "Project 3:- Product Listing", date: "23/06/2025" },
    { id: 4, title: "Project 4:- Todo List", date: "24/06/2025" },
    { id: 5, title: "Project 5:- Weather App", date: "25/06/2025" },
    { id: 6, title: "Project 6:- Firebase Contact", date: "01/07/2025" },
    { id: 7, title: "Project 7:- Cloudinary UserCard", date: "01/07/2025" },
  ];


  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="flex-row items-center justify-center px-4 md:px-14">
        <h2 className="md:text-4xl lg:text-5xl text-xl font-bold mb-10 text-center">Ramprakash Ramtekkar - Daily Task</h2>
        <div className="flex-col items-center gap-7">
          {projects.map((projects) => (
            <div
              key={projects.id} 
              className="bg-white my-3 md:mx-5 mx-0 py-2 px-3 rounded-xl flex items-center justify-between drop-shadow-lg">
              <div className="pl-4">
                <h3 className="font-semibold text-sm sm:text-base">{projects.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-tight">{projects.date}</p>
              </div>
              <button className="bg-blue-600 text-white rounded-md py-1.5 px-4 m-3 cursor-pointer hover:bg-blue-400 text-sm sm:text-base">View</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App;
