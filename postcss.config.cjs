module.exports = {
  plugins: [
    require('postcss-px-to-viewport')({
      viewportWidth: 750, // 设计稿的视口宽度
      viewportHeight: 1624, // 设计稿的视口高度
      unitPrecision: 3, // 单位转换后保留的精度
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportUnit: 'vw', // 希望使用的视口单位
      selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false // 媒体查询里的单位是否需要转换单位
    }),
  ]
};
