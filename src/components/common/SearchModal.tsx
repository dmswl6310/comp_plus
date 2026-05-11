import React, { useEffect, useState, useRef } from "react";
import { Search, X, ChevronRight, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { componentsData } from "@/data/componentsData";
import { ComponentInfo } from "@/types/component.types";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const categoryLabel: Record<string, string> = {
  ui: "UI",
  blocks: "Blocks",
  templates: "Templates",
};

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      // 포커스를 약간 지연시켜 모달 렌더링 후 실행되도록 함
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const filteredComponents = componentsData.filter((c: ComponentInfo) => {
    if (!query.trim()) return false;
    const lowerQuery = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      c.aliases?.some((alias) => alias.toLowerCase().includes(lowerQuery))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % (filteredComponents.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + (filteredComponents.length || 1)) % (filteredComponents.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredComponents.length > 0) {
        navigate(`/components/${filteredComponents[activeIndex].id}`);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32 px-4 backdrop-blur-sm bg-black/40 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose}></div>
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <Search size={20} className="text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-0 outline-none text-gray-900 placeholder:text-gray-400 sm:text-sm"
            placeholder="컴포넌트 검색... (이름, 설명, 태그)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <div className="flex items-center gap-2 ml-3">
            <span className="hidden sm:inline-block text-[10px] font-semibold text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">ESC</span>
            <button 
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {query.trim() !== "" && (
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {filteredComponents.length > 0 ? (
              <ul className="px-2 space-y-1">
                {filteredComponents.map((c, index) => (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        navigate(`/components/${c.id}`);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                        index === activeIndex ? "bg-blue-50 text-blue-900" : "hover:bg-gray-50 text-gray-700"
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg shadow-sm ${
                          index === activeIndex ? "bg-blue-100 text-blue-600" : "bg-white border border-gray-100 text-gray-400"
                        }`}>
                          <Package size={20} />
                        </div>
                        <div className="text-left flex flex-col">
                          <span className="font-semibold text-sm">{c.name}</span>
                          <span className="text-xs text-gray-500 line-clamp-1">{c.description}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {c.category && (
                          <span className="hidden sm:inline-block text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {categoryLabel[c.category] || c.category}
                          </span>
                        )}
                        <ChevronRight size={16} className={index === activeIndex ? "text-blue-500" : "text-gray-300"} />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-14 text-center px-4">
                <p className="text-sm text-gray-500 font-medium">"{query}"에 대한 검색 결과가 없습니다.</p>
                <p className="text-xs text-gray-400 mt-1">다른 키워드로 검색해 보세요.</p>
              </div>
            )}
          </div>
        )}
        
        {query.trim() === "" && (
          <div className="py-10 text-center px-4">
            <p className="text-sm text-gray-500">컴포넌트 이름, 설명, 태그로 검색해 보세요.</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded">Button</span>
              <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded">Input</span>
              <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded">Card</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
