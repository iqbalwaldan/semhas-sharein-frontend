"use client";
import { GlobalContext } from "@/context";
import { useAuth } from "@/hooks/auth";
import {
  AutoAddIcon,
  AutoInboxIcon,
  ContactSupportIcon,
  DashboardIcon,
  GroupPostIcon,
  JoinAllGroupIcon,
  LoginMultiAccountIcon,
  LogoutIcon,
  ManageScheduleIcon,
  MarketplacePostIcon,
  ReminderIcon,
  SubscriptonIcon,
} from "@/public/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/fb-auto-post/",
    icon: <DashboardIcon />,
  },
  {
    id: "marketplace-post",
    label: "Marketplace Post",
    path: "/fb-auto-post/marketplace-post",
    icon: <MarketplacePostIcon />,
  },
  {
    id: "group-post",
    label: "Group Post",
    path: "/fb-auto-post/group-post",
    icon: <GroupPostIcon />,
  },

  {
    id: "auto-add",
    label: "Auto Add",
    path: "/fb-auto-post/auto-add",
    icon: <AutoAddIcon />,
  },
  {
    id: "auto-inbox",
    label: "Auto Inbox",
    path: "/fb-auto-post/auto-inbox",
    icon: <AutoInboxIcon />,
  },
  {
    id: "join-all-group",
    label: "Join All Group",
    path: "/fb-auto-post/join-all-group",
    icon: <JoinAllGroupIcon />,
  },
  {
    id: "reminder",
    label: "Reminder",
    path: "/fb-auto-post/reminder",
    icon: <ReminderIcon />,
  },
  {
    id: "manage-schedule",
    label: "Manage Schedule",
    path: "/fb-auto-post/manage-schedule",
    icon: <ManageScheduleIcon />,
  },
  {
    id: "login-multi-account",
    label: "Login Multi Account",
    path: "/fb-auto-post/login-multi-account",
    icon: <LoginMultiAccountIcon />,
  },
  {
    id: "subscription",
    label: "Subscription",
    path: "/fb-auto-post/subscription",
    icon: <SubscriptonIcon />,
  },
  {
    id: "contact-support",
    label: "Contact Support",
    path: "/fb-auto-post/contact-support",
    icon: <ContactSupportIcon />,
  },
  {
    id: "logout",
    label: "Logout",
    path: "/",
    icon: <LogoutIcon />,
  },
];

export default function Sidebar({ setSelectedMenuItem }) {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  const { logout } = useAuth();

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem) => {
    setSelectedMenuItem(getMenuItem.label);
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`absolute left-0 top-0 flex h-screen w-64 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear py-10">
        <div className="flex items-baseline px-11 md:px-10">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#2E6AFF] to-[#4D2DED] flex items-center justify-center mr-2">
            <img src="/assets/images/logo-white.png" className="w-6 h-7" />
          </div>
          <div className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-b from-[#2E6AFF] to-[#4D2DED]">
            ShareIn
          </div>
        </div>
        <nav className="mt-16">
          <div className="px-11">
            <ul className="flex flex-col gap-6">
              {menuItems.slice(0, 10).map((menuItem, index) => (
                <li key={menuItem.id}>
                  <label
                    onClick={() => handlenavigate(menuItem)}
                    className={`relative cursor-pointer flex items-center gap-4 text-sm font-normal text-neutral-80 duration-300 ease-in-out hover:text-primary-base
                             ${
                               pathName.includes(menuItem.id) &&
                               "text-primary-base"
                             }
                            `}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </label>
                  {index === 0 && (
                    <div className="mt-6 text-xs font-medium text-neutral-70">
                      Post Tools
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-6 text-xs font-medium text-neutral-70">
                      Bot Tools
                    </div>
                  )}
                  {index === 5 && (
                    <div className="mt-6 text-xs font-medium text-neutral-70">
                      Management
                    </div>
                  )}
                  {index === 8 && (
                    <div className="mt-6 text-xs font-medium text-neutral-70">
                      Other
                    </div>
                  )}
                  {index === 9 && <div className="mt-40"></div>}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8">
            <div className="mb-4">
              <ul>
                {menuItems.slice(10, 11).map((menuItem) => (
                  <li key={menuItem.id}>
                    <label
                      onClick={() => handlenavigate(menuItem)}
                      className={`relative cursor-pointer flex items-center gap-4 text-sm font-normal text-neutral-80 duration-300 ease-in-out bg-[#DCDDDE] p-3 rounded-lg hover:text-primary-base
                             ${
                               pathName.includes(menuItem.id) &&
                               "text-primary-base"
                             }
                            `}
                    >
                      {menuItem.icon}
                      {menuItem.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2">
              <ul>
                {menuItems.slice(11, 12).map((menuItem) => (
                  <li key={menuItem.id}>
                    <label
                      onClick={logout}
                      className={`relative cursor-pointer flex items-center gap-4 text-sm font-normal text-error-50 duration-300 ease-in-out hover:text-primary-base
                             ${
                               pathName.includes(menuItem.id) &&
                               "text-primary-base"
                             }
                            `}
                    >
                      {menuItem.icon}
                      {menuItem.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
