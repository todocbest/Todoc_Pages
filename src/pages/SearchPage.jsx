import React, {useState} from 'react';
import SearchNav from '../components/SearchNav';
import SearchIcon from "../assets/search_icon2.svg";
import DownIcon from "../assets/down_icon.svg";
import UpIcon from "../assets/up_icon.svg";

const SearchPage = () => {
    const [isDownClicked, setIsDownClicked] = useState(false);
    const [selectType, setSelectType] = useState(1);

    const handleDownClick = () => {
        setIsDownClicked(!isDownClicked);
    };

    const categoryList = [
        {
            id:1,
            name:"전체",
            type:'ALL'
        },
        {
            id:2,
            name:"소설",
            type:''
        },
        {
            id:3,
            name:"인문학",
            type:''
        },
        {
            id:4,
            name:"칼럼",
            type:''
        },
        {
            id:5,
            name:"시",
            type:''
        },
    ]

    const articles = [
        {
            id:1,
            categoryId: 2,
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            id:2,
            categoryId: 2,
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            id:3,
            categoryId: 3,
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            id:4,
            categoryId: 4,
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            id:5,
            categoryId: 2,
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
    ];

    const categoryMap = categoryList.reduce((map, category) => {
        map[category.id] = category.name;
        return map;
    },{});

    const mergedMenu = articles.map(menuItem => ({
        ...menuItem,
        categoryName: categoryMap[menuItem.categoryId]||null
    }));

    return (
        <div>
            <SearchNav/>
            <div className="mt-[176px] flex justify-center items-start">
                <div
                    className="flex justify-between items-center relative">
                    <input
                        id="searchText"
                        placeholder="찾고 싶은 글을 검색해보세요."
                        type="text"
                        className="w-[483px] h-[56px] p-[7px_27px] pl-[115px] rounded-[10px] border border-[#90a36b] transition-colors text-sm"/>
                    <div className="absolute w-[96px] ml-[15px] text-[#0f0f0f] p-[11px_18px] text-xs font-bold flex justify-between">
                        <p className="mt-[2px]">{categoryList.find(item => item.id === selectType).name}</p>
                        <div className="flex">
                            <img
                                src={DownIcon}
                                alt="DownIcon"
                                className={`transition-transform duration-300 ${isDownClicked ? 'transform scale-y-[-1]' : ''}`}
                                onClick={handleDownClick}/>
                            {isDownClicked && (
                                <ul className="absolute w-[96px] mt-[40px] left-0 z-[1] bg-white border border-gray-200 rounded-md shadow-lg">
                                    {categoryList.map((item) => (
                                        <li
                                            key={item.id}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSelectType(item.id);
                                                setIsDownClicked(false);}}>
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <img
                        src={SearchIcon}
                        alt="SearchIcon"
                        className="absolute right-[14px]"/>
                </div>
            </div>
            <div className="mt-[86px] flex flex-col justify-center items-center">
                {mergedMenu.map((article) => (
                    <div className="w-[984px] h-[132px] mb-[30px] relative"
                             key={article.id}>
                            <div className="h-full pl-12 flex flex-col items-start justify-center">
                                <div className="pr-[140px]">
                                <div
                                    className="inline-block px-[13px] bg-[#8A8A8A] py-px rounded-[45px] text-stone-50 text-[15px] font-normal">{article.categoryName}
                                </div>
                                <div
                                    className="text-stone-950 text-xl font-semibold">{article.title}
                                </div>
                                <div
                                    className="text-zinc-500 text-[15px]">{article.content}
                                </div>
                                </div>
                                <div
                                    className="absolute right-14 top-1/2 transform -translate-y-1/2 text-right text-zinc-500 text-xl font-medium">♡ {article.likes}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default SearchPage;