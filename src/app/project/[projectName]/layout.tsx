export default function ProjectLayout({
  params,
  children,
}: {
  params: { projectName: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <span>layout {params.projectName}</span>
      </header>
      {children}
    </>
  );
}
