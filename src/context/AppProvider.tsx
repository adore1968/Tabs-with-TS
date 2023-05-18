import { useState, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";
import { Tab } from "../shared/interfaces";

type Props = { children: JSX.Element };

const url = "https://course-api.com/react-tabs-project";

export function AppProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const fetchTabs = async (): Promise<Tab[]> => {
      return fetch(url).then((r) => {
        setIsLoading(false);
        return r.json();
      });
    };

    fetchTabs().then((data) => setTabs(data));
  }, []);

  const getCurrentTab = (index: number) => {
    setIndex(index);
  };

  const currentTab: Tab | null = tabs[index];

  return (
    <AppContext.Provider value={{ isLoading, tabs, currentTab, getCurrentTab }}>
      {children}
    </AppContext.Provider>
  );
}
