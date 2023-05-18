import { useAppContext } from "../hooks/AppContext";
import { Tab } from "../shared/interfaces";

type Props = {
  value: Tab;
  index: number;
};

function JobItem({ value, index }: Props) {
  const { getCurrentTab } = useAppContext();
  return (
    <button
      onClick={() => getCurrentTab(index)}
      className="text-xl transition-colors hover:text-red-500 sm:text-2xl"
    >
      {value.company}
    </button>
  );
}

export default JobItem;
