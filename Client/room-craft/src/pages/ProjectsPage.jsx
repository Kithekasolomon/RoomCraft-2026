import React from 'react';

const projects = [
  { title: "Modern Living Room - Westlands", category: "Residential", image: "/images/services/tv-units.jpg" },
  { title: "Elegant Gypsum Ceiling - Karen", category: "Ceiling Design", image: "/images/services/gypsum-ceiling.jpg" },
  { title: "Luxury Kitchen Cabinets - Lavington", category: "Kitchen", image: "/images/services/wardrobes-cabinets.jpg" },
  { title: "Acoustic Office Ceiling - Upper Hill", category: "Commercial", image: "/images/services/acoustic-ceiling.jpg" },
  { title: "3D Wall Panels Feature", category: "Wall Design", image: "/images/services/wall-panels.jpg" },
  { title: "Laminate Flooring Installation", category: "Flooring", image: "/images/services/laminate-flooring.jpg" },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero/slide1.jpg)' }} />
        <div className="absolute inset-0 bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-gray-100">Real transformations across Nairobi</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-12 text-lg">Browse some of our completed projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-105 transition duration-500">
                <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-wider text-amber-400">{project.category}</p>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;