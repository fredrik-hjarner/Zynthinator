// import PropTypes from 'prop-types';
import React, { useEffect } from "react";

import { DropDownMenu } from "ui/components/semantic++";
import {
  Connect,
  Create,
  Examples as ExamplesMenu,
  File,
  // Delete,
  History,
  Tests,
} from "./menus";

type Props = {
  openModalAction: (modal: string, modalProps?: any) => void;
  importHistory: (example: any, dunno: /* TODO: */ number) => void;
};

type NavbarContextType = {
  openModalAction: (modal: string, modalProps?: any) => void;
  importHistory: (example: any, dunno: /* TODO: */ number) => void;
};

export const NavbarContext = React.createContext<NavbarContextType>({
  openModalAction: () => {},
  importHistory: () => {},
});

export function Navbar({ openModalAction, importHistory }: Props) {
  useEffect(() => {
    ($(".ui.dropdown") as any)?.dropdown?.({
      /* todo this shit should be in the menu!! */ // eslint-disable-line
      action: "hide",
      delay: {
        hide: 400,
        show: 0,
      },
      duration: 0,
      on: "hover",
    });
  }, []);

  return (
    <NavbarContext.Provider value={{ openModalAction, importHistory }}>
      <DropDownMenu>
        <File />
        <Create />
        <Connect />
        {/* <Delete /> */}
        <ExamplesMenu />
        <History />
        <Tests />
      </DropDownMenu>
    </NavbarContext.Provider>
  );
}
