/*
 *声明——具体是怎样做的(具体实现)
 */
// 添加范围自定义覆盖物（1.2级通用）
function addRangeOverlay(ObjGroup, setZoom) {
    map.clearOverlays();    // 清理地图上面所有点
    for (var i = 0; i < ObjGroup.length; i++) {
        var arr = new Object();
        arr = ObjGroup[i];
        var code = arr.code,
            url = arr.url,
            text = arr.name + "<br />" + arr.resourceAmount + "套"; // 拼接字符串
        var zoom = setZoom; // 获取地图层级
        var RangeOverlay = new rangeOverlay(
            new BMap.Point(arr.latitude, arr.longitude), text, arr.name, url, zoom
        );
        map.addOverlay(RangeOverlay);
    }
};

var buildingOverlayArr = [];
function addBuilding(ObjGroup, setZoom) {
    map.clearOverlays();    // 清理地图上面所有点
    for (var i = 0; i < ObjGroup.length; i++) {
        var buildingArr = new Object();
        buildingArr = ObjGroup[i];
        // buildingName = ObjGroup[i].name;
        var zoom = setZoom; // 获取地图层级
        // 拼接属性文字内容
        var text = "￥" + buildingArr.priceBeginning + " 起",
            mouseoverTxt = buildingArr.name + " " + buildingArr.resourceAmount + "套";
        buildingOverlayArr[i] = BuildingOverlay = new buildingOverlay(
            new BMap.Point(buildingArr.latitude, buildingArr.longitude), text, mouseoverTxt, buildingArr.code, i, zoom    // i = 序号
        );
        map.addOverlay(BuildingOverlay);
        buildingOverlayArr[i] = BuildingOverlay;
    }
};
