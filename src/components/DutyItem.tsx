import { FaArrowRight } from "react-icons/fa";

type Props = { duty: string };

function DutyItem({ duty }: Props) {
  return (
    <div className="flex items-center gap-5 text-lg sm:text-xl">
      <div>
        <FaArrowRight className="text-red-500" />
      </div>
      <p>{duty}</p>
    </div>
  );
}

export default DutyItem;
