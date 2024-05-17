"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import React, { useState } from "react";

export default function LayoutClient({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const { user } = useAuth({ middleware: "auth" });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header title={selectedMenuItem} user={user} />
        <main>
          <div className="p-7 md:p-6 2xl:p-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
