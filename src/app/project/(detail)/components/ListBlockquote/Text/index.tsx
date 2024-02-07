export default function Text({
  children,
}: {
  children: React.ReactNode | String;
}) {
  return <li>{children}</li>;
}
