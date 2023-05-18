import { useAppContext } from "../hooks/AppContext";
import JobItem from "./JobItem";

function JobList() {
  const { tabs } = useAppContext();
  return (
    <div className="flex flex-col items-center gap-3">
      {tabs.map((value, index) => (
        <JobItem key={value.id} value={value} index={index} />
      ))}
    </div>
  );
}

export default JobList;
