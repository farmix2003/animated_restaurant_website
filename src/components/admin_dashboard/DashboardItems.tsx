const DashboardItems = () => {
  return (
    <div className="flex items-center justify-start gap-10 w-3/4 mt-5">
      <div className="bg-white/20 p-3 rounded-lg cursor-pointer">
        <span className="text-amber-500 font-medium">Add Collection +</span>
      </div>
      <span className="text-amber-500 text-2xl underline font-bold cursor-pointer">
        My Collections
      </span>
    </div>
  );
};

export default DashboardItems;
