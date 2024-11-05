const StepOne = ({ formData, handleChange }) => (
<div className="flex flex-col gap-3 mt-7 bg-sky-100 h-full w-full mx-auto items-center justify-center">
  <h2 className="font-bold text-2xl text-[#39A2BF]">Step 1 / 3: Trip Details</h2>
  
  <div className="flex flex-col gap-2 w-full max-w-md"> {/* Set a max width */}
    <label className="text-[#39A2BF]">Email Address</label>
    <input
      type="email"
      value={formData.email}
      onChange={(e) => handleChange('email', e.target.value)}
      className="w-full p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md" // Changed to w-full
      placeholder="Enter your email address"
    />
  </div>

  <div className="flex flex-col gap-2 w-full max-w-md">
    <label className="text-[#39A2BF]">Destination</label>
    <input
      type="text"
      value={formData.destination}
      onChange={(e) => handleChange('destination', e.target.value)}
      className="w-full p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md"
      placeholder="Enter your destination"
    />
  </div>

  <div className="flex flex-col gap-2 w-full max-w-md">
    <label className="text-[#39A2BF]">Travel Duration</label>
    <div className="flex gap-4">
      <input
        type="date"
        placeholder="Start Date"
        value={formData.startDate}
        onChange={(e) => handleChange('startDate', e.target.value)}
        className="w-[240px] p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md"
      />
      <input
        type="date"
        placeholder="End Date"
        value={formData.endDate}
        onChange={(e) => handleChange('endDate', e.target.value)}
        className="w-[240px] p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md"
      />
    </div>
  </div>

  <div className="flex flex-col gap-2 w-full max-w-md">
    <label className="text-[#39A2BF]">Group Size</label>
    <select
      value={formData.groupSize}
      onChange={(e) => handleChange('groupSize', e.target.value)}
      className="w-full p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md"
    >
      <option value="">Select group size</option>
      <option value="1-2">1-2</option>
      <option value="3-5">3-5</option>
      <option value="6-10">6-10</option>
    </select>
  </div>

  <div className="flex flex-col gap-2 w-full max-w-md">
    <label className="text-[#39A2BF]">Describe Your Dream Trip</label>
    <textarea
      value={formData.dreamTrip}
      onChange={(e) => handleChange('dreamTrip', e.target.value)}
      rows="4"
      className="w-full p-2 shadow-md border border-[#39A2BF] focus:outline-none focus:border-[#39A2BF] focus:ring-2 focus:ring-[#39A2BF] bg-sky-100 rounded-md resize-none"
      placeholder="Brief Description of your Expectations"
    ></textarea>
  </div>
</div>

);
  
export default StepOne;
  