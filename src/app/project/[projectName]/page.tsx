import OfficekeeperDetail from "../(detail)/officekeeper";
import WeekipDetail from "../(detail)/weekip";
import ReduckDetail from "../(detail)/reduck";
import PortfolioDetail from "../(detail)/portfolio";
import CheerdoDetail from "../(detail)/cheerdo";
import OneKmwineDetail from "../(detail)/1kmwine";
import FirstDrinkDetail from "../(detail)/firstdrink";
import BoothStampDetail from "../(detail)/boothstamp";
import MoonDiaryDetail from "../(detail)/moondiary";
import RainmakerDetail from "../(detail)/rainmaker";
import LaminaDetail from "../(detail)/lamina";
import CultureDetail from "../(detail)/culture";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const { projectName } = await params;

  switch (projectName) {
    case "officekeeper":
      return <OfficekeeperDetail />;
    case "weekip":
      return <WeekipDetail />;
    case "reduck":
      return <ReduckDetail />;
    case "portfolio":
      return <PortfolioDetail />;
    case "cheerdo":
      return <CheerdoDetail />;
    case "1kmwine":
      return <OneKmwineDetail />;
    case "firstdrink":
      return <FirstDrinkDetail />;
    case "boothstamp":
      return <BoothStampDetail />;
    case "moondiary":
      return <MoonDiaryDetail />;
    case "rainmaker":
      return <RainmakerDetail />;
    case "lamina":
      return <LaminaDetail />;
    case "culture":
      return <CultureDetail />;
  }
}
