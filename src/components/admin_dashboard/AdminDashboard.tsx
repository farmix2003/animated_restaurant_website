type QuestionType = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizCollection = {
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
    </div>
  );
};

export default AdminDashboard;
