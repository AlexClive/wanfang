import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

import('echarts-wordcloud');

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    constructor() {
    }

    ionViewDidEnter() {
        /*关键词热度*/
        const ec = echarts as any;
        const myChart = ec.init(document.getElementById('keyWords'));
        const option = {
            title: {
                text: '词云展示',
                x: 'left',
                textStyle: {
                    fontSize: 23,
                    color: 'rgba(255, 255, 255, 0.8)'
                }

            },
            grid: {
                top: 0,
                left: '3%',
                right: '3%',
                bottom: 0,
                containLabel: true
            },
            tooltip: {
                show: true
            },
            toolbox: {
                show: true,
                showTitle: false, // 隐藏默认文字，否则两者位置会重叠
                tooltip: { // 和 option.tooltip 的配置项相同
                    show: true,
                    formatter(param) {
                        return;
                        return '<div>' + param.title + '</div>'; // 自定义的 DOM 结构
                    },
                    backgroundColor: '#222',
                    textStyle: {
                        fontSize: 12,
                    },
                    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // 自定义的 CSS 样式
                }
            },
            series: [{
                name: '关键词',
                type: 'wordCloud',
                size: ['9%', '80%'],
                sizeRange: [6, 66],
                textRotation: [0, 45, 90, -45],
                // rotationRange: [-45, 90],//旋转角度区间
                rotationStep: 90,
                shape: 'circle',
                gridSize: 10,
                textPadding: 0,
                width: 800,
                height: 500,
                autoSize: {
                    enable: true,
                    minSize: 6
                },
                textStyle: {
                    normal: {
                        color() {
                            return 'rgb(' + [
                                /*   Math.round(Math.random() * 105) + 150,
                                   Math.round(Math.random() * 105) + 150,
                                   Math.round(Math.random() * 105) + 150*/
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                    }
                },
                data: [
                    {
                        name: '没有',
                        value: 30,
                    },
                    {
                        name: ' 屏幕',
                        value: 24
                    },
                    {
                        name: ' 不错',
                        value: 21
                    },
                    {
                        name: ' 可以',
                        value: 19
                    },
                    {
                        name: ' 发货',
                        value: 18
                    },
                    {
                        name: ' 这个',
                        value: 18
                    },
                    {
                        name: ' 什么',
                        value: 17
                    },
                    {
                        name: ' 一个',
                        value: 12
                    },
                    {
                        name: ' 不好',
                        value: 12
                    },
                    {
                        name: ' 质量',
                        value: 11
                    },
                    {
                        name: ' 快递',
                        value: 11
                    },
                    {
                        name: ' 问题',
                        value: 10
                    },
                    {
                        name: ' 物流',
                        value: 9
                    },
                    {
                        name: ' 几天',
                        value: 9
                    },
                    {
                        name: ' 一般',
                        value: 9
                    },
                    {
                        name: ' 就是',
                        value: 9
                    },
                    {
                        name: ' 使用',
                        value: 8
                    },
                    {
                        name: ' 怎么',
                        value: 8
                    },
                    {
                        name: ' 电池',
                        value: 8
                    },
                    {
                        name: ' 不能',
                        value: 8
                    },
                    {
                        name: ' 速度',
                        value: 8
                    },
                    {
                        name: ' 客服',
                        value: 8
                    },
                    {
                        name: ' 一星',
                        value: 8
                    },
                    {
                        name: ' 拍照',
                        value: 8
                    },
                    {
                        name: ' 摄像头',
                        value: 7
                    },
                    {
                        name: ' 外观',
                        value: 7
                    },
                    {
                        name: ' 包装',
                        value: 7
                    },
                    {
                        name: ' 到货',
                        value: 7
                    },
                    {
                        name: ' 有点',
                        value: 7
                    },
                    {
                        name: ' 抢购',
                        value: 6
                    },
                    {
                        name: ' 这样',
                        value: 6
                    },
                    {
                        name: ' 性价比',
                        value: 6
                    },
                    {
                        name: ' 一般般',
                        value: 6
                    },
                    {
                        name: ' 出现',
                        value: 6
                    },
                    {
                        name: ' 以前',
                        value: 6
                    },
                    {
                        name: ' 知道',
                        value: 6
                    },
                    {
                        name: ' 一次',
                        value: 6
                    },
                    {
                        name: ' 真的',
                        value: 6
                    },
                    {
                        name: ' 收到',
                        value: 6
                    },
                    {
                        name: ' 其他',
                        value: 6
                    },
                    {
                        name: ' 电量',
                        value: 6
                    },
                    {
                        name: ' 还是',
                        value: 6
                    },
                    {
                        name: ' 不行',
                        value: 6
                    },
                    {
                        name: ' 红米',
                        value: 6
                    },
                    {
                        name: ' 那么',
                        value: 6
                    },
                    {
                        name: ' 挺快',
                        value: 5
                    },
                    {
                        name: ' 现在',
                        value: 5
                    },
                    {
                        name: ' 服务',
                        value: 5
                    },
                    {
                        name: ' 充电',
                        value: 5
                    },
                    {
                        name: ' 流畅',
                        value: 5
                    },
                    {
                        name: ' 系统',
                        value: 5
                    },
                    {
                        name: ' 非常',
                        value: 5
                    },
                    {
                        name: ' 满意',
                        value: 5
                    },
                    {
                        name: ' 购物',
                        value: 5
                    },
                    {
                        name: ' 玩游戏',
                        value: 5
                    },
                    {
                        name: ' 信号',
                        value: 5
                    },
                    {
                        name: ' 不了',
                        value: 5
                    },
                    {
                        name: ' 别人',
                        value: 5
                    },
                    {
                        name: ' 死机',
                        value: 5
                    },
                    {
                        name: ' 耗电',
                        value: 5
                    },
                    {
                        name: ' 一直',
                        value: 5
                    },
                    {
                        name: ' 像素',
                        value: 5
                    },
                    {
                        name: ' 第一次',
                        value: 5
                    },
                    {
                        name: ' 广告',
                        value: 5
                    },
                    {
                        name: ' 买个',
                        value: 5
                    },
                    {
                        name: ' 黑屏',
                        value: 5
                    },
                    {
                        name: ' 为什么',
                        value: 4
                    },
                    {
                        name: ' 猴王',
                        value: 4
                    },
                    {
                        name: ' 视频',
                        value: 4
                    },
                    {
                        name: ' 体验',
                        value: 4
                    },
                    {
                        name: ' 好评',
                        value: 4
                    },
                    {
                        name: ' 闪屏',
                        value: 4
                    },
                    {
                        name: ' 价格',
                        value: 4
                    },
                    {
                        name: ' 饥饿',
                        value: 4
                    },
                    {
                        name: ' 营销',
                        value: 4
                    },
                    {
                        name: ' 发热',
                        value: 4
                    },
                    {
                        name: ' 还行',
                        value: 4
                    },
                    {
                        name: ' 一天',
                        value: 4
                    },
                    {
                        name: ' 需要',
                        value: 4
                    },
                    {
                        name: ' 特别',
                        value: 4
                    },
                    {
                        name: ' 而且',
                        value: 4
                    },
                    {
                        name: ' 运行',
                        value: 4
                    },
                    {
                        name: ' 等到',
                        value: 4
                    },
                    {
                        name: ' 手机卡',
                        value: 4
                    },
                    {
                        name: ' 呵呵',
                        value: 4
                    },
                    {
                        name: ' 时候',
                        value: 4
                    },
                    {
                        name: ' 东西',
                        value: 4
                    },
                    {
                        name: ' 感觉',
                        value: 4
                    },
                    {
                        name: ' 卡机',
                        value: 4
                    },
                    {
                        name: ' 没什么',
                        value: 4
                    },
                    {
                        name: ' 大家',
                        value: 4
                    },
                    {
                        name: ' 没货',
                        value: 4
                    },
                    {
                        name: ' 售后',
                        value: 4
                    },
                    {
                        name: ' 比较',
                        value: 4
                    },
                    {
                        name: ' 退货',
                        value: 4
                    },
                    {
                        name: ' 加价',
                        value: 3
                    },
                    {
                        name: ' 耳机',
                        value: 3
                    },
                    {
                        name: ' 呜呜',
                        value: 3
                    },
                    {
                        name: ' 一分钱',
                        value: 3
                    },
                    {
                        name: ' 一分货',
                        value: 3
                    },
                    {
                        name: ' 默认',
                        value: 3
                    },
                    {
                        name: ' 说好',
                        value: 3
                    },
                    {
                        name: ' 你们',
                        value: 3
                    },
                    {
                        name: ' 一点',
                        value: 3
                    },
                    {
                        name: ' 超级',
                        value: 3
                    },
                    {
                        name: ' 耐用',
                        value: 3
                    },
                    {
                        name: ' 很快',
                        value: 3
                    },
                    {
                        name: ' 断流',
                        value: 3
                    },
                    {
                        name: ' 套装',
                        value: 3
                    },
                    {
                        name: ' 一样',
                        value: 3
                    },
                    {
                        name: ' 发票',
                        value: 3
                    },
                    {
                        name: ' 买回来',
                        value: 3
                    },
                    {
                        name: ' 软件',
                        value: 3
                    },
                    {
                        name: ' 还好',
                        value: 3
                    },
                    {
                        name: ' 以后',
                        value: 3
                    },
                    {
                        name: ' 下单',
                        value: 3
                    },
                    {
                        name: ' 打游戏',
                        value: 3
                    },
                    {
                        name: ' 我们',
                        value: 3
                    },
                    {
                        name: ' 但是',
                        value: 3
                    },
                    {
                        name: ' 一部',
                        value: 3
                    },
                    {
                        name: ' 王者',
                        value: 3
                    },
                    {
                        name: ' 不怎么样',
                        value: 3
                    },
                    {
                        name: ' 看看',
                        value: 3
                    },
                    {
                        name: ' 自己',
                        value: 3
                    },
                    {
                        name: ' 里面',
                        value: 3
                    },
                    {
                        name: ' 边框',
                        value: 3
                    },
                    {
                        name: ' 看着',
                        value: 3
                    },
                    {
                        name: ' 要死',
                        value: 3
                    },
                    {
                        name: ' 原因',
                        value: 3
                    },
                    {
                        name: ' 新机',
                        value: 3
                    },
                    {
                        name: ' 不如',
                        value: 3
                    },
                    {
                        name: ' 老是',
                        value: 3
                    },
                    {
                        name: ' 购买',
                        value: 3
                    },
                    {
                        name: ' 更好',
                        value: 3
                    },
                    {
                        name: ' 相机',
                        value: 3
                    },
                    {
                        name: ' 竟然',
                        value: 3
                    },
                    {
                        name: ' 一分',
                        value: 3
                    },
                    {
                        name: ' 天才',
                        value: 3
                    },
                    {
                        name: ' 荣耀',
                        value: 3
                    },
                    {
                        name: ' 正常',
                        value: 3
                    },
                    {
                        name: ' 回复',
                        value: 3
                    },
                    {
                        name: ' 联系',
                        value: 3
                    },
                    {
                        name: ' 总体',
                        value: 3
                    },
                    {
                        name: ' 反应',
                        value: 3
                    },
                    {
                        name: ' 老爸',
                        value: 3
                    },
                    {
                        name: ' 星期',
                        value: 3
                    },
                    {
                        name: ' 半个',
                        value: 3
                    },
                    {
                        name: ' 打电话',
                        value: 3
                    },
                    {
                        name: ' 不是',
                        value: 3
                    },
                    {
                        name: ' 保护膜',
                        value: 3
                    },
                    {
                        name: ' 充电器',
                        value: 3
                    },
                    {
                        name: ' 买不到',
                        value: 2
                    },
                    {
                        name: ' 老子',
                        value: 2
                    },
                    {
                        name: ' 差评',
                        value: 2
                    },
                    {
                        name: ' 这么',
                        value: 2
                    },
                    {
                        name: ' 真香',
                        value: 2
                    },
                    {
                        name: ' 真是',
                        value: 2
                    },
                    {
                        name: ' 三天',
                        value: 2
                    },
                    {
                        name: ' 填写内容',
                        value: 2
                    },
                    {
                        name: ' 帮别人',
                        value: 2
                    },
                    {
                        name: ' 终于',
                        value: 2
                    },
                    {
                        name: ' 有时候',
                        value: 2
                    },
                    {
                        name: ' 极致',
                        value: 2
                    },
                    {
                        name: ' 还有',
                        value: 2
                    },
                    {
                        name: ' 希望',
                        value: 2
                    },
                    {
                        name: ' 必须',
                        value: 2
                    },
                    {
                        name: ' 好像',
                        value: 2
                    },
                    {
                        name: ' 严重',
                        value: 2
                    },
                    {
                        name: ' 反应速度',
                        value: 2
                    },
                    {
                        name: ' 后面',
                        value: 2
                    },
                    {
                        name: ' 音乐',
                        value: 2
                    },
                    {
                        name: ' 商品',
                        value: 2
                    },
                    {
                        name: ' 哈哈',
                        value: 2
                    },
                    {
                        name: ' 垃圾',
                        value: 2
                    },
                    {
                        name: ' 好用',
                        value: 2
                    },
                    {
                        name: ' 突出',
                        value: 2
                    },
                    {
                        name: ' 价钱',
                        value: 2
                    },
                    {
                        name: ' 耍猴',
                        value: 2
                    },
                    {
                        name: ' 磕碰',
                        value: 2
                    },
                    {
                        name: ' 几次',
                        value: 2
                    },
                    {
                        name: ' 失灵',
                        value: 2
                    },
                    {
                        name: ' 支持',
                        value: 2
                    },
                    {
                        name: ' 快充',
                        value: 2
                    },
                    {
                        name: ' 意思',
                        value: 2
                    },
                    {
                        name: ' 失败',
                        value: 2
                    },
                    {
                        name: ' 整整',
                        value: 2
                    },
                    {
                        name: ' 没收',
                        value: 2
                    },
                    {
                        name: ' 已经',
                        value: 2
                    },
                    {
                        name: ' 无法',
                        value: 2
                    },
                    {
                        name: ' 方面',
                        value: 2
                    },
                    {
                        name: ' 为啥',
                        value: 2
                    },
                    {
                        name: ' 喜欢',
                        value: 2
                    },
                    {
                        name: ' 套餐',
                        value: 2
                    },
                    {
                        name: ' 完全',
                        value: 2
                    },
                    {
                        name: ' 专业',
                        value: 2
                    },
                    {
                        name: ' 选择',
                        value: 2
                    },
                    {
                        name: ' 48mp',
                        value: 2
                    },
                    {
                        name: ' 无线',
                        value: 2
                    },
                    {
                        name: ' 一个月',
                        value: 2
                    },
                    {
                        name: ' 不过',
                        value: 2
                    },
                    {
                        name: ' ldquo',
                        value: '-'
                    },
                    {
                        name: ' rdquo',
                        value: '-'
                    },
                    {
                        name: ' 这种',
                        value: 2
                    },
                    {
                        name: ' 送货',
                        value: 2
                    },
                    {
                        name: ' 卡死',
                        value: 2
                    },
                    {
                        name: ' 来看',
                        value: 2
                    },
                    {
                        name: ' 糊弄人',
                        value: 2
                    },
                    {
                        name: ' note7',
                        value: 2
                    },
                    {
                        name: ' 时间',
                        value: 2
                    },
                    {
                        name: ' 短信',
                        value: 2
                    },
                    {
                        name: ' 滑落',
                        value: 2
                    },
                    {
                        name: ' 那样',
                        value: 2
                    },
                    {
                        name: ' vivo',
                        value: 2
                    },
                    {
                        name: ' 防水',
                        value: 2
                    },
                    {
                        name: ' 等待',
                        value: 2
                    },
                    {
                        name: ' 直播',
                        value: 2
                    },
                    {
                        name: ' 难受',
                        value: 2
                    },
                    {
                        name: ' 四个',
                        value: 2
                    },
                    {
                        name: ' 到手',
                        value: 2
                    },
                    {
                        name: ' 发现',
                        value: 2
                    },
                    {
                        name: ' 掉电',
                        value: 2
                    },
                    {
                        name: ' 华为',
                        value: 2
                    },
                    {
                        name: ' 再也',
                        value: 2
                    },
                    {
                        name: ' 不用',
                        value: 2
                    },
                    {
                        name: ' 给力',
                        value: 2
                    },
                    {
                        name: ' 两天',
                        value: 2
                    },
                    {
                        name: ' 立马',
                        value: 2
                    },
                    {
                        name: ' 两周',
                        value: 2
                    },
                    {
                        name: ' 处理器',
                        value: 2
                    },
                    {
                        name: ' 关机',
                        value: 2
                    },
                    {
                        name: ' 要么',
                        value: 2
                    },
                    {
                        name: ' 满血',
                        value: 2
                    },
                    {
                        name: ' 不会',
                        value: 2
                    },
                    {
                        name: ' 定金',
                        value: 2
                    },
                    {
                        name: ' 付款',
                        value: 2
                    },
                    {
                        name: ' 心情',
                        value: 2
                    },
                    {
                        name: ' 另外',
                        value: 2
                    },
                    {
                        name: ' 游戏',
                        value: 2
                    },
                    {
                        name: ' 公司',
                        value: 2
                    },
                    {
                        name: ' 按键',
                        value: 2
                    },
                    {
                        name: ' 卡顿',
                        value: 2
                    },
                    {
                        name: ' 晚上',
                        value: 2
                    },
                    {
                        name: ' 百分之',
                        value: 2
                    },
                    {
                        name: ' 手机信号',
                        value: 2
                    },
                    {
                        name: ' 一下',
                        value: 2
                    },
                    {
                        name: ' 开学',
                        value: 2
                    },
                    {
                        name: ' 上班',
                        value: 2
                    },
                    {
                        name: ' 上天',
                        value: 2
                    },
                    {
                        name: ' 配送',
                        value: 2
                    },
                    {
                        name: ' 最后',
                        value: 2
                    },
                    {
                        name: ' 太慢',
                        value: 2
                    },
                    {
                        name: ' 手机套',
                        value: 2
                    },
                    {
                        name: ' 笨重',
                        value: 2
                    },
                    {
                        name: ' 半年',
                        value: 2
                    },
                    {
                        name: ' 屏险',
                        value: 2
                    },
                    {
                        name: ' 先发',
                        value: 2
                    },
                    {
                        name: ' 不灵敏',
                        value: 2
                    },
                    {
                        name: ' 硬度',
                        value: 2
                    },
                    {
                        name: ' 这次',
                        value: 2
                    },
                    {
                        name: ' 性能',
                        value: 2
                    },
                    {
                        name: ' 介绍',
                        value: 2
                    },
                    {
                        name: ' 卡针',
                        value: 2
                    },
                    {
                        name: ' 不理',
                        value: 2
                    },
                    {
                        name: ' 这是',
                        value: 2
                    },
                    {
                        name: ' 买来',
                        value: 2
                    },
                    {
                        name: ' 两次',
                        value: 2
                    },
                    {
                        name: ' 网络',
                        value: 2
                    },
                    {
                        name: ' 就裂',
                        value: 2
                    },
                    {
                        name: ' 没用',
                        value: 2
                    },
                    {
                        name: ' 多次',
                        value: 2
                    },
                    {
                        name: ' 钢化',
                        value: 2
                    },
                    {
                        name: ' 一星怪',
                        value: 1
                    },
                    {
                        name: ' 新款',
                        value: 1
                    },
                    {
                        name: '你行',
                        value: 1
                    },
                    {
                        name: ' 没送',
                        value: 1
                    },
                    {
                        name: ' 一个多',
                        value: 1
                    },
                    {
                        name: ' 礼拜',
                        value: 1
                    },
                    {
                        name: ' 只能',
                        value: 1
                    },
                    {
                        name: ' 价位',
                        value: 1
                    },
                    {
                        name: ' 闪退',
                        value: 1
                    },
                    {
                        name: ' 抢到',
                        value: 1
                    },
                    {
                        name: ' 其它',
                        value: 1
                    },
                    {
                        name: ' 便宜',
                        value: 1
                    },
                    {
                        name: ' 两百',
                        value: 1
                    },
                    {
                        name: ' 盈利',
                        value: 1
                    },
                    {
                        name: ' 机智',
                        value: 1
                    },
                    {
                        name: ' 更新换代',
                        value: 1
                    },
                    {
                        name: ' 太乱',
                        value: 1
                    },
                    {
                        name: ' 赔付',
                        value: 1
                    },
                    {
                        name: ' 自营',
                        value: 1
                    },
                    {
                        name: ' 产品',
                        value: 1
                    },
                    {
                        name: ' 手持',
                        value: 1
                    },
                    {
                        name: ' 夜景',
                        value: 1
                    },
                    {
                        name: ' 机子',
                        value: 1
                    },
                    {
                        name: ' 拆过',
                        value: 1
                    }
                ],
            }]
        };
        myChart.setOption(option);
        /*发文趋势*/
        const myPostTrends = ec.init(document.getElementById('postTrends'));
        const postTrendsOption = {
            // backgroundColor: '#0f375f',
            grid: {
                top: '5%',
                left: 0,
                right: 0,
                bottom: '10%'
            },
            xAxis: {
                data: [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    color: '#999999'
                },
                splitLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
                {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#333333'
                    },
                    position: 'right',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#333333'
                        }
                    }
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 8,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        }
                    }
                }
            ],
            series: [{
                name: '',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                showAllSymbol: false,
                symbol: 'circle',
                symbolSize: 0,
                itemStyle: {
                    color: 'rgba(5,140,255, 0.1)'
                },
                lineStyle: {
                    // color: '#058cff'
                },
                areaStyle: {
                    color: 'rgba(5,140,255, 0.2)'
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
                {
                    name: '',
                    type: 'bar',
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#29B6F6'
                            },
                                {
                                    offset: 1,
                                    color: '#29B6F6'
                                }
                            ])
                        }
                    },
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                }
            ]
        };
        myPostTrends.setOption(postTrendsOption);
        /*作者分析*/
        const myWriter = ec.init(document.getElementById('writer'));
        const Writeroption = {
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                },
                zlevel: 1
            },
            grid: {
                top: '10px',
                right: '10px',
                bottom: '30px',
                left: '100px'
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true
                }
            ],
            series: [
                {
                    name: 'sin',
                    type: 'scatter',
                    large: true,
                    symbolSize: 3,
                    data: (() => {
                        let d = [[0.366, 0.335], [2.669, 0.56], [3.656, -0.785], [6.755, 0.614], [4.374, -1.21], [9.849, -0.089], [9.91, -0.814], [7.77, 1.09], [1.769, 0.881], [8.06, 1.411], [4.675, -1.411], [7.797, 1.281], [6.725, -0.15], [1.183, 1.019], [5.012, -1.037], [2.816, 0.594], [8.731, -0.109], [2.95, 0.304], [7.425, 0.513], [2.908, 0.453], [4.858, -1.18], [4.326, -0.504], [8.003, 0.333], [2.98, 0.315], [2.53, 0.388], [6.441, 0.457], [8.247, 0.113], [4.079, -0.776], [2.635, 0.342], [6.765, 0.528], [5.075, -1.063], [4.451, -0.863], [5.834, -0.712], [2.685, 0.445], [0.764, 0.684], [3.148, 0.189], [2.808, 0.291], [0.678, 0.669], [3.999, -0.999], [4.847, -0.73], [4.109, -1.105], [7.277, 1.221], [5.875, -0.465], [5.632, -0.293], [8.417, 0.048], [6.843, 0.987], [8.281, 0.142], [5.646, -0.073], [5.788, -0.499], [8.503, 1.581], [7.196, 0.577], [2.728, 0.528], [1.163, 0.894], [4.451, -0.773], [9.168, -0.352], [5.812, 0.036], [1.815, 0.815], [7.443, 0.984], [4.433, -1.059], [7.216, 1.224], [7.008, 0.429], [1.393, 1.065], [9.459, -0.583], [9.061, 1.106], [7.205, 0.775], [3.176, -0.01], [6.327, -0.421], [5.862, -0.089], [3.048, -0.135], [5.495, -0.563], [0.168, 0.155], [5.667, -0.281], [3.119, -0.093], [1.21, 1.023], [8.046, 0.63], [0.968, 0.883], [5.787, -0.942], [0.858, 0.835], [7.14, 0.493], [3.281, -0.034], [8.719, 0.522], [8.548, 1.403], [0.992, 0.747], [7.333, 1.141], [2.172, 0.724], [8.85, 0.743], [4.463, -0.977], [6.777, 0.968], [4.329, -1.228], [3.294, -0.116], [9.174, -0.273], [7.911, 1.423], [4.196, -1.053], [8.667, 1.461], [1.126, 0.816], [8.464, 1.231], [1.918, 0.801], [4.259, -0.847], [8.176, 0.274], [0.66, 0.628], [7.057, 0.059], [1.847, 1.065], [8.166, 0.632], [0.74, 0.72], [0.781, 0.665], [5.535, -0.275], [7.37, 0.294], [8.435, 1.556], [7.726, 0.404], [8.107, 1.553], [9.498, -0.745], [7.341, 1.558], [6.397, 0.099], [6.53, 0.622], [1.711, 0.834], [8.664, 1.235], [0.186, 0.179], [7.203, 0.998], [8.358, 0.685], [7.858, 1.241], [8.438, 0.772], [5.834, -0.016], [7.64, 0.946], [4.058, -0.549], [6.086, -0.303], [8.803, 0.867], [0.208, 0.195], [2.146, 1.032], [3.678, -0.687], [3.859, -0.414], [9.115, -0.218], [9.255, 0.796], [4.741, -1.469], [6.285, 0.598], [6.799, 0.156], [4.847, -0.887], [3.401, -0.425], [5.937, 0.085], [5.67, -0.849], [8.681, 1.064], [9.191, -0.479], [8.144, 1.271], [2.874, 0.099], [6.769, 0.733], [2.489, 0.589], [4.486, -0.539], [7.943, 0.351], [4.425, -0.763], [9.045, -0.018], [4.599, -0.684], [9.102, -0.572], [6.835, 0.602], [2.065, 0.774], [0.598, 0.583], [1.483, 0.953], [9.46, 0.138], [8.24, 0.493], [7.078, 1.179], [5.461, -0.736], [4.185, -0.605], [3.535, -0.47], [9.954, -0.504], [9.023, -0.316], [7.74, 1.562], [5.806, -0.473], [9.424, 0.149], [5.632, -0.621], [6.005, -0.27], [0.792, 0.651], [2.751, 0.453], [2.986, -0.031], [3.04, 0.172], [5.51, -0.827], [6.68, 0.602], [3.154, -0.115], [4.688, -0.845], [9.864, -0.957], [1.915, 1.062], [9.935, -0.616], [3.097, 0.299], [4.683, -1.351], [9.476, 0.729], [1.027, 0.809], [5.368, -0.603], [3.565, -0.542], [6.403, 0.414], [4.282, -1.177], [7.657, 1.102], [0.449, 0.418], [9.654, 0.511], [4.105, -1.015], [7.429, 1.232], [8.215, 0.554], [2.251, 0.988], [0.591, 0.509], [3.737, -0.485], [8.421, 0.037], [7.087, 0.785], [0.518, 0.476], [6.374, 0.172], [7.268, 0.441], [3.782, -0.227], [9.782, -0.607], [3.951, -0.369], [6.418, -0.308], [8.324, 1.103], [0.461, 0.427], [1.593, 1.134], [2.986, 0.108], [7.364, 0.906], [4.701, -1.041], [4.669, -0.754], [8.225, 0.907], [4.537, -0.953], [8.94, -0.416], [4.855, -0.97], [1.547, 0.921], [4.405, -0.711], [3.359, -0.372], [5.842, 0.074], [1.457, 0.923], [3.973, -0.358], [1.196, 0.918], [9.751, 0.059], [0.705, 0.619], [6.825, 1.111], [4.854, -1.112], [4.94, -0.953], [5.077, -1.155], [0.668, 0.645], [6.109, -0.474], [4.382, -0.751], [3.063, -0.182], [9.614, 0.563], [1.296, 0.901], [2.232, 1.003], [4.876, -1.202], [0.215, 0.225], [1.807, 0.859], [1.083, 0.886], [6.233, -0.642], [0.59, 0.575], [7.55, 0.818], [4.12, -0.505], [3.312, -0.497], [5.199, -0.484], [6.548, 0.049], [8.697, 1.054], [9.521, -0.247], [8.628, 0.95], [0.474, 0.41], [0.817, 0.773], [1.976, 0.846], [2.328, 0.936], [3.862, -0.821], [8.956, 1.083], [3.05, -0.043], [5.897, -0.147], [1.458, 0.902], [9.822, 0.148], [7.526, 0.66], [6.873, 1.007], [0.947, 0.796], [8.661, 0.9], [8.374, 0.826], [8.274, 1.265], [7.599, 0.435], [5.238, -0.392], [3.859, -0.928], [5.671, -0.217], [8.977, -0.318], [9.977, -0.333], [6.551, 0.252], [4.809, -0.972], [6.147, -0.173], [9.513, 0.648], [8.269, 0.228], [0.155, 0.157], [8.613, 0.493], [0.406, 0.425], [2.182, 0.725], [4.863, -0.573], [2.174, 0.627], [5.29, -0.541], [6.141, -0.523], [5.109, -0.891], [1.877, 0.814], [8.584, 0.87], [8.503, 0.408], [1.798, 1.087], [5.879, -0.779], [3.15, 0.199], [8.459, 0.427], [0.532, 0.54], [2.894, 0.062], [7.314, 1.014], [5.944, -0.4], [8.123, 1.092], [8.964, -0.271], [1.415, 1.065], [5.535, -1.192], [0.432, 0.43], [6.199, -0.542], [1.213, 0.977], [9.832, -0.822], [5.41, -0.731], [2.144, 0.775], [1.744, 1.023], [5.4, -1.173], [7.233, 1.108], [9.731, -0.798], [2.261, 0.899], [6.575, 0.02], [7.41, 1.264], [3.718, -0.772], [4.579, -0.545], [3.041, -0.076], [9.937, 0.408], [8.127, 0.521], [1.823, 1.038], [6.43, -0.108], [9.969, -0.186], [4.356, -1.322], [2.161, 1.018], [9.28, -0.501], [8.01, 1.515], [1.985, 0.801], [2.942, 0.465], [0.104, 0.096], [0.674, 0.65], [9.991, -0.665], [4.487, -0.705], [4.832, -1.379], [6.082, 0.303], [0.529, 0.499], [7.385, 1.485], [7.244, 0.6], [3.573, -0.21], [8.266, 0.591], [9.995, 0.183], [7.021, 0.477], [2.277, 0.867], [3.104, -0.267], [0.21, 0.212], [2.038, 0.78], [5.273, -0.779], [1.088, 0.885], [9.006, 0.413], [6.06, -0.433], [6.988, 0.979], [9.395, -0.005], [5.687, -0.415], [0.841, 0.674], [7.704, 1.226], [9.687, -0.651], [9.74, 0.465], [4.807, -1.234], [9.269, 1.015], [1.295, 0.843], [3.705, -0.375], [4.033, -1.165], [4.08, -0.636], [1.337, 0.909], [0.253, 0.265], [1.063, 0.853], [3.461, -0.013], [4.485, -1.287], [0.275, 0.295], [1.913, 0.901], [6.485, 0.665], [1.716, 0.927], [6.989, 0.854], [8.169, 0.311], [5.39, -0.52], [0.026, 0.024], [2.818, 0.407], [1.157, 0.811], [5.992, 0.124], [9.235, -0.423], [3.505, -0.207], [6.583, -0.015], [9.163, 0.823], [7.181, 0.37], [0.811, 0.77], [1.926, 0.745], [6.059, 0.369], [5.811, -0.731], [9.436, 0.058], [3.813, -0.74], [1.328, 1.053], [9.768, -0.496], [5.658, -0.239], [9.538, -0.598], [3.246, 0.169], [4.319, -1.04], [7.504, 1.6], [3.76, -0.648], [8.823, 0.722], [2.256, 0.755], [9.7, 0.248], [9.265, -0.206], [1.201, 0.939], [3.348, -0.395], [1.124, 0.988], [0.242, 0.236], [0.33, 0.327], [5.563, -1.137], [0.397, 0.395], [4.583, -1.406], [8.603, 1.2], [8.588, -0.041], [6.282, 0.131], [8.917, 0.412], [9.616, 0.342], [6.676, -0.104], [8.904, 0.688], [0.203, 0.187], [8.758, 1.188], [0.495, 0.44], [2.81, 0.564], [7.09, 0.453], [2.644, 0.591], [5.463, -1.001], [5.024, -0.641], [3.567, -0.637], [0.283, 0.301], [8.768, -0.095], [8.873, 0.974], [0.551, 0.495], [0.859, 0.84], [5.845, -0.898], [9.824, 0.263], [0.897, 0.696], [6.148, -0.132], [6.374, -0.057], [7.995, 1.274], [7.294, 0.533], [4.206, -0.522], [3.001, 0.058], [1.959, 1.054], [4.172, -1.028], [7.981, 0.999], [6.01, -0.629], [9.775, -0.034], [5.424, -1], [2.243, 0.814], [5.048, -0.99], [6.159, 0.39], [0.996, 0.793], [7.762, 1.147], [6.199, -0.603], [7.366, 1.533], [4.246, -1.113], [5.001, -0.489], [9.651, -0.818], [1.051, 0.943], [7.975, 0.822], [0.348, 0.365], [5.558, -0.803], [7.139, 1.166], [4.347, -1.109], [2.065, 1.056], [2.618, 0.324], [1.787, 1.114], [4.884, -1.212], [7.487, 1.121], [9.589, -0.835], [7.604, 1.608], [5.154, -0.962], [5.797, -0.007], [3.137, -0.264], [5.641, -0.188], [2.304, 0.742], [2.206, 0.926], [3.972, -0.932], [6.352, 0.589], [9.728, -0.855], [2.868, 0.392], [4.523, -1.239], [4.236, -0.475], [1.728, 0.88], [1.291, 0.986], [0.279, 0.262], [5.162, -0.821], [0.988, 0.782], [4.813, -0.929], [4.358, -1.333], [6.783, 0.895], [3.212, -0.267], [3.067, 0.138], [2.716, 0.353], [6.796, 1.083], [3.097, 0.007], [4.003, -0.404], [0.781, 0.666], [0.014, 0.015], [0.481, 0.432], [9.874, 0.07], [6.911, 0.071], [6.321, 0.417], [1.301, 0.946], [4.256, -0.624], [0.578, 0.533], [7.466, 1.671], [6.343, -0.066], [9.21, 0.969], [5.038, -1.15], [5.786, -0.331], [5.683, -0.71], [4.976, -0.502], [2.891, -0.025], [7.336, 1.474], [4.739, -1.287], [5.184, -0.523], [9.193, -0.245], [1.522, 1.022], [5.029, -1.211], [1.77, 1.039], [7.699, 0.8], [4.649, -0.861], [1.09, 0.818], [4.862, -0.59], [7.471, 0.27], [4.141, -0.747], [7.289, 0.452], [4.886, -0.583], [4.42, -0.987], [7.779, 1.051], [1.016, 0.826], [8.781, 1.458], [4.52, -1.336], [2.834, 0.528], [6.355, -0.551], [0.602, 0.595], [3.658, -0.584], [6.099, -0.015], [0.353, 0.336], [3.655, -0.296], [6.442, -0.085], [2.513, 0.63], [7.066, 0.176], [6.165, -0.084], [6.401, -0.249], [0.524, 0.528], [5.93, -0.838], [4.435, -0.638], [3.384, -0.334], [8.005, 1.277], [3.729, -0.879], [5.924, 0.209], [0.737, 0.64], [5.549, -0.463], [3.71, -0.888], [2.53, 0.627], [3.306, -0.376], [1.347, 1.004], [7.655, 0.732], [1.95, 0.989], [8.258, 0.268], [6.522, 0.329], [2.363, 0.487], [8.979, 1.015], [2.326, 0.671], [9.018, 0.445], [3.773, -0.721], [8.675, 1.525], [1.329, 0.953], [8.007, 1.083], [5.211, -1.115], [7.119, 1.211], [2.639, 0.254], [7.93, 1.465], [4.901, -1.083], [3.352, -0.124], [1.761, 0.871], [5.675, -0.525], [0.023, 0.021], [0.171, 0.178], [2.885, 0.069], [5.981, -0.236], [8.231, 0.734], [2.417, 0.825], [1.272, 0.947], [7.325, 1.199], [3.188, -0.09], [9.123, 0.811], [6.616, 0.259], [4.218, -0.775], [3.912, -0.726], [9.551, 0.635], [1.767, 0.957], [9.031, 0.959], [1.92, 0.874], [2.608, 0.717], [3.381, -0.507], [5.078, -0.58], [6.609, 0.167], [0.133, 0.141], [8.074, 0.189], [5.219, -0.4], [7.27, 0.533], [9.09, 1.149], [2.764, 0.221], [2.558, 0.782], [6.36, -0.221], [5.601, -0.383], [6.213, -0.282], [5.835, -0.425], [2.292, 0.527], [9.412, 0.291], [1.641, 0.928], [0.534, 0.525], [9.167, -0.239], [8.061, 1.123], [2.83, 0.155], [9.799, 0.546], [0.807, 0.681], [5.125, -0.676], [0.925, 0.779], [2.536, 0.634], [3.023, -0.168], [7.882, 1.025], [7.719, 0.846], [1.673, 0.997], [9.521, -0.967], [2.618, 0.611], [7.039, 0.159], [5.835, -0.361], [3.368, -0.424], [8.889, 1.086], [1.727, 0.875], [9.478, 0.217], [9.819, -1.012], [6.385, 0.341], [4.172, -1.109], [4.489, -0.928], [5.744, -1.051], [2.068, 1.064], [9.396, -0.644], [5.452, -0.674], [8.782, 0.53], [1.684, 1.056], [7.833, 0.875], [8.515, 1.565], [1.209, 0.855], [7.692, 1.61], [3.406, -0.423], [8.102, 1.4], [3.005, 0.105], [7.213, 0.986], [4.208, -0.929], [0.548, 0.55], [7.177, 0.448], [4.183, -0.557], [3.39, -0.293], [0.421, 0.431], [4.806, -1.045], [1.414, 1.039], [8.161, 0.598], [4.745, -0.801], [1.161, 0.865], [7.999, 1.35], [4.977, -1.079], [2.398, 0.773], [6.964, 0.283], [9.539, 0.769], [2.567, 0.347], [1.323, 1.028], [3.237, -0.223], [7.085, 1.42], [9.705, -1.122], [5.796, -0.068], [3.692, -0.794], [4.745, -0.983], [3.249, -0.14], [0.64, 0.606], [8.081, 0.43], [8.586, 1.465], [4.489, -1.213], [0.281, 0.28], [7.901, 0.273], [6.527, 0.373], [7.28, 0.65], [8.774, 1.148], [5.561, -0.784], [1.284, 0.969], [1.816, 0.964], [8.256, 1.638], [6.688, 0.158], [1.322, 1.012], [5.212, -0.969], [0.102, 0.11], [5.921, -0.361], [4.782, -0.798], [1.025, 0.803], [1.42, 1.101], [5.319, -1.024], [1.098, 0.969], [0.204, 0.185], [8.011, 1.473], [8.689, 0.44], [9.649, 0.146], [2.506, 0.483], [4.008, -0.362], [0.475, 0.423], [3.66, -0.356], [3.916, -0.864], [0.664, 0.656], [7.61, 0.392], [0.244, 0.258], [5.153, -1.275], [2.943, 0.453], [1.152, 0.87], [4.924, -0.68], [7.202, 0.472], [0.534, 0.557], [3.146, -0.21], [2.936, 0.471], [3.816, -0.859], [8.255, 1.592], [2.203, 0.775], [2.425, 0.789], [9.478, -0.586], [1.446, 1.134], [7.101, 0.362], [6.438, 0.662], [5.529, -1.061], [0.619, 0.6], [2.393, 0.452], [3.968, -0.461], [4.893, -1.426], [5.485, -0.524], [9.925, -0.701], [1.962, 0.996], [3.565, -0.586], [6.507, 0.859], [9.718, -0.981], [2.228, 0.834], [4.162, -1], [5.835, -0.414], [2.846, 0.131], [9.334, 0.934], [0.674, 0.622], [3.7, -0.175], [6.409, -0.218], [6.419, 0.331], [0.203, 0.185], [9.32, 0.24], [0.902, 0.709], [9.172, 0.716], [9.331, -0.382], [8.18, 1.142], [6.155, -0.424], [8.152, 1.684], [2.401, 0.656], [2.11, 0.944], [9.676, -0.68], [5.874, -0.067], [3.024, 0.065], [3.119, 0.228], [3.166, -0.061], [9.938, 0.287], [9.085, -0.401], [8.095, 0.993], [6.766, -0.008], [7.955, 1.784], [7.53, 0.532], [7.843, 1.13], [7.538, 0.269], [4.961, -0.652], [9.891, -0.658], [4.197, -0.808], [3.707, -0.567], [2.531, 0.59], [1.788, 0.828], [8.252, 1.244], [7.783, 0.254], [8.146, 1.44], [7.888, 0.598], [7.585, 1.032], [3.578, -0.513], [0.2, 0.207], [8.533, 0.73], [5.223, -0.546], [8.256, 0.641], [9.266, 0.422], [1.929, 0.761], [6.686, 0.546], [6.692, 0.204], [2.243, 0.787], [7.7, 0.762], [2.163, 1.019], [2.035, 0.857], [6.165, 0.291], [9.44, -0.863], [0.936, 0.883], [0.533, 0.482], [8.169, 1.212], [7.69, 0.74], [4.073, -0.708], [4.095, -0.974], [8.904, 1.135], [0.504, 0.477], [7.985, 1.226], [6.587, 0.152], [7.982, 1.604], [0.846, 0.735], [6.791, 1.12], [1.384, 0.952], [9.168, 0.946], [0.614, 0.537], [2.522, 0.81], [6.846, 0.458], [2.272, 0.801], [9.932, -0.6], [9.619, 0.343], [3.424, -0.281], [8.093, 1.775], [9.948, -1.129], [9.208, 0.908], [8.348, 0.17], [4.174, -0.496], [9.457, -0.919], [7.605, 1.014], [0.173, 0.165], [0.338, 0.354], [7.597, 0.879], [0.224, 0.228], [1.529, 0.903], [1.342, 1.037], [5.763, -1.013], [1.58, 1.066], [2.055, 0.713], [9.824, 0.493], [4.085, -0.894], [5.608, -0.364], [5.749, -0.926], [7.306, 1.53], [2.846, 0.227], [3.247, -0.053], [4.655, -1.078], [1.016, 0.938], [8.724, -0.21], [1.907, 1.107], [3.935, -0.83], [8.681, 0.895], [5.356, -0.807], [7.613, 1.639], [6.398, -0.426], [6.757, 0.903], [6.297, -0.343], [3.869, -0.499], [4.462, -1.372], [9.994, 0.308], [8.803, -0.089], [1.832, 0.996], [9.896, -1.381], [5.517, -0.549], [7.445, 0.685], [9.467, 0.771], [9.711, -0.681], [0.024, 0.025], [8.274, 0.631], [3.921, -0.639], [6.715, -0.209], [7.406, 1.378], [8.158, 0.95], [1.202, 1.047], [5.637, -0.933], [5.048, -0.467], [0.696, 0.574], [7.417, 1.629], [7, -0.023], [1.783, 0.982], [6.188, -0.666], [2.744, 0.624], [4.478, -1.036], [3.155, 0.136], [7.113, 0.125], [2.511, 0.64], [3.359, -0.346], [8.84, 1.235], [6.275, -0.107], [6.688, 0.576], [4.035, -0.944], [9.511, 0.854], [6.745, 0.423], [2.996, 0.149], [0.274, 0.26], [4.252, -0.881], [3.693, -0.622], [1.675, 1.157], [8.728, 0.327], [4.114, -0.454], [1.781, 0.907], [6.992, 1.046], [9.107, -0.274], [7.696, 1.159], [1.488, 0.968], [2.464, 0.732], [7.91, 0.902], [5.91, -0.262], [8.514, 0.588], [6.743, 1.079], [8.034, 0.941], [2.635, 0.615], [3.595, -0.548], [9.711, -0.035], [7.441, 0.743], [1.079, 0.971], [2.656, 0.341], [1.109, 0.922], [7.95, 0.457], [2.735, 0.651], [6.982, 0.066], [9.239, 0.709], [1.085, 0.802], [4.417, -0.711], [7.047, 0.506], [0.718, 0.713], [8.171, 0.615], [6.002, 0.158], [4.667, -1.298], [5.113, -0.649], [5.011, -1.065], [0.902, 0.868], [6.719, -0.192], [0.322, 0.318], [0.174, 0.172], [3.031, 0.263], [0.893, 0.726], [2.716, 0.626], [1.314, 0.875], [7.928, 1.051], [4.359, -0.975], [3.814, -0.511], [4.321, -1.169], [9.792, 0.464], [1.807, 0.938], [6.309, 0.183], [8.359, 0.2], [9.426, 0.769], [3.773, -0.893], [9.939, 0.334], [3.425, -0.621], [1.32, 1.07], [3.187, -0.319], [9.015, 0.471], [8.573, 0.166], [2.024, 1.041], [7.918, 0.509], [2.01, 1.03], [6.551, 0.239], [1.717, 1.141], [9.07, -0.503], [1.008, 0.913], [3.9, -0.758], [3.638, -0.342], [8.959, -0.371], [9.569, -0.12], [9.169, -0.626], [2.654, 0.556], [4.985, -1.122], [6.696, 0.977], [1.425, 0.908], [9.601, 0.166], [2.51, 0.462], [4.397, -0.803], [9.514, -0.461], [4.497, -0.763], [1.196, 0.848], [1.437, 0.998], [3.2, -0.314], [9.122, 1.072], [0.916, 0.742], [3.339, -0.11], [7.87, 0.816], [7.891, 1.325], [8.152, 0.459], [6.984, 0.645], [2.806, 0.292], [7.756, 1.124], [5.922, -0.369], [9.498, 0.087], [1.052, 0.782], [2.01, 0.912], [7.066, 0.025], [1.652, 1.151], [6.809, 0.338], [9.232, 0.374], [4.841, -1.22], [9.122, 0.825], [9.468, -0.447], [6.961, 0.901], [3.716, -0.578], [2.584, 0.774], [7.589, 0.483], [3.289, 0.089], [1.879, 0.867], [1.931, 1.127], [3.686, -0.766], [1.123, 0.963], [9.976, -1.298], [8.288, 0.99], [3.308, -0.229], [5.073, -0.871], [2.855, 0.243], [1.897, 1.035], [3.097, -0.049], [8.981, 0.826], [6.358, -0.14], [1.762, 1.108], [4.85, -1.005], [2.882, 0.402], [9.257, -0.157], [0.754, 0.748], [0.127, 0.123], [5.332, -0.47], [0.479, 0.46], [1.737, 1.111], [7.081, 0.195], [2.326, 0.76], [2.794, 0.331], [0.729, 0.721], [4.94, -1.417], [0.529, 0.546], [6.069, -0.262], [4.317, -0.681], [5.6, -1.019], [6.129, -0.041], [6.001, -0.804], [0.957, 0.888], [0.418, 0.402], [2.236, 0.809], [9.658, -0.862], [4.679, -0.999], [0.036, 0.035], [8.909, 0.558], [2.382, 0.501], [8.531, 1.367], [9.305, -0.112], [6.244, 0.069], [0.893, 0.717], [2.04, 1.047], [4.966, -1.028], [9.142, 0.443], [9.232, 0.07], [4.265, -0.483], [7.726, 0.472], [7.065, 1.068], [0.459, 0.434], [6.669, 0.377], [3.309, -0.376], [3.446, -0.067], [0.821, 0.725], [9.028, 0.404], [8.624, 0.695], [9.32, 0.988], [5.882, -0.461], [7.061, 0.961], [0.698, 0.595], [1.476, 1.056], [8.87, 0.366], [2.074, 0.975], [7.123, 0.344], [7.699, 1.55], [6.754, 0.394], [1.876, 1.131], [4.728, -1.167], [5.207, -0.575], [4.656, -1.268], [1.934, 0.973], [8.385, 0.403], [1.98, 1.003], [3.922, -0.902], [2.141, 0.881], [7.022, 0.471], [1.227, 1.062], [7.597, 0.717], [7.971, 1.637], [9.872, -0.799], [2.728, 0.513], [8.827, 0.224], [4.638, -0.584], [1.792, 0.829], [6.188, -0.023], [1.6, 0.884], [9.272, 0.568], [6.396, -0.45], [5.751, -0.285], [0.199, 0.178], [3.121, 0.247], [1.689, 0.88], [1.63, 1.123], [6.702, -0.152], [5.648, -0.495], [8.155, 0.297], [6.542, 0.364], [4.464, -1.152], [1.64, 1.024], [1.027, 0.844], [7.147, 1.2], [8.765, 0.55], [1.556, 1.058], [7.015, 0.018], [1.657, 1.151], [0.636, 0.556], [7.548, 1.412], [2.72, 0.345], [6.327, 0.444], [2.864, 0.179], [1.289, 0.973], [0.006, 0.006], [7.607, 0.978], [2.312, 0.542], [3.583, -0.419], [0.733, 0.632], [7.452, 1.182], [7.895, 0.358], [9.051, 0.545], [8.553, 0.132], [7.448, 1.112], [0.589, 0.525], [5.342, -0.724], [2.908, 0.043], [5.333, -0.63], [6.302, -0.408], [2.98, 0.382], [1.033, 0.764], [2.72, 0.624], [6.627, 0.163], [5.547, -0.174], [6.059, -0.25], [4.223, -0.579], [8.095, 0.306], [4.367, -0.804], [4.829, -1.068], [2.232, 0.8], [9.283, -0.506], [3.087, 0.09], [0.708, 0.628], [8.489, 1.367], [8.785, -0.087], [1.454, 1.02], [6.976, 0.311], [1.39, 1.013], [9.289, -0.145], [4.059, -0.453], [0.036, 0.033], [4.028, -0.743], [2.981, 0.052], [8.455, 1.367], [3.28, -0.404], [6.047, 0.25], [6.285, -0.262], [7.583, 1.187], [0.626, 0.54], [9.715, 0.668], [9.762, -1.252], [3.332, -0.085], [9.755, -0.966], [6.172, 0.13], [8.181, 0.717], [0.157, 0.171], [4.563, -1.315], [6.053, 0.309], [7.033, 0.081], [5.063, -0.579], [4.245, -0.985], [5.476, -0.619], [4.464, -0.993], [9.874, -0.139], [1.969, 0.819], [8.485, 1.35], [0.367, 0.354], [4.269, -0.655], [2.71, 0.226], [0.159, 0.168], [8.477, 0.722], [5.788, -0.218], [8.423, 0.834], [6.915, 1.037], [4.129, -0.966], [1.947, 1.083], [2.131, 0.674], [8.257, 1.136], [6.509, -0.104], [7.797, 1.184], [2.208, 0.751], [7.231, 1.068], [7.557, 0.504], [7.248, 1.213], [5.601, -0.843], [0.608, 0.588], [3.402, -0.514], [2.949, 0.209], [3.032, -0.044], [6.202, 0.013], [1.224, 0.822], [2.435, 0.853], [3.378, -0.492], [4.776, -0.988], [7.556, 0.856], [0.197, 0.197], [1.044, 0.821], [6.437, 0.421], [9.023, -0.227], [7.257, 1.022], [4.91, -1.242], [1.113, 0.932], [8.249, 0.522], [4.856, -0.612], [8.531, 0.622], [3.059, 0.318], [0.471, 0.408], [2.9, 0.513], [0.381, 0.371], [4.48, -0.826], [5.299, -1.118], [5.993, 0.014], [1.3, 0.909], [3.613, -0.307], [6.107, -0.268], [8.104, 1.004], [9.78, -0.654], [5.046, -0.5], [4.882, -1.27], [0.238, 0.242], [4.496, -1.081], [9.275, 0.269], [8.039, 0.255], [7.599, 1.585], [2.452, 0.622], [2.478, 0.667], [2.409, 0.553], [9.415, 0.498], [1.583, 0.899], [0.609, 0.61], [1.734, 0.924], [5.731, -0.099], [9.383, -0.164], [4.627, -0.671], [3.399, -0.347], [7.836, 1.296], [2.912, 0.046], [8.817, 1.037], [3.766, -0.853], [9.817, -0.237], [6.61, 0.028], [5.174, -0.732], [5.928, -0.352], [3.284, -0.091], [5.2, -0.906], [5.868, 0.161], [0.133, 0.133], [0.212, 0.219], [8.024, 0.456], [2.693, 0.603], [6.645, 0.334], [2.577, 0.574], [2.458, 0.513], [3.721, -0.182], [5.696, -0.926], [3.091, 0.264], [1.888, 0.781], [4.954, -0.647], [3.332, -0.377], [5.449, -0.256], [2.088, 0.828], [2.678, 0.679], [3.007, 0.05], [3.972, -0.612], [7.236, 0.631], [4.584, -0.792], [7.712, 0.649], [4.454, -0.833], [2.517, 0.543], [4.235, -0.699], [4.314, -1.265], [2.559, 0.702], [5.815, -0.5], [1.811, 1.053], [1.766, 0.979], [9.745, 0.5], [3.329, -0.494], [2.685, 0.522], [5.8, -0.702], [5.561, -0.318], [2.093, 0.692], [3.17, 0.097], [6.033, -0.268], [2.66, 0.659], [8.218, 0.784], [2.738, 0.547], [2.163, 0.821], [9.778, 0.01], [5.755, -1.002], [3.574, -0.24], [9.242, -0.721], [1.95, 1.047], [3.487, -0.372], [4.041, -0.441], [9.313, -0.491], [4.338, -0.787], [2.815, 0.211], [1.501, 1.069], [8.218, 0.37], [2.755, 0.458], [4.588, -1.331], [5.091, -0.668], [8.906, 0.037], [2.452, 0.785], [3.768, -0.941], [3.742, -0.344], [9.355, -0.529], [9.301, 0.774], [9.002, -0.298], [2.95, 0.286], [3.822, -0.861], [3.241, 0.063], [8.13, 0.752], [8.428, 1.509], [3.17, -0.162], [6.693, 0.592], [6.745, -0.162], [6.172, 0.262], [5.789, -0.596], [9.442, 0.264], [3.153, -0.074], [7.062, 1.106], [6.384, -0.183], [2.362, 0.841], [3.323, -0.296], [5.887, -0.011], [9.941, -1.046], [2.177, 0.942], [3.613, -0.796], [3.752, -0.248], [1.495, 0.932], [0.25, 0.27], [3.098, 0.014], [4.604, -0.99], [6.1, -0.672], [1.413, 1.076], [0.705, 0.604], [4.994, -0.535], [2.427, 0.524], [3.976, -0.563], [7.696, 0.3], [8.836, 0.737], [2.667, 0.281], [2.881, 0.497], [3.193, -0.345], [7.465, 1.213], [3.001, -0.103], [7.595, 1.565], [6.657, 0.188], [4.671, -0.965], [8.027, 0.668], [1.66, 1.021], [1.942, 0.776], [5.93, -0.18], [2.756, 0.24], [4.822, -0.752], [0.654, 0.561], [6.727, 0.755], [8.467, 0.003], [9.273, 0.967], [7.58, 0.591], [2.732, 0.405], [7.443, 0.194], [5.229, -0.456], [5.072, -1.112], [5.796, 0.069], [3.106, -0.125], [6.092, 0.364], [5.756, -0.567], [7.826, 1.071], [2.385, 0.5], [1.14, 0.925], [1.872, 0.939], [5.143, -0.748], [6.126, -0.594], [6.612, 0.556], [1.248, 0.825], [5.271, -0.347], [4.662, -1.176], [7.033, 0.928], [4.124, -0.917], [4.529, -0.781], [2.179, 0.762], [2.197, 0.945], [7.498, 0.494], [5.239, -0.537], [6.592, 0.177], [2.955, 0.329], [8.71, 0.614], [8.729, 1.312], [9.838, -0.566], [4.717, -0.596], [3.012, -0.114], [7.893, 1.007], [8.34, 0.267], [1.285, 1.003], [6.523, -0.107], [9.153, 0.802], [7.896, 0.702], [0.932, 0.837], [3.015, -0.053], [0.697, 0.711], [4.093, -1.025], [5.049, -0.612], [8.159, 0.592], [8.645, 0.808], [8.293, 0.283], [7.721, 1.554], [6, -0.419], [9.134, 0.67], [6.584, -0.298], [8.325, 1.461], [7.478, 0.533], [6.585, 0.798], [2.367, 0.687], [7.693, 1.451], [4.251, -1.186], [5.243, -0.631], [5.927, -0.901], [7.895, 1.785], [5.953, -0.911], [7.271, 0.841], [9.615, -0.5], [1.761, 1.119], [6.697, 0.297], [9.785, 0.513], [9.916, -0.504], [7.183, 1.195], [6.789, 0.066], [2.177, 0.877], [4.348, -1.183], [3.907, -0.608], [0.585, 0.533], [5.192, -0.831], [5.48, -0.801], [6.314, 0.121], [4.436, -1.15], [9.152, 0.68], [6.851, 0.502], [7.408, 1.451], [6.508, -0.423], [2.594, 0.649], [9.485, -0.999], [6.145, -0.02], [4.932, -1.444], [0.232, 0.238], [8.948, -0.137], [6.906, 0.615], [9.335, -0.741], [6.273, 0.27], [5.791, -0.763], [3.478, -0.14], [7.225, 0.128], [2.258, 0.845], [5.685, -0.714], [6.067, 0.264], [6.625, 0.324], [0.852, 0.809], [9.175, 0.006], [0.108, 0.11], [2.13, 0.806], [9.454, 0.478], [6.795, 0.212], [5.982, -0.078], [3.674, -0.714], [3.74, -0.326], [6.661, 0.083], [2.716, 0.465], [6.897, 0.056], [0.813, 0.746], [4.292, -0.925], [5.57, -0.328], [1.632, 0.98], [8.018, 1.473], [0.569, 0.514], [0.845, 0.75], [5.945, -0.895], [9.282, 0.367], [2.259, 0.754], [2.569, 0.792], [7.066, 0.269], [4.058, -0.444], [5.947, -0.922], [7.694, 0.993], [5.29, -0.986], [4.894, -0.54], [7.687, 0.792], [5.284, -0.643], [9.683, -1.106], [1.127, 0.937], [9.367, -0.542], [7.172, 1.04], [9.713, -0.802], [4.703, -0.655], [7.814, 0.225], [0.825, 0.76], [7.578, 0.851], [5.374, -0.59], [2.276, 0.623], [6.056, 0.219], [5.399, -1.255], [0.553, 0.549], [6.203, -0.544], [5.047, -0.64], [3.511, -0.439], [1.918, 1.037], [9.929, -1.338], [1.686, 1.144], [5.055, -1.188], [6.255, 0.464], [9.069, -0.452], [0.159, 0.159], [6.621, -0.013], [4.205, -0.603], [8.123, 0.82], [2.134, 0.894], [1.434, 0.935], [5.943, 0.183], [4.783, -1.214], [5.494, -0.517], [9.559, -0.649], [7.648, 1.448], [0.573, 0.521], [3.914, -0.646], [1.895, 0.839], [0.452, 0.473], [1.172, 0.886], [5.489, -0.331], [2.904, 0.05], [2.571, 0.691], [9.276, -0.292], [4.238, -0.867], [2.714, 0.198], [6.298, 0.025], [9.345, -0.617], [7.986, 1.376], [1.154, 0.894], [6.745, 0.519], [0.675, 0.584], [7.949, 1.278], [0.882, 0.723], [1.029, 0.958], [2.649, 0.439], [2.711, 0.686], [3.085, 0.05], [5.627, -0.536], [7.666, 0.278], [8.323, 1.72], [5.875, -0.662], [4.467, -0.876], [9.223, -0.222], [7.994, 1.453], [0.048, 0.046], [6.703, 0.659], [6.018, -0.817], [0.952, 0.908], [2.664, 0.261], [4.294, -0.8], [8.53, 0.067], [6.304, 0.026], [5.124, -1.268], [3.382, 0.097], [9.69, -1.012], [0.799, 0.741], [5.057, -1.123], [4.188, -0.576], [2.344, 0.695], [6.183, 0.516], [8.513, 0.065], [6.539, 0.398], [8.018, 0.326], [6.004, -0.237], [6.852, 0.139], [5.993, 0.272], [5.219, -1.013], [1.298, 1.039], [3.342, -0.514], [6.106, 0.042], [2.227, 0.608], [0.845, 0.792], [4.748, -1.244], [4.329, -0.92], [8.606, 0.718], [3.649, -0.199], [9.873, -0.473], [5.973, -0.224], [1.463, 0.862], [0.125, 0.125], [5.165, -1.08], [0.583, 0.596], [6.283, -0.089], [6.15, 0.227], [2.63, 0.449], [3.719, -0.451], [3.629, -0.488], [1.471, 1.061], [0.335, 0.314], [6.111, -0.104], [4.917, -1.236], [4.799, -0.934], [3.913, -0.993], [0.151, 0.151], [5.415, -0.958], [7.947, 1.735], [0.989, 0.819], [8.995, 0.685], [3.49, -0.667], [6.324, 0.234], [2.353, 0.476], [0.117, 0.12], [9.858, -1.174], [9.06, 0.719], [2.546, 0.472], [3.261, -0.069], [0.358, 0.326], [0.325, 0.329], [0.522, 0.49], [6.135, 0.014], [0.019, 0.017], [3.943, -0.443], [5.441, -1.025], [8.607, 1.137], [4.179, -1.099], [9.174, 0.386], [2.909, -0.04], [1.776, 1.13], [0.259, 0.24], [5.903, -0.056], [0.586, 0.532], [0.658, 0.658], [4.697, -1.342], [3.63, -0.135], [5.803, -0.509], [0.145, 0.155], [7.082, 0.278], [5.427, -0.331], [9.699, -0.717], [8.279, 0.967], [0.687, 0.62], [3.259, -0.086], [3.613, -0.631], [9.776, 0.04], [2.389, 0.629], [1.539, 1.03], [2.147, 0.736], [0.871, 0.846], [1.738, 0.956], [4.51, -0.831], [7.068, 0.097], [7.323, 1.295], [7.874, 0.491], [4.791, -0.666], [5.455, -1.104], [6.457, 0.758], [0.456, 0.44], [6.2, 0.479], [3.751, -0.654], [1.025, 0.866], [8.17, 0.144], [0.078, 0.079], [9.787, -0.747], [2.958, 0.388], [7.695, 0.333], [5.094, -0.683], [0.031, 0.031], [9.565, 0.232], [1.878, 0.899], [5.599, -0.625], [9.545, -0.71], [7.354, 1.603], [3.328, -0.476], [5.079, -0.842], [1.723, 0.885], [1.285, 0.966], [3.673, -0.812], [3.601, -0.346], [2.242, 0.66], [0.681, 0.691], [7.77, 0.87], [6.028, -0.152], [7.171, 0.372], [9.276, 0.394], [6.122, -0.501], [1.472, 1.093], [5.43, -1.213], [9.489, 0.312], [6.089, -0.771], [4.376, -0.511], [3.312, -0.315], [8.731, 0.914], [9.938, -1.244], [6.28, 0.051], [2.729, 0.276], [3.872, -0.298], [3.716, -0.662], [6.804, 0.506], [3.432, -0.601], [1.572, 1.157], [9.786, -1.216], [1.015, 0.862], [1.108, 0.819], [0.984, 0.863], [7.09, 0.355], [0.595, 0.598], [2.019, 0.824], [1.047, 0.93], [6.837, -0.065], [7.48, 1.343], [1.932, 0.909], [2.241, 0.826], [3.653, -0.636], [4.845, -0.856], [4.563, -1.34], [5.647, -0.259], [2.466, 0.489], [6.258, 0.249], [8.849, -0.081], [2.848, 0.302], [2.971, -0.081], [2.272, 0.775], [2.533, 0.485], [1.045, 0.886], [5.877, -0.677], [5.93, -0.051], [8.081, 0.526], [7.505, 0.985], [0.849, 0.699], [7.594, 1.199], [5.687, -1.069], [3.909, -0.407], [7.419, 0.335], [0.539, 0.56], [1.917, 0.86], [2.707, 0.523], [8.319, 0.765], [6.467, 0.733], [6.504, -0.294], [5.707, -0.224], [6.954, 0.378], [9.199, 0.982], [5.013, -1.406], [9.476, 0.774], [9.673, -0.494], [9.555, 0.562], [3.414, -0.325], [9.993, -0.25], [9.415, -0.419], [2.373, 0.703], [3.427, -0.351], [5.695, -0.236], [8.048, 0.198], [6.478, 0.285], [9.684, -0.951], [2.079, 1.047], [7.21, 0.697], [4.151, -0.601], [9.549, -0.285], [5.065, -0.694], [2.676, 0.434], [8.792, 1.419], [8.444, -0.009], [1.332, 1.088], [2.628, 0.347], [9.623, 0.377], [0.599, 0.541], [0.234, 0.251], [8.777, -0.235], [7.699, 1.399], [9.61, -0.793], [8.255, 1.543], [4.448, -1.118], [9.278, 0.973], [0.065, 0.063], [2.505, 0.819], [9.444, -0.264], [8.469, 1.548], [0.8, 0.663], [1.84, 1.106], [8.522, 0.487], [0.366, 0.37], [2.773, 0.142], [8.684, 1.147], [7.69, 0.544], [8.501, 1.357], [4.566, -1.121], [5.874, 0.055], [4.783, -1.055], [8.516, 0.825], [0.248, 0.224], [6.521, 0.433], [6.485, 0.067], [2.128, 0.993], [0.165, 0.16], [5.027, -0.688], [0.74, 0.632], [7.23, 1.522], [8.43, 0.486], [6.316, 0.433], [8.544, 0.288], [0.49, 0.506], [0.347, 0.313], [1.905, 1.124], [1.115, 0.788], [5.402, -0.649], [4.857, -0.99], [6.094, 0.037], [5.993, -0.853], [9.324, 0.855], [8.127, 0.3], [8.449, 0.878], [3.935, -0.963], [1.737, 0.992], [8.645, 0.339], [4.173, -0.674], [8.371, 0.856], [9.404, 0.641], [9.899, -1.188], [7.068, 1.292], [8.038, 0.977], [0.336, 0.347], [7.147, 0.085], [4.542, -0.973], [9.159, -0.341], [4.475, -0.719], [5.94, -0.697], [0.358, 0.355], [5.226, -0.923], [8.502, 1.033], [6.957, 0.554], [5.02, -0.649], [9.245, 0.004], [8.051, 1.188], [8.786, -0.206], [7.782, 1.618], [5.893, -0.476], [3.499, -0.086], [5.868, -0.692], [9.895, 0.266], [1.838, 0.788], [4.51, -0.537], [8.697, 0.392], [4.745, -0.837], [4.88, -1.442], [0.012, 0.013], [7.435, 0.591], [4.107, -0.616], [0.254, 0.23], [7.223, 1.214], [8.202, 0.317], [4.092, -0.497], [9.002, -0.019], [4.686, -0.682], [9.137, -0.277], [2.95, 0.242], [0.81, 0.676], [2.164, 1.042], [1.95, 0.902], [7.29, 1.181], [8.028, 0.87], [7.029, 1.138], [5.273, -1.011], [8.086, 1.472], [4.575, -1.04], [0.308, 0.322], [7.962, 0.671], [4.226, -0.768], [7.227, 0.782], [0.751, 0.716], [0.613, 0.516], [8.621, 0.803], [8.329, 0.66], [4.495, -0.787], [4.961, -1.36], [6.605, 0.798], [7.595, 0.235], [2.436, 0.669], [6.954, 0.43], [4.157, -0.641], [9.493, -0.083], [4.039, -0.549], [9.199, -0.004], [7.929, 1.206], [9.096, -0.187], [0.452, 0.459], [3.154, -0.196], [0.096, 0.096], [8.663, 0.36], [3.051, 0.223], [3.502, -0.496], [8.127, 1.191], [9.84, -0.79], [8.533, 1.63], [5.987, -0.692], [9.249, 0.216], [7.706, 0.682], [0.578, 0.602], [6.048, -0.573], [8.178, 1.501], [6.447, -0.035], [0.352, 0.374], [0.967, 0.754], [3.139, 0.316], [0.815, 0.688], [4.253, -0.643], [6.086, -0.783], [5.262, -0.677], [3.892, -0.927], [3.777, -0.478], [3.2, -0.184], [8.8, 0.769], [4.205, -1.244], [5.302, -0.412], [4.78, -1.004], [2.469, 0.633], [5.721, -0.987], [3.292, 0.141], [3.374, -0.426], [8.141, 1.075], [5.593, -0.668], [3.056, 0.263], [8.694, -0.075], [4.959, -0.766], [1.764, 0.89], [2.886, 0.29], [3.159, -0.175], [5.04, -0.534], [1.775, 0.873], [9.877, 0.284], [5.956, -0.346], [9.051, 0.799], [5.358, -0.977], [3.876, -0.319], [2.12, 0.644], [8.874, 1.133], [8.658, 0.398], [1.444, 1.124], [5.648, -1.063], [5.26, -0.595], [7.025, 0.251], [9.152, 0.711], [4.191, -1.279], [2.975, 0.227], [1.586, 0.966], [3.738, -0.226], [5.991, -0.463], [1.655, 1.048], [1.761, 0.882], [2.619, 0.707], [7.765, 0.955], [7.026, 1.116], [7.192, 0.724], [8.456, 1.577], [1.598, 0.901], [2.842, 0.557], [1.209, 0.916], [0.731, 0.689], [3.607, -0.499], [6.724, 0.741], [9.026, -0.374], [8.635, 0.885], [8.578, 0.094], [7.488, 1.455], [1.777, 0.816], [4.038, -0.588], [6.629, 0.234], [0.558, 0.58], [8.598, 0.413], [8.582, 1.048], [0.351, 0.326], [1.196, 1.006], [7.16, 0.123], [1.555, 1.082], [2.154, 0.658], [1.774, 0.983], [5.454, -1.246], [5.901, -0.175], [5.86, -0.893], [9.343, 0.298], [5.604, -0.648], [7.848, 1.338], [6.525, 0.011], [5.138, -0.46], [4.25, -0.901], [8.984, 1.19], [8.651, -0.03], [8.885, 1.151], [9.419, -0.021], [3.461, -0.191], [5.449, -0.845], [2.759, 0.622], [3.413, -0.474], [2.677, 0.553], [0.058, 0.054], [8.647, 1.126], [8.163, 0.835], [1.671, 1.028], [8.941, 0.173], [2.751, 0.581], [0.739, 0.671], [5.937, -0.218], [3.271, -0.193], [4.611, -0.929], [1.023, 0.827], [7.57, 1.641], [6.495, -0.125], [8.276, 1.451], [4.073, -1.026], [4.782, -0.866], [9.741, -1.281], [5.5, -0.237], [4.943, -1.18], [1.79, 1.005], [3.375, -0.494], [9.334, 0.629], [3.624, -0.749], [3.813, -0.581], [8.821, 0.216], [1.63, 1.02], [1.97, 0.876], [3.093, 0.087], [3.568, -0.761], [4.841, -0.79], [7.284, 0.617], [6.851, 0.778], [6.883, 0.092], [8.653, 0.832], [4.726, -1.268], [1.403, 1.124], [7.238, 0.558], [8.579, 0.774], [2.919, -0.065], [8.187, 1.02], [6.137, -0.43], [0.278, 0.276], [4.122, -1.12], [0.901, 0.848], [4.44, -1.276], [9.898, -0.149], [1.268, 0.907], [0.299, 0.307], [4.703, -1.446], [2.883, 0.516], [1.314, 0.9], [9.008, 0.884], [3.898, -0.889], [1.485, 1.086], [1.295, 0.939], [9.989, 0.299], [1.137, 0.899], [7.674, 1.563], [3.706, -0.605], [0.06, 0.066], [4.881, -1.277], [1.266, 1.068], [8.625, -0.129], [9.968, -0.497], [8.566, 0], [5.185, -0.756], [8.322, 0.089], [1.959, 1.023], [7.751, 0.855], [0.69, 0.68], [7.406, 0.67], [0.076, 0.077], [9.747, -0.479], [6.101, 0.218], [6.744, 0.104], [8.022, 1.545], [2.815, 0.07], [0.875, 0.854], [9.776, -1.231], [7.576, 1.084], [7.569, 0.509], [1.444, 1.036], [4.07, -1.014], [2.668, 0.66], [7.451, 0.732], [4.659, -0.94], [9.382, -0.522], [7.213, 1.258], [3.368, -0.425], [8.641, 1.308], [0.549, 0.511], [1.797, 1.014], [5.979, -0.471], [5.022, -0.84], [7.648, 0.89], [7.566, 0.995], [7.251, 0.388], [9.152, 1.069], [4.191, -0.995], [7.912, 1.431], [6.362, -0.523], [0.314, 0.332], [9.376, -0.665], [8.605, 1.207], [0.502, 0.467], [1.826, 1.142], [4.565, -1.056], [3.873, -0.577], [6.488, -0.357], [9.141, 0.418], [6.455, -0.194], [1.325, 1.056], [3.905, -0.728], [8.274, 1.136], [2.939, 0.072], [1.163, 0.952], [1.626, 0.92], [6.49, 0.51], [3.423, -0.457], [8.912, 0.58], [0.308, 0.295], [7.678, 1.328], [8.971, -0.122], [8.925, 1.108], [7.354, 0.826], [6.443, 0.558], [2.079, 0.745], [7.59, 1.518], [5.534, -1.185], [9.734, 0.339], [8.502, 0.659], [0.479, 0.483], [6.27, -0.18], [6.397, 0.579], [1.903, 0.857], [8.489, 0.893], [3.51, -0.547], [8.243, 1.128], [0.242, 0.233], [8.818, 1.062], [2.902, 0.191], [7.45, 1.429], [9.796, -1.073], [9.174, 0.955], [5.423, -0.781], [3.329, -0.097], [7.528, 0.396], [4.998, -0.723], [2.718, 0.233], [3.559, -0.123], [2.477, 0.607], [7.146, 0.942], [8.909, -0.271], [9.831, 0.101], [9.451, -0.258], [1.738, 1.058], [2.937, 0.173], [2.907, 0.343], [0.085, 0.085], [7.469, 1.043], [3.088, 0.029], [9.558, 0.173], [4.64, -1.314], [4.271, -0.554], [6.352, -0.294], [0.343, 0.364], [9.751, -0.843], [9.407, 0.83], [5.723, -1.004], [9.789, 0.133], [3.334, -0.192], [4.529, -0.819], [6.134, -0.44], [9.135, 0.511], [6.016, -0.697], [1.398, 1.034], [2.059, 0.837], [1.255, 0.995], [4.911, -1.393], [0.648, 0.657], [0.626, 0.56], [4.281, -0.605], [4.826, -1.027], [0.007, 0.007], [3.186, -0.301], [8.625, 1.481], [5.635, -0.811], [2.572, 0.734], [4.871, -1.079], [9.813, 0.412], [4.007, -1.003], [5.905, 0.052], [4.938, -1.453], [7.805, 1.293], [4.73, -1.417], [2.159, 0.978], [6.276, -0.011], [4.294, -0.608], [0.409, 0.361], [6.936, 0.999], [1.855, 0.813], [6.37, 0.633], [2.614, 0.275], [2.164, 0.847], [6.205, -0.267], [2.169, 0.886], [7.781, 0.848], [9.139, 0.541], [3.706, -0.735], [1.766, 0.985], [6.779, -0.172], [6.962, 1.236], [5.833, -0.627], [3.025, 0.123], [6.282, -0.567], [2.324, 0.815], [1.052, 0.823], [9.207, 0.357], [3.045, -0.021], [0.739, 0.7], [5.889, -0.932], [8.625, 1.008], [9.975, -0.53], [7.066, 1.177], [2.24, 0.645], [4.346, -0.792], [7.412, 0.218], [1.512, 1.115], [5.798, -0.873], [3.727, -0.27], [9.671, -1.134], [6.093, -0.108], [9.548, -0.42], [8.094, 1.45], [3.607, -0.633], [2.61, 0.633], [2.365, 0.49], [7.999, 1.401], [6.432, 0.05], [2.267, 0.853], [5.186, -1.345], [1.179, 0.938], [5.371, -0.942], [2.703, 0.544], [5.051, -0.981], [7.401, 1.628], [7.979, 0.504], [6.245, 0.344], [4.668, -1.191], [5.897, -0.047], [0.616, 0.531], [4.344, -0.804], [5.913, -0.796], [2.448, 0.751], [6.73, 0.096], [2.782, 0.509], [8.568, 0.304], [7.753, 1.551], [5.92, -0.503], [8.506, 0.85], [8.233, 0.152], [2.112, 0.979], [6.68, 0.145], [1.831, 1.025], [4.21, -1.258], [7.736, 1.238], [6.924, 0.102], [4.779, -0.976], [8.946, -0.361], [1.981, 0.959], [5.615, -0.834], [6.285, 0.119], [0.961, 0.783], [7.106, 0.761], [8.215, 0.189], [6.312, 0.503], [0.129, 0.125], [0.732, 0.722], [1.869, 0.778], [9.564, 0.255], [4.131, -1.058], [0.955, 0.87], [5.224, -0.906], [4.295, -0.832], [1.852, 0.957], [3.272, -0.068], [0.01, 0.01], [9.486, 0.014], [3.061, -0.11], [2.934, 0.33], [5.533, -0.851], [5.354, -0.377], [2.942, 0.099], [6.466, 0.81], [7.388, 0.892], [5.522, -0.386], [8.862, 0.326], [5.151, -0.665], [4.786, -1.123], [3.394, -0.018], [5.813, -0.584], [4.019, -0.681], [0.863, 0.698], [3.856, -0.599], [4.263, -1.022], [4.439, -0.566], [9.797, -0.8], [1.174, 0.93], [1.898, 0.946], [2.456, 0.778], [2.497, 0.505], [2.47, 0.719], [4.219, -1.091], [4.312, -0.724], [8.962, 0.342], [1.36, 1.057], [2.834, 0.256], [5.149, -0.414], [9.39, -0.399], [4.723, -0.726], [5.283, -1.201], [9.09, 0.891], [4.875, -1.341], [6.149, 0.133], [5.735, -0.829], [5.879, 0.034], [7.293, 0.669], [3.97, -0.378], [6.534, -0.203], [1.143, 1.012], [7.774, 0.418], [0.797, 0.778], [8.739, 0.349], [0.69, 0.688], [4.782, -1.03], [6.172, -0.054], [3.642, -0.682], [5.082, -0.587], [4.054, -1.044], [0.745, 0.741], [8.461, 0.526], [9.696, 0.257], [4.471, -1.228], [2.49, 0.735], [3.723, -0.712], [8.518, 1.286], [7.445, 0.644], [7.13, 0.771], [5.755, -0.921], [9.68, 0.069], [8.117, 0.751], [8.543, 0.861], [0.615, 0.539], [9.467, 0.249], [6.895, -0.044], [4.288, -0.667], [5.507, -1.073], [0.948, 0.823], [8.549, 0.113], [1.534, 1.057], [9.182, 0.094], [0.826, 0.743], [4.046, -0.997], [0.614, 0.617], [3.856, -0.883], [5.399, -0.695], [8.256, 0.107], [3.393, -0.248], [3.963, -0.771], [3.89, -0.32], [3.61, -0.783], [1.21, 1.055], [5.277, -1.057], [4.243, -0.689], [5.911, -0.852], [5.205, -0.506], [7.083, 0.239], [1.625, 1.121], [9.138, -0.132], [0.55, 0.528], [1.569, 0.945], [8.428, 1.4], [3.08, -0.03], [5.236, -0.604], [0.532, 0.456], [1.634, 1.001], [5.95, -0.459], [6.998, 0.874], [4.832, -1.059], [5.886, -0.303], [8.921, -0.041], [1.123, 0.914], [4.816, -1.039], [4.022, -0.398], [2.984, -0.13], [1.161, 0.994], [8.843, 0.542], [7.516, 1.456], [5.796, -0.779], [9.74, 0.043], [5.033, -1.242], [1.771, 0.994], [8.066, 0.386], [6.287, 0.233], [8.475, 0.491], [5.294, -0.693], [0.899, 0.774], [3.495, -0.028], [5.912, -0.606], [9.949, 0.315], [6.096, -0.658], [7.882, 1.253], [9.097, -0.264], [1.926, 0.961], [7.187, 0.184], [8.214, 1.468], [7.725, 0.745], [9.181, 0.514], [7.595, 0.25], [6.827, 0.639], [1.845, 0.93], [5.501, -0.361], [4.063, -0.8], [1.562, 1.054], [5.761, -0.781], [1.916, 0.975], [7.13, 0.232], [2.727, 0.631], [5.552, -1.05], [5.398, -0.32], [2.212, 0.774], [6.085, 0.164], [8.126, 0.83], [5.639, -0.052], [1.469, 0.984], [4.752, -0.65], [6.143, -0.623], [6.385, 0.379], [6.826, 0.241], [8.933, 0.876], [9.939, -0.539], [7.205, 1.438], [3.457, -0.45], [3.933, -0.329], [6.961, 0.606], [4.706, -0.752], [6.891, 0.009], [2.601, 0.731], [1.304, 0.923], [8.032, 1.572], [5.637, -1.115], [1.638, 1.105], [6.507, -0.271], [7.779, 1.273], [8.765, -0.227], [2.542, 0.607], [9.135, -0.408], [4.116, -0.674], [3.084, 0.013], [1.746, 1.127], [8.319, 0.149], [8.797, 0.944], [2.398, 0.603], [2.07, 0.957], [9.132, -0.215], [0.623, 0.64], [2.074, 0.692], [9.708, 0.406], [5.541, -1.08], [7.357, 1.089], [4.956, -1.197], [8.106, 1.292], [1.729, 0.985], [8.291, 1.355], [3.612, -0.708], [3.948, -0.627], [3.567, -0.511], [6.191, 0.49], [2.98, 0.062], [5.654, -0.476], [0.343, 0.306], [3.48, -0.259], [1.73, 0.984], [1.179, 1.025], [1.651, 0.852], [6.401, 0.69], [6.587, -0.03], [6.78, 0.595], [2.737, 0.214], [3.097, 0.118], [8.379, 0.311], [6.159, -0.094], [7.133, 0.517], [5.359, -0.4], [0.032, 0.029], [6.267, 0.478], [7.268, 0.483], [0.328, 0.341], [7.459, 0.784], [0.881, 0.777], [0.35, 0.313], [1.956, 1.026], [0.094, 0.087], [8.038, 1.193], [1.536, 0.995], [0.142, 0.151], [0.783, 0.683], [9.199, 0.508], [9.948, -0.564], [2.017, 1.026], [0.053, 0.048], [6.422, 0.664], [9.188, -0.253], [4.328, -0.6], [6.212, -0.482], [3.761, -0.242], [1.831, 0.962], [6.503, 0.528], [0.888, 0.756], [6.734, 1.103], [2.782, 0.224], [7.714, 1.519], [7.198, 0.737], [9.538, 0.097], [5.886, -0.775], [7.546, 1.198], [2.236, 0.708], [0.43, 0.429], [0.154, 0.143], [1.179, 1.028], [0.215, 0.202], [7.49, 1.208], [6.647, 0.321], [0.311, 0.315], [9.905, -0.888], [8.845, 0.574], [2.54, 0.501], [6.176, 0.266], [0.889, 0.762], [9.73, 0.481], [6.294, -0.43], [0.715, 0.665], [4.881, -1.351], [6.808, 0.926], [1.41, 0.969], [9.33, 0.474], [4.079, -1.118], [1.498, 1.13], [0.408, 0.363], [8.233, 1.644], [0.117, 0.11], [8.919, 0.494], [7.846, 0.314], [8.117, 1.695], [8.048, 0.641], [3.018, 0.236], [6.327, 0.019], [5.162, -0.595], [7.313, 0.484], [0.435, 0.445], [1.166, 0.899], [1.992, 0.926], [0.584, 0.518], [4.014, -0.585], [1.504, 0.928], [4.067, -0.767], [0.781, 0.659], [5.925, -0.125], [9.254, -0.555], [5.533, -0.16], [9.862, -0.956], [1.563, 1.02], [1.632, 0.879], [7.619, 1.163], [2.457, 0.54], [3.372, -0.105], [0.581, 0.519], [4.242, -0.821], [9.969, -0.97], [5.081, -0.883], [4.071, -1.024], [5.695, -0.443], [5.117, -1.324], [9.447, 0.038], [4.596, -1.407], [9.886, 0.411], [6.767, 0.461], [5.902, -0.199], [9.475, -0.679], [3.309, 0.141], [8.285, 0.346], [8.869, 0.652], [6.317, -0.226], [4.916, -0.553], [5.772, -0.864], [3.61, -0.241], [4.079, -1.052], [4.028, -0.566], [9.248, -0.448], [1.846, 0.997], [2.124, 0.761], [1.42, 1.057], [3.521, -0.507], [6.047, 0.134], [8.318, 0.463], [6.463, 0.191], [7.132, 0.541], [4.072, -0.416], [7.874, 0.348], [3.151, 0.254], [8.262, 0.452], [2.983, 0.182], [9.671, -0.289], [2.166, 0.866], [1.83, 0.878], [3.446, -0.143], [8.399, 0.627], [0.452, 0.475], [0.093, 0.09], [9.419, 0.644], [1.349, 0.862], [6.994, 0.786], [9.433, -0.343], [7.917, 1.007], [6.203, -0.09], [1.246, 1.036], [8.046, 0.747], [6.79, 0.8], [9.869, -0.625], [7.08, 1.347], [5.824, -0.63], [1.11, 0.922], [5.292, -1.298], [7.32, 1.479], [6.873, 0.068], [1.674, 1.124], [6.726, 0.16], [4.223, -0.738], [5.294, -0.964], [5.648, -0.097], [9.425, -0.332], [4.888, -0.912], [0.276, 0.26], [7.753, 1.294], [4.685, -1.127], [8.996, 0.903], [5.391, -0.909], [0.948, 0.891], [3.609, -0.766], [6.017, -0.152], [1.239, 0.922], [6.947, 1.266], [9.417, -0.535], [4.396, -0.799], [9.467, -0.749], [6.815, 0.912], [8.152, 0.527], [7.252, 1.152], [9.444, -0.456], [5.472, -0.336], [6.787, -0.04], [6.638, 0.753], [9.321, -0.411], [3.867, -0.631], [4.123, -1.137], [4.457, -0.661], [8.56, 0.728], [1.967, 0.938], [1.091, 0.82], [5.471, -0.587], [4.968, -1.359], [7.548, 1.352], [4.619, -1.326], [4.368, -0.7], [7.054, 0.401], [8.315, 1.099], [9.206, -0.11], [8.4, 1.453], [4.992, -1.334], [7.403, 1.577], [2.95, -0.014], [3.877, -0.464], [0.524, 0.481], [7.594, 1.52], [5.556, -0.832], [7.599, 1.23], [2.778, 0.347], [4.707, -0.678], [6.892, -0.1], [4.626, -0.974], [9.015, -0.27], [1.305, 1.071], [5.137, -0.933], [5.323, -0.333], [8.635, 0.136], [6.208, 0.522], [5.641, -0.927], [8.094, 1.493], [7.775, 0.321], [7.555, 1.097], [3.987, -1.002], [9.829, 0.13], [8.151, 0.283], [2.702, 0.537], [4.385, -1.116], [9.979, -0.52], [1.021, 0.783], [2.227, 0.908], [5.673, -0.979], [4.878, -0.649], [4.102, -0.982], [6.147, -0.112], [1.091, 0.823], [2.883, 0.442], [9.373, -0.285], [6.533, 0.792], [1.343, 0.915], [4.544, -0.814], [1.796, 0.848], [1.704, 1.131], [9.771, -0.459], [0.275, 0.296], [1.976, 0.773], [5.297, -0.506], [8.74, 0.193], [0.431, 0.427], [9.779, -0.839], [8.609, 1.32], [2.94, 0.041], [0.103, 0.106], [3.025, -0.049], [1.014, 0.924], [9.491, -1.007], [5.705, -0.079], [5.591, -1.167], [1.555, 1.014], [9.041, -0.223], [6.018, 0.11], [2.147, 0.834], [2.121, 0.998], [1.39, 0.973], [3.038, 0.169], [0.328, 0.317], [3.593, -0.408], [8.311, 0.28], [1.159, 1.03], [7.2, 0.786], [9.749, 0.629], [5.374, -0.975], [9.281, 0.38], [9.995, -1.496], [0.547, 0.53], [7.199, 0.782], [1.892, 1.064], [5.813, -0.638], [9.781, 0.161], [9.605, -0.26], [0.168, 0.184], [9.581, -0.817], [9.074, 1.239], [1.713, 0.893], [0.357, 0.367], [9.929, -1.353], [3.663, -0.286], [3.28, -0.365], [3.889, -0.463], [9.57, -0.18], [1.812, 1.119], [2.441, 0.578], [9.518, 0.387], [1.446, 0.869], [6.649, 0.84], [0.596, 0.551], [0.41, 0.402], [7.977, 0.966], [7.301, 1.434], [1.205, 0.902], [6.116, 0.164], [8.186, 0.203], [6.994, 0.77], [8.752, 0.457], [4.584, -0.947], [9.207, -0.572], [5.06, -0.538], [2.015, 0.8], [4.379, -0.646], [6.03, -0.538], [9.252, 1.057], [9.849, -0.548], [6.06, -0.017], [6.822, 0.16], [4.529, -0.776], [5.101, -1.239], [9.419, 0.709], [3.301, -0.338], [5.369, -0.382], [7.779, 0.847], [1.583, 1.045], [2.295, 0.62], [1.264, 0.958], [9.862, -0.636], [7.364, 1.535], [4.374, -1.186], [9.17, 0.882], [9.801, -1.254], [9.372, 0.075], [0.559, 0.487], [6.752, 0.878], [1.237, 0.834], [8.624, 0.918], [9.314, 0.092], [6.591, 0.952], [3.986, -0.75], [8.446, 1.647], [5.26, -1.202], [3.889, -0.654], [4.123, -0.845], [9.735, 0.634], [9.951, -1.307], [9.122, 0.96], [0.909, 0.703], [7.864, 1.024], [4.549, -1.417], [5.427, -0.365], [4.381, -1.36], [2.48, 0.643], [1.209, 0.823], [1.573, 1.142], [2.766, 0.285], [0.424, 0.437], [4.651, -1.288], [2.571, 0.568], [7.132, 0.748], [5.57, -0.166], [1.097, 0.831], [2.691, 0.452], [2.985, -0.092], [8.992, 0.717], [5.782, -0.749], [5.497, -0.432], [1.292, 0.86], [4.507, -0.537], [1.346, 0.906], [1.105, 0.968], [0.514, 0.468], [0.848, 0.768], [3.906, -1.013], [3.357, 0.092], [5.331, -1.074], [5.894, 0.013], [4.887, -1.465], [3.127, 0.208], [7.462, 0.298], [7.645, 1.704], [1.683, 0.96], [0.405, 0.404], [3.999, -1.129], [4.539, -0.646], [8.65, 0.456], [8.953, 0.817], [3.884, -0.738], [9.062, 0.716], [3.377, -0.507], [3.223, 0.23], [3.767, -0.845], [6.335, 0.344], [3.137, -0.299], [8.956, 0.601], [3.74, -0.771], [9.934, 0.186], [6.824, 0.159], [4.507, -0.734], [9.332, -0.614], [6.125, 0.043], [6.49, -0.362], [2.619, 0.694], [6.049, -0.348], [3.398, -0.084], [8.756, -0.116], [6.143, -0.031], [3.037, 0.008], [7.995, 1.455], [4.938, -1.065], [4.216, -0.547], [3.442, -0.451], [6.482, 0.65], [0.308, 0.292], [1.787, 1.016], [6.537, 0.097], [2.922, 0.3], [1.19, 0.87], [8.089, 1.551], [4.777, -1.417], [7.551, 1.263], [7.058, 0.293], [2.987, 0.236], [8.712, 0.476], [8.747, 1.13], [7.614, 0.832], [4.94, -0.632], [5.55, -1.003], [6.574, 0.715], [2.364, 0.564], [7.496, 1.264], [1.782, 0.855], [7.392, 1.364], [9.947, -0.853], [6.544, 0.693], [3.485, -0.472], [3.15, 0.263], [7.826, 0.915], [8.403, 1.463], [0.253, 0.248], [6.353, 0.688], [8.603, -0.105], [8.528, 1.515], [7.773, 0.381], [6.211, 0.526], [6.076, -0.385], [1.765, 1.044], [9.422, -0.097], [7.089, 1.163], [5.169, -1.221], [7.166, 1.197], [2.687, 0.275], [2.5, 0.752], [9.684, -0.58], [4.282, -0.559], [2.259, 0.715], [9.412, 0.269], [2.534, 0.377], [4.163, -0.727], [8.06, 0.668], [3.893, -0.479], [1.326, 0.954], [2.206, 0.914], [0.938, 0.795], [4.436, -0.826], [4.68, -1.037], [0.878, 0.841], [5.463, -1.173], [4.569, -0.792], [6.289, -0.262], [4.33, -0.557], [3.231, -0.265], [8.93, 0.604], [8.358, 0.593], [9.131, 1.126], [9.647, -0.575], [5.216, -0.765], [5.646, -0.968], [5.52, -0.275], [3.601, -0.446], [4.353, -0.908], [2.944, -0.076], [6.742, 0.666], [5.614, -0.928], [5.773, -0.157], [8.364, 0.68], [8.232, 1.593], [5.161, -1.243], [3.137, 0.008], [4.82, -1.438], [5.552, -0.637], [9.628, -0.724], [6.719, 0.858], [0.691, 0.592], [2.989, 0.338], [3.371, -0.275], [2.64, 0.718], [9.601, -0.849], [3.774, -0.563], [9.423, -0.698], [2.823, 0.42], [2.865, 0.104], [4.793, -0.949], [0.7, 0.58], [0.182, 0.196], [1.667, 0.871], [7.44, 0.946], [9.144, 0.098], [0.921, 0.829], [5.318, -0.911], [0.22, 0.238], [3.341, -0.276], [8.982, 0.451], [7.411, 0.3], [8.956, 0.821], [7.326, 0.535], [1.913, 0.98], [4.181, -1.198], [6.366, 0.156], [7.664, 0.58], [1.763, 1.106], [3.658, -0.798], [2.381, 0.811], [6.598, 0.07], [1.599, 1], [9.559, -0.743], [5.708, -0.403], [3.23, -0.194], [2.318, 0.914], [5.795, -0.665], [1.965, 1.011], [5.379, -1.234], [4.141, -0.791], [2.134, 0.731], [7.379, 1.564], [8.686, 0.657], [8.037, 1.006], [8.892, 0.346], [3.775, -0.325], [0.058, 0.054], [9.938, 0.001], [9.5, -0.653], [4.468, -0.907], [4.124, -0.963], [7.198, 0.921], [3.399, -0.589], [0.379, 0.38], [3.358, -0.501], [5.05, -0.833], [7.119, 0.033], [0.937, 0.854], [4.166, -0.901], [1.071, 0.886], [6.426, -0.441], [4.506, -0.887], [4.774, -1.158], [2.98, 0.43], [5.792, -0.702], [7.904, 1.24], [3.706, -0.673], [1.176, 0.967], [7.84, 0.386], [9.612, 0.373], [1.257, 0.912], [9.228, 0.915], [9.007, -0.373], [1.576, 1.089], [1.581, 0.945], [4.521, -0.71], [3.9, -0.981], [6.86, 1.056], [8.896, 0.257], [9.57, -0.015], [9.139, -0.149], [1.042, 0.901], [2.909, -0.005], [3.538, -0.062], [6.804, 0.182], [0.075, 0.075], [0.054, 0.053], [6.565, 0.545], [9.689, -0.77], [8.847, 1.287], [3.53, -0.681], [9.687, 0.102], [8.552, 0.074], [5.639, -0.376], [0.327, 0.319], [0.375, 0.386], [6.916, 0.063], [6.84, 0.825], [8.958, -0.066], [4.99, -0.594], [8.912, 0.327], [3.433, -0.038], [3.498, -0.397], [5.6, -0.392], [4.47, -1.337], [7.917, 1.622], [6.974, 0.419], [7.443, 1.079], [0.829, 0.659], [4.527, -0.722], [6.669, 0.31], [1.648, 1.008], [7.892, 0.986], [7.484, 1.656], [8.399, 0.53], [1.524, 1.021], [3.977, -0.744], [5.589, -0.464], [9.925, -1.08], [4.042, -0.561], [6.481, -0.146], [0.74, 0.709], [4.799, -1.382], [3.523, -0.37], [7.153, 0.053], [5.762, -0.201], [9.188, -0.108], [4.649, -0.645], [3.32, -0.326], [5.715, -0.131], [2.866, 0.057], [3.575, -0.234], [2.424, 0.501], [7.672, 1.747], [2.26, 0.755], [7.185, 0.802], [8.105, 0.665], [9.901, -0.263], [4.346, -1.123], [6.623, 0.604], [9.054, 0.148], [8.219, 1.406], [3.713, -0.586], [9.753, 0.015], [2.428, 0.634], [3.193, 0.004], [1.576, 0.935], [6.884, 0.586], [6.376, -0.231], [1.624, 1.012], [7.866, 0.739], [1.194, 1.031], [5.211, -1.35], [0.122, 0.129], [1.268, 0.832], [7.49, 1.465], [9.719, -0.723], [5.228, -0.794], [6.698, -0.248], [7.973, 1.503], [0.133, 0.121], [9.56, -0.094], [9.686, -0.69], [4.684, -0.882], [5.005, -1.394], [6.982, 0.725], [1.408, 0.862], [1.134, 0.954], [8.707, 0.475], [5.11, -0.452], [8.745, 0.56], [8.888, 1.002], [3.636, -0.555], [6.298, 0.484], [5.906, -0.74], [3.229, 0.096], [2.85, 0.117], [4.973, -0.872], [2.243, 0.731], [5.886, -0.19], [6.013, -0.625], [9.255, 0.882], [1.046, 0.802], [2.086, 1.035], [0.528, 0.494], [3.178, 0.039], [1.869, 0.777], [4.039, -0.746], [0.72, 0.602], [9.081, 0.728], [9.963, -1.341], [1.161, 0.941], [7.156, 0.665], [0.895, 0.815], [3.184, -0.314], [6.823, 1.024], [2.417, 0.609], [0.36, 0.372], [8.012, 0.887], [4.114, -0.524], [1.169, 0.813], [5.663, -0.127], [9.506, -0.199], [1.074, 0.923], [2.726, 0.272], [0.882, 0.85], [0.573, 0.524], [9.795, 0.259], [4.106, -1.221], [6.783, 1.074], [1.45, 0.987], [6.895, 0.937], [9.053, -0.017], [9.425, 0.644], [6.118, -0.586], [4.981, -0.914], [4.476, -1.248], [7.683, 1.325], [7.56, 0.259], [5.899, 0.018], [7.581, 0.904], [3.996, -0.68], [8.968, 0.067], [8.507, 1.13], [9.793, -0.456], [4.8, -0.927], [1.062, 0.781], [7.829, 1.67], [2.65, 0.446], [8.65, 0.756], [9.261, 0.071], [3.403, -0.041], [6.736, 0.182], [8.025, 1.342], [6.387, -0.337], [5.238, -0.556], [5.113, -1.014], [6.476, 0.471], [6.292, -0.433], [0.198, 0.202], [0.481, 0.456], [3.135, 0.238], [6.823, 0.369], [2.336, 0.942], [2.548, 0.552], [0.791, 0.735], [3.854, -0.834], [9.741, 0.634], [4.217, -1.004], [9.517, 0.018], [9.129, -0.398], [3.302, 0.124], [1.755, 0.968], [6.039, -0.078], [5.493, -0.815], [7.796, 1.099], [1.107, 0.792], [0.43, 0.422], [3.52, -0.588], [0.885, 0.828], [2.735, 0.337], [2.749, 0.621], [8.408, 0.337], [5.826, -0.249], [8.674, 0.682], [7.294, 1.33], [6.516, 0.177], [1.931, 1.04], [3.825, -0.92], [1.498, 1.005], [0.248, 0.222], [0.442, 0.471], [7.237, 0.701], [7.254, 1.093], [0.238, 0.217], [7.506, 0.964], [8.009, 0.64], [6.167, -0.096], [4.009, -1.119], [8.421, 1.498], [8.152, 0.262], [6.589, 0.818], [2.259, 0.626], [4.261, -0.838], [8.065, 0.716], [4.464, -0.745], [0.16, 0.155], [6.609, 0.342], [6.415, -0.284], [1.032, 0.933], [1.231, 0.937], [6.005, 0.163], [3.504, -0.41], [5.037, -0.866], [3.505, -0.555], [6.211, 0.088], [9.03, -0.25], [0.393, 0.404], [6.786, 0.167], [4.438, -0.85], [5.16, -1.067], [7.023, 0.866], [8.299, 0.085], [0.256, 0.269], [2.842, 0.103], [7.561, 1.294], [9.007, -0.491], [7.686, 1.518], [8.576, 0.72], [7.91, 1.386], [0.473, 0.445], [0.59, 0.572], [2.766, 0.21], [8.551, 0.933], [6.015, -0.293], [8.217, 1.294], [4.795, -1.391], [1.902, 0.958], [2.634, 0.483], [0.994, 0.911], [6.165, -0.635], [3.7, -0.35], [1.393, 0.922], [6.092, 0.154], [8.115, 0.286], [0.867, 0.806], [7.233, 0.261], [5.687, -0.547], [2.267, 0.626], [5.013, -0.643], [7.849, 0.387], [9.684, 0.679], [9.782, -0.873], [5.3, -0.761], [0.767, 0.639], [4.01, -0.566], [2.317, 0.651], [9.495, 0.338], [2.227, 0.68], [1.825, 1.031], [9.556, -0.637], [3.091, 0.184], [9.131, 0.047], [7.138, 1.307], [1.81, 0.885], [4.361, -0.559], [9.979, -1.502], [4.08, -0.694], [5.495, -0.955], [2.427, 0.726], [5.489, -0.899], [1.707, 1.081], [6.703, -0.173], [0.982, 0.888], [6.562, -0.016], [4.55, -0.894], [6.723, 0.335], [0.709, 0.67], [8.682, -0.12], [6.124, 0.395], [4.188, -1.114], [6.267, 0.599], [4.554, -1.373], [7.868, 1.494], [5.016, -0.973], [7.741, 1.737], [5.212, -1.318], [7.23, 1.159], [7.192, 0.094], [2.164, 0.998], [5.809, -0.513], [9.388, 0.07], [2.715, 0.2], [3.354, -0.127], [5.004, -1.188], [7.086, 1.315], [7.555, 0.61], [0.095, 0.102], [7.003, 0.009], [1.164, 1.022], [7.165, 0.287], [2.379, 0.831], [8.392, 0.506], [9.872, 0.073], [3.698, -0.696], [9.011, 0.956], [0.656, 0.557], [5.108, -0.655], [1.902, 0.779], [6.513, 0.423], [7.588, 0.641], [1.424, 1.082], [5.303, -1.056], [8.957, 1.03], [1.565, 0.923], [2.224, 0.887], [6.756, 0.342], [7.75, 1.523], [3.819, -0.948], [4.474, -0.835], [5.469, -1.06], [6.944, 0.671], [0.408, 0.378], [6.439, 0.496], [9.943, -1.221], [5.703, -0.105], [0.092, 0.092], [7.725, 1.346], [8.523, -0.057], [6.793, 0.678], [8.201, 0.475], [9.549, -0.109], [2.182, 0.795], [6.138, 0.366], [6.07, -0.461], [7.861, 1.119], [1.484, 0.895], [1.294, 0.968], [6.246, -0.232], [6.994, 0.946], [0.446, 0.39], [8.758, 1.385], [1.296, 0.938], [3.375, -0.071], [9.054, -0.246], [6.352, 0.229], [7.043, 0.194], [8.247, 0.991], [4.82, -1.305], [0.437, 0.426], [4.545, -1.145], [3.196, 0.039], [2.316, 0.545], [5.56, -0.596], [0.755, 0.618], [4.401, -0.874], [6.299, 0.012], [6.633, 1.005], [7.795, 0.586], [0.751, 0.693], [7.615, 0.239], [3.022, 0.16], [7.395, 0.46], [4.926, -0.786], [2.542, 0.384], [0.19, 0.206], [5.916, -0.679], [1.481, 1.094], [6.619, -0.049], [1.975, 1.002], [4.271, -1.203], [0.123, 0.132], [3.611, -0.522], [4.391, -0.778], [7.588, 0.687], [9.935, 0.387], [7.568, 0.59], [1.527, 1.15], [2.55, 0.386], [1.474, 1.113], [7.669, 0.898], [0.443, 0.435], [0.236, 0.226], [6.844, 0.958], [8.732, -0.101], [1.149, 1.006], [1.095, 0.881], [9.366, 0.478], [5.538, -0.941], [0.625, 0.59], [0.579, 0.49], [3.154, 0.199], [1.586, 0.957], [6.315, 0.192], [3.254, -0.135], [3.584, -0.179], [6.985, 0.252], [8.99, 1.02], [5.951, -0.826], [6.647, 0.647], [8.16, 0.401], [5.75, -0.155], [3.904, -0.857], [8.648, 0.819], [5.157, -1.382], [6.695, 0.465], [8.384, 0.177], [3.063, 0.163], [2.057, 0.752], [4.088, -0.666], [4.512, -1.174], [9.108, 0.555], [5.71, -0.611], [2.287, 0.874], [9.02, 0.013], [4.113, -0.608], [8.973, 0.334], [4.372, -0.931], [3.318, -0.296], [7.197, 1.189], [8.278, 0.245], [1.313, 1.069], [4.695, -1.123], [1.892, 0.975], [9.812, -0.673], [0.933, 0.873], [7.549, 0.544], [8.756, 0.843], [6.132, -0.554], [7.086, 0.722], [4.022, -1.034], [7.192, 0.956], [3.129, -0.219], [0.592, 0.591], [8.154, 0.372], [3.33, -0.058], [1.209, 0.909], [9.994, 0.18], [0.832, 0.734], [4.334, -0.666], [3.369, -0.244], [6.536, 0.771], [0.548, 0.481], [1.243, 0.96], [4.941, -1.147], [4.301, -0.758], [9.008, 0.403], [2.194, 0.841], [0.832, 0.708], [6.254, 0.435], [5.037, -0.986], [2.344, 0.916], [6.266, -0.191], [5.338, -0.491], [0.607, 0.556], [3.29, 0.009], [5.936, -0.397], [9.018, 0.637], [7.288, 0.523], [4.547, -0.577], [9.852, -0.997], [9.6, 0.682], [4.162, -1.078], [1.162, 1.003], [4.446, -0.981], [4.587, -0.555], [2.186, 0.785], [0.679, 0.658], [4.325, -0.978], [8.118, 1.557], [5.257, -1.1], [1.386, 0.989], [8.017, 0.529], [5.603, -0.601], [2.413, 0.638], [0.535, 0.53], [1.922, 0.774], [3.52, -0.221], [4.613, -1.346], [5.762, -0.419], [4.761, -1.086], [8.376, 1.546], [9.794, -1.029], [2.116, 0.942], [1.145, 0.803], [7.401, 1.054], [1.416, 0.945], [6.946, 0.816], [1.266, 0.872], [9.165, 0.799], [9.236, -0.506], [2.182, 0.852], [9.069, 0.037], [8.442, 1.402], [1.323, 0.917], [6.626, 0.623], [0.97, 0.763], [3.06, 0.15], [0.988, 0.768], [6.141, 0.289], [2.842, 0.096], [3.632, -0.359], [4.775, -1.453], [0.943, 0.856], [1.045, 0.809], [7.777, 1.554], [0.413, 0.4], [1.913, 1.04], [1.08, 0.835], [3.427, 0.061], [5.188, -1.035], [6.503, 0.512], [7.197, 0.747], [7.178, 0.975], [4.34, -1.343], [3.703, -0.294], [5.337, -0.951], [5.512, -0.378], [0.25, 0.224], [4.615, -0.729], [0.03, 0.029], [2.886, 0.346], [3.902, -0.702], [2.209, 0.911], [3.327, -0.382], [5.063, -0.461], [9.002, -0.009], [0.811, 0.778], [9.048, 0.084], [4.618, -0.544], [9.838, -0.548], [1.852, 1.058], [1.836, 0.846], [2.472, 0.848], [5.891, -0.916], [2.278, 0.888], [7.534, 0.332], [0.966, 0.887], [4.745, -1.283], [7.94, 1.168], [0.402, 0.376], [2.965, 0.302], [7.742, 0.674], [8.384, 1.061], [6.235, -0.485], [8.759, 1.029], [8.931, -0.095], [6.161, 0.139], [5.649, -0.82], [0.161, 0.171], [1.572, 0.975], [4.413, -0.907], [5.345, -1.125], [0.669, 0.673], [2.981, -0.009], [8.879, 1.256], [0.768, 0.654], [2.819, 0.426], [7.245, 0.273], [4.713, -0.978], [9.711, -0.539], [3.521, -0.217], [6.217, -0.582], [4.057, -0.695], [5.403, -1.028], [5.346, -0.736], [1.392, 0.88], [0.461, 0.46], [8.287, 0.316], [6.466, 0.727], [0.258, 0.242], [9.182, 0.628], [2.92, 0.134], [7.425, 1.086], [9, 0.316], [3.57, -0.355], [5.957, -0.898], [3.898, -0.565], [6.529, -0.103], [7.434, 1.167], [8.15, 0.819], [8.339, 1.338], [0.197, 0.195], [2.715, 0.627], [8.196, 0.768], [1.956, 1.085], [6.581, -0.161], [6.997, 0.898], [8.573, 0.348], [1.675, 1.09], [9.949, -1.046], [4.029, -0.4], [1.78, 0.859], [9.44, 0.742], [6.663, 0.357], [3.549, -0.194], [7.806, 0.715], [6.132, 0.151], [6.961, 0.39], [4.513, -0.789], [4.3, -0.976], [0.997, 0.914], [8.739, 0.533], [4.935, -0.878], [9.801, -1.297], [2.606, 0.607], [3.931, -0.835], [3.593, -0.132], [9.332, -0.619], [3.458, -0.098], [0.779, 0.684], [6.572, 0.934], [9.672, -0.532], [6.692, 0.995], [6.097, -0.487], [5.611, -0.243], [4.488, -1.209], [5.377, -0.363], [4.948, -1.197], [6.183, 0.243], [6.928, 0.147], [8.545, 1.303], [0.523, 0.448], [9.936, 0.356], [3.843, -0.802], [0.47, 0.461], [3.385, -0.573], [7.928, 1.046], [6.134, -0.253], [8.713, 0.897], [4.831, -1.339], [9.984, 0.207], [0.526, 0.46], [6.903, 1.072], [3.964, -0.964], [4.755, -0.704], [9.839, -0.782], [2.742, 0.406], [8.901, -0.175], [6.09, 0.216], [3.339, -0.518], [2.774, 0.447], [8.655, 0.322], [1.393, 1.019], [6.642, 0.162], [0.897, 0.8], [3.559, -0.59], [9.748, 0.165], [7.663, 0.647], [9.688, 0.031], [5.869, -0.975], [0.641, 0.657], [9.116, -0.115], [4.288, -0.82], [3.709, -0.564], [7.054, 0.697], [2.543, 0.487], [3.164, 0.219], [9.998, -0.732], [9.068, 0.828], [5.381, -1.138], [7.764, 1.482], [3.273, -0.287], [9.372, 0.963], [0.515, 0.474], [5.515, -0.576], [1.272, 0.844], [8.141, 1.118], [1.882, 0.829], [9.151, 0.949], [4.276, -1.076], [5.544, -0.388], [2.939, 0.011], [8.556, 1.431], [4.715, -1.261], [5.272, -0.445], [9.542, -0.973], [2.582, 0.697], [2.109, 0.651], [2.629, 0.704], [0.123, 0.119], [0.002, 0.002], [1.042, 0.835], [1.835, 0.988], [7.004, 0.396], [2.324, 0.911], [7.068, 0.21], [3.529, -0.282], [6.403, 0.001], [0.962, 0.9], [8.86, -0.071], [1.466, 1.078], [3.559, -0.699], [9.905, -0.363], [7.015, 0.485], [5.194, -0.44], [4.851, -1.38], [5.221, -0.708], [1.136, 0.826], [7.303, 0.983], [5.169, -1.105], [9.744, 0.266], [5.642, -0.85], [1.456, 1.021], [4.253, -0.947], [7.628, 1.712], [0.513, 0.457], [4.26, -0.776], [9.109, 0.092], [2.664, 0.621], [9.34, -0.325], [1.641, 1.143], [9, 0.358], [0.585, 0.592], [7.482, 0.418], [4.748, -0.606], [8.244, 0.333], [4.879, -0.976], [3.336, -0.296], [7.085, 1.14], [6.367, -0.414], [6.18, 0.183], [4.703, -1.319], [0.22, 0.229], [1.672, 0.923], [8.167, 1.162], [7.069, 0.452], [7.218, 1.297], [0.535, 0.469], [4.735, -0.668], [4.149, -1.106], [8.076, 1.655], [2.101, 0.679], [2.396, 0.683], [2.992, -0.149], [0.516, 0.532], [3.555, -0.716], [5.79, -0.127], [0.576, 0.535], [1.374, 1.047], [1.235, 0.917], [7.084, 0.769], [1.764, 0.911], [3.461, -0.17], [1.451, 0.891], [3.149, 0.196], [0.713, 0.598], [8.239, 1.284], [6.549, -0.209], [6.873, 0.652], [5.744, -1.069], [8.966, 0.461], [6.204, -0.437], [0.341, 0.339], [6.255, -0.502], [8.533, 1.576], [4.77, -1.246], [2.372, 0.733], [3.597, -0.684], [5.813, 0.092], [4.522, -1.051], [9.893, 0.047], [1.2, 0.863], [7.934, 1.024], [4.516, -1.402], [3.632, -0.408], [9.697, -0.679], [7.979, 1.565], [1.277, 0.925], [9.772, 0.235], [4.73, -1.353], [5.267, -0.495], [5.504, -1.149], [5.074, -0.527], [1.956, 0.775], [4.454, -0.814], [9.846, -0.525], [6.674, 0.946], [4.24, -0.903], [5.483, -0.189], [1.653, 0.923], [3.207, -0.053], [7.812, 0.297], [0.302, 0.301], [7.859, 0.792], [7.749, 1.537], [6.59, 0.121], [5.751, -0.327], [6.649, 0.357], [9.726, 0.52], [5.531, -1.055], [1.903, 1.095], [4.585, -1.136], [1.256, 1.056], [3.25, -0.299], [4.414, -0.576], [0.059, 0.058], [6.153, -0.074], [8.578, 0.054], [5.325, -0.488], [7.607, 0.422], [5.542, -0.294], [7.952, 0.275], [4.589, -0.728], [4.191, -0.97], [0.662, 0.631], [5.323, -1.224], [1.454, 1.046], [3.089, -0.197], [0.376, 0.378], [8.23, 0.762], [7.553, 1.142], [9.194, -0.484], [7.108, 1.164], [9.899, -1.059], [6.007, -0.169], [0.341, 0.317], [4.184, -0.504], [5.144, -1.107], [0.244, 0.265], [4.136, -0.889], [3.051, 0.239], [2.768, 0.105], [4.953, -0.892], [7.611, 0.219], [3.331, 0.127], [7.797, 0.637], [9.613, 0.646], [9.166, -0.454], [3.292, -0.031], [6.977, 0.004], [4.836, -0.934], [2.461, 0.524], [2.045, 1.029], [9.901, -1.126], [2.437, 0.833], [3.784, -0.75], [0.513, 0.515], [4.73, -1.206], [7.887, 1.021], [5.078, -1.125], [2.699, 0.605], [6.652, 0.045], [0.074, 0.08], [2.407, 0.45], [8.232, 1.289], [8.437, 0.249], [3.024, 0.337], [3.149, -0.242], [3.97, -0.666], [1.406, 0.949], [9.311, 0.964], [7.749, 0.784], [0.222, 0.234], [4.002, -0.863], [2.588, 0.741], [8.492, 0.027], [8.825, 0.989], [4.591, -1.07], [2.871, 0.443], [7.671, 0.875], [5.93, -0.245], [6.165, -0.221], [6.835, 0.894], [5.594, -0.763], [0.137, 0.139], [9.042, -0.127], [6.48, 0.713], [9.832, -0.396], [4.513, -0.976], [5.318, -1.013], [9.849, 0.416], [1.426, 0.852], [3.253, 0.11], [3.991, -0.828], [9.851, 0.409], [5.305, -0.902], [0.4, 0.396], [6.414, -0.219], [9.541, 0.188], [6.948, 0.069], [9.773, 0.585], [5.571, -0.862], [0.458, 0.462], [1.663, 0.982], [9.723, -0.206], [4.204, -1.147], [6.712, 0.72], [5.29, -1.132], [3.825, -0.5], [6.436, -0.278], [9.113, 0.594], [0.659, 0.594], [9.398, 0.673], [4.13, -1.129], [7.183, 1.174], [1.31, 0.837], [8.273, 1.176], [9.597, -0.442], [0.591, 0.585], [8.827, 0.092], [2.496, 0.62], [1.664, 0.964], [2.477, 0.759], [5.913, -0.6], [2.729, 0.644], [3.279, -0.176], [8.589, 1.113], [3.876, -0.695], [1.635, 1.032], [6.633, 0.208], [6.101, 0.232], [7.513, 0.33], [6.415, 0.587], [1.866, 0.847], [3.781, -0.583], [0.721, 0.601], [2.572, 0.74], [0.901, 0.736], [8.965, 0.661], [9.607, -0.486], [7.539, 1.147], [1.876, 0.843], [9.803, 0.264], [2.159, 0.715], [2.841, 0.369], [3.342, -0.469], [5.966, -0.105], [5.21, -0.889], [3.238, -0.035], [0.693, 0.587], [6.758, 0.978], [0.613, 0.573], [1.267, 1.015], [7.028, 0.037], [4.871, -0.567], [0.543, 0.504], [9.486, 0.303], [0.102, 0.101], [9.576, 0.215], [8.804, 0.201], [1.137, 0.94], [3.558, -0.681], [9.804, 0.443], [6.684, -0.017], [9.426, 0.128], [4.438, -1.034], [1.918, 1.083], [0.703, 0.599], [5.68, -0.189], [2.932, 0.099], [8.919, 0.782], [0.844, 0.692], [0.83, 0.813], [7.987, 0.437], [4.758, -0.526], [8.915, -0.051], [4.519, -0.553], [7.902, 0.962], [3.554, -0.223], [7.035, 0.118], [0.32, 0.319], [3.263, -0.2], [2.841, 0.349], [9.205, -0.648], [9.037, 1.031], [8.812, -0.236], [0.958, 0.857], [3.95, -1.035], [3.081, 0.065], [3.744, -0.675], [2.053, 0.895], [5.871, -0.448], [0.968, 0.845], [5.57, -0.812], [9.724, -0.227], [7.296, 0.164], [4.155, -0.802], [6.952, 0.581], [4.394, -0.733], [2.703, 0.223], [8.724, 1.089], [2.066, 0.765], [2.8, 0.337], [8.717, 0.522], [9.226, 0.989], [4.029, -0.814], [0.081, 0.085], [2.713, 0.354], [5.497, -0.455], [9.667, -0.395], [4.756, -0.66], [5.796, -0.988], [3.35, -0.056], [2.475, 0.585], [6.555, 0.424], [4.637, -1.083], [9.935, -0.466], [3.549, -0.473], [2.065, 0.965], [9.233, -0.008], [0.847, 0.814], [3.291, -0.439], [3.93, -0.676], [6.696, 0.263], [0.375, 0.369], [5.853, -0.903], [0.139, 0.146], [6.394, -0.464], [2.264, 0.912], [9.781, -1.188], [2.952, 0.2], [4.22, -1.183], [8.703, 0.747], [6.685, 0.043], [7.53, 1.163], [8.736, -0.077], [3.885, -0.427], [5.399, -0.984], [2.316, 0.948], [6.784, 0.239], [0.547, 0.542], [1.995, 0.789], [9.627, -0.031], [8.803, 0.52], [6.619, 0.85], [2.697, 0.294], [3.885, -0.436], [6.524, -0.052], [4.764, -0.653], [5.259, -1.296], [5.021, -0.767], [6.661, 0.18], [9.551, 0.538], [8.361, 0.244], [5.457, -0.627], [9.32, 0.072], [9.798, -0.268], [5.069, -0.983], [2.22, 0.92], [5.595, -1.051], [8.421, 1.458], [3.923, -0.771], [6.855, 1.163], [4.421, -1.254], [5.905, -0.031], [3.391, -0.532], [3.817, -0.405], [5.372, -0.819], [3.526, -0.27], [7.595, 0.587], [7.666, 1.448], [6.441, 0.057], [3.546, -0.279], [9.284, -0.029], [3.101, 0.19], [3.094, -0.005], [6.687, 0.874], [2.049, 0.823], [8.727, 0.819], [1.594, 0.942], [0.334, 0.348], [1.351, 0.864], [9.619, 0.491], [6.844, 0.094], [6.642, 0.373], [9.905, -1.005], [5.45, -0.351], [7.316, 0.263], [0.844, 0.802], [3.652, -0.726], [6.678, 0.891], [4.058, -0.886], [8.502, 1.257], [2.25, 0.773], [0.814, 0.755], [4.626, -1.406], [5.387, -0.773], [1.502, 0.896], [3.444, -0.254], [2.274, 0.643], [8.686, 1.333], [1.983, 0.8], [3.572, -0.185], [7.579, 0.846], [1.542, 1.086], [6.6, 0.032], [8.156, 1.725], [7.565, 0.414], [3.7, -0.403], [7.394, 0.702], [9.968, -0.442], [5.464, -0.984], [8.577, 0.845], [6.292, -0.277], [2.452, 0.661], [8.709, 0.506], [1.744, 1.146], [7.963, 0.785], [0.224, 0.238], [1.178, 0.904], [8.015, 1.157], [4.411, -1.105], [6.629, 0.432], [0.632, 0.561], [1.857, 1.085], [0.602, 0.558], [8.539, 1.15], [6.449, -0.455], [1.934, 1.117], [1.762, 0.828], [4.025, -0.573], [6.73, 0.413], [2.212, 0.901], [2.082, 0.721], [8.834, 1.068], [0.318, 0.292], [8.034, 1.48], [8.977, -0.135], [0.749, 0.755], [5.949, -0.374], [0.334, 0.34], [6.895, -0.001], [3.5, -0.002], [0.538, 0.481], [5.557, -0.399], [7.576, 0.841], [2.601, 0.626], [7.924, 0.58], [7.757, 1.159], [1.485, 0.967], [9.403, 0.222], [3.055, -0.205], [7.842, 1.539], [2.693, 0.333], [1.865, 1.089], [4.005, -0.963], [3.737, -0.463], [9.449, -0.466], [4.435, -0.602], [0.208, 0.192], [3.205, 0.137], [8.693, -0.092], [8.664, 0.79], [3.937, -0.888], [1.154, 0.993], [1.086, 0.859], [7.721, 1.703], [9.882, -0.505], [8.209, 1.115], [3.472, -0.499], [1.889, 1.137], [8.091, 0.951], [0.344, 0.354], [1.147, 0.87], [4.65, -0.804], [8.342, 0.259], [6.65, 0.359], [4.194, -1.053], [5.452, -0.659], [0.431, 0.405], [2.761, 0.55], [0.629, 0.561], [4.058, -0.43], [6.267, -0.341], [9.282, 0.245], [1.452, 0.972], [8.23, 1.235], [6.632, 0.1], [9.689, 0.051], [2.112, 0.703], [0.278, 0.284], [5.262, -0.967], [7.842, 1.159], [9.606, -0.972], [5.217, -0.362], [2.016, 0.858], [0.998, 0.9], [7.068, 0.203], [0.461, 0.48], [4.669, -1.385], [3.161, 0.047], [3.648, -0.63], [1.361, 1.067], [9.972, -1.325], [1.825, 1.139], [8.308, 0.223], [7.789, 1.603], [9.06, 0], [3.639, -0.146], [0.184, 0.165], [4.525, -0.555], [9.208, -0.139], [1.698, 1.077], [7.968, 0.201], [0.281, 0.305], [1.853, 0.807], [2.354, 0.828], [2.105, 0.849], [7.328, 1.02], [6.105, -0.464], [3.269, -0.106], [6.927, 0.055], [2.754, 0.423], [4.011, -0.929], [9.756, 0.485], [6.997, 0.261], [1.445, 1.045], [4.717, -1.024], [0.759, 0.76], [3.491, -0.613], [2.418, 0.888], [8.814, 0.049], [0.858, 0.784], [1.49, 0.924], [2.333, 0.925], [5.321, -1.084], [4.988, -0.56], [8.196, 0.169], [6.758, 1.004], [2.654, 0.206], [8.115, 1.046], [7.883, 0.975], [0.977, 0.846], [7.519, 0.557], [1.598, 1.148], [8.081, 0.262], [3.252, -0.051], [9.955, -1.044], [7.155, 1.236], [3.103, -0.149], [2.366, 0.745], [2.474, 0.469], [6.123, 0.133], [7.668, 0.45], [0.692, 0.703], [7.991, 0.659], [0.472, 0.476], [2.935, 0.155], [5.903, -0.252], [2.615, 0.463], [1.889, 1], [8.836, -0.091], [2.482, 0.643], [5.652, -0.993], [1.587, 1.13], [6.751, -0.012], [2.001, 0.942], [4.763, -1.381], [3.504, -0.066], [4.363, -1.264], [7.81, 1.615], [5.155, -1.181], [9.3, 0.88], [0.787, 0.702], [4.868, -0.637], [8.226, 0.126], [2.512, 0.686], [2.218, 0.638], [2.193, 0.932], [9.227, -0.525], [9.941, 0.042], [2.575, 0.386], [2.803, 0.469], [4.991, -1.382], [6.124, 0.068], [7.425, 0.685], [0.187, 0.193], [8.759, 0.093], [6.253, -0.013], [0.705, 0.63], [3.96, -0.721], [3.533, -0.449], [2.302, 0.776], [2.383, 0.508], [8.888, 0.882], [7.2, 0.312], [0.086, 0.091], [6.59, -0.293], [1.891, 0.967], [5.798, -1], [3.62, -0.186], [2.834, 0.108], [1.367, 1.04], [3.415, -0.338], [7.755, 1.5], [4.673, -1.217], [4.057, -0.672], [5.007, -0.986], [7.703, 1.141], [4.843, -1.458], [1.444, 1.009], [9.846, -0.973], [5.708, -0.303], [2.119, 0.67], [5.234, -0.516], [3.361, -0.343], [0.442, 0.466], [5.962, -0.807], [5.509, -0.181], [8.51, 0.015], [1.561, 1.088], [3.803, -0.78], [6.395, 0.118], [9.851, -0.773], [4.644, -0.919], [0.874, 0.765], [9.808, 0.111], [6.703, 0.286], [1.37, 1.099], [9.914, -0.488], [8.117, 1.343], [0.149, 0.135], [5.692, -0.545], [6.439, -0.067], [3.065, 0.28], [2.163, 0.644], [0.982, 0.919], [9.993, -0.825], [2.439, 0.697], [9.834, -1.259], [9.149, 0.66], [9.065, -0.362], [9.621, 0.583], [9.049, -0.022], [0.133, 0.134], [7.201, 0.595], [3.832, -0.402], [1.346, 0.948], [0.304, 0.306], [9.408, -0.669], [0.819, 0.78], [4.535, -1.285], [6.019, -0.066], [0.322, 0.311], [3.585, -0.339], [9.738, -1.222], [5.857, -0.353], [5.452, -0.746], [5.797, -0.27], [1.166, 0.824], [2.706, 0.452], [8.282, 0.387], [3.417, -0.062], [8.218, 0.575], [8.792, 0.88], [6.442, -0.31], [8.783, 1.025], [2.097, 0.772], [5.231, -0.365], [3.483, -0.407], [9.106, 0.51], [0.391, 0.353], [4.313, -0.577], [3.912, -0.745], [9.988, -0.264], [4.093, -1.121], [6.196, 0.201], [2.071, 0.86], [3.935, -0.359], [4.018, -1.161], [4.054, -0.726], [9.681, -0.932], [7.57, 1.23], [9.825, -0.455], [0.934, 0.873], [2.329, 0.572], [4.426, -0.574], [5.51, -0.79], [1.006, 0.902], [7.829, 0.449], [0.943, 0.829], [3.431, -0.577], [2.896, 0.289], [9.831, -0.962], [1.49, 1.087], [7.409, 0.577], [1.746, 1.017], [2.418, 0.595], [7.107, 1.347], [4.109, -1.227], [8.045, 1.469], [9.049, -0.063], [8.4, 0.914], [9.56, -0.505], [9.277, 1.028], [6.255, -0.323], [6.682, 0.754], [4.122, -1.228], [3.191, 0.182], [7.712, 0.454], [5.945, -0.248], [3.458, -0.568], [5.743, -0.146], [1.411, 0.934], [3.842, -0.625], [2.475, 0.418], [2.383, 0.719], [2.555, 0.375], [8.699, 0.823], [3.202, -0.305], [9.93, -0.056], [1.794, 0.942], [9.429, 0.787], [3.678, -0.567], [5.294, -0.688], [1.755, 0.822], [7.56, 1.674], [2.862, 0.235], [8.58, 0.862], [7.807, 0.53], [6.327, 0.621], [8.224, 0.127], [9.263, 0.464], [9.016, 0.025], [5.145, -0.738], [7.241, 0.609], [2.406, 0.814], [8.011, 0.44], [4.552, -0.686], [7.834, 0.544], [3.864, -0.478], [8.596, 0.258], [2.276, 0.805], [5.237, -1.087], [4.918, -0.805], [3.089, -0.066], [9.414, 0.738], [5.93, -0.833], [1.351, 1.039], [2.605, 0.327], [6.347, 0.347], [6.132, -0.399], [6.72, 0.893], [0.786, 0.671], [8.469, 1.404], [5.81, -1.01], [8.564, 1.458], [5.954, -0.709], [3.209, 0.232], [2.796, 0.102], [1.623, 1.056], [9.87, -1.322], [8.73, 0.969], [3.698, -0.55], [1.011, 0.879], [3.049, -0.065], [2.665, 0.459], [1.261, 0.908], [4.632, -0.853], [6.274, -0.145], [3.418, -0.069], [7.191, 0.324], [5.083, -0.762], [4.675, -1.174], [9.009, 0.992], [1.533, 0.933], [0.586, 0.566], [8.747, 0.055], [2.357, 0.77], [7.901, 0.926], [4.113, -0.751], [0.175, 0.172], [1.578, 1.116], [4.681, -1.338], [7.685, 1.301], [0.343, 0.333], [7.27, 0.906], [5.16, -1.03], [9.124, 0.332], [9.536, -0.552], [3.752, -0.215], [9.67, -0.405], [0.614, 0.607], [0.257, 0.244], [5.117, -0.575], [0.738, 0.63], [3.063, 0.382], [4.677, -1.238], [2.967, 0.303], [8.285, 0.226], [8.839, 1.137], [8.112, 0.64], [9.037, 0.837], [5.873, -0.567], [4.102, -0.651], [2.743, 0.381], [3.302, 0.14], [9.069, 0.336], [8.655, 0.987], [5.25, -1.297], [3.879, -0.649], [9.913, -0.6], [2.84, 0.314], [0.516, 0.489], [3.409, -0.183], [5.596, -0.755], [6.849, 0.832], [5.911, -0.371], [6.128, -0.099], [7.813, 0.611], [9.173, 0.56], [2.46, 0.517], [1.748, 1.145], [9.062, 0.031], [4.287, -0.517], [3.613, -0.583], [2.744, 0.605], [0.812, 0.661], [4.968, -0.735], [1.737, 0.858], [6.983, 0.835], [0.318, 0.312], [6.503, 0.826], [6.092, -0.625], [4.421, -0.599], [1.337, 0.959], [7.53, 0.996], [9.839, -0.438], [8.001, 1.579], [3.143, -0.263], [4.458, -0.773], [5.73, -0.841], [9.066, 0.635], [3.468, -0.396], [6.315, 0.419], [7.332, 0.28], [7.695, 1.74], [0.726, 0.617], [2.353, 0.864], [9.092, -0.009], [5.536, -0.171], [0.296, 0.283], [8.8, 1.464], [6.087, -0.538], [1.783, 1.103], [0.781, 0.634], [5.049, -0.536], [4.876, -1.215], [8.99, 1.298], [4.182, -1.02], [8.386, 0.984], [6.168, -0.17], [4.09, -0.687], [9.39, -0.083], [7.933, 1.315], [7.996, 0.459], [7.013, 1.002], [6.308, -0.51], [3.08, 0.165], [0.101, 0.097], [9.003, 0.473], [3.47, -0.485], [4.378, -0.541], [7.153, 0.359], [1.353, 1.077], [6.48, 0.071], [6.49, 0.24], [7.098, 0.483], [2.949, 0.298], [8.05, 0.242], [7.638, 1.312], [5.303, -1.138], [3.97, -0.681], [8.584, 0.095], [9.259, 0.548], [9.099, -0.217], [8.111, 1.06], [1.155, 0.831], [3.966, -0.515], [1.095, 0.867], [7.25, 1.518], [6.061, -0.729], [2.804, 0.547], [9.006, -0.292], [0.964, 0.835], [2.513, 0.414], [5.758, -0.183], [4.351, -1.365], [4.319, -0.748], [6.301, -0.477], [4.718, -0.742], [1.925, 0.774], [6.437, 0.357], [5.78, -0.512], [3.2, 0.006], [8.049, 0.481], [7.308, 1.424], [0.772, 0.628], [6.849, 1.106], [7.229, 0.314], [1.757, 1.051], [0.96, 0.742], [9.473, 0.362], [7.2, 0.579], [9.805, 0.298], [1.934, 0.793], [6.203, 0.072], [6.87, 0.343], [3.32, -0.127], [7.761, 0.728], [5.035, -0.865], [3.691, -0.577], [8.142, 1.558], [8.372, 0.577], [5.894, -0.235], [7.781, 0.227], [5.211, -0.617], [0.569, 0.514], [9.279, 0.812], [4.343, -1.321], [9.787, 0.598], [2.51, 0.478], [8.923, 1.228], [1.742, 0.829], [5.934, -0.046], [4.419, -1.241], [1.868, 1.11], [5.61, -0.989], [5.284, -0.447], [7.64, 0.32], [0.229, 0.241], [5.157, -1.002], [5.416, -0.327], [4.35, -0.968], [6.282, 0.578], [5.411, -1.135], [0.544, 0.556], [1.428, 0.909], [1.443, 1.043], [5.199, -1.019], [0.761, 0.722], [5.081, -1.024], [5.458, -0.59], [5.31, -1.012], [7.252, 1.498], [6.397, 0.034], [7.783, 1.668], [8.219, 0.765], [5.253, -0.851], [5.717, -0.63], [2.19, 1.008], [5.534, -1.139], [6.958, 0.914], [9.338, -0.194], [3.257, 0.067], [0.885, 0.749], [2.436, 0.705], [1.24, 0.919], [1.172, 1.028], [6.323, -0.116], [5.546, -0.589], [4.866, -1.105], [7.664, 1.489], [6.518, -0.212], [2.383, 0.744], [5.73, -0.988], [1.023, 0.881], [2.592, 0.357], [6.107, -0.073], [8.182, 0.755], [7.799, 1.644], [0.921, 0.715], [5.997, -0.12], [5.857, -0.693], [8.977, 1.174], [4.163, -0.881], [8.697, 1.286], [1.129, 0.877], [6.486, 0.762], [1.837, 0.92], [8.071, 1.073], [0.789, 0.69], [1.009, 0.944], [6.23, -0.221], [1.165, 1.007], [3.602, -0.576], [0.143, 0.149], [1.703, 0.837], [4.772, -0.539], [8.888, 0.231], [2.351, 0.868], [7.361, 0.507], [3.045, 0.147], [8.043, 0.755], [7.867, 1.409], [1.316, 0.908], [7.16, 0.939], [3.506, -0.669], [9.52, 0.66], [8.93, -0.098], [2.882, 0.328], [0.475, 0.452], [2.46, 0.786], [3.417, -0.439], [7.21, 1.264], [9.461, -0.663], [6.896, 0.949], [6.826, 0.503], [3.887, -0.508], [3.503, -0.637], [9.39, 0.471], [2.67, 0.237], [9.107, 0.683], [3.951, -1.023], [4.947, -0.593], [9.718, -0.887], [8.269, 1.053], [5.599, -0.788], [3.813, -0.286], [9.17, 0.206], [9.201, 0.399], [1.93, 0.852], [7.153, 0.781], [0.216, 0.206], [4.251, -0.742], [1.26, 0.828], [0.224, 0.236], [7.692, 0.829], [4, -0.505], [1.659, 0.972], [4.933, -0.591], [2.713, 0.196], [3.973, -0.545], [8.809, 0.105], [1.108, 0.923], [3.846, -0.949], [3.159, 0.109], [3.428, -0.286], [6.564, 0.858], [5.042, -0.977], [1.097, 0.974], [4.164, -0.976], [2.996, 0.194], [2.769, 0.357], [3.201, 0.245], [4.808, -1.415], [1.06, 0.959], [7.033, 0.353], [2.954, 0.469], [6.753, -0.207], [4.414, -0.539], [7.471, 0.185], [0.093, 0.097], [6.84, -0.104], [9.573, -0.011], [2.699, 0.195], [5.349, -0.672], [8.277, 0.821], [6.224, 0.287], [4.93, -1.442], [8.272, 1.507], [9.475, -0.64], [6.351, 0.545], [4.047, -0.804], [0.378, 0.396], [7.302, 0.743], [9.211, 0.939], [3.027, -0.135], [4.481, -0.889], [7.119, 0.721], [9.814, 0.583], [4.581, -1.151], [4.335, -0.914], [5.767, -0.533], [7.106, 1.2], [1.443, 0.991], [5.662, -0.342], [4.537, -1.001], [0.967, 0.898], [0.568, 0.535], [6.664, 0.455], [4.444, -1.227], [7.029, 1.343], [6.294, -0.07], [3.821, -0.272], [7.494, 0.924], [8.005, 1.272], [3.75, -0.816], [7.722, 1.76], [8.359, 0.842], [3.924, -0.428], [8.774, 0.344], [5.753, 0.054], [8.368, 0.552], [3.505, -0.134], [8.108, 0.807], [6.225, 0.441], [2.112, 0.848], [5.724, -0.008], [5.713, -0.677], [2.127, 1.021], [8.137, 0.583], [1.693, 1.125], [0.841, 0.7], [3.817, -0.404], [8.911, -0.042], [9.396, 0.74], [3.321, -0.406], [4.632, -0.882], [1.756, 0.818], [8.427, 1.445], [3.111, -0.011], [8.789, 1.27], [4.922, -1.402], [6.207, 0.192], [1.321, 0.966], [5.47, -0.599], [2.33, 0.534], [4.996, -0.759], [2.029, 0.721], [2.74, 0.507], [4.746, -1.31], [8.867, 0.902], [7.108, 0.246], [1.914, 0.947], [5.312, -1.056], [9.366, 0.295], [7.069, 0.188], [9.16, 0.803], [6.728, 0.288], [2.31, 0.834], [1.606, 0.9], [8.704, 0.908], [9.83, -1.263], [0.302, 0.298], [8.364, 0.238], [9.036, 0.426], [7.483, 0.559], [9.717, -0.213], [1.645, 0.858], [7.497, 1.61], [8.951, -0.091], [7.985, 1.446], [9.291, -0.425], [4.957, -0.519], [7.053, 0.224], [3.359, -0.06], [6.911, 0.498], [6.697, 0.583], [0.652, 0.587], [2.179, 0.883], [7.242, 0.555], [9.35, 0.116], [6.05, -0.296], [3.502, -0.348], [9.477, -0.285], [9.148, 0.765], [2.386, 0.461], [2.493, 0.769], [3.281, -0.269], [9.378, 0.237], [8.774, 0.332], [7.542, 1.401], [7.707, 0.975], [7.007, 0.75], [9.106, -0.183], [9.986, 0.33], [6.178, -0.628], [1.052, 0.957], [0.145, 0.134], [8.097, 1.093], [0.286, 0.256], [8.837, 0.757], [4.677, -1.242], [2.607, 0.726], [6.892, 0.507], [4.843, -0.937], [3.486, -0.62], [6.805, 0.975], [1.751, 0.946], [0.759, 0.753], [0.998, 0.786], [1.437, 1.022], [3.965, -0.889], [4.791, -0.696], [5.943, -0.9], [0.582, 0.576], [1.892, 0.869], [0.958, 0.907], [5.996, -0.853], [7.483, 1.305], [0.536, 0.473], [0.573, 0.566], [1.051, 0.84], [6.845, 0.551], [1.125, 0.886], [3.376, 0.065], [9.234, -0.669], [0.556, 0.556], [8.969, 0.022], [1.908, 0.989], [9.829, -1.03], [6.107, 0.417], [9.767, -0.549], [3.307, -0.05], [2.155, 0.715], [1.593, 1.021], [7.018, 0.565], [0.942, 0.897], [4.847, -1.357], [1.841, 1.001], [5.525, -0.922], [1.901, 1.076], [0.196, 0.19], [2.694, 0.485], [3.884, -0.89], [5.163, -0.894], [1.389, 0.894], [4.447, -0.677], [1.709, 0.874], [3.428, -0.155], [5.628, -1.028], [5.588, -0.171], [4.178, -1.057], [9.23, 0.568], [5.104, -1.278], [7.029, 0.981], [6.611, 0.191], [6.741, 0.711], [2.6, 0.45], [2.114, 0.9], [4.459, -1.145], [2.296, 0.95], [6.305, -0.084], [4.173, -0.7], [6.729, 0.387], [9.519, 0.685], [7.665, 0.255], [2.923, 0.501], [9.732, -0.703], [7.578, 1.598], [2.51, 0.373], [6.815, 0.99], [0.372, 0.33], [4.263, -0.737], [6.982, 0.385], [0.269, 0.267], [8.177, 0.628], [8.971, 0.563], [9.119, -0.375], [9.592, -0.156], [3.607, -0.719], [4.921, -0.927], [8.741, -0.033], [5.565, -0.284], [1.229, 0.845], [0.269, 0.274], [2.252, 0.562], [3.906, -0.315], [8.751, 0.508], [2.635, 0.592], [5.593, -0.871], [4.136, -0.776], [7.829, 0.64], [5.619, -0.573], [5.54, -0.854], [7.444, 1.583], [3.315, -0.364], [0.032, 0.033], [1.201, 0.843], [4.096, -0.437], [1.495, 0.875], [1.413, 1.092], [2.616, 0.325], [9.554, 0.668], [9.967, -0.82], [7.296, 1.532], [6.726, -0.145], [1.357, 1], [4.293, -1.164], [6.441, 0.719], [6.21, -0.112], [8.142, 1.635], [2.753, 0.356], [4.521, -0.896], [6.687, -0.035], [0.916, 0.842], [4.09, -1], [3.147, 0.159], [7.781, 0.727], [9.682, 0.37], [4.845, -1.209], [3.381, 0.009], [9.643, -0.499], [3.294, -0.075], [1.382, 0.949], [2.367, 0.738], [8.53, 0.207], [5.411, -0.558], [6.705, 0.402], [6.812, 0.728], [2.693, 0.363], [9.377, 0.579], [5.047, -1.262], [9.787, 0.113], [9.538, -0.95], [2.586, 0.548], [5.141, -1.018], [4.571, -0.731], [4.002, -0.932], [4.315, -0.64], [0.442, 0.408], [5.619, -0.496], [0.156, 0.142], [5.717, -0.485], [9.143, -0.465], [5.091, -0.578], [7.146, 0.568], [2.606, 0.692], [0.927, 0.717], [2.065, 0.999], [6.369, -0.537], [1.454, 1.035], [0.101, 0.092], [0.037, 0.04], [6.486, -0.009], [9.485, 0.261], [0.985, 0.79], [0.428, 0.431], [0.994, 0.825], [7.354, 1.205], [5.37, -1.295], [9.434, 0.504], [5.44, -0.907], [6.31, 0.495], [1.373, 0.879], [7.346, 1.398], [9.686, -0.552], [0.214, 0.219], [1.847, 0.863], [4.253, -0.822], [0.945, 0.749], [9.969, 0.226], [9.746, -0.897], [1.591, 1.08], [8.701, 0.456], [9.243, 0.329], [7.236, 0.433], [5.659, -0.38], [7.367, 0.38], [3.169, 0.277], [6.855, 0.108], [7.529, 1.465], [6.051, -0.261], [0.799, 0.736], [9.611, -0.706], [3.577, -0.117], [9.967, -1.005], [4.305, -0.727], [9.729, -1.114], [0.471, 0.5], [2.675, 0.269], [1.808, 1.131], [1.33, 0.905], [6.221, 0.27], [4.4, -1.257], [0.738, 0.698], [4.687, -1.099], [4.148, -0.82], [4.84, -1.109], [3.529, -0.3], [3.576, -0.68], [4.013, -0.5], [2.117, 0.685], [5.336, -0.563], [8.154, 0.477], [0.776, 0.768], [9.224, -0.034], [0.516, 0.529], [7.609, 0.231], [1.532, 1.068], [4.219, -0.892], [8.38, 1.641], [1.742, 0.981], [0.013, 0.013], [5.727, -1.095], [9.56, 0.158], [6.402, -0.078], [6.555, 0.835], [1.531, 0.862], [1.395, 1.034], [9.716, -0.821], [8.17, 1.016], [6.823, 0.137], [8.611, 0.872], [6.213, -0.09], [1.961, 1.018], [5.906, -0.801], [5.572, -0.142], [9.242, -0.726], [8.427, 1.436], [1.655, 0.906], [1.643, 1.019], [8.079, 0.284], [4.261, -0.615], [8.895, 0.11], [0.464, 0.456], [8.723, 0.077], [2.849, 0.329], [1.774, 0.887], [9.149, 0.38], [0.067, 0.065], [1.874, 1.047], [1.286, 0.943], [3.187, 0.02], [6.53, -0.222], [3.355, 0.093], [7.73, 0.966], [8.78, 0.68], [4.124, -1.223], [2.438, 0.86], [5.859, -0.505], [9.745, 0.203], [6.2, -0.387], [4.36, -0.542], [1.793, 0.96], [7.135, 0.875], [1.348, 0.872], [9.48, 0.009], [4.427, -1.178], [8.635, 1.238], [5.295, -1.076], [3.473, -0.129], [4.94, -1.414], [1.168, 0.986], [5.992, -0.732], [4.215, -0.644], [6.323, -0.273], [0.79, 0.783], [5.686, -1.03], [2.806, 0.572], [4.234, -1.105], [6.486, 0.244], [6.837, 0.031], [6.965, 1.316], [5.63, -1.151], [2.218, 0.961], [5.629, -0.834], [1.439, 1.052], [5.169, -1.24], [4.287, -0.633], [3.391, -0.399], [4.797, -0.893], [3.028, -0.099], [3.749, -0.304], [9.319, -0.331], [0.083, 0.09], [8.209, 0.77], [4.95, -0.936], [4.595, -1.312], [6.527, 0.441], [2.372, 0.651], [6.128, 0.153], [3.672, -0.732], [3.858, -0.363], [2.632, 0.421], [2.818, 0.59], [7.765, 0.352], [2.221, 0.942], [9.341, -0.714], [9.891, 0.538], [6.507, 0.04], [7.289, 1.362], [1.117, 0.833], [8.431, 1.104], [7.557, 0.818], [7.133, 1.365], [2.291, 0.673], [5.297, -0.361], [6.658, -0.102], [8.478, 1.026], [0.076, 0.07], [5.356, -0.377], [4.424, -1.11], [5.528, -0.279], [5.71, -0.771], [8.755, 0.732], [6.35, -0.264], [7.362, 1.472], [5.189, -1.319], [4.482, -0.767], [7.675, 0.693], [2.06, 0.958], [9.6, -0.62], [6.142, 0.351], [2.346, 0.53], [1.286, 1.065], [3.016, 0.043], [9.841, 0.506], [8.163, 0.141], [0.911, 0.815], [2.61, 0.393], [4.525, -0.682], [8.708, 0.581], [3.46, -0.281], [5.903, -0.676], [2.118, 1.007], [9.694, -0.817], [3.535, -0.072], [8.214, 0.171], [2.944, 0.382], [4.047, -1.035], [3.154, 0.138], [8.138, 0.532], [6.593, 0.721], [5.106, -1.195], [8.47, 1.287], [4.448, -1.062], [4.07, -0.604], [3.274, -0.445], [5.04, -0.523], [0.902, 0.703], [2.582, 0.572], [5.65, -0.626], [2.464, 0.74], [3.655, -0.554], [5.671, -0.526], [2.379, 0.609], [1.443, 1], [2, 0.826], [6.531, 0.707], [1.293, 0.842], [6.225, -0.008], [9.081, 0.296], [2.441, 0.721], [8.75, -0.118], [8.268, 1.333], [8.711, 0.548], [5.616, -0.176], [4.763, -1.455], [3.088, 0.299], [8.937, 0.193], [2.071, 1.026], [7.052, 0.338], [8.425, 1.533], [0.517, 0.492], [0.139, 0.139], [0.401, 0.382], [3.647, -0.477], [5.091, -1.11], [9.086, 0.5], [2.268, 0.572], [5, -0.728], [4.495, -1.355], [8.164, 1.298], [4.454, -0.997], [1.221, 0.964], [3.721, -0.771], [3.329, -0.143], [9.198, 0.061], [5.62, -0.231], [9.443, -0.192], [7.894, 1.704], [6.287, -0.442], [7.629, 1.177], [6.893, -0.046], [3.87, -0.544], [5.039, -1.018], [9.734, 0.185], [9.578, -0.94], [5.977, -0.24], [4.423, -1.166], [6.016, 0.129], [5.372, -0.959], [0.027, 0.029], [8.921, 0.081], [8.871, 1.389], [4.866, -1.339], [2.08, 0.923], [5.89, -0.434], [5.619, -0.578], [8.664, 0.611], [5.925, 0.232], [2.501, 0.499], [2.502, 0.618], [1.04, 0.85], [0.906, 0.87], [5.784, -0.683], [7.025, 1.02], [9.421, -0.267], [5.311, -0.736], [9.334, -0.549], [2.846, 0.334], [4.647, -1.197], [1.829, 1.128], [3.149, -0.206], [7.891, 1.408], [5.729, -0.626], [3.614, -0.353], [1.229, 0.834], [8.898, 0.784], [2.424, 0.615], [8.762, 0.854], [7.078, 0.01], [7.486, 1.358], [2.248, 0.701], [0.561, 0.571], [6.655, -0.031], [3.376, -0.178], [3.167, -0.168], [9.828, 0.499], [4.926, -1.019], [7.91, 1.449], [2.873, -0.017], [4, -0.628], [8.633, -0.142], [4.087, -0.777], [9.577, -0.617], [7.192, 1.303], [5.522, -0.973], [4.929, -0.742], [7.625, 0.604], [2.762, 0.458], [1.758, 0.902], [7.132, 0.946], [0.888, 0.727], [9.349, 0.78], [8.841, 0.022], [7.97, 1.577], [3.517, -0.447], [6.468, 0.756], [5.906, -0.473], [3.408, -0.229], [2.934, 0.182], [5.746, -0.322], [7.212, 0.792], [4.542, -0.738], [5.226, -1.306], [3.615, -0.361], [1.616, 0.871], [3.757, -0.472], [5.829, -0.511], [0.192, 0.203], [8.683, 0.646], [9.147, 0.507], [7.353, 0.325], [7.211, 0.98], [3.588, -0.597], [4.82, -0.747], [1.253, 0.838], [1.115, 0.945], [4.574, -1.088], [3.527, -0.133], [6.897, 0.028], [1.32, 1.01], [1.173, 0.903], [4.134, -0.557], [4.333, -1.244], [4.734, -0.565], [7.679, 0.425], [8.12, 1.454], [4.984, -1.386], [9.572, 0.719], [3.981, -0.937], [1.388, 1.043], [9.816, -1.291], [7.129, 1.098], [5.38, -1.067], [9.306, 0.223], [4.762, -1.4], [0.288, 0.285], [0.281, 0.273], [0.055, 0.059], [5.36, -0.965], [5.788, -0.256], [0.368, 0.33], [5.245, -0.766], [9.697, -0.282], [0.462, 0.481], [3.142, -0.117], [3.261, 0.106], [6.572, 0.018], [9.453, -0.006], [5.559, -0.97], [2.64, 0.53], [5.73, -0.766], [1.649, 1.023], [7.241, 0.123], [5.035, -0.676], [4.927, -1.131], [0.043, 0.046], [4.231, -1.058], [5.932, -0.055], [2.964, -0.037], [6.838, 0.761], [8.454, 0.319], [2.559, 0.708], [8.191, 0.491], [6.97, 0.951], [2.88, 0.026], [6.158, 0.058], [3.314, -0.344], [3.904, -0.626], [0.739, 0.649], [4.389, -0.702], [2.506, 0.431], [1.093, 0.909], [5.176, -0.973], [3.377, -0.125], [2.815, 0.129], [9.31, 0.614], [9.641, -0.966], [4.979, -0.788], [0.421, 0.396], [2.728, 0.476], [3.757, -0.619], [6.486, 0.275], [7.852, 0.822], [2.11, 0.873], [5.81, -0.752], [2.746, 0.591], [1.241, 0.872], [3.238, -0.03], [3.828, -1.002], [3.062, 0.362], [7.545, 0.452], [3.676, -0.395], [0.85, 0.703], [0.524, 0.516], [1.046, 0.762], [4.077, -0.476], [4.296, -1.296], [3.347, -0.017], [3.235, -0.116], [6.621, 0.586], [3.333, -0.468], [3.176, 0.064], [7.688, 0.532], [3.229, -0.026], [5.519, -0.862], [6.515, 0.251], [7.273, 0.694], [1.851, 1.023], [4.081, -0.961], [9.785, 0.218], [0.162, 0.157], [2.339, 0.866], [3.344, -0.453], [8.341, 1.396], [1.845, 0.795], [8.108, 1.472], [7.677, 0.945], [7.873, 1.415], [0.726, 0.622], [5.443, -0.544], [1.324, 0.963], [7.201, 1.212], [1.482, 0.98], [4.465, -0.606], [3.206, -0.28], [5.004, -0.944], [3.38, -0.278], [0.102, 0.108], [1.508, 0.965], [4.33, -0.551], [7.226, 0.752], [6.078, 0.346], [6.621, 0.307], [7.491, 1.45], [5.614, -0.984], [8.218, 1.429], [3.046, 0.046], [5.242, -0.665], [1.964, 0.751], [9.421, 0.418], [4.91, -1.145], [3.644, -0.118], [8.342, 0.571], [9.198, 0.503], [0.047, 0.045], [8.071, 1.763], [6.294, -0.249], [2.289, 0.88], [4.491, -1.087], [3.065, 0.139], [4.392, -0.959], [4.828, -0.635], [1.335, 0.847], [3.109, 0.168], [8.519, 0.068], [1.293, 0.992], [6.523, -0.043], [4.482, -0.732], [3.551, -0.676], [8.661, 1.494], [0.157, 0.151], [8.975, 0.733], [7.116, 0.201], [6.73, 0.639], [6.459, -0.085], [7.292, 1.426], [4.918, -1.287], [5.428, -0.501], [0.419, 0.397], [0.396, 0.42], [4.495, -1.015], [0.708, 0.694], [0.671, 0.574], [8.588, 0.819], [8.28, 0.769], [6.559, 0.306], [5.157, -1.152], [1.251, 1.015], [3.823, -0.829], [5.214, -0.876], [8.662, 0.208], [5.796, -0.271], [3.634, -0.747], [1.731, 1.152], [2.266, 0.657], [5.772, -0.088], [0.628, 0.559], [5.242, -0.357], [3.244, -0.137], [6.557, 0.78], [9.056, 0.029], [9.484, 0.438], [0.365, 0.34], [7.322, 1.472], [0.157, 0.147], [3.29, 0.055], [3.708, -0.626], [7.948, 1.299], [8.446, 0.73], [7.394, 1.52], [3.406, -0.601], [3.649, -0.148], [2.742, 0.286], [0.266, 0.288], [0.102, 0.102], [2.178, 0.887], [0.619, 0.564], [2.002, 0.992], [5.78, -0.601], [4.398, -0.514], [9.948, -1.44], [1.975, 1.061], [6.5, 0.175], [5.53, -0.429], [7.48, 0.549], [7.4, 1.243], [0.31, 0.294], [3.715, -0.268], [8.339, 0.766], [7.408, 1.445], [5.073, -1.347], [1.719, 1.028], [2.071, 0.851], [4.069, -0.449], [3.414, -0.388], [0.247, 0.246], [6.157, -0.27], [2.039, 0.896], [1.296, 0.94], [6.551, 0.486], [9.95, -1.152], [9.75, 0.397], [6.893, 0.072], [2.625, 0.605], [0.675, 0.597], [2.062, 0.98], [6.815, 0.17], [8.629, 0.738], [7.091, 0.696], [1.707, 1.057], [1.623, 0.839], [8.266, 1.359], [6.074, -0.343], [2.968, 0.241], [8.058, 0.893], [4.797, -0.938], [5.871, -0.843], [5.172, -0.816], [3.992, -1.074], [7.372, 0.944], [6.963, 0.562], [8.343, 1.123], [0.912, 0.749], [2.252, 0.931], [6.014, -0.853], [9.964, -0.13], [1.137, 0.855], [9.875, 0.314], [4.771, -1.321], [0.658, 0.673], [0.825, 0.692], [4.938, -0.875], [4.278, -0.979], [9.375, 0.669], [8.212, 0.794], [1.716, 1.07], [6.178, -0.688], [8.145, 1.306], [5.837, -0.46], [2.4, 0.741], [8.929, -0.1], [6.007, 0.056], [7.542, 0.558], [9.04, 0.731], [9.685, -0.38], [6.081, 0.259], [8.833, 0.028], [9.241, 0.45], [4.54, -1.29], [7.707, 1.166], [1.049, 0.826], [6.695, 0.879], [1.294, 0.926], [7.425, 0.937], [3.315, -0.416], [6.06, -0.172], [0.796, 0.651], [1.44, 1.018], [5.882, -0.394], [3.822, -0.316], [5.207, -0.972], [2.877, 0.43], [8.194, 0.23], [0.446, 0.445], [6.397, -0.056], [0.59, 0.604], [2.037, 0.881], [1.666, 1.065], [8.569, 0.216], [6.682, 0.6], [1.213, 0.858], [9.394, 0.49], [8.946, -0.09], [2.275, 0.988], [6.349, -0.14], [8.149, 1.408], [7.636, 0.395], [5.247, -0.628], [9.911, -0.897], [4.934, -0.774], [1.666, 0.993], [8.207, 1.601], [1.573, 0.984], [0.587, 0.591], [2.55, 0.457], [9.379, 0.831], [6.11, -0.403], [8.818, 0.836], [5.293, -1.177], [1.626, 1.106], [8.683, -0.034], [1.966, 1.052], [6.27, -0.393], [6.316, 0.653], [1.06, 0.86], [2.594, 0.725], [9.994, -1.412], [8.403, 1.07], [8.106, 0.745], [9.443, 0.593], [0.75, 0.659], [3.771, -0.355], [9.93, -0.588], [6.838, 0.891], [6.025, -0.623], [6.987, 0.836], [0.482, 0.427], [0.969, 0.906], [6.988, 0.568], [6.161, 0.149], [5.918, -0.674], [6.347, 0.653], [5.386, -1.236], [0.135, 0.144], [8.904, 0.043], [7.757, 1.067], [2.256, 0.703], [6.726, 0.765], [2.076, 0.839], [5.379, -0.747], [0.399, 0.359], [2.905, 0.309], [5.554, -1.103], [5.663, -0.231], [6.627, 0.023], [7.059, 1.239], [7.195, 0.273], [9.77, 0.334], [5.361, -0.831], [4.744, -0.584], [8.245, 0.91], [3.264, 0.09], [2.078, 0.669], [2.306, 0.841], [8.721, 0.54], [3.031, 0.257], [8.339, 0.588], [5.441, -0.64], [0.849, 0.673], [2.477, 0.787], [4.984, -1.114], [4.571, -0.919], [6.171, -0.434], [8.53, 1.356], [9.473, -0.237], [2.281, 0.897], [6.724, 0.089], [2.47, 0.822], [9.804, -0.452], [3.44, -0.287], [6.261, -0.358], [0.783, 0.782], [2.174, 0.676], [3.821, -0.252], [3.191, -0.213], [7.527, 1.552], [7.556, 0.528], [4.479, -0.715], [2.077, 0.705], [4.125, -0.609], [9.447, -0.877], [8.751, 1.467], [9.437, -0.933], [0.72, 0.708], [8.423, 0.44], [6.203, 0.255], [1.881, 0.835], [3.736, -0.487], [3.831, -0.974], [5.806, -0.286], [0.365, 0.347], [3.697, -0.383], [6.247, -0.229], [2.201, 0.925], [0.534, 0.487], [7.668, 1.606], [8.713, 0.374], [0.589, 0.612], [9.081, 0.294], [5.161, -0.403], [7.466, 0.677], [5.411, -0.428], [6.028, -0.606], [5.975, -0.006], [1.073, 0.774], [5.935, -0.12], [7.563, 0.661], [3.882, -0.318], [8.038, 0.548], [8.363, 1.421], [4.229, -1.282], [0.276, 0.273], [5.783, -0.485], [7.31, 1.552], [4.301, -0.974], [3.698, -0.472], [0.412, 0.383], [8.812, 1.289], [3.793, -0.663], [7.818, 1.093], [7.227, 0.459], [6.208, 0.156], [5.706, -1.001], [1.05, 0.883], [3.434, -0.546], [0.328, 0.329], [9.03, -0.485], [7.287, 1.418], [0.842, 0.732], [0.776, 0.73], [9.949, -1.392], [1.637, 1.128], [1.731, 0.927], [6.616, 0.988], [8.135, 0.298], [6.657, 0.67], [8.17, 0.549], [8.212, 1.186], [0.941, 0.771], [3.864, -0.447], [6.692, -0.218], [2.712, 0.552], [9.732, -0.619], [5.183, -0.389], [7.332, 0.771], [4.788, -0.592], [4.51, -1.204], [4.713, -0.939], [8.954, 0.078], [8.596, 1.542], [0.895, 0.728], [1.639, 1.142], [1.587, 0.852], [5.211, -0.585], [9.172, -0.63], [3.605, -0.253], [3.34, -0.369], [9.321, 0.739], [0.719, 0.606], [3.995, -0.662], [1.563, 0.894], [2.432, 0.76], [8.779, 0.127], [5.933, 0.01], [1.513, 0.971], [5.104, -0.756], [6.705, -0.099], [7.603, 1.26], [8.936, 0.281], [8.081, 1.671], [0.841, 0.664], [2.067, 0.882], [4.691, -1.448], [2.34, 0.948], [6.964, 0.011], [1.639, 1.09], [3.336, -0.378], [5.895, -0.078], [5.656, -0.76], [8.848, 1.391], [9.46, -0.67], [0.996, 0.895], [4.594, -1.24], [2.908, 0.424], [3.47, -0.637], [2.542, 0.586], [0.073, 0.066], [5.434, -0.209], [4.896, -1.179], [0.891, 0.814], [5.295, -1.243], [1.912, 0.971], [4.553, -1.403], [8.379, 0.942], [3.642, -0.809], [7.07, 0.739], [7.212, 0.117], [8.046, 1.725], [2.733, 0.25], [3.615, -0.437], [1.015, 0.803], [2.879, 0.429], [9.666, -0.738], [4.774, -0.793], [7.294, 0.483], [0.619, 0.623], [2.618, 0.385], [6.139, 0.346], [9.167, -0.323], [0.397, 0.426], [3.158, -0.303], [9.241, 0.818], [2.92, 0.122], [9.355, 0.57], [5.172, -1.25], [6.93, 1.002], [0.309, 0.292], [6.831, 0.845], [3.291, -0.266], [5.618, -0.123], [8.7, -0.165], [8.846, 0.559], [8.673, 0.384], [4.902, -0.616], [1.818, 0.799], [7.153, 1.034], [8.549, 0.189], [9.533, 0.818], [9.215, -0.453], [3.616, -0.318], [3.814, -0.766], [9.689, -0.174], [6.286, -0.389], [3.09, 0.328], [4.92, -1.43], [1.297, 0.984], [5.1, -1.177], [0.399, 0.414], [8.408, 0.183], [6.515, 0.243], [2.206, 0.605], [3.231, 0.069], [6.527, 0.182], [2.053, 0.959], [9.232, 0.146], [6.479, 0.763], [0.631, 0.564], [1.996, 0.944], [2.809, 0.151], [1.663, 1.087], [1.598, 0.879], [6.463, 0.201], [7.76, 0.877], [8.159, 1.037], [0.449, 0.415], [3.324, 0.073], [5.61, -0.823], [6.53, 0.652], [6.242, -0.375], [7.132, 1.198], [4.73, -1.389], [2.213, 0.969], [6.57, 0.123], [3.782, -0.564], [1.309, 0.848], [4.374, -0.925], [0.449, 0.404], [0.03, 0.033], [5.365, -0.875], [4.733, -0.897], [2.108, 0.774], [5.4, -0.595], [7.401, 0.719], [0.856, 0.826], [1.376, 0.913], [0.218, 0.231], [6.113, -0.579], [7.05, 0.869], [6.286, -0.599], [9.026, 0.98], [3.615, -0.547], [5.477, -0.71], [6.793, -0.142], [8.583, 1.093], [6.307, -0.117], [3.29, 0.052], [7.4, 0.257], [8.968, 1.009], [6.328, -0.55], [2.779, 0.473], [3.657, -0.696], [4.287, -0.894], [2.803, 0.076], [9.948, -0.283], [7.278, 0.439], [4.264, -0.752], [1.458, 0.924], [2.47, 0.867], [5.277, -1.218], [7.847, 1.319], [8.955, -0.106], [9.143, 1.105], [9.296, 0.039], [6.195, 0.01], [4.559, -1.213], [8.949, 0.739], [7.347, 0.452], [5.157, -0.699], [6.803, -0.175], [4.499, -0.777], [0.382, 0.362], [9.997, -0.108], [2.804, 0.177], [4.958, -0.885], [6.322, -0.147], [7.529, 1.369], [1.365, 0.885], [6.256, 0.004], [8.142, 0.49], [8.277, 1.088], [0.765, 0.673], [4.566, -0.605], [3.109, 0.026], [3.275, 0.159], [5.096, -1.426], [3.721, -0.302], [9.868, -0.524], [7.977, 1.125], [7.037, 0.171], [4.896, -0.857], [3.176, -0.329], [8.384, 1.307], [1.222, 0.887], [2.148, 1.012], [4.278, -1.046], [0.465, 0.468], [0.011, 0.011], [1.156, 0.927], [3.271, -0.239], [3.683, -0.241], [7.471, 0.776], [6.263, 0.336], [2.207, 0.728], [8.631, 1.192], [4.09, -0.845], [3.468, -0.304], [4.212, -1.193], [3.304, 0.109], [3.016, -0.118], [5.459, -0.669], [1.812, 0.9], [0.32, 0.334], [7.582, 0.507], [2.368, 0.848], [9.905, -0.791], [9.022, 0.428], [3.227, -0.248], [5.943, -0.02], [4.164, -1.132], [8.708, 0.992], [6.462, -0.117], [6.244, 0.357], [9.939, -0.607], [5.63, -0.424], [4.079, -0.971], [9.426, 0.493], [6.467, -0.199], [5.852, -0.095], [8.051, 0.253], [4.153, -0.558], [5.8, -0.598], [9.412, 0.853], [0.734, 0.607], [9.932, 0.29], [0.125, 0.117], [3.443, -0.034], [3.587, -0.768], [4.361, -0.679], [3.05, 0.036], [9.252, 1.048], [7.617, 0.684], [9.8, 0.531], [7.166, 0.491], [5.276, -0.363], [5.079, -0.96], [9.007, 0.66], [0.888, 0.701], [3.973, -0.67], [4.729, -1.464], [9.783, 0.106], [4.034, -0.987], [9.484, 0.027], [7.181, 0.528], [8.602, 1.517], [8.753, 0.304], [3.077, 0.254], [9.375, 0], [3.161, 0.225], [2.623, 0.435], [0.742, 0.709], [1.215, 0.855], [0.393, 0.412], [0.631, 0.576], [3.086, 0.056], [5.837, -0.998], [3.259, -0.053], [6.156, -0.556], [7.453, 1.582], [2.022, 0.802], [9.051, 1.163], [1.36, 0.858], [6.38, 0.477], [1.236, 0.886], [2.132, 0.956], [5.108, -0.928], [7.656, 1.744], [2.328, 0.66], [3.618, -0.322], [5.838, -0.829], [9.394, 0.373], [2.246, 0.608], [6.336, 0.527], [5.052, -1.237], [1.998, 0.999], [9.441, -0.951], [6.911, 0.791], [4.426, -1.139], [0.334, 0.33], [0.789, 0.649], [4.442, -0.872], [6.922, 0.272], [3.054, 0.245], [2.008, 0.89], [2.228, 0.933], [8.856, -0.106], [1.889, 1.052], [1.113, 0.819], [7.463, 1.404], [6.584, -0.169], [3.847, -0.561], [7.78, 0.666], [6.663, 0.844], [2.144, 0.782], [9.102, 0.486], [6.503, -0.182], [5.968, -0.071], [4.082, -1.122], [4.832, -0.64], [8.391, 0.098], [3.12, 0.169], [7.614, 0.413], [4.548, -0.891], [5.538, -0.752], [2.012, 0.914], [5.212, -0.94], [2.592, 0.694], [9.331, -0.808], [5.179, -0.604], [2.323, 0.624], [2.823, 0.412], [9.123, 0.084], [1.395, 1.077], [4.627, -1.253], [6.576, 0.503], [8.124, 0.533], [0.906, 0.834], [4.206, -1.101], [3.91, -0.458], [1.043, 0.853], [0.751, 0.7], [1.028, 0.832], [7.742, 1.677], [1.886, 0.893], [1.044, 0.908], [3.202, -0.262], [7.834, 1.565], [4.599, -1], [6.387, 0.23], [3.309, -0.399], [1.924, 1.057], [0.299, 0.291], [4.221, -0.807], [1.792, 0.886], [7.46, 1.126], [6.555, -0.113], [2.653, 0.528], [4.358, -1.365], [5.031, -0.474], [4.569, -1.258], [1.717, 1.027], [4.385, -1.117], [5.964, -0.252], [5.959, -0.66], [2.84, 0.453], [8.017, 0.599], [6.066, -0.149], [5.827, -0.977], [9.71, -0.233], [7.664, 0.747], [3.763, -0.539], [7.304, 0.154], [0.724, 0.688], [7.592, 0.593], [4.677, -0.689], [9.679, -1.1], [6.537, 0.473], [8.151, 0.68], [9.286, 0.347], [8.25, 0.816], [4.113, -0.498], [9.521, -0.209], [2.807, 0.475], [5.571, -1.181], [8.465, 1.521], [0.296, 0.274], [6.342, 0.285], [1.117, 0.822], [8.68, 1.501], [0.076, 0.073], [7.811, 1.481], [9.755, -0.509], [1.142, 0.944], [5.93, -0.879], [9.156, 0.921], [1.045, 0.779], [3.108, 0.169], [6.108, -0.469], [3, 0.236], [3.692, -0.572], [9.037, 0.409], [2.219, 0.662], [9.592, 0.41], [4.487, -1.368], [6.262, 0.469], [7.761, 0.578], [3.084, 0.239], [2.291, 0.59], [0.822, 0.737], [4.467, -1.153], [5.94, -0.32], [2.737, 0.237], [6.793, 0.751], [1.612, 0.941], [7.484, 1.665], [9.058, -0.292], [5.773, -0.173], [1.651, 0.879], [4.174, -0.482], [6.141, -0.146], [3.21, -0.009], [0.431, 0.377], [9.713, 0.134], [2.291, 0.682], [9.542, 0.085], [0.078, 0.07], [3.114, 0.152], [8.081, 0.675], [7.31, 1.096], [0.094, 0.085], [8.549, 0.984], [7.947, 0.421], [7.973, 1.544], [3.405, -0.416], [8.415, 1.02], [9.697, -0.554], [1.689, 1.084], [9.314, -0.537], [8.301, 1.502], [6.082, -0.786], [2.891, 0.317], [9.608, -1.122], [4.808, -0.764], [1.736, 0.884], [2.899, 0.418], [9.659, -1.196], [8.301, 1.395], [0.399, 0.373], [3.376, -0.179], [8.512, -0.018], [1.214, 1.026], [2.243, 0.637], [5.304, -0.409], [2.136, 0.645], [2.025, 1.012], [9.733, -0.482], [0.907, 0.799], [3.024, -0.142], [0.854, 0.838], [4.287, -1.234], [6.367, 0.448], [6.379, 0.003], [2.257, 0.784], [6.618, -0.088], [6.891, 1.145], [5.369, -1.071], [5.426, -0.263], [2.754, 0.181], [8.093, 1.734], [1.405, 0.902], [4.617, -0.611], [9.744, -1.182], [2.314, 0.908], [5.634, -0.844], [3.701, -0.319], [8.017, 0.802], [0.215, 0.218], [4.514, -1.234], [1.204, 0.993], [7.009, 0.037], [0.388, 0.403], [0.619, 0.534], [7.246, 0.846], [8.474, 0.571], [1.989, 1.033], [5.39, -0.888], [7.14, 1.136], [7.368, 0.235], [3.88, -0.447], [4.379, -1.091], [8.991, 1.134], [2.935, 0.171], [6.783, 1.024], [0.333, 0.296], [2.925, 0.499], [2.034, 0.8], [4.756, -0.933], [7.868, 0.695], [9.767, 0.21], [7.483, 0.456], [6.386, 0.365], [2.841, 0.162], [5.003, -0.833], [5.815, -0.654], [6.635, 0.743], [4.807, -1.062], [9.727, 0.207], [7.652, 0.613], [6.63, 0.825], [6.358, -0.437], [9.249, 0.63], [5.388, -0.881], [7.74, 1.392], [8.994, 0.088], [2.512, 0.616], [1.54, 0.9], [3.834, -0.434], [1.164, 0.868], [8.073, 1.384], [2.663, 0.213], [4.191, -0.73], [3.03, -0.186], [2.408, 0.81], [4.127, -0.878], [4.994, -0.952], [5.72, -0.607], [0.054, 0.056], [8.38, 0.329], [6.456, 0.769], [4.294, -0.972], [8.333, 1.078], [8.359, 0.334], [3.63, -0.136], [6.843, 0.043], [6.151, 0.399], [2.232, 0.733], [6.367, 0.407], [3.324, -0.282], [2.624, 0.755], [4.442, -1.051], [6.573, 0.509], [1.348, 0.939], [2.23, 0.796], [4.995, -1.024], [0.504, 0.521], [4.334, -1.354], [5.568, -0.604], [7.177, 0.768], [3.353, -0.126], [1.05, 0.835], [6.099, 0.046], [3.445, -0.571], [1.949, 1.031], [3.509, -0.621], [6.693, 1.001], [9.359, -0.754], [6.456, 0.601], [4.704, -1.317], [2.179, 0.847], [4.319, -1.011], [8.92, 0.505], [2.747, 0.127], [9.06, 0.661], [4.174, -1.138], [1.145, 0.916], [2.761, 0.156], [2.087, 0.929], [4.798, -1.41], [2.595, 0.703], [8.187, 0.784], [2.956, 0.325], [1.389, 0.89], [4.335, -0.781], [5.298, -0.915], [2.368, 0.913], [2.574, 0.418], [1.125, 1.01], [1.96, 0.897], [1.079, 0.907], [6.03, -0.509], [1.428, 1.13], [5.322, -1.275], [8.552, 1.323], [2.725, 0.393], [2.065, 1.072], [2.914, 0.061], [6.598, 0.454], [5.579, -0.881], [7.636, 1.599], [8.516, 0.227], [4.867, -0.63], [1.488, 0.986], [5.301, -0.691], [9.783, -0.738], [5.922, -0.08], [2.883, 0.225], [8.197, 0.973], [7.264, 0.785], [9.544, 0.419], [5.565, -0.945], [2.277, 0.765], [1.486, 0.877], [0.581, 0.586], [6.103, -0.502], [2.531, 0.651], [3.375, -0.448], [8.437, 1.44], [5.661, -1.053], [2.783, 0.392], [3.796, -0.962], [4.279, -0.548], [7.5, 0.246], [0.462, 0.466], [0.193, 0.173], [1.084, 0.992], [5.227, -1.113], [5.665, -0.293], [5.49, -0.955], [5.14, -0.855], [3.564, -0.762], [4.754, -0.923], [1.054, 0.842], [6.804, 0.705], [3.825, -0.742], [7.289, 1.006], [4.622, -1.319], [6.99, 0.861], [9.751, -0.48], [7.63, 1.207], [2.509, 0.541], [1.931, 1.044], [5.858, -0.802], [7.431, 1.163], [3.749, -0.726], [8.707, 1.526], [2.212, 0.622], [6.425, 0.273], [6.784, 0.433], [1.228, 0.983], [9.771, -0.568], [4.553, -0.617], [8.466, 0.762], [4.849, -0.717], [0.033, 0.03], [7.224, 1.47], [0.913, 0.782], [9.539, 0.178], [5.514, -0.706], [6.725, 0.438], [1.639, 0.908], [5.852, -0.121], [5.229, -1.384], [9.074, 0.871], [0.908, 0.722], [8.885, 0.963], [2.155, 0.664], [9.481, 0.698], [2.78, 0.182], [3.876, -0.621], [1.173, 0.918], [3.187, 0.198], [9.656, -1.154], [3.023, 0.286], [4.131, -1.084], [5.191, -0.514], [6.862, 0.196], [5.721, -0.412], [3.49, -0.596], [7.636, 1.548], [4.95, -1.069], [2.412, 0.786], [7.838, 0.722], [4.862, -0.735], [2.996, 0.081], [5.116, -0.879], [7.531, 0.899], [9.156, 0.358], [0.99, 0.769], [5.132, -0.857], [6.761, 0.395], [1.9, 1.107], [9.536, -0.757], [7.219, 1.295], [2.211, 0.641], [2.381, 0.921], [9.893, -0.622], [0.093, 0.095], [7.287, 0.202], [5.783, -0.06], [6.224, -0.49], [1.999, 0.965], [8.323, 0.169], [6.106, -0.071], [2.743, 0.192], [1.017, 0.905], [9.395, -0.769], [2.12, 1.051], [0.038, 0.035], [7.934, 1.628], [4.829, -0.999], [6.786, 0.681], [9.147, -0.269], [8.597, 1.55], [0.584, 0.541], [1.346, 0.982], [1.687, 0.952], [3.574, -0.154], [9.304, 0.006], [6.968, 0.731], [8.402, 0.427], [3.888, -0.669], [5.442, -0.868], [3.151, 0.213], [2.163, 0.698], [6.215, 0.548], [7.654, 0.503], [3.901, -0.477], [9.996, -1.501], [0.866, 0.771], [6.492, -0.266], [5.065, -0.504], [3.447, -0.491], [1.407, 1.059], [9.312, -0.792], [5.039, -0.883], [9.878, -0.906], [3.163, 0.155], [9.574, -0.216], [0.245, 0.259], [3.302, -0.387], [6.897, 0.835], [8.79, -0.033], [6.713, 1.043], [6.003, -0.364], [7.436, 1.134], [6.868, -0.003], [5.309, -0.72], [6.169, -0.354], [1.969, 1.118], [7.26, 0.47], [9.761, 0.055], [7.173, 0.504], [3.042, 0.383], [6.363, -0.394], [6.958, 0.875], [6.679, -0.145], [3.417, -0.225], [8.455, 0.474], [2.612, 0.757], [2.774, 0.119], [1.394, 1.091], [9.042, -0.203], [2.142, 0.932], [4.297, -0.941], [0.324, 0.321], [2.407, 0.548], [5.921, 0.218], [5.587, -1.023], [4.772, -0.799], [5.906, -0.667], [7.667, 1.621], [6.221, -0.475], [9.232, 0.822], [3.075, -0.173], [5.378, -0.469], [9.049, 0.284], [2.008, 0.95], [1.851, 0.937], [9.019, 0.978], [3.798, -0.664], [0.943, 0.839], [5.058, -1.208], [0.875, 0.792], [5.55, -1.107], [9.015, 1.033], [1.388, 0.877], [9.903, -0.216], [0.086, 0.08], [8.892, 0.791], [9.634, -1.141], [3.074, 0.319], [2.332, 0.568], [3.21, 0.017], [8.162, 0.944], [8.998, 0.907], [2.7, 0.233], [4.84, -0.663], [9.778, -0.376], [3.418, -0.017], [1.418, 0.911], [7.284, 1.333], [2.215, 0.779], [8.797, 1.204], [2.852, 0.004], [5.229, -0.449], [9.207, -0.188], [6.538, 0.897], [9.283, -0.638], [3.834, -0.445], [6.517, -0.388], [9.762, 0.154], [3.664, -0.52], [3.424, -0.106], [8.156, 0.761], [5.073, -0.892], [7.783, 0.461], [3.591, -0.274], [1.525, 0.948], [9.158, 0.608], [8.148, 0.728], [1.881, 1.026], [0.551, 0.478], [8.464, 0.982], [2.974, -0.066], [4.55, -0.935], [2.578, 0.528], [2.509, 0.771], [1.712, 0.948], [1.373, 0.99], [9.543, -0.979], [8.001, 1.237], [4.513, -1.258], [2.584, 0.593], [5.145, -1.188], [5.017, -0.587], [7.997, 0.717], [1.054, 0.964], [2.089, 0.82], [1.856, 1.005], [5.588, -0.818], [0.399, 0.408], [7.489, 0.659], [3.799, -0.376], [5.647, -1.069], [0.433, 0.441], [0.836, 0.67], [0.315, 0.315], [6.432, -0.207], [8.657, 1.433], [6.16, -0.163], [3.083, 0.208], [2.741, 0.344], [9.125, 1.13], [0.732, 0.622], [3.177, -0.029], [5.609, -0.687], [1.199, 1.022], [3.531, -0.638], [7.28, 1.275], [1.158, 0.833], [1.15, 0.959], [9.807, -1.095], [4.777, -0.545], [9.146, 0.102], [2.125, 1.037], [3.356, -0.43], [6.046, -0.211], [9.044, -0.162], [6.262, 0.385], [1.888, 0.901], [1.421, 1.119], [8.771, -0.105], [1.499, 1.106], [5.917, -0.49], [2.814, 0.524], [7.781, 0.414], [9.76, 0.404], [6.218, -0.416], [2.729, 0.644], [0.184, 0.174], [2.239, 0.877], [7.598, 0.516], [6.398, 0.354], [3.515, -0.405], [0.321, 0.326], [1.576, 0.852], [3.277, 0.004], [7.466, 0.603], [3.572, -0.378], [1.209, 0.869], [7.065, 1.406], [2.481, 0.4], [5.136, -0.483], [4.742, -1.357], [9.551, 0.561], [5.809, -0.839], [4.942, -0.686], [2.819, 0.249], [3.437, -0.032], [4.302, -1.332], [0.035, 0.036], [1.087, 0.873], [6.918, 1.078], [2.899, 0.14], [4.694, -0.656], [2.686, 0.188], [4.482, -0.644], [7.712, 0.637], [4.015, -0.676], [4.712, -1.019], [5.874, 0.168], [6.585, 0.211], [7.768, 1.256], [6.931, 0.011], [4.484, -0.861], [1.825, 0.792], [7.594, 0.97], [7.36, 0.198], [4.33, -0.681], [6.536, 0.072], [9.298, 0.608], [8.841, 0.241], [0.247, 0.264], [7.379, 0.498], [0.424, 0.435], [0.201, 0.183], [2.583, 0.671], [5.21, -1.316], [0.486, 0.505], [0.938, 0.765], [2.667, 0.645], [9.925, -1.208], [8.947, 0.675], [6.736, 0.331], [4.893, -0.896], [0.848, 0.705], [7.26, 1.233], [0.938, 0.728], [3.821, -0.292], [8.861, 0.532], [5.993, -0.281], [0.691, 0.63], [8.862, 0.734], [8.888, -0.094], [8.662, 1.391], [1.034, 0.764], [8.106, 1.702], [7.08, 0.449], [2.594, 0.758], [1.142, 0.892], [9.619, 0.088], [7.947, 0.841], [1.904, 1.096], [0.549, 0.511], [4.752, -0.665], [3.902, -0.778], [1.305, 0.992], [7.904, 0.615], [8.216, 1.205], [9.475, -0.144], [9.126, 0.605], [9.214, 0.042], [7.963, 1.677], [1.147, 0.869], [2.913, 0.354], [4.918, -1.311], [0.9, 0.797], [9.739, -0.751], [2.54, 0.748], [3.679, -0.514], [7.23, 1.524], [9.688, -0.536], [8.386, 1.474], [7.662, 0.318], [3.268, -0.08], [5.202, -0.931], [7.356, 1.423], [0.361, 0.33], [5.096, -0.716], [4.672, -1.004], [0.711, 0.715], [9.142, -0.173], [3.533, -0.115], [8.841, 0.446], [9.364, 0.346], [5.779, -0.568], [6.829, 0.56], [6.619, -0.256], [9.9, 0.087], [5.499, -1.191], [2.292, 0.836], [7.454, 0.307], [0.537, 0.547], [0.531, 0.486], [3.934, -0.692], [8.317, 0.077], [7.617, 1.076], [4.167, -1.13], [8.723, 1.281], [9.468, -0.989], [6.744, 1.087], [1.222, 0.888], [5.212, -0.831], [4.109, -1.081], [2.225, 0.954], [2.988, -0.082], [7.322, 1.271], [4.663, -1.337], [6.46, 0.291], [9.476, -0.426], [3.575, -0.099], [0.951, 0.794], [2.845, 0.526], [9.632, -0.266], [2.167, 0.899], [3.982, -1.008], [8.793, 0.619], [4.646, -1.251], [2.18, 0.97], [2.379, 0.639], [6.798, 0.874], [5.792, -0.804], [5.3, -0.788], [3.712, -0.789], [2.472, 0.815], [2.126, 0.795], [2.403, 0.732], [5.08, -1.072], [6.561, 0.922], [2.066, 0.811], [5.715, -0.343], [1.712, 0.851], [8.221, 1.382], [9.593, -0.629], [4.926, -0.869], [7.629, 0.815], [4.235, -0.519], [3.046, 0.075], [7.088, 1.306], [5.703, -0.719], [5.42, -0.248], [7.122, 0.673], [9.515, 0.033], [2.993, 0.094], [9.016, 1.005], [2.232, 0.737], [9.214, 0.701], [0.119, 0.118], [3.226, -0.084], [2.373, 0.568], [7.472, 1.615], [9.264, -0.259], [5.231, -0.803], [0.846, 0.687], [5.406, -0.721], [9.762, -1.105], [6.488, 0.572], [1.399, 0.94], [7.434, 1.069], [7.125, 0.234], [7.087, 0.827], [6.569, -0.366], [8.762, 1.07], [0.384, 0.372], [1.202, 0.944], [2.436, 0.572], [6.955, 1.034], [6.252, -0.421], [3.832, -0.464], [2.277, 0.623], [8.748, 0.969], [1.988, 0.734], [9.708, 0.221], [0.459, 0.433], [0.326, 0.331], [6.099, -0.381], [2.95, 0.209], [5.316, -0.938], [2.537, 0.697], [6.41, -0.31], [8.671, 0.729], [4.51, -1.336], [8.26, 1.644], [7.622, 0.213], [4.276, -0.752], [5.64, -0.939], [1.295, 0.987], [8.321, 0.707], [8.272, 1.361], [4.516, -1.282], [7.273, 1.517], [6.473, 0.133], [2.187, 0.848], [2.307, 0.55], [1.443, 0.996], [4.043, -1.087], [2.639, 0.602], [5.812, -0.615], [9.832, 0.252], [7.441, 0.691], [6.955, 1.276], [4.462, -1.085], [6.624, 0.9], [8.761, 0.013], [0.445, 0.461], [4.06, -1.111], [1.425, 1.034], [3.513, -0.643], [2.001, 1.107], [0.247, 0.222], [5.008, -0.637], [6.811, 0.115], [4.164, -0.766], [8.628, 0.268], [1.933, 1.089], [5.662, -0.583], [7.355, 1.41], [1.564, 0.956], [1.742, 1.004], [4.834, -1.399], [8.851, 1.367], [6.215, -0.55], [0.714, 0.659], [3.949, -0.937], [0.375, 0.385], [8.824, 0.072], [7.005, 0.708], [8.368, 0.195], [3.916, -0.555], [7.809, 0.596], [6.861, 1.121], [2.888, 0.037], [0.418, 0.407], [9.105, 0.304], [0.96, 0.83], [7.913, 0.633], [0.757, 0.739], [2.039, 0.694], [0.247, 0.268], [2.427, 0.526], [3.438, -0.005], [3.172, -0.201], [1.759, 1.096], [1.922, 0.806], [0.415, 0.416], [4.762, -1.131], [6.218, 0.549], [1.631, 0.929], [2.269, 0.874], [0.945, 0.768], [5.545, -0.259], [3.137, -0.205], [4.062, -0.716], [5.323, -1.009], [5.373, -0.253], [7.041, 0.285], [1.05, 0.868], [3.178, -0.199], [1.246, 0.975], [3.408, -0.53], [4.249, -0.801], [1.495, 0.917], [8.811, 1.103], [7.032, 0.224], [4.596, -0.54], [6.548, -0.095], [7.623, 1.201], [1.984, 0.742], [2.549, 0.695], [4.208, -0.88], [2.019, 1.037], [1.125, 0.882], [7.648, 1.045], [0.529, 0.469], [4.384, -0.643], [6.95, 0.402], [4.029, -0.467], [6.121, -0.504], [7.557, 1.62], [0.735, 0.654], [5.862, 0.139], [0.204, 0.197], [4.434, -0.712], [3.535, -0.673], [1.148, 0.983], [4.363, -1.36], [0.909, 0.814], [1.396, 0.882], [8.506, 1.504], [8.066, 0.802], [2.104, 0.96], [9.997, -0.586], [5.745, -0.352], [1.695, 0.858], [6.476, 0.839], [0.255, 0.245], [3.423, -0.016], [4.294, -1.273], [8.714, 0.737], [9.027, -0.481], [8.412, 1.297], [7.506, 0.467], [0.918, 0.811], [7.448, 0.848], [8.192, 1.423], [1.847, 0.778], [5.366, -0.658], [8.716, 0.04], [1.106, 0.895], [2.925, 0.147], [4.481, -0.813], [2.69, 0.365], [8.211, 1.247], [7.821, 0.406], [6.816, 1.062], [1.801, 0.933], [4.405, -0.933], [2.287, 0.569], [8.406, 1.508], [6.672, -0.286], [7.029, 0.912], [4.558, -1.396], [2.415, 0.896], [8.076, 0.317], [6.786, 0.524], [5.843, -0.923], [5.591, -0.554], [6.05, -0.356], [5.508, -0.473], [2.281, 0.557], [1.307, 1.008], [8.746, 0.093], [1.007, 0.922], [2.57, 0.393], [8.94, 1.254], [5.191, -1.082], [1.967, 1.032], [8.787, 0.359], [2.205, 0.854], [1.298, 0.871], [8.79, 0.798], [2.458, 0.494], [4.933, -0.949], [3.781, -0.859], [5.332, -0.7], [3.358, -0.396], [1.428, 1.008], [9.459, -0.287], [0.927, 0.891], [3.445, -0.547], [7.989, 1.757], [0.394, 0.352], [2.227, 0.998], [8.848, 0.215], [6.746, 0.772], [8.101, 0.68], [0.384, 0.393], [7.496, 0.641], [4.009, -0.429], [9.701, -0.68], [4.915, -0.576], [3.021, 0.036], [0.479, 0.492], [6.007, -0.281], [2.804, 0.368], [7.692, 0.32], [6.074, 0.311], [4.661, -1.325], [9.506, 0.052], [9.249, -0.185], [1.693, 1.157], [8.995, -0.334], [7.654, 1.107], [7.508, 0.844], [7.168, 1.1], [7.067, 0.166], [5.268, -0.752], [3.718, -0.897], [5.42, -0.735], [0.721, 0.656], [4.491, -0.725], [1.876, 0.853], [2.388, 0.769], [4.08, -0.979], [1.857, 1.054], [5.032, -1.226], [5.125, -0.737], [3.281, -0.415], [9.43, 0.004], [7.322, 0.134], [2.478, 0.779], [3.64, -0.502], [7.297, 0.892], [8.417, 0.682], [8.459, 1.067], [6.238, -0.281], [1.927, 1.065], [1.889, 0.796], [8.484, 1.484], [0.16, 0.147], [5.322, -0.355], [8.533, 0.469], [3.19, 0.243], [8.395, 0.34], [7.107, 0.751], [9.002, -0.315], [9.716, 0.39], [5.607, -1.17], [0.582, 0.569], [0.243, 0.238], [4.922, -0.648], [9.417, -0.348], [0.298, 0.299], [2.716, 0.388], [1.881, 1.136], [5.55, -1.18], [9.338, 0.593], [6.135, -0.437], [0.877, 0.84], [1.748, 0.939], [3.762, -0.483], [8.092, 0.401], [1.997, 1.082], [6.508, -0.417], [0.401, 0.41], [2.739, 0.297], [4.438, -0.754], [3.15, -0.291], [3.596, -0.259], [7.756, 0.859], [8.832, 0.854], [0.512, 0.478], [5.796, 0.093], [2.327, 0.609], [6.202, 0.134], [5.292, -0.963], [8.031, 1.358], [0.586, 0.527], [6.822, 0.634], [8.78, 0.371], [0.132, 0.134], [5.272, -1.023], [4.795, -0.975], [4.946, -1.439], [7.807, 1.413], [4.491, -1.29], [3.718, -0.414], [0.174, 0.16], [6.666, 0.538], [1.903, 0.765], [7.222, 1.433], [0.27, 0.266], [4.744, -0.666], [7.113, 0.137], [5.602, -0.577], [1.934, 0.927], [1.299, 1.068], [6.297, -0.153], [2.663, 0.606], [7.728, 0.914], [4.305, -0.831], [1.312, 0.91], [3.512, -0.282], [4.697, -1.45], [2.676, 0.554], [1.892, 0.889], [9.897, -0.133], [3.986, -1.05], [2.51, 0.622], [9.266, -0.697], [7.674, 1.315], [0.767, 0.679], [4.763, -0.605], [8.875, -0.203], [1.784, 0.982], [3.78, -0.819], [5.235, -0.854], [2.291, 0.557], [4.504, -0.708], [1.103, 0.832], [7.825, 1.758], [9.15, -0.472], [3.365, 0.059], [3.629, -0.493], [1.754, 1.058], [7.833, 0.934], [1.072, 0.914], [4.437, -1.3], [0.092, 0.095], [1.542, 0.888], [6.283, 0.181], [9.547, -0.557], [1.988, 0.992], [7.828, 0.908], [8.061, 1.096], [5.69, -0.651], [9.029, 0.696], [1.443, 0.907], [7.021, 0.675], [2.627, 0.394], [9.402, 0.698], [0.204, 0.188], [3.365, 0.095], [8.067, 0.944], [1.904, 1.118], [9.963, -0.91], [8.732, 1.268], [4.955, -1.18], [8.675, 1.087], [1.881, 0.903], [6.477, 0.366], [7.981, 0.623], [5.019, -0.951], [9.887, -1.361], [1.207, 0.961], [1.589, 0.967], [9.119, 0.46], [9.192, -0.134], [4.21, -0.705], [2.96, -0.062], [1.088, 0.939], [9.976, -1.081], [1.574, 1.11], [1.084, 0.832], [1.272, 1.058], [5.641, -0.981], [1.05, 0.929], [6.476, -0.215], [3.482, -0.172], [8.239, 0.372], [5.478, -0.3], [8.476, 0.512], [2.529, 0.662], [7.261, 0.315], [1.433, 1.055], [6.572, 0.212], [8.069, 1.329], [7.074, 0.159], [5.278, -0.379], [3.255, -0.165], [9.472, 0.294], [6.474, 0.147], [4.146, -0.47], [7.409, 0.877], [8.366, 0.887], [5.11, -1.178], [3.045, 0.192], [1.217, 0.936], [3.308, -0.103], [5.723, -0.715], [2.153, 0.862], [7.94, 0.301], [3.885, -0.299], [7.311, 0.756], [3.338, 0.128], [5.243, -1.05], [3.475, -0.042], [5.096, -1.004], [0.412, 0.42], [3.547, -0.463], [1.953, 1.066], [4.556, -1.043], [5.377, -0.269], [2.747, 0.206], [9.365, 0.465], [3.245, -0.198], [1.131, 0.96], [9.697, -0.963], [7.848, 1.776], [2.529, 0.43], [8.388, 1.332], [7.081, 0.277], [4.068, -0.421], [9.507, -0.448], [2.868, 0.54], [8.934, -0.338], [6.41, 0.413], [9.644, -0.689], [7.812, 1.542], [8.277, 0.224], [7.534, 1.685], [6.781, 0.091], [5.681, -0.431], [0.588, 0.509], [3.906, -0.345], [1.739, 0.836], [7.522, 1.224], [0.809, 0.676], [1.371, 1.098], [2.739, 0.364], [5.442, -0.564], [3.449, -0.358], [9.448, 0.462], [5.348, -1.237], [5.746, -0.274], [3.543, -0.397], [4.053, -0.473], [7.971, 0.547], [0.195, 0.198], [6.48, -0.199], [5.998, -0.088], [0.794, 0.711], [0.225, 0.234], [7.664, 0.9], [7.585, 1.33], [5.952, -0.443], [0.904, 0.831], [4.422, -1.253], [1.917, 1.044], [0.446, 0.393], [5.15, -0.518], [0.002, 0.002], [0.113, 0.117], [1.631, 0.99], [9.913, 0.174], [8.612, 0.638], [8.116, 1.403], [3.894, -0.938], [9.146, 1.094], [2.414, 0.64], [1.706, 1.09], [9.978, -1.083], [5.096, -0.698], [8, 0.409], [3.059, 0.214], [0.259, 0.243], [5.387, -0.601], [0.778, 0.64], [2.968, 0.253], [3.133, -0.24], [2.183, 1.016], [4.373, -1.251], [8.653, 1.045], [0.69, 0.617], [6.009, 0.247], [0.531, 0.471], [6.038, 0.311], [9.491, -0.311], [0.886, 0.819], [0.095, 0.087], [7.995, 1.24], [7.244, 0.518], [4.519, -0.967], [2.564, 0.493], [5.362, -0.62], [0.756, 0.63], [4.28, -0.493], [5.413, -0.822], [3.117, 0.086], [4.289, -1.127], [7.085, 1.312], [4.98, -1.411], [7.71, 1.276], [3.193, -0.1], [3.075, 0.262], [6.464, -0.137], [4.542, -0.646], [2.671, 0.246], [5.442, -0.677], [7.784, 0.368], [6.3, 0.588], [8.316, 0.494], [8.146, 1.02], [9.405, -0.655], [5.297, -0.774], [6.168, -0.519], [3.787, -0.405], [5.736, -0.749], [3.348, 0.051], [2.468, 0.605], [2.39, 0.835], [3.004, -0.077], [7.118, 0.919], [7.756, 0.905], [8.326, 1.188], [9.461, -0.307], [3.008, 0.223], [5.634, -0.869], [2.896, 0.431], [2.612, 0.247], [2.141, 1.015], [4.615, -1.403], [4.472, -0.878], [2.164, 0.668], [7.251, 0.852], [3.538, -0.541], [3.581, -0.083], [8.876, 0.136], [2.074, 0.889], [4.567, -1.341], [7.199, 1.263], [2.441, 0.551], [6.723, 1.062], [6.835, 0.387], [6.972, 1.332], [1.268, 0.879], [6.293, 0.579], [4.422, -1.256], [6.034, 0.243], [9.162, -0.378], [2.594, 0.546], [4.081, -1.062], [5.268, -0.33], [5.859, -0.441], [4.818, -0.598], [8.156, 0.219], [5.765, -0.101], [2.128, 0.654], [5.533, -0.55], [3.392, -0.367], [3.674, -0.168], [0.472, 0.412], [8.914, 1.142], [0.698, 0.615], [5.207, -0.788], [8.492, 0.505], [8.051, 1.13], [4.159, -0.905], [7.952, 1.628], [0.763, 0.625], [1.07, 0.907], [9.516, -0.273], [9.018, 1.097], [5.505, -1.179], [4, -0.616], [9.58, -0.258], [7.778, 1.527], [6.378, -0.343], [0.179, 0.179], [2.809, 0.269], [7.185, 1.332], [7.999, 0.614], [9.293, 0.625], [5.781, -0.619], [3.145, 0.149], [8.666, 0.314], [5.315, -0.708], [0.614, 0.569], [0.081, 0.085], [5.164, -1.102], [8.079, 1.373], [9.117, -0.323], [1.679, 1.019], [3.276, -0.17], [4.94, -0.939], [1.623, 0.925], [8.904, 1.095], [8.62, 0.247], [2.504, 0.613], [1.259, 0.844], [7.094, 1.046], [4.711, -1.092], [9.703, -0.186], [7.91, 0.59], [1.619, 1.132], [2.406, 0.651], [3.864, -0.476], [5.409, -0.997], [0.113, 0.114], [8.07, 0.173], [2.123, 1.009], [3.439, -0.544], [6.997, 1.249], [0.082, 0.074], [2.294, 0.879], [6.474, -0.027], [4.239, -0.809], [7.174, 0.549], [5.09, -0.688], [4.002, -0.836], [7.184, 1.329], [8.427, 0.419], [9.355, 0.872], [0.598, 0.507], [1.758, 1.037], [2.264, 0.726], [8.003, 1.382], [2.303, 0.624], [4.019, -0.462], [2.563, 0.297], [5.297, -0.615], [6.842, 0.205], [6.482, 0.521], [3.318, -0.362], [5.709, -0.431], [3.318, -0.426], [9.043, 0.542], [1.541, 0.936], [6.328, 0.282], [2.203, 0.799], [5.465, -0.55], [3.07, -0.091], [1.789, 0.992], [1.67, 0.842], [2.174, 0.939], [9.996, -0.708], [4.568, -0.668], [2.975, -0.109], [1.987, 0.937], [8.323, 0.266], [7.864, 1.711], [7.218, 0.611], [9.519, 0.704], [8.574, 0.209], [1.554, 1.086], [2.205, 0.733], [8.343, 1.428], [5.418, -1.274], [8.346, 1.233], [1.568, 0.874], [6.24, 0.318], [9.434, -0.114], [6.013, -0.19], [7.331, 0.683], [8.244, 1.456], [6.692, -0.266], [2.258, 0.802], [1.233, 0.852], [4.248, -0.648], [7.455, 0.531], [3.142, 0.171], [6.183, -0.597], [4.747, -0.718], [1.054, 0.804], [3.464, -0.078], [9.858, -1.167], [5.766, -0.026], [2.571, 0.32], [1.81, 1.112], [6.462, -0.278], [3.76, -0.51], [0.692, 0.625], [4.067, -0.79], [0.537, 0.486], [1.893, 1.05], [5.332, -1.275], [5.857, -0.152], [8.627, 0.368], [5.932, -0.024], [4.442, -1.389], [5.309, -0.658], [1.732, 0.986], [9.936, 0.128], [9.558, -0.959], [2.056, 1.044], [0.162, 0.151], [5.159, -0.506], [5.109, -1.117], [5.381, -0.305], [1.086, 0.851], [1.154, 0.94], [6.484, 0.054], [1.062, 0.923], [1.178, 0.829], [3.606, -0.33], [7.482, 0.343], [4.449, -0.775], [1.171, 0.808], [7.938, 1.689], [3.615, -0.713], [0.26, 0.275], [2.656, 0.301], [3.65, -0.307], [8.779, 0.047], [6.406, 0.405], [8.679, 0.219], [2.257, 0.911], [9.575, -1.032], [9.254, 0.881], [1.802, 0.896], [1.397, 1.092], [9.951, -0.68], [0.487, 0.474], [5.371, -0.794], [6.859, 0.825], [9.527, -0.849], [4.879, -0.677], [2.547, 0.323], [8.556, 0.784], [4.722, -1.209], [8.064, 0.978], [2.794, 0.316], [5.662, -0.329], [0.828, 0.717], [7.028, 0.902], [7.802, 0.905], [8.381, 1.675], [7.284, 0.474], [0.054, 0.059], [3.335, -0.322], [5.217, -0.734], [1.246, 0.85], [5.224, -0.715], [9.43, -0.932], [6.885, 1.03], [3.984, -0.808], [6.32, 0.158], [8.841, 0.122], [0.423, 0.452], [5.249, -0.909], [9.218, 0.24], [0.53, 0.5], [0.373, 0.374], [3.761, -0.802], [5.466, -0.725], [9.999, -1.136], [0.76, 0.748], [4.038, -1.049], [2.847, 0.37], [9.654, -0.841], [5.743, -0.466], [2.041, 0.876], [2.698, 0.652], [3.892, -0.7], [5.74, -0.248], [7.328, 0.76], [2.06, 0.925], [2.65, 0.433], [2.584, 0.622], [3.848, -0.697], [6.819, 0.891], [3.831, -0.939], [1.645, 1.134], [7.114, 0.108], [8.623, 1.313], [9.562, -0.587], [0.78, 0.768], [2.742, 0.342], [0.824, 0.752], [8.911, 0.164], [8.074, 1.155], [1.637, 0.863], [8.388, 1.548], [3.279, -0.38], [6.282, 0.33], [3.758, -0.836], [3.539, -0.305], [0.011, 0.011], [5.087, -0.914], [7.878, 0.682], [7.941, 1.054], [2.235, 0.682], [0.854, 0.836], [7.834, 0.798], [2.159, 0.881], [3.852, -0.827], [4.983, -0.909], [1.908, 0.82], [0.832, 0.787], [0.665, 0.598], [4.754, -0.635], [3.507, -0.453], [5.726, -0.435], [8.653, -0.062], [0.473, 0.474], [5.828, -0.69], [2.44, 0.792], [8.968, -0.021], [5.792, -0.16], [7.745, 0.897], [6.078, 0.114], [7.458, 0.229], [8.299, 1.478], [5.778, -0.843], [2.629, 0.578], [9.452, -0.848], [1.062, 0.895], [6.654, 0.003], [2.443, 0.735], [0.147, 0.138], [2.102, 1.058], [2.917, 0.077], [9.503, 0.264], [7.059, 0.027], [8.587, 1.558], [1.319, 0.838], [4.026, -0.66], [5.256, -1.307], [3.468, -0.204], [0.818, 0.694], [9.37, 0.091], [2.35, 0.644], [1.369, 1.052], [8.38, 0.455], [0.379, 0.381], [0.289, 0.28], [6.874, 0.588], [4.474, -0.974], [2.784, 0.363], [4.353, -1.289], [8.931, 1.157], [1.083, 0.865], [3.887, -0.361], [9.186, -0.444], [4.156, -0.647], [9.402, -0.188], [5.486, -0.469], [8.166, 0.617], [2.378, 0.927], [9.633, -0.469], [4.509, -0.958], [9.553, -0.478], [3.362, -0.212], [6.349, -0.079], [6.781, 0.798], [0.162, 0.159], [5.331, -0.716], [6.785, -0.143], [5.533, -0.327], [5.532, -1.078], [4.886, -0.604], [6.334, 0.039], [8.548, 1.301], [7.904, 0.971], [4.785, -0.941], [9.104, 0.008], [3.266, 0.123], [2.676, 0.206], [8.463, 1.356], [3.447, -0.529], [6.307, 0.506], [9.204, -0.518], [2.722, 0.633], [2.213, 0.704], [9.527, 0.642], [7.191, 0.156], [1.949, 1.078], [8.252, 0.66], [1.26, 1.067], [5.624, -1.094], [8.921, 0.645], [7.765, 0.267], [7.111, 0.994], [3.552, -0.562], [5.264, -0.638], [7.085, 0.413], [0.83, 0.739], [7.844, 0.901], [7.634, 1.364], [8.452, 0.766], [5.56, -0.281], [0.702, 0.589], [9.162, 0.796], [0.433, 0.399], [4.095, -0.422], [2.862, 0.101], [3.847, -0.375], [8.836, 0.336], [3.069, 0.347], [5.442, -0.786], [2.904, 0.38], [8.155, 0.929], [3.473, -0.063], [4.167, -0.956], [5.907, -0.161], [6.9, 0.519], [8.14, 1.14], [6.262, -0.351], [9.826, -0.337], [2.822, 0.256], [6.207, 0.187], [5.214, -1.145], [7.156, 1.393], [9.618, -1.076], [0.365, 0.382], [0.984, 0.783], [4.691, -0.986], [0.553, 0.492], [9.365, 0.852], [3.479, -0.45], [9.496, 0.781], [6.853, 0.185], [4.71, -0.652], [8.781, 0.432], [8.587, 0.912], [1.141, 0.819], [4.067, -0.698], [8.175, 0.681], [8.44, 1.677], [3.804, -0.959], [4.043, -0.467], [6.838, 0.224], [5.303, -0.791], [8.425, 0.282], [5.886, 0.046], [0.397, 0.371], [8.171, 1.684], [0.523, 0.467], [2.279, 0.969], [0.567, 0.487], [5.766, -0.299], [5.304, -1.008], [9.956, -0.131], [7.959, 0.355], [3.693, -0.511], [0.545, 0.48], [5.817, -0.305], [7.134, 0.7], [8.018, 1.727], [8.245, 0.402], [4.965, -0.487], [5.143, -1.108], [3.083, 0.194], [4.962, -1.312], [7.958, 1.35], [7.201, 0.196], [2.184, 0.988], [8.54, 0.403], [3.159, 0.153], [1.583, 0.859], [0, 0], [2.468, 0.575], [1.262, 1.051], [3.698, -0.794], [0.538, 0.524], [0.092, 0.091], [2.748, 0.409], [6.857, 0.124], [2.617, 0.748], [3.2, -0.177], [5.993, -0.266], [3.607, -0.627], [2.091, 1.036], [1.624, 0.987], [7.326, 1.379], [2.955, 0.027], [6.134, 0.053], [5.324, -1.01], [8.507, 0.81], [4.788, -1.07], [7.29, 1.333], [5.735, -0.615], [5.959, 0.028], [0.017, 0.017], [5.694, -0.264], [2.665, 0.224], [7.972, 1.569], [6.697, 0.325], [2.436, 0.769], [0.124, 0.112], [2.607, 0.742], [9.788, -1.238], [7.939, 1.085], [5.801, -0.85], [1.617, 1.071], [4.989, -1.375], [7.153, 1.002], [4.477, -1.052], [4.214, -0.756], [2.852, 0.189], [1.122, 0.917], [4.42, -1.03], [8.183, 1.212], [3.816, -0.67], [2.767, 0.509], [5.703, -0.87], [2.871, 0.433], [8.399, 0.189], [8.531, 0.957], [3.17, -0.324], [1.208, 0.962], [3.77, -0.701], [6.782, 0.529], [6.468, -0.347], [0.53, 0.535], [3.483, -0.425], [2.79, 0.483], [3.262, -0.424], [6.907, 1.121], [1.856, 0.795], [9.627, 0.651], [9.231, -0.047], [7.85, 1.36], [6.276, -0.531], [8.531, 1.033], [9.239, -0.507], [2.332, 0.742], [5.452, -1.21], [7.875, 1.121], [2.245, 0.628], [9.95, 0.475], [6.043, -0.391], [7.242, 1.005], [6.697, -0.025], [5.652, -0.431], [5.44, -1.172], [0.96, 0.82], [6.623, -0.082], [3.123, 0.246], [3.112, -0.086], [2.709, 0.652], [7.405, 0.356], [9.546, -0.038], [2.739, 0.153], [0.312, 0.316], [3.794, -0.668], [6.597, 0.637], [1.306, 0.846], [3.172, 0.092], [5.029, -1.438], [2.234, 0.976], [9.427, -0.718], [5.985, 0.232], [9.465, -0.778], [4.118, -0.717], [1.632, 0.905], [1.137, 0.94], [1.893, 0.904], [5.704, -0.355], [4.521, -1.347], [1.974, 1.021], [8.439, 0.68], [8.578, 0.94], [2.834, 0.098], [6.959, 1.251], [4.378, -0.961], [0.151, 0.163], [6.205, -0.59], [8.517, 1.18], [6.953, 0.341], [2.961, 0.336], [4.033, -0.829], [0.494, 0.512], [8.264, 0.153], [1.16, 0.981], [3.537, -0.629], [8.887, 0.846], [6.529, -0.4], [6.68, 0.698], [0.308, 0.295], [7.115, 1.169], [7.708, 0.375], [2.21, 0.998], [6.647, 0.109], [3.282, -0.002], [9.498, -0.572], [0.036, 0.037], [3.893, -0.932], [5.795, -0.1], [5.805, -1.029], [5.221, -0.364], [9.551, -0.449], [2.916, 0.403], [6.101, -0.412], [0.081, 0.082], [8.534, 0.542], [4.176, -0.611], [4.538, -1.164], [0.38, 0.379], [9.718, -0.456], [0.279, 0.278], [4.849, -1.137], [9.53, 0.149], [5.983, -0.366], [6.125, -0.014], [2.073, 0.833], [0.73, 0.726], [9.626, -1.017], [2.024, 1.038], [9.607, -0.669], [1.484, 1.099], [1.059, 0.842], [3.516, -0.246], [1.395, 0.943], [9.175, 0.831], [7.11, 0.517], [3.234, -0.039], [9.147, -0.2], [4.757, -0.793], [4.693, -1.14], [0.596, 0.61], [8.25, 0.904], [6.667, 0.873], [9.412, -0.639], [0.385, 0.403], [3.488, -0.399], [9.443, 0.551], [7.556, 0.951], [2.872, 0.545], [7.546, 0.716], [2.939, 0.214], [3.125, -0.124], [1.466, 1.07], [5.026, -1.426], [9.257, 0.452], [2.24, 0.581], [4.854, -0.634], [7.711, 0.414], [2.269, 0.767], [5.577, -1.04], [2.72, 0.537], [0.524, 0.461], [2.581, 0.563], [1.555, 0.949], [7.999, 1.013], [8.078, 0.731], [8.108, 1.281], [1.898, 0.911], [5.082, -0.726], [3.563, -0.577], [7.288, 0.965], [2.021, 0.87], [7.923, 1.409], [7.631, 0.838], [4.563, -0.875], [7.766, 0.858], [5.752, -0.29], [2.769, 0.126], [9.593, 0.006], [8.538, 0.589], [0.47, 0.494], [9.155, -0.18], [4.999, -0.475], [9.885, -0.479], [4.737, -0.977], [1.192, 0.914], [3.843, -0.469], [8.202, 0.536], [7.892, 1.131], [7.759, 0.755], [7.785, 1.206], [4.858, -1.278], [5.16, -0.629], [6.689, -0.052], [5.83, 0.056], [7.2, 0.587], [9.666, 0.719], [0.397, 0.372], [1.739, 1.039], [9.063, -0.405], [2.655, 0.548], [1.24, 0.885], [3.861, -0.35], [5.819, -0.801], [9.811, -0.226], [4.173, -1.09], [5.981, 0.019], [0.695, 0.618], [1.615, 1.084], [3.132, -0.169], [4.384, -0.631], [5.757, -0.617], [0.464, 0.477], [9.303, 0.119], [9.76, 0.301], [9.659, -0.251], [8.813, 0.976], [5.812, -0.731], [4.636, -0.681], [8.058, 0.605], [9.992, -0.265], [1.793, 0.948], [7.303, 1.476], [5.657, -0.715], [5.71, -0.425], [7.228, 0.14], [3.17, 0.166], [9.265, -0.232], [4.197, -0.606], [5.996, -0.679], [3.169, 0.056], [9.004, -0.406], [4.665, -0.728], [3.222, -0.212], [8.25, 1.55], [9.693, -0.52], [1.507, 1.004], [1.577, 0.906], [3.514, -0.044], [7.92, 0.212], [9.682, -0.001], [9.952, -1.131], [5.3, -0.597], [4.261, -0.993], [6.745, 0.508], [0.978, 0.807], [6.668, 0.948], [3.449, -0.367], [2.529, 0.585], [0.503, 0.437], [2.542, 0.571], [5.772, -0.787], [1.638, 1.049], [1.952, 0.798], [6.952, 0.712], [2.176, 0.662], [4.362, -0.893], [0.752, 0.649], [6.315, 0.507], [2.776, 0.286], [9.067, 0.987], [7.423, 0.77], [3.326, -0.153], [7.673, 0.858], [1.517, 1.029], [1.734, 0.858], [9.235, 0.812], [5.698, -0.864], [9.908, -0.173], [2.188, 0.743], [4.424, -0.948], [3.561, -0.601], [9.682, -0.162], [6.771, 0.38], [1.036, 0.945], [6.786, 0.155], [0.83, 0.761], [0.627, 0.548], [1.969, 1.089], [0.279, 0.271], [5.285, -0.341], [5.085, -1.189], [4.268, -0.743], [4.058, -0.826], [8.995, 0.945], [2.139, 0.685], [1.537, 1.142], [1.279, 0.913], [3.86, -0.393], [5.472, -1.032], [8.597, 0.82], [4.57, -1.272], [9.816, -0.08], [7.122, 0.609], [3.111, 0.19], [2.136, 0.699], [3.414, 0.054], [2.706, 0.39], [0.18, 0.181], [9.679, -1.009], [8.681, 0.764], [9.735, -0.902], [1.638, 1.118], [2.405, 0.669], [2.546, 0.613], [9.195, -0.26], [0.85, 0.809], [10, -1.434], [0.414, 0.41], [8.733, 0.071], [6.197, 0.447], [3.923, -0.821], [8.2, 1.272], [4.899, -1.013], [8.032, 1.114], [7.867, 0.904], [3.974, -0.435], [8.705, 0.12], [9.502, 0.821], [7.484, 0.517], [0.898, 0.787], [0.251, 0.224], [0.453, 0.444], [0.585, 0.514], [2.974, 0.224], [0.076, 0.072], [0.151, 0.155], [9.705, -0.749], [7.403, 1.271], [6.514, 0.033], [0.674, 0.691], [8.656, 0.153], [1.528, 1.093], [9.974, -1.097], [2.438, 0.844], [1.955, 0.787], [5.88, -0.344], [6.184, -0.706], [0.358, 0.364], [8.07, 0.749], [8.968, 1.064], [7.871, 0.922], [3.808, -0.595], [1.368, 0.954], [4.216, -0.855], [9.64, -0.634], [2.102, 0.893], [5.919, -0.484], [7.386, 0.967], [2.857, 0.077], [8.634, 0.998], [7.703, 0.651], [5.847, 0.005], [4.946, -1.292], [9.658, 0.155], [4.985, -1.172], [2.299, 0.883], [0.005, 0.005], [1.863, 1.09], [3.189, -0.238], [6.346, 0.227], [8.602, 0.543], [2.813, 0.344], [5.789, -1.003], [2.078, 0.876], [0.897, 0.756], [9.095, 0.786], [3.007, 0.027], [1.512, 1.016], [6.227, -0.554], [1.086, 0.909], [9.612, -0.313], [1.405, 1.03], [4.455, -1.279], [7.813, 1.078], [9.273, -0.277], [2.445, 0.705], [1.599, 0.887], [9.624, -0.145], [9.53, -0.346], [6.245, 0.385], [2.85, 0.182], [6.274, 0.469], [8.515, 0.155], [3.184, 0.19], [6.744, 0.126], [6.205, 0.109], [4.679, -1.03], [6.976, 1.018], [7.656, 0.363], [2.247, 0.905], [7.396, 0.396], [4.549, -0.856], [0.513, 0.475], [7.973, 1.256], [0.009, 0.008], [9.766, 0.638], [9.542, -0.867], [1.159, 1.002], [8.579, 0.222], [0.949, 0.904], [8.059, 0.274], [9.475, 0.526], [4.469, -1.06], [0.087, 0.095], [5.086, -1.261], [9.163, 0.854], [6.765, 0.266], [0.312, 0.32], [2.035, 0.779], [6.906, 1.095], [6.078, -0.326], [3.272, -0.091], [1.149, 0.847], [0.84, 0.76], [9.481, -0.573], [4.909, -0.682], [7.684, 0.957], [8.926, 0.827], [3.562, -0.448], [0.964, 0.848], [9.692, -0.946], [4.688, -0.72], [1.847, 0.94], [2.529, 0.616], [6.64, 0.003], [7.913, 1.26], [3.174, -0.054], [5.783, -0.04], [5.278, -1.041], [2.666, 0.65], [3.198, -0.236], [2.3, 0.857], [5.306, -1.074], [6.689, 0.769], [8.063, 0.958], [6.457, 0.593], [6.045, -0.786], [8.068, 1.637], [7.717, 0.578], [6.541, 0.337], [0.011, 0.01], [7.611, 1.445], [7.175, 0.349], [1.369, 1.061], [8.135, 0.621], [2.588, 0.711], [2.847, 0.148], [8.646, 1.043], [9.893, -0.63], [6.115, 0.387], [6.245, -0.053], [9.69, 0.544], [7.671, 0.411], [5.999, 0.276], [1.962, 0.76], [7.121, 1.193], [5.306, -1.256], [3.18, 0.085], [1.551, 0.989], [8.39, 1.402], [4.389, -0.98], [7.603, 1.082], [6.39, -0.08], [8.392, 1.325], [5.366, -1.048], [2.387, 0.82], [4.333, -1.051], [6.116, 0.032], [7.267, 0.511], [0.815, 0.731], [9.2, 0.086], [2.509, 0.654], [4.608, -1.15], [2.217, 0.887], [8.588, 0.514], [1.694, 1.125], [2.981, 0.067], [4.571, -0.956], [5.015, -1.093], [0.419, 0.429], [5.566, -0.808], [9.858, -0.187], [9.843, -0.622], [4.901, -0.898], [3.262, -0.3], [5.948, -0.001], [5.726, -0.998], [2.439, 0.829], [6.591, 0.242], [5.381, -0.345], [6.35, 0.041], [1.821, 1.042], [4.723, -1.167], [2.379, 0.887], [6.065, -0.275], [1.351, 1.054], [2.574, 0.327], [8.823, 0.99], [2.768, 0.345], [0.13, 0.142], [3.304, -0.406], [8.351, 1.218], [4.625, -1.138], [2.422, 0.674], [4.278, -1.225], [3.488, -0.119], [8.395, 0.228], [8.799, 0.954], [3.241, -0.101], [1.673, 1.151], [0.593, 0.555], [9.312, 0.302], [9.209, -0.635], [2.792, 0.415], [9.342, -0.636], [4.06, -0.445], [0.035, 0.032], [3.171, 0.136], [6.174, -0.349], [9.653, 0.046], [8.328, 0.209], [4.446, -0.608], [7.223, 0.802], [3.654, -0.25], [7.091, 0.471], [4.91, -0.741], [0.527, 0.476], [9.255, 0.711], [7.321, 0.722], [9.096, 0.749], [0.088, 0.085], [8.673, 0.965], [0.284, 0.26], [2.122, 0.863], [9.595, -0.585], [4.623, -0.541], [8.354, 0.517], [8.976, 0.977], [3.313, -0.391], [9.531, 0.267], [1.123, 0.841], [7.019, 0.851], [4.6, -1.177], [4.671, -0.762], [7.913, 0.926], [9.737, -0.19], [7.923, 0.775], [5.383, -0.375], [8.045, 0.935], [2.787, 0.503], [0.434, 0.418], [8.903, 1.072], [1.022, 0.816], [2.32, 0.829], [3.279, -0.311], [7.564, 1.685], [5.512, -1.247], [4.194, -0.714], [7.028, 0.355], [7.285, 1.298], [3.298, -0.395], [0.087, 0.092], [7.879, 0.31], [7.162, 1.015], [9.228, -0.084], [6.461, 0.529], [6.936, 0.557], [9.666, -0.184], [2.282, 0.62], [3.4, -0.113], [4.173, -0.971], [3.897, -0.581], [5.538, -1.083], [9.188, 0.907], [4.478, -1.096], [9.263, 0.259], [6.608, -0.002], [7.358, 1.295], [1.137, 0.866], [8.636, 1.435], [7.688, 0.38], [9.885, -0.364], [8.271, 0.323], [4.367, -0.591], [8.863, 0.506], [1.705, 1.059], [2.499, 0.366], [5.756, -0.145], [2.254, 0.71], [9.308, 0.829], [2.634, 0.304], [6.348, 0.616], [0.584, 0.519], [3.629, -0.406], [1.503, 0.917], [2.032, 1.057], [3.065, -0.181], [2.752, 0.462], [9.585, -0.459], [7.801, 1.332], [0.392, 0.376], [0.946, 0.82], [4.188, -0.87], [8.768, 0.869], [1.305, 0.842], [4.569, -0.738], [5.28, -1.088], [1.478, 1.059], [6.362, -0.412], [2.038, 0.968], [4.473, -1.077], [1.631, 1.04], [2.642, 0.305], [8.452, 1.566], [6.218, -0.561], [7.874, 1.238], [6.202, -0.389], [4.95, -0.87], [1.561, 0.871], [4.601, -0.67], [8.559, 0.381], [2.245, 0.996], [0.584, 0.534], [5.537, -0.63], [7.374, 0.583], [5.618, -0.32], [8.849, 0.2], [8.598, 1.458], [1.602, 0.843], [6.341, 0.612], [7.628, 0.737], [1.472, 1.097], [2.702, 0.274], [9.323, 0.903], [0.406, 0.391], [9.58, -0.066], [8.305, 0.549], [7.116, 0.811], [4.141, -1.137], [2.747, 0.559], [7.014, 0.497], [4.076, -0.561], [5.421, -1.248], [3.842, -0.308], [8.944, 0.06], [0.546, 0.551], [7.612, 0.681], [7.045, 0.837], [4.745, -1.282], [6.97, 1.081], [2.96, -0.055], [0.032, 0.035], [2.375, 0.574], [9.549, 0.613], [4.879, -1.108], [3.683, -0.51], [8.682, 0.114], [9.203, 1.136], [6.416, -0.005], [0.881, 0.82], [7.161, 0.727], [7.42, 0.967], [1.898, 0.775], [1.081, 0.986], [8.488, 0.675], [2.344, 0.867], [9.252, -0.275], [8.087, 1.154], [9.157, -0.196], [6.661, 0.845], [1.627, 0.925], [0.042, 0.046], [4.695, -1.086], [4.027, -0.71], [5.183, -1.304], [1.213, 1.058], [1.744, 0.979], [6.026, -0.093], [3.209, -0.355], [1.914, 1.084], [9.639, -0.734], [1.657, 1.147], [7.821, 0.519], [0.719, 0.697], [3.672, -0.727], [9.803, -0.122], [7.704, 0.877], [3.727, -0.339], [5.938, -0.84], [2.498, 0.722], [2.448, 0.427], [9.986, -0.114], [7.177, 0.164], [8.757, 1.139], [3.066, -0.058], [2.207, 0.931], [1.856, 0.906], [4.716, -0.878], [1.242, 0.899], [7.836, 1.715], [2.773, 0.317], [4.763, -0.906], [3.367, -0.471], [4.164, -0.489], [9.466, -0.069], [3.221, 0.032], [8.19, 0.827], [8.272, 1.719], [3.825, -0.975], [4.758, -0.778], [3.41, -0.359], [3.153, 0.021], [3.937, -0.819], [0.981, 0.833], [1.223, 0.826], [9.657, 0.264], [4.651, -1.338], [4.739, -0.943], [8.988, -0.261], [3.784, -0.414], [0.719, 0.608], [1.042, 0.934], [3.03, 0.085], [7.39, 1.276], [0.552, 0.495], [7.481, 1.126], [8.448, 0.723], [9.845, -0.384], [3.501, -0.447], [9.2, 0.633], [0.956, 0.793], [4.092, -0.702], [4.509, -0.983], [3.893, -0.321], [4.028, -1.066], [2.606, 0.524], [0.432, 0.402], [6.557, 0.742], [7.992, 0.831], [3.129, 0.072], [2.899, 0.178], [6.636, 0.922], [3.512, -0.451], [5.917, -0.312], [5.46, -0.87], [4.999, -0.558], [3.891, -0.875], [8.642, 1.139], [4.144, -0.907], [6.853, 0.671], [3.009, -0.001], [6.992, 1.302], [5.119, -1.261], [5.057, -0.735], [9.833, -0.699], [0.697, 0.69], [5.728, -0.826], [3.988, -0.522], [8.799, 0.071], [2.174, 0.924], [1.448, 0.962], [3.35, -0.064], [7.952, 0.331], [4.445, -0.695], [1.506, 0.947], [0.775, 0.756], [8.627, 0.283], [2.651, 0.594], [8.155, 0.358], [8.391, 1.072], [0.51, 0.47], [9.299, 0.954], [2.783, 0.187], [0.665, 0.643], [7.154, 0.051], [3.619, -0.208], [2.286, 0.532], [4.971, -0.509], [2.51, 0.405], [6.102, 0.289], [0.283, 0.251], [7.759, 1.183], [1.542, 0.951], [4.34, -0.799], [4.849, -1.031], [9.886, 0.512], [3.508, -0.474], [2.057, 1.047], [8.667, 0.627], [4.952, -0.689], [4.526, -1.027], [4.402, -0.604], [3.548, -0.577], [2.954, 0.318], [1.765, 0.931], [9.712, -0.259], [0.533, 0.476], [2.056, 1.054], [2.741, 0.134], [0.061, 0.067], [7.935, 0.444], [8.777, 1.132], [1.24, 0.848], [9.247, 0.807], [2.367, 0.557], [0.718, 0.716], [8.722, 0.115], [1.72, 1.06], [8.53, -0.001], [5.571, -0.179], [9.095, -0.337], [3.612, -0.379], [0.514, 0.483], [4.084, -0.604], [5.084, -0.962], [9.77, 0.437], [4.683, -1.456], [2.328, 0.733], [7.64, 0.515], [7.308, 0.996], [0.651, 0.562], [5.607, -0.212], [3.899, -0.786], [4.022, -0.65], [0.753, 0.636], [6.394, 0.559], [4.872, -1.067], [6.836, 0.6], [2.267, 0.694], [4.43, -0.682], [2.466, 0.522], [1.255, 0.955], [2.086, 0.853], [8.786, 0.717], [1.364, 0.925], [6.259, 0.599], [7.082, 0.614], [6.21, 0.122], [9.512, -0.395], [7.56, 1.632], [2.507, 0.384], [1.09, 0.943], [0.091, 0.088], [9.618, 0.334], [5.359, -0.881], [6.297, 0.613], [6.091, -0.533], [2.689, 0.645], [6.929, -0.019], [4.843, -0.584], [0.612, 0.56], [1.91, 1.059], [2.161, 0.812], [5.805, -0.101], [1.245, 0.892], [4.373, -0.517], [1.214, 0.918], [1.546, 1.053], [7.849, 0.964], [1.762, 1.049], [9.774, -0.921], [0.307, 0.308], [5.917, -0.792], [2.718, 0.429], [1.191, 0.915], [7.665, 0.998], [2.334, 0.621], [8.585, 0.963], [3.337, -0.395], [2.768, 0.406], [7.537, 0.587], [5.965, 0.028], [0.254, 0.238], [9.527, 0.464], [8.448, 0.701], [9.07, 1.193], [8.015, 0.374], [7.826, 1.729], [9.667, -0.293], [9.525, 0.067], [1.901, 0.902], [9.835, 0.075], [3.822, -0.952], [0.265, 0.262], [1.992, 0.778], [0.022, 0.022], [5.336, -1.018], [1.533, 1.09], [2.453, 0.479], [9.707, 0.015], [9.542, -0.664], [0.064, 0.064], [5.589, -0.756], [3.157, 0.296], [6.921, -0.034], [0.332, 0.33], [5.897, -0.532], [6.617, 0.902], [7.815, 0.977], [0.458, 0.457], [4.773, -1.379], [1.615, 1.158], [6.359, -0.221], [8.879, 0.92], [8.744, 0.088], [8.614, 1.543], [7.134, 0.629], [8.598, 1.185], [9.803, -0.676], [2.495, 0.622], [6.525, -0.053], [0.408, 0.417], [6.294, -0.577], [6.165, 0.099], [0.834, 0.696], [2.964, 0.256], [3.014, -0.155], [6.052, 0.011], [0.477, 0.417], [9.666, 0.229], [1.784, 0.899], [1.833, 1.109], [7.33, 0.642], [9.753, 0.448], [9.03, -0.412], [7.793, 1.164], [9.024, -0.33], [1.326, 1.092], [9.642, -0.379], [6.683, 1.049], [3.853, -0.713], [9.553, 0.457], [5.357, -1.066], [1.139, 0.931], [0.133, 0.13], [9.343, 0.916], [7.655, 0.216], [4.31, -0.902], [9.136, -0.015], [7.896, 1.267], [1.679, 0.862], [5.33, -0.42], [6.342, -0.429], [7.953, 1.473], [6.468, 0.147], [8.032, 1.274], [4.533, -1.204], [6.536, 0.885], [0.594, 0.547], [3.941, -0.625], [9.163, 0.137], [4.647, -0.658], [5.262, -0.967], [2.61, 0.654], [2.683, 0.284], [9.429, 0.173], [3.592, -0.547], [1.184, 1.034], [3.063, -0.131], [7.467, 1.46], [4.465, -1.028], [3.802, -0.382], [8.194, 0.438], [6.217, 0.027], [1.07, 0.861], [3.28, -0.018], [0.235, 0.223], [9.507, 0.819], [0.566, 0.535], [7.953, 1.502], [6.715, 0.391], [9.608, 0.469], [0.313, 0.29], [0.898, 0.864], [8.167, 0.547], [5.821, -0.12], [2.086, 0.814], [6.23, -0.009], [4.533, -1.33], [2.66, 0.684], [7.563, 0.245], [9.869, 0.064], [5.151, -1.033], [2.35, 0.856], [0.072, 0.067], [2.073, 0.96], [8.274, 0.321], [2.056, 1.043], [0.323, 0.288], [0.541, 0.544], [8.478, 0.802], [6.32, 0.322], [2.262, 0.637], [5.025, -0.461], [3.168, -0.337], [9.358, 0.861], [9.733, -1.109], [8.414, 1.589], [1.451, 0.915], [0.987, 0.897], [1.471, 0.967], [2.626, 0.746], [7.779, 0.318], [7.949, 1.14], [8.177, 0.913], [6, 0.241], [8.669, 0.612], [6.643, 0.953], [0.822, 0.651], [0.993, 0.868], [6.022, -0.398], [3.64, -0.217], [6.887, 0.227], [8.076, 1.219], [2.865, 0.181], [7.235, 1.144], [1.146, 0.82], [0.935, 0.877], [5.154, -1.335], [8.855, 0.904], [2.975, -0.046], [9.908, -0.429], [8.746, 0.567], [2.782, 0.596], [0.505, 0.468], [6.023, -0.195], [4.723, -1.011], [2.351, 0.908], [0.356, 0.328], [4.284, -0.793], [8.574, 0.556], [6.829, 1.198], [3.245, -0.178], [9.845, 0.078], [4.991, -1.002], [0.819, 0.748], [7.164, 0.581], [6.692, 0.723], [4.491, -1.366], [2.461, 0.827], [2.143, 0.703], [2.571, 0.687], [6.951, 0.527], [9.447, 0.465], [7.264, 0.428], [7.574, 1.299], [9.636, -0.928], [4.857, -0.764], [7.797, 0.467], [1.221, 1.001], [0.191, 0.186], [6.623, 0.594], [4.9, -1.002], [8.352, 1.487], [3.18, -0.214], [5.013, -0.586], [7.117, 0.642], [3.116, 0.121], [2.245, 0.724], [0.145, 0.156], [3.821, -0.629], [7.339, 1.144], [6.317, -0.55], [1.197, 0.972], [9.176, 0.161], [6.075, 0.229], [2.231, 0.78], [3.553, -0.262], [1.635, 0.905], [1.646, 1.153], [8.899, 0.381], [1.85, 1.117], [2.638, 0.316], [5.499, -0.697], [6.549, -0.133], [2.608, 0.63], [8.078, 0.821], [5.18, -0.619], [8.299, 0.415], [0.244, 0.244], [1.724, 0.882], [6.749, 0.942], [3.707, -0.651], [8.942, 0.886], [6.79, 0.204], [1.582, 1.158], [8.435, -0.001], [7.288, 1.55], [5.471, -1.066], [6.877, 0.577], [4.627, -1.182], [1.641, 1.103], [2.512, 0.344], [7.76, 1.063], [5.492, -1.01], [7.564, 1.39], [7.605, 0.226], [5.417, -0.32], [3.88, -0.795], [1.896, 0.949], [1.358, 0.874], [0.414, 0.433], [3.569, -0.492], [9.04, 0.938], [8.792, 0.586], [8.615, 1.264], [0.381, 0.365], [0.751, 0.729], [3.537, -0.495], [7.093, 1.289], [0.157, 0.147], [4.407, -0.875], [3.335, -0.399], [7.413, 1.335], [4.56, -1.113], [8.848, 0.883], [6.55, -0.241], [4.287, -0.543], [7.578, 0.572], [7.415, 1.061], [2.156, 0.633], [7.378, 1.063], [7.367, 0.474], [5.542, -0.151], [2.252, 0.675], [2.503, 0.723], [5.902, -0.804], [8.539, 1.106], [0.761, 0.675], [0.651, 0.664], [6.151, -0.279], [5.764, 0.039], [1.308, 0.84], [3.793, -0.366], [5.556, -1.135], [4.075, -0.619], [2.836, 0.113], [5.333, -0.407], [3.478, -0.415], [4.271, -0.748], [6.487, -0.194], [8.201, 1.117], [5.024, -1.05], [1.212, 1.002], [1.2, 0.88], [6.663, 0.587], [8.672, 0.263], [0.383, 0.385], [5.782, -0.507], [2.741, 0.607], [9.843, -0.867], [7.97, 1.111], [0.077, 0.07], [1.74, 1.078], [1.907, 0.819], [2.139, 1.001], [5.82, -0.501], [7.921, 1.736], [5.478, -0.886], [3.495, -0.058], [6.509, 0.07], [4.101, -0.626], [3.555, -0.475], [7.715, 1.7], [0.716, 0.599], [8.865, 0.946], [6.001, -0.412], [6.459, 0.429], [3.854, -0.741], [3.587, -0.22], [3.377, -0.555], [2.999, 0.202], [3.167, -0.081], [2.412, 0.88], [8.188, 0.926], [1.126, 0.974], [8.579, 0.034], [8.215, 0.952], [1.437, 0.948], [9.558, 0.59], [0.016, 0.015], [1.586, 1.154], [3.303, -0.206], [9.89, 0.03], [6.95, 0.329], [1.416, 1.016], [0.028, 0.027], [7.58, 1.086], [0.407, 0.392], [6.642, 0.47], [8.808, 0.403], [6.179, 0.342], [8.341, 0.241], [6.856, 0.854], [8.103, 0.34], [7.742, 1.465], [3.796, -0.866], [8.21, 1.361], [4.497, -1.111], [5.615, -0.236], [7.305, 0.26], [6.882, 1.116], [2.195, 0.729], [9.451, 0.609], [8.293, 0.57], [1.298, 0.987], [0.912, 0.724], [9.429, 0.574], [1.09, 0.845], [9.566, 0.133], [0.105, 0.096], [7.773, 1.452], [3.271, -0.185], [1.967, 1.08], [4.285, -0.993], [5.973, 0.035], [4.719, -1.301], [1.759, 1.018], [3.184, -0.281], [4.857, -0.722], [7.567, 0.469], [1.799, 1.064], [9.462, -0.277], [2.184, 0.869], [2.767, 0.314], [2.182, 0.842], [1.598, 0.982], [9.312, 0.991], [4.937, -0.99], [3.58, -0.113], [7.612, 0.816], [1.231, 1.008], [0.505, 0.464], [4.827, -0.622], [1.786, 0.907], [5.61, -0.549], [8.205, 0.602], [6.636, 0.768], [7.155, 0.515], [3.712, -0.476], [1.78, 0.96], [2.388, 0.868], [2.895, 0.193], [6.06, -0.096], [0.201, 0.196], [7.608, 1.158], [3.727, -0.58], [9.591, 0.081], [4.641, -1.43], [3.381, -0.162], [4.592, -1.161], [4.832, -0.795], [5.984, -0.569], [1.917, 1.111], [7.581, 0.486], [2.618, 0.632], [7.085, 0.701], [6.176, 0.272], [0.281, 0.272], [1.421, 1.014], [1.965, 0.802], [3.724, -0.236], [8.597, 0.076], [7.465, 1.297], [6.371, -0.232], [3.591, -0.382], [7.635, 0.291], [8.917, 0.501], [2.577, 0.425], [5.801, -0.214], [1.799, 0.955], [2.303, 0.911], [0.799, 0.641], [9.1, 0.394], [9.654, -0.775], [4.144, -0.715], [1.099, 0.839], [2.136, 1.037], [4.569, -1.149], [0.813, 0.733], [4.033, -0.941], [7.909, 1.053], [5.279, -1.1], [4.642, -0.748], [9.664, -0.44], [4.372, -0.719], [2.051, 0.684], [6.373, 0.33], [9.278, -0.148], [1.222, 0.969], [0.267, 0.242], [7.809, 1.576], [9.792, -0.759], [2.356, 0.798], [7.611, 0.873], [1.533, 1.001], [7.48, 0.841], [1.898, 1.104], [5.323, -1.185], [9.557, 0.698], [7.063, 0.583], [8.666, 1.41], [5.915, -0.423], [2.065, 0.94], [7.065, 0.54], [5.888, -0.163], [6.924, 0.222], [4.438, -0.584], [4.674, -1.069], [6.896, 0.708], [6.505, -0.297], [0.888, 0.838], [5.555, -0.734], [2.228, 0.936], [9.434, -0.481], [0.722, 0.665], [8.454, 0.211], [3.691, -0.182], [0.686, 0.618], [3.568, -0.211], [9.299, -0.158], [4.815, -0.659], [7.285, 0.841], [7.278, 0.961], [0.69, 0.633], [8.532, 1.598], [4.683, -1.052], [9.564, 0.675], [2.899, 0.039], [4.019, -0.633], [1.508, 0.994], [0.447, 0.434], [3.989, -1.11], [7.282, 0.923], [0.031, 0.028], [9.226, 0.389], [2.22, 0.589], [6.069, 0.042], [3.226, -0.167], [5.138, -0.868], [5.968, -0.641], [7.694, 1.519], [1.461, 0.888], [2.65, 0.514], [0.369, 0.35], [8.664, 1.285], [9.508, -0.204], [0.695, 0.652], [7.92, 0.882], [3.158, 0.069], [6.117, -0.755], [9.329, 0.284], [3.221, -0.086], [4.585, -0.805], [6.453, -0.018], [0.994, 0.873], [8.003, 0.949], [6.87, 0.86], [1.603, 0.86], [9.477, 0.7], [4.833, -1.26], [1.429, 1.079], [2.306, 0.625], [6.567, 0.831], [4.042, -1.092], [5.818, -0.028], [5.258, -1.075], [4.388, -0.85], [6.445, 0.034], [0.322, 0.323], [0.094, 0.088], [3.19, -0.016], [9.458, -0.083], [0.065, 0.069], [0.091, 0.084], [6.522, 0.598], [7.371, 0.862], [8.041, 1.365], [1.463, 0.866], [8.436, 1.142], [2.32, 0.519], [4.404, -0.686], [7.787, 0.754], [7.495, 1.446], [2.556, 0.45], [3.657, -0.373], [0.024, 0.024], [8.26, 1.157], [0.356, 0.313], [4.78, -0.833], [5.67, -0.774], [6.609, 0.667], [8.596, 0.685], [1.365, 1.003], [1.406, 0.985], [7.437, 1.123], [4.991, -0.985], [3.967, -0.734], [7.008, 0.293], [6.823, 0.521], [4.904, -1.074], [2.828, 0.57], [4.469, -1.025], [2.15, 0.94], [1.256, 0.898], [4.846, -0.755], [8.893, -0.299], [1.901, 1], [8.278, 0.557], [2.393, 0.809], [2.238, 0.785], [4.565, -0.816], [4.785, -1.242], [5.673, -0.35], [7.357, 0.147], [9.832, 0.153], [1.904, 0.921], [4.044, -0.411], [1.311, 0.93], [8.075, 1.483], [2.61, 0.404], [3.095, 0.061], [8.71, 0.391], [1.105, 1.002], [2.174, 0.795], [5.854, -0.363], [0.44, 0.396], [5.97, 0.072], [1.18, 0.825], [4.979, -0.711], [1.337, 0.932], [1.059, 0.923], [0.226, 0.22], [6.838, 1.11], [5.817, -0.473], [8.835, 1.037], [0.592, 0.544], [1.426, 1.132], [2.847, 0.231], [0.115, 0.125], [6.253, -0.133], [6.618, 0.619], [6.001, -0.631], [1.176, 0.99], [6.618, 0.13], [5.76, -0.074], [2.504, 0.4], [9.79, 0.346], [7.252, 0.244], [0.473, 0.477], [1.992, 0.8], [3.584, -0.206], [4.25, -1.126], [1.785, 1.022], [7.226, 0.45], [8.877, 1.229], [9.786, -1.054], [4.949, -0.84], [1.722, 0.865], [2.32, 0.888], [9.799, -0.436], [8.283, 1.297], [0.786, 0.668], [8.261, 1.144], [9.266, 0.11], [9.462, 0.378], [4.151, -1.04], [1.831, 1.076], [6.218, -0.371], [6.827, 0.709], [7.136, 0.284], [8.53, 1.546], [5.286, -1.008], [5.346, -0.715], [7.625, 0.784], [1.563, 1.043], [0.344, 0.328], [8.766, 1.043], [0.37, 0.338], [2.225, 0.884], [3.996, -0.852], [4.407, -0.793], [3.077, -0.03], [3.942, -0.347], [4.66, -1.22], [0.611, 0.594], [8.243, 0.686], [0.919, 0.876], [4.647, -1.108], [4.23, -0.788], [9.458, -0.306], [9.186, 0.402], [9.134, -0.215], [8.045, 1.591], [5.874, -0.622], [2.786, 0.514], [9.136, -0.422], [8.125, 1.475], [9.801, -1.132], [4.859, -0.781], [4.915, -1.042], [3.606, -0.328], [6.297, -0.574], [0.676, 0.634], [1.296, 0.859], [4.643, -0.788], [0.55, 0.47], [5.083, -0.641], [6.328, -0.376], [6.925, 1.118], [4.956, -1.227], [0.146, 0.146], [1.937, 0.822], [6.599, 0.594], [2.853, 0.159], [4.079, -0.76], [2.67, 0.346], [4.109, -0.644], [5.494, -0.759], [0.758, 0.732], [2.433, 0.419], [2.79, 0.53], [8.932, 0.061], [8.191, 1.745], [7.485, 0.579], [4.779, -0.6], [8.547, 0.626], [2.751, 0.624], [2.166, 0.809], [3.534, -0.274], [4.196, -1.039], [6.379, 0.142], [5.698, -0.823], [0.57, 0.55], [4.569, -1.405], [3.115, 0.285], [5.992, -0.612], [6.428, 0.43], [3.153, -0.153], [5.581, -0.331], [4.973, -1.163], [9.765, 0.366], [1.492, 0.997], [0.537, 0.552], [5.81, -0.951], [3.828, -0.425], [2.953, -0.052], [6.304, 0.437], [7.695, 0.662], [6.223, 0.399], [5.987, -0.773], [9.624, 0.185], [1.894, 0.895], [2.937, 0.341], [3.846, -0.885], [8.472, 0.912], [0.469, 0.429], [9.077, 1.226], [3.142, -0.053], [6.016, -0.02], [5.572, -1.068], [7.241, 1.35], [4.506, -1.281], [1.207, 0.955], [9.684, -0.829], [4.457, -0.899], [2.877, -0.003], [1.603, 1.157], [0.607, 0.525], [6.58, 0.945], [7.13, 0.105], [3.86, -0.619], [7.3, 0.232], [7.408, 1.399], [3.864, -0.777], [5.65, -0.392], [2.608, 0.278], [2.006, 1.039], [1.348, 0.968], [6.34, 0.126], [0.63, 0.531], [0.873, 0.811], [6.199, -0.35], [0.422, 0.438], [8.538, 0.139], [7.232, 1.316], [1.667, 0.975], [2.946, 0.389], [8.957, -0.396], [5.892, -0.125], [9.346, -0.036], [1.152, 0.974], [6.401, -0.304], [6.009, 0.158], [4.766, -1.295], [3.919, -0.61], [7.523, 0.929], [7.052, 0.888], [0.9, 0.73], [4.945, -0.788], [2.331, 0.63], [2.462, 0.739], [1.227, 0.94], [0.551, 0.541], [7.739, 0.414], [2.364, 0.901], [4.498, -1.407], [2.924, 0.409], [3.18, -0.34], [7.758, 1.036], [3.811, -0.94], [5.122, -0.893], [3.866, -0.893], [5.765, 0.01], [3.484, -0.622], [2.605, 0.695], [0.247, 0.244], [3.07, 0.324], [9.599, -0.294], [7.199, 0.8], [3.209, -0.209], [7.729, 1.225], [7.862, 0.999], [2.825, 0.338], [6.183, -0.492], [0.893, 0.798], [1.763, 0.948], [9.463, 0.303], [7.283, 0.734], [1.37, 1.041], [0.568, 0.499], [2.258, 0.782], [7.123, 0.52], [8.031, 1.265], [5.092, -1.381], [8.014, 1.451], [0.58, 0.521], [4.778, -0.677], [9.224, -0.445], [5.877, -0.363], [6.549, -0.308], [9.035, 1.244], [4.725, -1.355], [6.748, 0.65], [4.584, -1.414], [5.902, 0.196], [8.621, 0.428], [1.313, 0.982], [5.013, -1.436], [6.132, 0.242], [8.98, 0.376], [1.572, 1.09], [8.825, -0.211], [7.042, 0.866], [4.446, -1.125], [8.274, 1.141], [3.878, -0.954], [5.751, -0.475], [9.963, -0.772], [9.217, 0.949], [5.973, -0.457], [9.379, 0.086], [9.291, -0.602], [9.083, 0.678], [2.39, 0.588], [4.194, -0.737], [5.517, -1.148], [3.383, -0.218], [5.259, -0.887], [9.976, 0.071], [3.116, -0.23], [5.581, -0.607], [5.078, -1.184], [7.069, 1.048], [0.35, 0.331], [2.747, 0.592], [5.727, -0.904], [1.994, 1.101], [8.611, 0.693], [7.088, 1.051], [2.347, 0.51], [6.833, 0.658], [3.455, -0.456], [1.479, 1.143], [5.682, -1.091], [4.442, -0.616], [7.793, 0.947], [1.917, 1.005], [9.235, -0.47], [6.037, -0.03], [7.591, 0.331], [3.204, -0.035], [3.473, -0.598], [0.462, 0.446], [4.295, -1.087], [9.423, 0.18], [3.945, -1.08], [6.596, 0.488], [4.567, -1.086], [5.663, -0.304], [2.965, 0.148], [2.534, 0.767], [4.065, -1.156], [6.128, 0.298], [0.337, 0.302], [0.726, 0.701], [1.574, 0.883], [6.093, -0.025], [7.54, 0.47], [3.627, -0.264], [6.023, -0.687], [2.82, 0.584], [1.053, 0.843], [8.121, 1.53], [4.474, -1.415], [3.059, 0.109], [1.587, 0.889], [9.585, 0.575], [1.463, 0.928], [2.862, 0.53], [2.613, 0.434], [0.853, 0.753], [7.048, 0.041], [2.569, 0.72], [0.116, 0.116], [1.746, 1.037], [9.473, -0.322], [1.835, 1.126], [1.476, 0.914], [9.473, 0.248], [8.457, 0.226], [7.068, 1.033], [0.343, 0.332], [6.283, 0.306], [3.28, -0.204], [0.462, 0.485], [9.975, -1.393], [0.234, 0.247], [8.772, 0.242], [4.051, -0.751], [1.762, 0.981], [1.542, 1.118], [2.594, 0.287], [3.699, -0.196], [2.322, 0.689], [9.397, 0.355], [2.674, 0.425], [4.098, -0.457], [7.487, 0.914], [2.327, 0.888], [7.761, 0.53], [5.924, -0.291], [7.816, 0.605], [8.778, 0.914], [1.389, 0.922], [5.062, -0.594], [5.052, -0.958], [3.402, -0.093], [0.322, 0.288], [2.611, 0.62], [1.53, 0.988], [9.089, 0.619], [6.209, -0.231], [1.8, 1.131], [4.523, -1.258], [5.607, -0.617], [2.178, 0.659], [5.331, -0.385], [7.002, 0.05], [9.225, 1.05], [4.197, -1.135], [1.08, 0.948], [8.389, 0.321], [1.528, 1.021], [8.283, 0.696], [3.655, -0.163], [8.752, -0.078], [3.91, -0.384], [8.079, 0.416], [8.081, 1.415], [6.556, 0.009], [7.866, 1.571], [0.463, 0.438], [9.197, 0.231], [8.527, 0.088], [7.065, 1.258], [0.432, 0.402], [4.566, -0.935], [9.161, -0.645], [2.83, 0.566], [6.627, -0.226], [8.423, 1.416], [4.847, -1.402], [1.124, 1.005], [0.438, 0.385], [8.885, 1.244], [8.107, 0.686], [2.863, 0.313], [8.371, 0.465], [6.392, 0.344], [7.052, 0.316], [6.06, -0.197], [3.459, -0.338], [0.626, 0.599], [1.151, 0.9], [3.34, 0.005], [2.887, 0.029], [4.527, -0.978], [9.586, -0.84], [8.215, 1.656], [5.445, -1.249], [2.907, 0.375], [3.345, -0.427], [9.509, 0.745], [9.457, -0.745], [0.148, 0.161], [1.901, 0.805], [9.18, 0.373], [1.742, 0.86], [9.572, 0.128], [1.614, 0.873], [3.91, -0.344], [3.318, -0.332], [9.645, 0.147], [3.975, -1.124], [0.96, 0.819], [3.562, -0.477], [2.654, 0.544], [5.15, -0.956], [4.099, -0.632], [0.876, 0.741], [0.456, 0.452], [1.644, 0.931], [4.718, -0.839], [3.451, -0.468], [9.729, -0.186], [9.907, -1.243], [4.057, -0.478], [7.972, 0.935], [3.021, 0.284], [5.262, -0.937], [0.301, 0.324], [2.926, 0.014], [6.98, 0.657], [1.359, 0.959], [9.12, 0.51], [5.735, -0.547], [6.997, 0.866], [6.724, 0.119], [9.372, 0.94], [1.465, 0.94], [7.84, 1.456], [8.803, 0.386], [3.275, 0.012], [3.991, -0.807], [0.387, 0.402], [9.193, -0.572], [7.178, 1.479], [7.652, 0.218], [6.269, 0.28], [6.713, 0.281], [7.201, 0.861], [5.479, -0.756], [8.856, 1.286], [1.774, 0.929], [8.192, 1.511], [8.806, 0.001], [9.37, 0.85], [8.224, 0.826], [5.097, -0.873], [4.316, -0.998], [3.489, -0.015], [5.088, -1.279], [5.164, -0.743], [0.555, 0.514], [0.29, 0.307], [4.482, -1.139], [4.004, -0.644], [0.073, 0.072], [1.621, 1.088], [3.672, -0.536], [2.958, 0.476], [6.396, -0.078], [6.682, 0.874], [5.413, -0.87], [0.16, 0.165], [9.199, -0.535], [2.606, 0.742], [4.939, -1.385], [0.932, 0.882], [2.744, 0.212], [3.936, -0.385], [6.445, -0.059], [9.498, 0.552], [2.283, 0.712], [7.816, 1.628], [0.406, 0.376], [1.871, 1.041], [9.852, -0.748], [1.3, 1.056], [3.232, -0.307], [5.741, -0.48], [1.983, 0.88], [1.857, 1.061], [6.456, -0.218], [6.585, 0.504], [8.19, 0.429], [9.131, 0.445], [7.929, 0.514], [3.213, 0.154], [8.24, 0.235], [6.726, 0.756], [5.046, -1.307], [6.068, -0.121], [1.613, 0.918], [1.34, 1.009], [7.362, 0.68], [5.624, -0.453], [8.646, 0.569], [0.382, 0.389], [0.46, 0.423], [6.331, 0.414], [0.054, 0.053], [2.058, 0.99], [6.709, 0.097], [7.055, 1.173], [5.303, -1.168], [1.34, 1.105], [8.825, -0.197], [1.799, 1.061], [4.461, -1.18], [9.269, 0.563], [1.575, 0.926], [9.991, -0.037], [6.309, -0.081], [7.086, 1.074], [4.109, -1.177], [5.846, -0.403], [8.437, 0.558], [6.493, 0.545], [6.234, -0.128], [2.918, 0.336], [4.581, -1.182], [1.668, 1.066], [1.696, 0.885], [3.979, -0.72], [2.931, 0.047], [1.906, 1.001], [1.264, 0.859], [3.102, 0.209], [5.979, -0.37], [7.402, 1.568], [5.264, -0.934], [3.524, -0.163], [3.323, -0.46], [5.554, -0.516], [1.285, 0.925], [8.889, 0.539], [9.723, -0.494], [2.51, 0.635], [4.485, -1.005], [8.331, 1.382], [6.64, -0.083], [2.939, 0.404], [1.605, 0.996], [8.459, 1.257], [8.477, 0.671], [3.713, -0.393], [2.106, 0.754], [7.022, 1.18], [2.812, 0.064], [9.25, 0.817], [2.067, 0.861], [9.812, 0.078], [6.702, 0.084], [5.05, -0.587], [8.325, 0.149], [2.077, 0.982], [2.196, 0.811], [2.003, 0.974], [7.284, 0.689], [9.293, 0.881], [2.396, 0.665], [3.458, -0.044], [1.944, 0.781], [0.458, 0.484], [0.243, 0.219], [0.163, 0.176], [4.222, -1.131], [4.929, -0.589], [7.871, 0.294], [6.685, 0.945], [9.886, -0.496], [3.071, 0.191], [9.471, -0.559], [2.773, 0.437], [9.551, -0.733], [6.828, 0.802], [5.637, -0.725], [4.527, -0.634], [1.481, 0.86], [4.918, -0.726], [8.595, 0.27], [5.659, -0.237], [4.536, -1.052], [5.739, -0.27], [8.835, -0.067], [6.508, 0.614], [0.858, 0.675], [4.309, -0.562], [5.634, -0.875], [3.667, -0.306], [7.689, 0.475], [8.399, 1.612], [7.85, 0.574], [0.411, 0.434], [8.09, 0.247], [6.792, 0.942], [1.11, 0.84], [5.417, -0.252], [4.735, -1.081], [0.349, 0.351], [0.23, 0.209], [8.874, 0.716], [0.214, 0.211], [9.152, 0.978], [4.897, -1.251], [7.264, 1.158], [7.825, 0.271], [0.105, 0.114], [4.712, -1.21], [2.923, 0.232], [5.553, -0.676], [3.086, 0.28], [3.785, -0.935], [1.457, 1.083], [8.317, 0.144], [4.148, -0.774], [8.278, 0.181], [5.833, 0.07], [5.788, -1.02], [9.547, -0.011], [3.689, -0.702], [7.218, 1.196], [3.409, -0.364], [9.938, 0.123], [3.195, -0.071], [3.222, -0.07], [3.228, -0.184], [7.626, 1.601], [5.733, -0.689], [3.577, -0.253], [5.02, -1.346], [5.393, -0.369], [0.753, 0.645], [2.017, 1.057], [7.155, 0.051], [9.523, 0.822], [8.452, 0.668], [7.548, 1.479], [3.228, -0.186], [6.389, 0.482], [6.57, -0.371], [8.001, 1.737], [3.547, -0.534], [3.395, -0.25], [7.453, 0.376], [3.519, -0.205], [3.971, -1.042], [5.394, -0.776], [7.256, 0.236], [3.48, -0.294], [8.528, 0.128], [9.727, 0.564], [1.12, 0.894], [1.386, 1.119], [2.327, 0.695], [2.689, 0.442], [8.367, 0.807], [2.94, 0.457], [3.649, -0.533], [3.455, -0.3], [4.336, -1.033], [6.181, 0.389], [7.008, 0.632], [9.5, 0.782], [7.152, 0.721], [6.162, 0.462], [9.756, -0.398], [3.66, -0.253], [4.586, -1.414], [1.234, 0.987], [3.41, -0.507], [9.434, 0.725], [0.989, 0.8], [9.129, 1.074], [2.802, 0.265], [1.941, 1.059], [4.195, -1.127], [3.769, -0.404], [1.889, 0.832], [0.184, 0.188], [2.825, 0.261], [2.639, 0.641], [7.195, 0.555], [4.029, -0.413], [3.223, -0.254], [0.279, 0.281], [6.486, -0.13], [7.884, 1.684], [8.82, -0.03], [6.689, 0.844], [0.793, 0.676], [6.673, 0.486], [5.989, -0.402], [8.489, 0.874], [9.463, -0.22], [7.594, 1.231], [6.956, 0.329], [9.954, 0.036], [2.581, 0.353], [0.443, 0.446], [0.649, 0.6], [7.218, 1.14], [3.404, -0.262], [7.614, 1.675], [5.807, -0.589], [0.43, 0.423], [0.885, 0.706], [7.797, 1.502], [9.638, -0.452], [7.858, 1.427], [0.249, 0.243], [8.346, 1.191], [3.682, -0.803], [0.956, 0.912], [0.525, 0.462], [3.931, -0.692], [1.105, 0.812], [7.219, 1.459], [4.963, -1.121], [8.773, 0.699], [2.515, 0.403], [9.428, 0.195], [7.321, 0.196], [1.343, 1.058], [3.646, -0.819], [0.315, 0.337], [9.379, -0.087], [4.18, -0.835], [1.075, 0.868], [3.017, 0.307], [4.39, -1.242], [2.813, 0.449], [5.171, -1.16], [8.598, 1.527], [7.677, 0.447], [0.324, 0.345], [8.623, 0.17], [1.365, 1.024], [7.357, 0.61], [5.123, -0.707], [3.391, -0.276], [9.265, 0.686], [7.432, 0.726], [7.918, 1.399], [9.248, -0.54], [2.621, 0.614]];
                        return d;
                    })()
                },
            ]
        };
        myWriter.setOption(Writeroption);
        /*机构分析*/
        const myagency = ec.init(document.getElementById('agency'));
        const agencyOption = {
            // backgroundColor: '#0f375f',
            grid: {
                top: '5%',
                left: 0,
                right: 0,
                bottom: '10%'
            },
            xAxis: {
                data: [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月'
                ],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
            yAxis: [{
                type: 'value',
                name: '',
                nameTextStyle: {
                    color: '#999999'
                },
                splitLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#333333'
                    }
                }
            },
                {
                    type: 'value',
                    name: '',
                    nameTextStyle: {
                        color: '#333333'
                    },
                    position: 'right',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        formatter: '{value} %',
                        textStyle: {
                            color: '#333333'
                        }
                    }
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 8,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        }
                    }
                }
            ],
            series: [{
                name: '',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                showAllSymbol: false,
                symbol: 'circle',
                symbolSize: 0,
                itemStyle: {
                    color: 'rgba(5,140,255, 0.1)'
                },
                lineStyle: {
                    // color: '#058cff'
                },
                areaStyle: {
                    color: 'rgba(5,140,255, 0.2)'
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
                {
                    name: '',
                    type: 'bar',
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#29B6F6'
                            },
                                {
                                    offset: 1,
                                    color: '#29B6F6'
                                }
                            ])
                        }
                    },
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                }
            ]
        };
        myagency.setOption(agencyOption);
        /*期刊发表频次*/
        const mypublication = ec.init(document.getElementById('publication'));
        const publicationOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['期刊', '期刊一', '哈哈哈'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#999'
                }
            },
            grid: {
                top: '20px',
                left: '3%',
                right: '3%',
                bottom: 0,
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
            }],
            yAxis: [{
                type: 'value',
                name: '',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                name: '期刊',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
            }, {
                name: '期刊一',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(0,136,212)',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12

                    }
                },
                data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
            }, {
                name: '哈哈哈',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {

                        color: 'rgb(219,50,51)',
                        borderColor: 'rgba(219,50,51,0.2)',
                        borderWidth: 12
                    }
                },
                data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
            }]
        };
        mypublication.setOption(publicationOption);
    }

    ngOnInit() {
    }

}
