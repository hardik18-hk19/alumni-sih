import React from "react";

function feature() {
  return (
    <div>
      <section id="features" className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Alumni Registration",
              description:
                "Easily join and stay connected with our alumni community.",
              icon: "user-plus",
            },
            {
              title: "Donation Portal",
              description:
                "Contribute towards various college initiatives and projects.",
              icon: "donate",
            },
            {
              title: "Networking Hub",
              description:
                "Connect with fellow alumni for professional and social growth.",
              icon: "users",
            },
            {
              title: "Job Opportunities",
              description:
                "Explore and post job opportunities within the alumni network.",
              icon: "briefcase",
            },
            {
              title: "Success Stories",
              description:
                "Celebrate alumni achievements and share your success.",
              icon: "trophy",
            },
            {
              title: "Events & Reunions",
              description: "Stay updated on upcoming events and reunions.",
              icon: "calendar-alt",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                <i className={`fas fa-${feature.icon} fa-3x`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-16 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Success Stories
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {[
            {
              name: "Rana",
              story:
                "After graduating, Rana founded a tech startup that revolutionized AI development.",
            },
            {
              name: "Hardik",
              story:
                "Hardik has become a leader in renewable energy, making significant contributions to sustainability.",
            },
            {
              name: "Satyam",
              story:
                "Satyam's work in education reform has impacted thousands of students nationwide.",
            },
          ].map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{story.name}</h3>
              <p className="text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default feature;
