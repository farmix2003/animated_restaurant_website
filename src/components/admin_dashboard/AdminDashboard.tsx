import { useState } from "react";
import DashboardItems from "./DashboardItems";
import QuizCollectionItems from "./QuizCollectionItems";
import Questions from "./Questions";

type QuestionType = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuizCollection = {
  title: string;
  questions: QuestionType[];
  createdBy: string;
};

export type QuestionsProps = {
  questions: {
    [key: string]: {
      id: number;
      title: string;
      questions: QuestionType[];
      createdBy: string;
    }[];
  };
  username: string;
};

const AdminDashboard: React.FC<QuestionsProps> = ({ questions, username }) => {
  const [selectedCollection, setSelectedCollection] =
    useState<QuizCollection | null>(null);
  const [myCollections, setMyCollections] = useState<QuizCollection[]>([]);
  const [showMyCollections, setShowMyCollections] = useState(false);

  // Merge collections into a single array
  const mergedCollections: QuizCollection[] = Object.entries(questions).map(
    ([title, quizzes]) => ({
      title,
      questions: quizzes.flatMap((quiz) => quiz.questions),
      createdBy: quizzes[0]?.createdBy,
    })
  );

  // Function to filter "My Collections"
  const getMyCollections = () => {
    setMyCollections(
      mergedCollections.filter(
        (collection) => collection.createdBy === username
      )
    );
    setShowMyCollections(true); // Switch to "My Collections" view
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-4xl mt-10">
        {selectedCollection
          ? selectedCollection.title
          : showMyCollections
          ? "My Quiz Collections"
          : "All Quiz Collections"}
      </h1>

      {selectedCollection ? (
        <Questions
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
      ) : (
        <>
          <DashboardItems
            getMyCollections={getMyCollections}
            showMyCollections={showMyCollections}
            setShowMyCollections={setShowMyCollections}
          />
          <QuizCollectionItems
            mergedCollections={
              showMyCollections ? myCollections : mergedCollections
            }
            setSelectedCollection={setSelectedCollection}
          />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
