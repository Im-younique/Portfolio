import WeekipDetail from "../(detail)/weekip";
import ReduckDetail from "../(detail)/reduck";
import PortfolioDetail from "../(detail)/portfolio";
import CheerdoDetail from "../(detail)/cheerdo";
import OneKmwineDetail from "../(detail)/1kmwine";
import MoonDiaryDetail from "../(detail)/moondiary";
import BoothStampDetail from "../(detail)/boothstamp";
import CultureDetail from "../(detail)/culture";
import CnmusicDetail from "../(detail)/cnmusic";

export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = params;

  switch (projectName) {
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
    case "moondiary":
      return <MoonDiaryDetail />;
    case "boothstamp":
      return <BoothStampDetail />;
    case "culture":
      return <CultureDetail />;
    case "cnmusicfesta":
      return <CnmusicDetail />;
  }
}
