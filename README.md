## 百度地图展示附近1公里范围内的目标

### 需求
- 从DB中检索附近一公里内的数据，并在百度地图展示；

    Note: 主要用于从本地数据表中查询符合条件的目标；

### 效果展示

![2018-05-16-CircleRange](https://github.com/heartsuit/heartsuit.github.io/raw/master/pictures/2018-05-16-CircleRange.gif)


### 总结

(1) 覆盖物样式设置

``` javascript
// 圆形覆盖物
var circle = new BMap.Circle(center, radius,
  {
    strokeColor: "#1abc9c", StrokeStyle: "solid", strokeWeight: 1, strokeOpacity: 0.8, // 轮廓
    fillColor: "#1abc9c", fillOpacity: 0.5, // 填充
    enableEditing: true // 是否启用形状编辑
  });
```

(2) 判断点是否在圆中

  `GeoUtils.js`提供若干几何算法，用来帮助用户判断点与矩形、圆形、多边形线、多边形面的关系,并提供计算折线长度和多边形的面积的公式。基于Baidu Map API 1.2。 @author Baidu Map Api Group 
  这里主要用到其中*判断点是否在圆中*的方法：`BMapLib.GeoUtils.isPointInCircle(point, circle);`

(3) 为圆形覆盖物添加`lineupdate`监听事件

  当覆盖物形状改变时，动态渲染marker；

  Note: 需要在覆盖物中设置`enableEditing: true`;

(4) 设置覆盖物是否可被清除
``` javascript
circle.disableMassClear(); // 禁止circle在 map.clearOverlays 方法中被清除
map.clearOverlays();  // 结合circle.disableMassClear(); 清除所有marker而保留circle；
```