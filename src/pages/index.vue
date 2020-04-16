<!-- 页面结构 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button @click="handleBtnClick" type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <some-component v-if="isShow"></some-component>
    </el-row>
    <div id="chartDom" style="width: 600px; height: 400px;"></div>
  </div>
</template>
<!-- 逻辑 -->
<script>
import SomeComponent from '@/components/SomeComponent'
export default {
   //当前组件名称
  name: "HelloWorld",  
  // 当前组件依赖的数据
  data() {
    return {
      isShow:false,
      msg: "index 页面",
      myChartDom: "",
    };
  },
  components: {
    someComponent:SomeComponent
  },
  //生命周期
  mounted() {
    console.log('页面加载完成')
    //在mounted生命周期函数中实例化echarts对象。因为我们要确保dom元素已经挂载到页面中
    //this.$echarts 就直接可以访问到 eacharts，再main.js已经绑定到根Vue实例上了。
    this.myChart = this.$echarts.init(document.getElementById("chartDom"));
    if (this.myChart) {
        this.handleChartRequest();
    }
  },
  // 方法集合
  methods: {
    handleBtnClick(){
        console.log('点击了按钮') 
        this.msg = '点击按钮，发送请求,展示组件'
        this.handleRequest()
    },
    handleRequest(){
        console.log('发起请求,拿到数据展示某组件') 
        this.isShow = true;
    },
    handleChartRequest(){
        console.log('请求charts数据，并绘制') 
        this.setChartData();
    },
    setChartData(){
        // 指定图表的配置项和数据
        var option = {
        title: { text: "ECharts 入门示例" },
        tooltip: {},
        legend: { data: ["销量"] },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
            {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            },
        ],
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
    }
  }
};
</script>

<!-- 样式 -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello{
    font-weight: bold;
}
</style>
