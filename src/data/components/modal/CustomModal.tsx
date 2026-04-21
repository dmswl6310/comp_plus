export type CustomModalProps = {
  title: string;
  description: string;
  confirmText: string;
};

export const CustomModal = ({ title, description, confirmText }: CustomModalProps) => {
  return (
    <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between p-6 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
        <button className="ml-4 shrink-0 flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50/80">
        <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          취소
        </button>
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
          {confirmText}
        </button>
      </div>
    </div>
  );
};
