import React from "react";
import { Navbar } from "ui/components/Navbar";

export const Layout = () => (
  <>
    <Navbar
      openMessageModalAction={(props) => alert(`Open message modal: ${props}`)}
      openModalAction={(action) => alert(`Open modal ${action}`)}
      importHistory={(example) => alert(`Import history: ${example}`)}
    />
  </>
);
