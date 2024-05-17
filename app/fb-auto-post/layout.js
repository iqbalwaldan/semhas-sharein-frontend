// Layout.js

import GlobalState from "@/context";
import LayoutClient from "./layout_client";

export default function Layout({ children }) {
  return (
    <GlobalState>
      <LayoutClient>{children}</LayoutClient>
    </GlobalState>
  );
}
