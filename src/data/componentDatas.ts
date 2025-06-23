import { ComponentInfo } from "@/types/component.types";
import listThumbnail from "@assets/list-thumbnail.png";

export const componentData: ComponentInfo[] = [
	{
    id: 'button1',
    name: 'Button',
    tags: ['form', 'basic'],
    image: listThumbnail,
    updatedAt: new Date(),
    description: '기본 버튼 컴포넌트입니다.',
    code: "<button>Click me</button>",
    },
    {
    id: 'button2',
    name: 'Button',
    tags: ['form', 'basic'],
    image: listThumbnail,
    updatedAt: new Date(),
    description: '기본 버튼 컴포넌트입니다.',
    code: "<button>Click me</button>",
    }
];