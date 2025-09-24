import { cssFormatter } from '@/tools/css-formatter';

export default function NotFoundPage() {
  return (
    <div
      className={cssFormatter(
        'min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center',
      )}
    >
      <div>
        <h1 className={cssFormatter('text-7xl/tight mb-4 font-extrabold')}>
          404
        </h1>
        <p>Página não encontrada</p>
      </div>
    </div>
  );
}
