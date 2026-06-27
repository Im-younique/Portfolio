import Link from "next/link";
import { PROJECTINFO } from "@/constants";

// icon
import { RiCalendar2Fill, RiArrowLeftLine } from "@remixicon/react";

export default async function ProjectLayout({
  params,
  children,
}: {
  params: Promise<{ projectName: string }>;
  children: React.ReactNode;
}) {
  const { projectName } = await params;
  return (
    <div className="detail-wrapper">
      <Link href="/" className="detail-back-btn" aria-label="메인으로 돌아가기">
        <RiArrowLeftLine />
        <span>메인으로</span>
      </Link>
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
