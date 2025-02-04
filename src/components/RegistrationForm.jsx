export default function RegistrationForm() {
    return (
      <form className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-300">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 
                       focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                       transition-colors duration-200"
          />
        </div>
  
        <div className="space-y-2">
          <label className="block text-gray-300">Year</label>
          <select
            required
            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700
                       focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                       transition-colors duration-200"
          >
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
            <option value="5">Fifth Year</option>
          </select>
        </div>
  
        <div className="space-y-2">
          <label className="block text-gray-300">BITS ID</label>
          <input
            type="text"
            required
            placeholder="2021A7PS0001P"
            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700
                       focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                       transition-colors duration-200"
          />
        </div>
  
        <div className="space-y-2">
          <label className="block text-gray-300">GitHub Project Link</label>
          <input
            type="url"
            required
            placeholder="https://github.com/username/project"
            className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700
                       focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                       transition-colors duration-200"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-3 bg-ubuntu text-white rounded-lg
                     hover:bg-opacity-90 transition-colors duration-200
                     font-bold text-lg mt-8"
        >
          Submit Registration
        </button>
      </form>
    )
  }