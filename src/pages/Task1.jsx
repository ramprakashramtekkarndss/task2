
function Task1()
{
    const profiles = [
    {
      name: "Sarah Walker",
      role: "Software Engineer",
      location: "New York, NY",
      image: "https://static.independent.co.uk/2025/02/25/10/bc3942b97709635c01bb88d261840ab2Y29udGVudHNlYXJjaGFwaSwxNzQwNTY0MDI3-2.78466672.jpg",
    },
    {
      name: "Daniel Adams",
      role: "Product Manager",
      location: "San Francisco, CA",
      image: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Designer",
      location: "Austin, TX",
      image: "https://m.media-amazon.com/images/M/MV5BNWI4ZTJiZmUtZGI5MC00NTk4LTk2OTYtNDU3NTJiM2QxNzM0XkEyXkFqcGc@._V1_.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {profiles.map((user, index) => (

          <div className="bg-white rounded-2xl p-8 text-center" key={user.name}>
            <img 
              src={user.image} 
              alt={user.name} 
              className="w-28 h-28 mx-auto rounded-full mb-6 object-cover" 
            />
            <h2 className="text-2xl font-bold text-gray-900">
              {user.name}
            </h2>
            <p className="text-gray-600 mt-2">{user.role}</p>
            <p className="text-gray-500">{user.location}</p>

          </div>

        ))}
      </div>
    </div>
  );

}

export default Task1;