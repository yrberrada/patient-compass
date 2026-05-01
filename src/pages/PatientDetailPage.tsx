import { useParams } from "react-router-dom";

const PatientDetailPage = () => {
  const { id } = useParams();
  return <div className="p-8 text-foreground">Patient Detail — ID: {id}</div>;
};

export default PatientDetailPage;
