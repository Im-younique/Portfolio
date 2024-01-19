export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>layout</span>
      <div>{children}</div>
    </div>
  );
}
