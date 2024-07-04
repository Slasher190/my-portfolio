import React, { ReactNode } from "react";
import NavItem from "./NavItem";
import {
  FaUser,
  FaChartBar,
  FaMap,
  FaTable,
  FaWpforms,
  FaTh,
} from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import Image from "next/image";

interface NavItemProps {
  icon: React.ComponentType;
  label: string;
  children?: ReactNode;
}

const Sidebar: React.FC = () => {
  const navItems: NavItemProps[] = [
    { icon: RiDashboardFill, label: "NFT Dashboard" },
    { icon: FaChartBar, label: "Medical Dashboard" },
    {
      icon: IoIosApps,
      label: "Apps",
      children: (
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Feed
          </a>
        </li>
      ),
    },
    {
      icon: FaUser,
      label: "Auth Pages",
      children: (
        <>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-md"
            >
              Login
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-md"
            >
              Register
            </a>
          </li>
        </>
      ),
    },
    {
      icon: FaWpforms,
      label: "Forms",
      children: (
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Basic Forms
          </a>
        </li>
      ),
    },
    { icon: FaTable, label: "Data Tables" },
    { icon: FaChartBar, label: "Charts" },
    { icon: FaMap, label: "Maps" },
    {
      icon: FaTh,
      label: "Pages",
      children: (
        <li className="mb-2 hover:text-blue-600">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md hover:text-blue-600 bg-[rgba(0.5,0,0,0)]"
          >
            Profile
          </a>
        </li>
      ),
    },
    {
      icon: BsFillGridFill,
      label: "UI Components",
      children: (
        <>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-md"
            >
              Buttons
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-400 rounded-md"
            >
              Cards
            </a>
          </li>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#121430] h-screen w-[300px] p-5 text-gray-400 ">
      <div className="flex items-center gap-[20px] mb-6">
        <Image
          height={48}
          width={48}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAMAAABj/zSlAAAAgVBMVEUMP3AAAADEolMLP28LP3BLYWYLP3AbR20IO24RRHfisk8rT2sLP3ALPm+mk1iIgl3wu00NQG4LP28LQHAKP29qcmFaamTxu02YiltpcmF6e18LP3ANQG8JPmy2m1UIP23Tq1K2mlYMQHGYilo7WGg8WWkLP28LQG8MP3EMQHD/wksbkFnNAAAAKnRSTlPyAPzj1PV58x4P/vS1W/r5/jyXiGr39v759/emTC37Pf37xPn19KZLxcTm90njAAAEB0lEQVRo3qzUC3KcMBBF0TdIgMTPGWD+jHHsOJVo/wsMcexyDKJpNdwNnGrVK2HHz3RtfXvWCkNKPxd10t13/JiU7ZtCwZMqkn5DyrYDQ3UrzSZU/+lQWreWsokCM710GuTQFEtIDAKIwkRUryFIl8GUKSCsNmFUqSBOlwGUbRBW/Ij/ayyXMjoQitxXCtrwqF4hpDxyzl0wsu4cqgyDKve3FOPaZSoRQC7CtGRKyaX0wb13AcMCKdHQN/dRDq9FUa0IchH8lfPUXQINXTHTfo4yWgIN5ZhJGT9ltQxyGWbT1ks1ImjojPkaH1WC0SFz02IQlVPKaCHkMlApM6FqLBVnzlsFsmJMlYzve6YYdPsRpaWQO2Ehbb9QCRui34/6oMDYRO6ojlhK2U9q4agDSaVgngXG0L9T0iPAPAuM+Z0o6gIwz8Ly/GJHlYOR+qA6kL1QUgRW+3fqBrIn+v1YFf8oA7Kc/370MECMgjH1JzBr36gb5FM/g1nxRmHF1H+AmbID1UM+9Qzs9gOVrJh6BXbNQBUrph6DXTFQSj71DPzUDvcVUz8jIIMOZBXxJ8UIqUMCskwITWtRg+pVCk2rQQ/w6t94jPB+4heoIh+UQ9JvaBClE+f0kkOWhgLRcQw9pJCmQFYR0OGKLcvmoczl2LBXAnIRtuzqh45/WjW7HQVhIAoLhYKFNhaRVZBNvNh14/s/4BrihqwHZkrbc6vxo/aMzp+CrMJJgre66ouFBL7YDMo4q6vLYqVgtpv9h7Z6mgPI7a+qKCCEB8LqAHL+q8oNpB31riFQAJp15uoxhT+30Otxq+Yq5q1Yocjd1QNEBVWXLmfYT1C5GUQEVdGr1WOPu0TwIFTFdWoUhBUkZ5yxDhBUAJpklpKzo0dnDoOqOh/oYlw+UdaN01FBlRv2G7ZP1F7woPz/Mxu4Tb4YmiqRmjtQn8IjA4hLRr8nVMvMIA5U/XtK3fomekLtBekE1GV+Wbn2TcoJldSkE1AVPAeeG7+/CWUpJ6AMgPirur5QidhU7HQQRmzdlSV/KLml2FFgOhSY4oVaNMb6hxkAsVeVlUSTriBKxQerfr1Jh8fqHiHK4VBEQ9WEkD6IhioOKVQI6hPsN6Mgtr78OXhV+g2V1JBBewm7QQ0OKgRY3VMKPEGMX6pHvKvS9FDp5EvBbOrIjMpMEKoiRmVwXbc0QDe4KECB4yNoXB/W6riklh5BR5RkBuuxSYiKz5L8EkQbh6RdVjvGLBwkbJyFFV5ZGXkNB8Wv4aB0wMGE3rgy1fiSamplKubBMuu1SSc3w4Tcey7tlQDzBSEKYTqLBEIU6j64cGobZW201APDaeFABIqTlWvLsEcLHA7Fa7zLpp5XfIemvZeJu34Bo9aDdqlyM2cAAAAASUVORK5CYII="
          alt=""
        />
        <span className="text-white text-[24px] font-bold">Lightence</span>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
