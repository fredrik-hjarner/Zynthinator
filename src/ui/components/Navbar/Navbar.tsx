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
  openMessageModalAction: (props: {
    header: string;
    content: string;
    icon: string;
    color: string;
  }) => void;
  openModalAction: (modal: string, modalProps?: any) => void;
  importHistory: (example: any, dunno: /* TODO: */ number) => void;
};

type NavbarContextType = {
  openMessageModalAction: (props: {
    header: string;
    content: string;
    icon: string;
    color: string;
  }) => void;
  openModalAction: (modal: string, modalProps?: any) => void;
  importHistory: (example: any, dunno: /* TODO: */ number) => void;
};

export const NavbarContext = React.createContext<NavbarContextType>({
  openMessageModalAction: () => {},
  openModalAction: () => {},
  importHistory: () => {},
});

export function Navbar({
  openMessageModalAction,
  openModalAction,
  importHistory,
}: Props) {
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
    <NavbarContext.Provider
      value={{ openMessageModalAction, openModalAction, importHistory }}
    >
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
