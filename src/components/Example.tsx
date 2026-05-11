import { componentMap } from "@/data/componentsData";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";
import { ComponentInfo } from "@/types/component.types";
import PreviewShell from "./preview/PreviewShell";

type ExampleProps<T = any> = {
  componentInfo: ComponentInfo<T>;
  exampleData: T;
};

const Example = <T extends Record<string, any>>({
  componentInfo,
  exampleData,
}: ExampleProps<T>) => {
  const Component = componentInfo.Component || componentMap[componentInfo.id];
  const [propsState, setPropsState] = useState<T>(exampleData);
  const controls = componentInfo.propControls || {};

  const handleChange = (key: keyof T, newValue: any) => {
    setPropsState((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col hover:border-blue-300 transition-colors duration-300">
      <PreviewShell>
        <div className="animate-fade-up w-full flex justify-center">
          <Component {...propsState} />
        </div>
      </PreviewShell>
      
      {/* Properties 제어 패널 */}
      <div className="bg-white p-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Settings2 size={16} className="text-gray-400" />
          <span>단일 컴포넌트 속성 (Properties) 동적 테스트</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {(Object.keys(propsState) as Array<keyof T>).map((key) => {
            // @ts-ignore
            const controlType = controls[key]?.type || "string";
            const val = propsState[key];
            
            return (
              <div key={String(key)} className="flex flex-col gap-1.5 focus-within:text-blue-600 transition-colors">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {String(key)}
                </label>
                
                {controlType === "boolean" ? (
                  <label className="relative inline-flex items-center cursor-pointer pb-1">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={Boolean(val)}
                      onChange={(e) => handleChange(key, e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-600">{val ? "활성화됨" : "비활성화됨"}</span>
                  </label>
                ) : controlType === "number" ? (
                  <input
                    type="number"
                    value={Number(val) || 0}
                    // @ts-ignore
                    min={controls[key]?.min}
                    // @ts-ignore
                    max={controls[key]?.max}
                    // @ts-ignore
                    step={controls[key]?.step}
                    onChange={(e) => handleChange(key, Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 sm:text-sm"
                  />
                ) : controlType === "select" ? (
                  <select
                    value={String(val)}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 sm:text-sm"
                  >
                    {/* @ts-ignore */}
                    {controls[key]?.options?.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : controlType === "color" ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={String(val)}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="h-9 w-12 cursor-pointer rounded border border-gray-200 bg-white p-1"
                    />
                    <span className="text-sm font-medium text-gray-600 uppercase">{String(val)}</span>
                  </div>
                ) : controlType === "textarea" ? (
                  <textarea
                    value={String(val)}
                    onChange={(e) => handleChange(key, e.target.value)}
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 sm:text-sm resize-none"
                  />
                ) : controlType === "radio" ? (
                  <div className="flex flex-wrap gap-4 py-1">
                    {/* @ts-ignore */}
                    {controls[key]?.options?.map((opt: string) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`radio-${String(key)}`}
                          value={opt}
                          checked={String(val) === opt}
                          onChange={(e) => handleChange(key, e.target.value)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    value={String(val)}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 sm:text-sm"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Example;
