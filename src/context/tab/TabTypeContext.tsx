import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import { OverviewTabType } from '@/konstanter';

type TabTypeProviderProps = { children: React.ReactNode };

const TabTypeContext = React.createContext<{
  tabType: OverviewTabType;
  setTabType: Dispatch<SetStateAction<OverviewTabType>>;
}>({
  tabType: OverviewTabType.ENHET_OVERVIEW,
  setTabType: () => undefined,
});

function TabTypeProvider({ children }: TabTypeProviderProps) {
  const [tabType, setTabType] = useState(OverviewTabType.ENHET_OVERVIEW);

  return (
    <TabTypeContext.Provider value={{ tabType, setTabType }}>
      {children}
    </TabTypeContext.Provider>
  );
}

const useTabType = () => {
  const context = React.useContext(TabTypeContext);
  if (context === undefined) {
    throw new Error('useTabType must be used within a TabTypeProvider');
  }
  return context;
};

export { TabTypeProvider, useTabType };
