import React from "react";
import { Navbar } from "ui/components/Navbar";

export const Layout = () => (
  <>
    <Navbar
      openModalAction={(action) => alert(`Open modal ${action}`)}
      importHistory={(example) => alert(`Open modal ${example}`)}
    />
  </>
);
