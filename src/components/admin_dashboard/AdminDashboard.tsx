import DashboardItems from "./DashboardItems";
import QuizCollectionItems from "./QuizCollectionItems";

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

type QuestionsProps = {
  questions: {
    [key: string]: {
      id: number;
      title: string;
      questions: QuestionType[];
      createdBy: string;
    }[];
  };
};

const AdminDashboard = ({ questions }: QuestionsProps) => {
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
      <h1 className="text-white text-4xl mt-10">All Quiz Collections</h1>
      <DashboardItems />
      <QuizCollectionItems mergedCollections={mergedCollections} />
    </div>
  );
};

export default AdminDashboard;
