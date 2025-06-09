
const products = [
    {
        id: 201, name: "翡翠蝴蝶胸针1", category: "胸针", material: "翡翠/钻石",
        image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80",
        description: "AI设计的天然翡翠蝴蝶造型胸针，镶嵌钻石翅膀"
    },
    {
        id: 202, name: "蓝宝石手链", category: "手链", material: "蓝宝石/白金",
        image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80",
        description: "多颗蓝宝石点缀的手链，灵感来自海洋波纹"
    },
    {
        id: 203, name: "月光石项链", category: "项链", material: "月光石/铂金",
        image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80",
        description: "月光石与白色托帕石结合，形成月光下的梦幻感"
    },
    {
        id: 204, name: "复古戒指", category: "戒指", material: "红宝石/黄金",
        image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80",
        description: "维多利亚风格复古戒指，红宝石主石搭配钻石"
    },
    {
        id: 205, name: "钻石耳坠", category: "耳环", material: "钻石/铂金",
        image: "https://images.unsplash.com/photo-1631723208611-b2be56fa7d5?q=80",
        description: "垂坠式钻石耳环，每颗钻石净度达到VS级"
    },
    {
        id: 206, name: "珍珠贝母手镯", category: "手镯", material: "贝母/珍珠",
        image: "https://images.unsplash.com/photo-1588442494894-a5c6a5c9d1e9?q=80",
        description: "日本贝母与澳大利亚珍珠结合，光滑如玉的质感"
    },
    {
        id: 207, name: "孔雀石吊坠", category: "吊坠", material: "孔雀石/18K金",
        image: "https://images.unsplash.com/photo-1596180880919-f1e6b4f8a0c7?q=80",
        description: "天然孔雀石与18K金镶嵌，独特的花纹展现自然美感"
    },
    {
        id: 208, name: "祖母绿戒指", category: "戒指", material: "祖母绿/钻石",
        image: "https://images.unsplash.com/photo-1614728894747-3c5bd6a56a7a?q=80",
        description: "哥伦比亚祖母绿主石，配以长方形切割钻石"
    },
    {
        id: 209, name: "钛金属手镯", category: "手镯", material: "钛金属",
        image: "https://images.unsplash.com/photo-1600720781444-1a63c6d7a36a?q=80",
        description: "轻质钛金属结构，阳极氧化处理呈现渐变色彩"
    },
    {
        id: 210, name: "蛋白石项链", category: "项链", material: "蛋白石/黄金",
        image: "https://images.unsplash.com/photo-1519710164239-ccbc48d4a4f2?q=80",
        description: "澳大利亚彩蛋白石，在光线下呈现奇幻变彩效果"
    },
    {
        id: 211, name: "金丝编织戒指", category: "戒指", material: "18K金丝",
        image: "https://images.unsplash.com/photo-1631725627452-e5f06f1c2c68?q=80",
        description: "18K金丝手工编织，形成独特的纹理和层次感"
    },
    {
        id: 212, name: "钻石星空手链", category: "手链", material: "钻石/白金",
        image: "https://images.unsplash.com/photo-1593578661660-7dcf4d245ebc?q=80",
        description: "不同大小钻石按星座排列，如同夜空中闪烁的星星"
    },
    {
        id: 213, name: "紫水晶手镯", category: "手镯", material: "紫水晶/银",
        image: "https://images.unsplash.com/photo-1614728894747-3c5bd6a56a7a?q=80",
        description: "巴西紫水晶环绕银手镯，深紫色调充满神秘感"
    },
    {
        id: 214, name: "琥珀吊坠", category: "吊坠", material: "琥珀/黄金",
        image: "https://images.unsplash.com/photo-1589478741087-8a9b5dc7fa77?q=80",
        description: "波罗的海天然琥珀，内含完整植物标本"
    },
    {
        id: 215, name: "珍珠项链", category: "项链", material: "珍珠/铂金",
        image: "https://images.unsplash.com/photo-1534214526114-0ea4d47b04fa?q=80",
        description: "南海天然珍珠项链，光泽圆润尺寸均等"
    },
    {
        id: 216, name: "玫瑰金宝石戒指", category: "戒指", material: "粉晶/玫瑰金",
        image: "https://images.unsplash.com/photo-1627687942510-950ead345cef?q=80",
        description: "玫瑰金镶嵌粉晶，流线型设计适合日常佩戴"
    },
    {
        id: 217, name: "欧泊吊坠", category: "吊坠", material: "火欧泊/白金",
        image: "https://images.unsplash.com/photo-1605106901228-43413b0d7c7a?q=80",
        description: "墨西哥火欧泊主石，火焰般的变彩效果"
    },
    {
        id: 218, name: "蓝晶石手链", category: "手链", material: "蓝晶石/银",
        image: "https://images.unsplash.com/photo-1619644436148-85f2afbd9cdd?q=80",
        description: "天然蓝晶石搭配925银，色彩渐变自然"
    },
    {
        id: 219, name: "黑钻男士戒", category: "戒指", material: "黑钻/钛金",
        image: "https://images.unsplash.com/photo-1600722915014-3815c2b44f6c?q=80",
        description: "工业风设计，多颗黑钻镶嵌钛金戒圈"
    },
    {
        id: 220, name: "海蓝宝耳环", category: "耳环", material: "海蓝宝/白金",
        image: "https://images.unsplash.com/photo-1613928831459-3f33ddeae190?q=80",
        description: "水滴形海蓝宝石，如海水般清澈透明"
    }
];
