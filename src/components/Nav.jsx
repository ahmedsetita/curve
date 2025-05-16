function Nav() {
  const handleCurve = () => {
    const element = document.querySelector(".Curve");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReference = () => {
    const element = document.querySelector(".Reference");
    element?.scrollIntoView({ behavior: "smooth" });
  };

return (
  <nav className="bg-blue-900 fixed w-full z-50 shadow-lg">
    <div className="container mx-auto py-3 px-4 md:px-8">
     <div className="text-2xl md:text-3xl text-center text-yellow-400 font-extrabold mb-4 font-poppins">
  AHMED SETITA
</div>

      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-xl md:text-3xl font-extrabold text-white hover:text-yellow-400 transition duration-300 tracking-wide">
          Stress & Strain Curve
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-10 mt-3 md:mt-0">
          <div
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            onClick={handleReference}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7 text-yellow-400 hover:scale-110 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-sm md:text-base">References</span>
          </div>

          <div
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition duration-300 cursor-pointer"
            onClick={handleCurve}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7 text-yellow-400 hover:scale-110 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span className="text-sm md:text-base">Curve</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

}

export default Nav;
