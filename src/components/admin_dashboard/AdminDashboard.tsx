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
};

const AdminDashboard: React.FC<QuestionsProps> = ({ questions }) => {
  const [selectedCollection, setSelectedCollection] =
    useState<QuizCollection | null>(null);

  const mergedCollections: QuizCollection[] = Object.entries(questions).map(
    ([title, quizzes]) => {
      return {
        title,
        questions: quizzes.flatMap((quiz) => quiz.questions),
        createdBy: quizzes[0]?.createdBy,
      };
    }
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-4xl mt-10">
        {selectedCollection ? selectedCollection.title : "All Quiz Collections"}
      </h1>
      {selectedCollection ? (
        <Questions
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
      ) : (
        <>
          <DashboardItems />
          <QuizCollectionItems
            mergedCollections={mergedCollections}
            setSelectedCollection={setSelectedCollection}
          />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
