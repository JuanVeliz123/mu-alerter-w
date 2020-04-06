import React, { createContext, ReactNode, useReducer } from 'react';
import * as actions from './appContextActions';

interface AppContextProviderProps {
  children: {
    appContainer: ReactNode;
  };
}

interface TimerElementState {
  display: boolean;
  alert: boolean;
}

interface AppContextState {
  layout: {
    isDrawerCollapsed: boolean;
  };
  settings: {
    cp: TimerElementState;
    muun: TimerElementState;
    doubleGoer: TimerElementState;
    moss: TimerElementState;
    iceQueen: TimerElementState;
    balrog: TimerElementState;
    hydra: TimerElementState;
    gorgon: TimerElementState;
    skeleton: TimerElementState;
    metalbalrog: TimerElementState;
    undines: TimerElementState;
    debenter: TimerElementState;
    uruknars: TimerElementState;
    ferea: TimerElementState;
    nix: TimerElementState;
    deepdung: TimerElementState;
    darkswamp: TimerElementState;
    kubera: TimerElementState;
    abyssal: TimerElementState;
    canyon: TimerElementState;
    kundum: TimerElementState;
    medusa: TimerElementState;
  };
}

interface AppContextAction {
  type: string;
  payload: AppContextState['settings'];
}

interface AppContextProviderValue extends AppContextState {
  saveSettings: Function;
}

const initialState: AppContextState = {
  layout: {
    isDrawerCollapsed: true
  },
  settings: {
    cp: {
      display: true,
      alert: true
    },
    muun: {
      display: false,
      alert: false
    },
    doubleGoer: {
      display: false,
      alert: false
    },
    moss: {
      display: true,
      alert: false
    },
    iceQueen: {
      display: true,
      alert: false
    },
    balrog: {
      display: true,
      alert: false
    },
    hydra: {
      display: true,
      alert: false
    },
    gorgon: {
      display: true,
      alert: false
    },
    skeleton: {
      display: true,
      alert: false
    },
    metalbalrog: {
      display: true,
      alert: false
    },
    undines: {
      display: true,
      alert: false
    },
    debenter: {
      display: true,
      alert: false
    },
    uruknars: {
      display: true,
      alert: false
    },
    ferea: {
      display: true,
      alert: false
    },
    nix: {
      display: true,
      alert: false
    },
    deepdung: {
      display: true,
      alert: false
    },
    darkswamp: {
      display: true,
      alert: false
    },
    kubera: {
      display: true,
      alert: false
    },
    abyssal: {
      display: true,
      alert: false
    },
    canyon: {
      display: true,
      alert: false
    },
    kundum: {
      display: false,
      alert: false
    },
    medusa: {
      display: true,
      alert: false
    }
  }
};

export const AppContext = createContext({} as AppContextProviderValue);

const reducer = (state: AppContextState, action: AppContextAction) => {
  switch (action.type) {
    case actions.SAVE_SETTINGS:
      return {
        ...state,
        settings: action.payload
      };
    default:
      return state;
  }
};

export default function AppContextProvider({
  children
}: AppContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveSettings = (newSettings: AppContextState['settings']) => {
    dispatch({ type: actions.SAVE_SETTINGS, payload: newSettings });
  };

  return (
    <AppContext.Provider value={{ ...state, saveSettings }}>
      {children}
    </AppContext.Provider>
  );
}
