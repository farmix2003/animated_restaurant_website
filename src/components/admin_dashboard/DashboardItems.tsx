type DashboardItemsProps = {
  getMyCollections: () => void;
  showMyCollections: boolean;
  setShowMyCollections: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashboardItems = ({
  getMyCollections,
  showMyCollections,
  setShowMyCollections,
}: DashboardItemsProps) => {
  return (
    <div className="flex items-center justify-start gap-10 w-3/4 mt-5">
      <div className="bg-white/20 p-3 rounded-lg cursor-pointer">
        <span className="text-amber-200 hover:text-amber-500 transition-colors font-medium">
          Add Collection ➕
        </span>
      </div>
      {!showMyCollections ? (
        <span
          className="text-amber-200 hover:text-amber-500 transition-colors text-2xl underline font-bold cursor-pointer"
          onClick={getMyCollections}
        >
          My Collections
        </span>
      ) : (
        <span
          className="text-amber-200 hover:text-amber-500 transition-colors text-2xl underline font-bold cursor-pointer"
          onClick={() => setShowMyCollections(false)}
        >
          All Collections
        </span>
      )}
    </div>
  );
};

export default DashboardItems;
