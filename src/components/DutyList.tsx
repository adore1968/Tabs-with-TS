import { Tab } from "../shared/interfaces";
import DutyItem from "./DutyItem";

type Props = { duties: string[] };

function DutyList({ duties }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {duties.map((duty, index) => (
        <DutyItem key={index} duty={duty} />
      ))}
    </div>
  );
}

export default DutyList;
