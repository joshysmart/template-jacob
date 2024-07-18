import { BadgeInfo, GlobeLock, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import HistoryButtons from "./HistoryButtons";

export default function Sidenav() {
  const navGroups = {
    client: [
      {
        name: "General",
        icon: <Settings />,
        link: "settings",
      },
      {
        name: "Account",
        icon: <UserRound />,
        link: "settings",
      },
    ],
    resources: [
      {
        name: "About",
        icon: <BadgeInfo />,
        link: "about",
      },
    ],
  };

  return (
    <div className="w-[18%] min-h-screen bg-white border-r-2  border-[#eee] p-4 max-h-screen overflow-scroll">
      <HistoryButtons />
      <div className="mt-6 flex flex-col gap-6">
        {Object.entries(navGroups).map(([key, value]) => (
          <div key={key} className="">
            <h2 className="text-[#A2A6AA] text-sm capitalize font-bold">
              {key}
            </h2>
            <ul className="mt-2 flex flex-col">
              {value.map((navItem) => (
                <li
                  key={navItem.name}
                  className="flex items-center gap-2 text-[#575759]"
                >
                  <Link
                    href={navItem.link}
                    className="text-sm w-full font-semibold flex items-center gap-3 hover:bg-[#E9E9EB] px-3 mx-3 py-1 rounded"
                  >
                    <span>{navItem.icon}</span>
                    <span>{navItem.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
