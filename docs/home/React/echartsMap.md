### Echart Map

#### 导入的库

```tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as Echarts from 'echarts';
import dataJson from './TX.js'; // 地图 json 数据
import styles from './gmap.module.less';
```

#### 枚举和 type

```tsx
type MapProps = {
  projectList: {
    lng: number;
    lat: number;
    projectId: number;
    projectName: string;
    county: string;
    fxdj?: string;
    countyDistribution: string;
  }[];
};

enum ColorEnum { 
  '红色预警'='red',
  '黄色预警'='yellow',
}
```

#### React 组件

```tsx
const Index: React.FC<MapProps> = ({ projectList }) => {
  const commonStyle = {
    itemStyle: {
      areaColor: '#6BA6F9',
    },
  };

  Echarts.registerMap('TX', dataJson);
  const options = {
    title: {
      top: 20,
      text: '',
      subtext: '',
      x: 'center',
      textStyle: { color: '#ccc' },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,17,0.80)',
      borderWidth: 0,
      textStyle: {
        color: '#fff',
      },
      axisPointer: {
        type: 'shadow',
        crossStyle: {
          color: '#999',
        },
      },
      formatter: (params) => {
        return `${params.data.projectName}`;
      },
    },
    geo: {
      map: 'TX', // 需要和 registerMap 名字一致
      label: {
        show: true,
        fontSize: 16,
        color: '#fff',
        align: 'center',
        verticalAlign: 'middle',
      },
      itemStyle: {
        areaColor: '#2C64AE',
        borderColor: '#A0CDFF',
        borderWidth: 1,
      },
      emphasis: {
        label: {
          color: '#fff',
        },
        itemStyle: {
          areaColor: '#6BA6F9',
          borderColor: '#A0CDFF',
        },
      },
      bottom: 10,
      top: 10,
    },
    series: [
      // 标点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          scale: 2,
          brushType: 'fill',
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: 'rgb(28,63,220)',
            shadowBlur: 4,
            shadowColor: '#333',
          },
        },

        data: (projectList || []).map((d) => {
          return {
            value: [d.lng, d.lat],
            projectName: d.projectName,
            county: d.county,
            countyDistribution: d.countyDistribution,
            itemStyle: {
              normal: {
                color: d.fxdj ? ColorEnum[d.fxdj] : 'green',
                shadowBlur: 4,
                shadowColor: '#333',
              },
            },
          };
        }),
      },
      // 地图
      {
        name: 'tongxiang',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '大麻镇',
            ...commonStyle,
          },
          {
            name: '高桥街道',
            ...commonStyle,
          },
          {
            name: '崇福镇',
            ...commonStyle,
          },
          {
            name: '屠甸镇',
            ...commonStyle,
          },
          {
            name: '凤鸣街道',
            ...commonStyle,
          },
          {
            name: '洲泉镇',
            ...commonStyle,
          },
          {
            name: '河山镇',
            ...commonStyle,
          },
          {
            name: '石门镇',
            ...commonStyle,
          },
          {
            name: '梧桐街道',
            ...commonStyle,
          },
          {
            name: '濮院镇',
            ...commonStyle,
          },
          {
            name: '乌镇镇',
            ...commonStyle,
          },
        ],
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <ReactECharts
        style={{ height: 546 }}
        option={options}
      />
      <div className={styles.legend}>
        <p className={styles.red}>红色预警项目</p>
        <p className={styles.yellow}>黄色预警项目</p>
        <p className={styles.green}>未预警项目</p>
      </div>
    </div>
  );
};

export default Index;
```