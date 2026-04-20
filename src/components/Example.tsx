import { componentMap } from "@/data/componentsData";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";
import { ComponentInfo } from "@/types/component.types";

type ExampleProps = {
  componentInfo: ComponentInfo;
  exampleData: any;
};

const Example = ({
  componentInfo,
  exampleData,
}: ExampleProps) => {
  const Component = componentInfo.Component || (componentMap[componentInfo.id] as React.ComponentType<any>);
  const [propsState, setPropsState] = useState(exampleData);
  const controls = componentInfo.propControls || {};

  const handleChange = (key: string, newValue: any) => {
    setPropsState((prev: any) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col hover:border-blue-300 transition-colors duration-300">
      {/* 렌더링 결과 공간 (미리보기) */}
      <div className="flex-1 p-8 sm:p-12 border-b border-gray-100 bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center min-h-[250px]">
        <div className="animate-fade-up w-full flex justify-center">
          <Component {...propsState} />
        </div>
      </div>
      
      {/* Properties 제어 패널 */}
      <div className="bg-white p-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Settings2 size={16} className="text-gray-400" />
          <span>단일 컴포넌트 속성 (Properties) 동적 테스트</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {Object.keys(propsState).map((key) => {
            const controlType = controls[key]?.type || "string";
            const val = propsState[key];
            
            return (
              <div key={key} className="flex flex-col gap-1.5 focus-within:text-blue-600 transition-colors">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  {key}
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
                ) : controlType === "select" ? (
                  <select
                    value={String(val)}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10 sm:text-sm"
                  >
                    {controls[key]?.options?.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
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
