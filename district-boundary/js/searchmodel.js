/*
    实体楼盘,每个商圈做2个实体楼盘数据
*/
var BuildingModel = [
    {
        code: "青岛",                               // 编码
        name: "华润大厦",                           // 楼盘名称
        region: "市南区",                             // 行政区
        businesscircle: "香港中路",                    // 商圈
        decoration: "豪装",                              // 装修水平
        areaMin: 120,                               // 资源最小面积
        areaMax: 230,                               // 资源最大面积
        dayBeginning: 15,                           // 价格按天起点
        monthBeginning: "",                         // 价格按月起点
        priceBeginning: 1,                         // 价格起点
        beginningUnit: "元",                          // 价格起点单位
        resourceAmount: 123,                         // 资源数量
        picUrl: "images/group-1.jpg",              // 图片url
        longitude: 36.071691,                       // 楼盘经度
        latitude: 120.384446,                       // 楼盘纬度
        // 小图(有可能是数组)
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",
        name: "发展大厦",
        region: "市南区",
        businesscircle: "火车站",
        decoration: "精装",
        areaMin: 210,
        areaMax: 490,
        dayBeginning: 16,
        monthBeginning: "",
        priceBeginning: 11,
        beginningUnit: "元",
        resourceAmount: 124,
        picUrl: "images/group-1.jpg",
        longitude: 36.070017,
        latitude: 120.325261,
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",
        name: "兴源大厦111111111",
        region: "市南区",
        businesscircle: "奥帆中心",
        decoration: "简装",
        areaMin: 220,
        areaMax: 480,
        dayBeginning: 17,
        monthBeginning: "",
        priceBeginning: 111111,
        beginningUnit: "元",
        resourceAmount: 125,
        picUrl: "images/group-1.jpg",
        longitude: 36.066341,
        latitude: 120.404779,
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",
        name: "商会大厦",
        region: "市北区",
        businesscircle: "台东",
        decoration: "毛坯",
        areaMin: 190,
        areaMax: 320,
        dayBeginning: 17,
        monthBeginning: "",
        priceBeginning: 14,
        beginningUnit: "元",
        resourceAmount: 125,
        picUrl: "images/group-1.jpg",
        longitude: 36.087927,
        latitude: 120.363421,
        childPic: [
            "images/smallpic.png"
        ]

    },
    {
        code: "青岛",
        name: "裕龙国际中心",
        region: "崂山区",
        businesscircle: "颐中体育场",
        decoration: "简装",
        areaMin: 184,
        areaMax: 210,
        dayBeginning: 18,
        monthBeginning: "",
        priceBeginning: 15,
        beginningUnit: "元",
        resourceAmount: 126,
        picUrl: "images/group-1.jpg",
        longitude: 36.113021,
        latitude: 120.459827,
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",
        name: "南华智慧大厦",
        region: "崂山区",
        businesscircle: "北村",
        decoration: "精装",
        areaMin: 192,
        areaMax: 412,
        dayBeginning: 19,
        monthBeginning: "",
        priceBeginning: 16,
        beginningUnit: "元",
        resourceAmount: 127,
        picUrl: "images/group-1.jpg",
        longitude: 36.114573,
        latitude: 120.441646,
        childPic: [
            "images/smallpic.png"
        ]
    },
    {
        code: "青岛",
        name: "百通大厦",
        region: "李沧区",
        businesscircle: "李村公园",
        decoration: "豪装",
        areaMin: 330,
        areaMax: 516,
        dayBeginning: 20,
        monthBeginning: "",
        priceBeginning: 17,
        beginningUnit: "元",
        resourceAmount: 128,
        picUrl: "images/group-1.jpg",
        longitude: 36.166695,
        latitude: 120.42915,
        childPic: [
            "images/smallpic.png"
        ]
    },
]
