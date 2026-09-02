
import React from "react";

function FRONTEND() {
  const courses = [
    {
      icon: "🚀",
      level: "BEGINNER",
      badge: "BestSeller",
      title: "Complete React Developer Bootcamp 2026",
      instructor: "Yogesh Phuyal",
      rating: "4.9",
      students: "1.2K Students",
      price: "NPR 4,999",
      bg: "bg-gradient-to-br from-purple-600 to-blue-500",
    },
    {
      icon: "🟢",
      level: "INTERMEDIATE",
      badge: "Hot",
      title: "Python for Data Science & Machine Learning",
      instructor: "Yujal Khulal Basnet",
      rating: "4.8",
      students: "1.1K Students",
      price: "NPR 5,499",
      bg: "bg-gradient-to-br from-green-500 to-emerald-700",
    },
    {
      icon: "🎨",
      level: "ALL LEVELS",
      badge: "New",
      title: "UI/UX Design Class with Figma",
      instructor: "Sachin Khadka",
      rating: "4.7",
      students: "1.2K Students",
      price: "NPR 7,999",
      bg: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      icon: "⚡",
      level: "INTERMEDIATE",
      title: "Node.js & Express API Development",
      instructor: "Ujwal Guragain",
      rating: "4.9",
      students: "980 Students",
      price: "NPR 3,499",
      bg: "bg-gradient-to-br from-yellow-400 to-orange-600",
    },
    {
      icon: "📈",
      level: "BEGINNER",
      title: "Digital Marketing 101: Social Media",
      instructor: "Sagun Basnet",
      rating: "4.6",
      students: "1.5K Students",
      price: "NPR 1,999",
      bg: "bg-gradient-to-br from-blue-400 to-cyan-600",
    },
    {
      icon: "☁️",
      level: "ALL LEVELS",
      badge: "Trending",
      title: "AWS Cloud Practitioner Certification",
      instructor: "Roshan Khatri",
      rating: "4.8",
      students: "2.3K Students",
      price: "NPR 12,999",
      bg: "bg-gradient-to-br from-sky-400 to-blue-700",
    },
  ];

  const categories = [
    ["💻", "Web Development", "34 Courses"],
    ["📊", "Data Science", "77 Courses"],
    ["🎨", "UI/UX Design", "57 Courses"],
    ["☁️", "Cloud & DevOps", "24 Courses"],
    ["📱", "Digital Marketing", "66 Courses"],
    ["🔐", "Cyber Security", "12 Courses"],
    ["📲", "Mobile Development", "7 Courses"],
    ["🤖", "AI & Machine Learning", "13 Courses"],
  ];

  return (
    <div className="min-h-screen bg-[#181946]">

      {/* ================= HEADER ================= */}
      <header className="h-16 w-full bg-[#eef1ee] px-5 md:px-8 flex items-center justify-between">

        <h1 className="text-lg md:text-xl font-bold text-gray-900">
          Website's Name / Logo
        </h1>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 list-none">
            <li className="cursor-pointer text-gray-800 hover:text-blue-600 transition">
              Courses
            </li>

            <li className="cursor-pointer text-gray-800 hover:text-blue-600 transition">
              Community
            </li>

            <li className="cursor-pointer text-gray-800 hover:text-blue-600 transition">
              Blog
            </li>
          </ul>
        </nav>

        <div className="flex gap-2">
          <button className="px-4 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition">
            Login
          </button>

          <button className="px-4 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-lime-700 hover:text-white transition">
            Sign Up
          </button>
        </div>

      </header>


      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center text-center px-5 py-12">

        <p className="text-sm md:text-base text-black bg-[#d3ec79] border-2 border-black rounded-lg px-4 py-1 cursor-pointer hover:bg-[#6768a5] hover:text-white transition">
          10000+ students already applied!
        </p>

        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Learn Without Limits.
        </h1>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-400">
          Grow Without Boundaries.
        </h1>

        <p className="mt-5 text-white leading-7 text-sm md:text-base">
          Access world-class courses taught by industry experts.
          <br />
          <span>Build real skills and advance your career.</span>
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">

          <button className="px-5 py-3 bg-[#371010] text-white border-2 border-black rounded-lg hover:bg-red-700 transition">
            Browse All Courses
          </button>

          <button className="px-5 py-3 bg-[#040318] text-white border-2 border-black rounded-lg hover:bg-blue-700 transition">
            Watch Demo
          </button>

        </div>


        {/* ================= STATS ================= */}
        <div className="w-full max-w-5xl mt-16 pt-8 border-t border-[#292a40] grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="mt-1 text-sm text-gray-300">COURSES</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">15K+</h3>
            <p className="mt-1 text-sm text-gray-300">STUDENTS</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="mt-1 text-sm text-gray-300">SUCCESS RATE</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">4.2</h3>
            <p className="mt-1 text-sm text-gray-300">AVERAGE RATING</p>
          </div>

        </div>

      </section>


      {/* ================= FEATURED COURSES ================= */}
      <section className="bg-white px-5 md:px-[8%] py-16 text-[#17182c]">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Featured Courses
            </h2>

            <p className="text-gray-500 mt-2">
              Hand-picked for your career growth
            </p>
          </div>

          <a
            href="#"
            className="w-fit px-5 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            View All Courses
          </a>

        </div>


        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-300"
            >

              {/* Course Image */}
              <div
                className={`h-36 relative flex items-center justify-center text-5xl text-white ${course.bg}`}
              >

                {course.icon}

                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                  {course.level}
                </span>

                {course.badge && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {course.badge}
                  </span>
                )}

              </div>


              {/* Course Content */}
              <div className="p-5">

                <h3 className="text-lg font-bold leading-6 min-h-12">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  {course.instructor}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}</span>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-[#17182c]">
                    {course.price}
                  </span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="bg-white px-5 md:px-[8%] py-16">

        <div className="mb-9">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
            Browse Categories
          </h2>

          <p className="text-gray-500 mt-2">
            Explore courses across all domains
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {categories.map((category, index) => (

            <div
              key={index}
              className="p-7 rounded-2xl cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition duration-300 border border-transparent hover:border-gray-100"
            >

              <div className="text-4xl mb-5">
                {category[0]}
              </div>

              <h3 className="text-lg font-bold mb-2">
                {category[1]}
              </h3>

              <p className="text-gray-500 text-sm">
                {category[2]}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= TRAINER ================= */}
      <section className="bg-white px-5 py-24 flex justify-center items-center text-center">

        <div className="max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#17172f] mb-5">
            Teach What You Know.
            <br />
            Earn What You Deserve.
          </h2>

          <p className="text-gray-500 leading-8 mb-9">
            Join our trainer community and start earning by sharing
            your expertise with thousands of eager learners.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-[#ff4fe8] text-white px-7 py-4 rounded-lg text-base hover:bg-[#2a9cc2] hover:-translate-y-1 transition">
              Become a Trainer
            </button>

            <button className="bg-white border border-gray-300 px-7 py-4 rounded-lg hover:bg-[#17172f] hover:text-white transition">
              Learn More
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#126c48] text-white text-center px-5 pt-20 pb-8">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Ready to Start Your Journey?
          </h2>

          <p className="text-gray-200 leading-7">
            Join thousands of learners already advancing their careers
            with LearnUp.
          </p>

          <button className="mt-9 bg-[#27954f] text-white border-none px-9 py-4 rounded-lg text-base hover:bg-[#260b12] hover:-translate-y-1 transition">
            Get Started — It's Free
          </button>

        </div>

        <hr className="border-0 h-px bg-[#3c3c58] my-16 mx-auto w-[90%]" />

        <p className="text-sm text-gray-300">
          Made By Yogesh Phuyal. Jai Shree Ram! . All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default FRONTEND;
