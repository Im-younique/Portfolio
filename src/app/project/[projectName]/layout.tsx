import { PROJECTINFO } from "@/constants";

// icon
import { RiCalendar2Fill } from "@remixicon/react";

export default function ProjectLayout({
  params,
  children,
}: {
  params: { projectName: string };
  children: React.ReactNode;
}) {
  const { projectName } = params;
  return (
    <div className="detail-wrapper">
      <header className="detail-header">
        <div className="detail-header-txt-wrap">
          <h3>{PROJECTINFO[projectName].title}</h3>
          <p>
            <RiCalendar2Fill />
            <span>프로젝트 수행기간 : </span>
            {PROJECTINFO[projectName].startDate} ~{" "}
            {PROJECTINFO[projectName].endDate}
          </p>
        </div>
      </header>
      <section className="detail-content-wrapper">
        <div className="detail-content">{children}</div>
      </section>
    </div>
  );
}
