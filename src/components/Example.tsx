import { componentMap, ComponentTypeMap } from "@/data/componentsData";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";

type ExampleProps<K extends keyof ComponentTypeMap> = {
  componentType: K;
  componentProps: ComponentTypeMap[K];
};

const Example = <K extends keyof ComponentTypeMap>({
  componentType,
  componentProps,
}: ExampleProps<K>) => {
  const Component = componentMap[componentType] as React.ComponentType<any>;
  const [propsState, setPropsState] = useState(componentProps);

  const handleChange = (key: string, newValue: string) => {
    setPropsState((prev) => ({
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
          <span>단일 컴포넌트 속성 (Properties) 테스트</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {Object.entries(propsState).map(([key, val]) => (
            <div key={key} className="flex flex-col gap-1.5 focus-within:text-blue-600 transition-colors">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {key}
              </label>
              <input
                type="text"
                value={String(val)}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 px-3.5 text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 sm:text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;
