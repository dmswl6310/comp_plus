import React, { useState, useEffect } from "react";

export type CustomDrawerProps = {
  isOpen?: boolean;
  onClose?: () => void;
  position?: "left" | "right" | "top" | "bottom";
  title?: string;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
};

export const CustomDrawer = ({
  isOpen: controlledIsOpen,
  onClose,
  position = "right",
  title = "Drawer Title",
  children,
  trigger,
}: CustomDrawerProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const open = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (!isControlled) setInternalIsOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    if (!isControlled) setInternalIsOpen(true);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const basePanelClasses = "fixed bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out z-[60] flex flex-col";
  
  const positionClasses = {
    left: `top-0 left-0 h-full w-80 max-w-[80vw] ${open ? "translate-x-0" : "-translate-x-full"} border-r border-gray-200 dark:border-slate-800`,
    right: `top-0 right-0 h-full w-80 max-w-[80vw] ${open ? "translate-x-0" : "translate-x-full"} border-l border-gray-200 dark:border-slate-800`,
    top: `top-0 left-0 w-full h-80 max-h-[80vh] ${open ? "translate-y-0" : "-translate-y-full"} border-b border-gray-200 dark:border-slate-800`,
    bottom: `bottom-0 left-0 w-full h-80 max-h-[80vh] ${open ? "translate-y-0" : "translate-y-full"} border-t border-gray-200 dark:border-slate-800 rounded-t-2xl`,
  };

  return (
    <>
      {trigger && (
        <div className="inline-block" onClick={handleOpen}>
          {trigger}
        </div>
      )}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div className={`${basePanelClasses} ${positionClasses[position]}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">{title}</h2>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 flex-1 overflow-y-auto text-gray-600 dark:text-gray-400">
          {children || <p>Drawer Content goes here...</p>}
        </div>
      </div>
    </>
  );
};
