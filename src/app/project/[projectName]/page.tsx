export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {
  return (
    <div>
      <span>project page</span>
      <span>{params.projectName}</span>
    </div>
  );
}
