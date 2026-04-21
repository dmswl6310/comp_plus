import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import PageTitle from "@/components/common/PageTitle";
import ComponentList from "@/components/ComponentList";
import { componentsData } from "@/data/componentsData";

const Components = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 모든 컴포넌트에서 고유한 태그 추출
  const availableTags = useMemo(() => {
    const tags = componentsData.flatMap((c) => c.tags || []);
    return Array.from(new Set(tags));
  }, []);

  const filteredComponents = useMemo(() => {
    return componentsData.filter((comp) => {
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === "" ||
        comp.name.toLowerCase().includes(query) ||
        comp.id.toLowerCase().includes(query) ||
        comp.description.toLowerCase().includes(query) ||
        (comp.aliases && comp.aliases.some((alias) => alias.toLowerCase().includes(query))) ||
        (comp.tags && comp.tags.some((tag) => tag.toLowerCase().includes(query)));
      
      const matchTag = selectedTag ? comp.tags?.includes(selectedTag) : true;
      
      return matchSearch && matchTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="animate-fade-up">
      <PageTitle 
        title="컴포넌트 목록" 
        description="프로젝트에 사용된 모든 UI 컴포넌트를 탐색하고 사용법을 확인하세요."
      />
      
      <div className="mb-8 flex flex-col gap-6">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-2xl border-0 py-4 pl-12 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6 transition-shadow"
            placeholder="이름이나 설명으로 검색하세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              selectedTag === null
                ? "bg-gray-900 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            전체
          </button>
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                selectedTag === tag
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredComponents.length > 0 ? (
        <ComponentList items={filteredComponents} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-gray-300 shadow-sm ring-1 ring-gray-100">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-900">결과가 없습니다</h3>
          <p className="mt-2 text-gray-500">다른 검색어나 태그를 선택해 보세요.</p>
        </div>
      )}
    </div>
  );
};

export default Components;
