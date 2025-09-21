import clsx from 'clsx';

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader(props: SpinLoaderProps) {
  return (
    <div className={clsx('flex items-center justify-center', props.className)}>
      <div className="size-10 border-5 border-t-transparent border-slate-900 rounded-full animate-spin"></div>
    </div>
  );
}
