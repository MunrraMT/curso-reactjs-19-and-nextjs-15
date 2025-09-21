type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen flex justify-center">
      <div className="max-w-screen-lg px-8">{props.children}</div>
    </div>
  );
}
