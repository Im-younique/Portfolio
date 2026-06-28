import OfficekeeperDetail from "../(detail)/officekeeper";
import WeekipDetail from "../(detail)/weekip";
import ReduckDetail from "../(detail)/reduck";
import PortfolioDetail from "../(detail)/portfolio";
import CheerdoDetail from "../(detail)/cheerdo";
import OneKmwineDetail from "../(detail)/1kmwine";
import FirstDrinkDetail from "../(detail)/firstdrink";
import BoothStampDetail from "../(detail)/boothstamp";
import MoonDiaryDetail from "../(detail)/moondiary";

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
  }
}
