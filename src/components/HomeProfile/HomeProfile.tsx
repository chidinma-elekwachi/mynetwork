function HomeProfile() {
  return (
    <div>
      <div className="border rounded-[0.8rem] bg-white">
        <div>
          <div className="font-semibold leading-[1.5] text-center">
            Welcome, Richard!
          </div>
          <div className="text-center text-[#0a66c2] hover:underline cursor-pointer text-xs mt-1">
            Add a Photo
          </div>
        </div>
        <div className="my-3 border-y">
          <div className="my-3 mx-2 text-sm">
            <div className="text-[#00000099] font-medium">
                Connection
            </div>
            <div className="font-medium">
                Connect with alumni
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
