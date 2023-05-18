import { useAppContext } from "./hooks/AppContext";
import Loading from "./components/Loading";
import JobList from "./components/JobList";
import CurrentTab from "./components/CurrentTab";

function App() {
  const { isLoading } = useAppContext();

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="px-6 pb-6 sm:pb-0">
          <h1 className="pb-12 pt-20 text-center text-2xl font-bold sm:text-4xl">
            Experience
          </h1>
          <div className="mx-auto flex min-w-min max-w-6xl flex-col gap-12 sm:flex-row">
            <JobList />
            <CurrentTab />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
