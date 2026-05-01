import { useParams } from "react-router-dom";

const EOBAnalysisPage = () => {
  const { id, eobId } = useParams();
  return (
    <div className="p-8 text-foreground">
      EOB Analysis — Patient: {id}, EOB: {eobId}
    </div>
  );
};

export default EOBAnalysisPage;
