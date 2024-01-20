export default function ProjectLayout({
  params,
  children,
}: {
  params: { projectName: string };
  children: React.ReactNode;
}) {
  return (
    <div className="detail-wrapper">
      <header className="detail-header">
        <div className="detail-header-txt-wrap">
          <h3>{params.projectName}</h3>
        </div>
      </header>
      <section className="detail-content-wrapper">
        <div className="detail-content">{children}</div>
      </section>
    </div>
  );
}
