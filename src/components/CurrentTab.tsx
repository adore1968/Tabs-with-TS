import { useAppContext } from "../hooks/AppContext";
import DutyList from "./DutyList";
import Loading from "./Loading";

function CurrentTab() {
  const { currentTab } = useAppContext();

  if (!currentTab) return <Loading />;

  return (
    <div className="text-center sm:text-start">
      <div>
        <h3 className="text-xl font-semibold sm:text-2xl">
          {currentTab.title}
        </h3>
        <button className="my-2 bg-white px-2 py-1 text-lg text-black sm:text-xl">
          {currentTab.company}
        </button>
        <p className="mb-5 text-lg sm:text-xl">{currentTab.dates}</p>
      </div>
      <DutyList duties={currentTab.duties} />
    </div>
  );
}

export default CurrentTab;
