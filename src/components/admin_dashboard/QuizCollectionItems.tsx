import React from "react";
import { QuizCollection } from "./AdminDashboard";

type DashboardItemsProps = {
  mergedCollections: QuizCollection[];
};

const QuizCollectionItems: React.FC<DashboardItemsProps> = ({
  mergedCollections,
}) => {
  return (
    <>
      {mergedCollections.length === 0 ? (
        <p className="text-white text-xl mt-5">No quiz collections found!</p>
      ) : (
        mergedCollections.map((collection, index) => (
          <div key={index} className="bg-white/20 p-5 rounded-lg m-5 w-3/4">
            <h2 className="text-white text-2xl font-bold">
              {collection.title}
            </h2>
            <p className="text-white mt-2">
              📝 {collection.questions.length} questions
            </p>
            <p className="text-white">👤 Created by: {collection.createdBy}</p>
          </div>
        ))
      )}
    </>
  );
};

export default QuizCollectionItems;
