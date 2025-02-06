import React from "react";
import { QuizCollection } from "./AdminDashboard";

type QuestionsProps = {
  selectedCollection: QuizCollection;
  setSelectedCollection: React.Dispatch<
    React.SetStateAction<QuizCollection | null>
  >;
};

const Questions: React.FC<QuestionsProps> = ({
  selectedCollection,
  setSelectedCollection,
}) => {
  return (
    <div className="bg-white/20 p-5 rounded-lg m-5 w-3/4">
      <p className="text-white font-semibold">
        👤 Created by: {selectedCollection.createdBy}
      </p>
      <ul className="text-white mt-4">
        {selectedCollection.questions.map((q, idx) => (
          <li key={idx} className="mb-3 bg-amber-200/20 p-2 rounded-md">
            <strong>Q{idx + 1}:</strong> {q.question}
            {q.options.map((option, idx) => (
              <div key={idx} className="ml-5">
                {
                  <p>
                    {idx + 1}) {option}
                  </p>
                }
              </div>
            ))}
          </li>
        ))}
      </ul>
      <button
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => setSelectedCollection(null)}
      >
        🔙 Back to Collections
      </button>
    </div>
  );
};

export default Questions;
