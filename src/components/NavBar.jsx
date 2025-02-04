export default function Navbar() {
    return (
      <nav className="fixed top-4 w-full h-[60px] md:h-[70px] lg:h-[80px] flex justify-center items-center bg-transparent mt-4 px-4">
        <div className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <img 
            src="/Lunux.ico" 
            alt="Logo" 
            width={120}
            height={120}
            className="min-w-[40px] min-h-[40px]"
          />
        </div>
      </nav>
    );
  }
