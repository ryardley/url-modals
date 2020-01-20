import React from "react";
import { BusProvider, useBusReducer } from "ts-bus/react";
import { Action, getBus } from "./events";
import { Job } from "./types";

type Props = {
  children: React.ReactNode;
};

type State = { jobs: Job[]; loading: boolean };

const initialGlobalState = { jobs: [], loading: false };

const GlobalStateContext = React.createContext<State>(initialGlobalState);

export function useGlobalState() {
  return React.useContext(GlobalStateContext);
}

const bus = getBus();

function ReducerProvider({ children }: Props) {
  const state: State = useBusReducer((state: State, action: Action) => {
    switch (action.type) {
      case "fetchJobs": {
        return {
          ...state,
          loading: true
        };
      }
      case "updateJobs": {
        return {
          ...state,
          jobs: action.payload.jobs,
          loading: false
        };
      }
    }
    return state;
  }, initialGlobalState);

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function StoreProvider({ children }: Props) {
  return (
    <BusProvider value={bus}>
      <ReducerProvider>{children}</ReducerProvider>
    </BusProvider>
  );
}
