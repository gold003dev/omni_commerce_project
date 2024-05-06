<template>
  <Layout>
    <b-row>
      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Column Chart</h4>
          <div dir="ltr">
            <ColumnChart />
          </div>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Line Chart</h4>
          <div dir="ltr">
            <LineChart />
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Bubble Chart</h4>
          <BubbleChart />
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Candlestick Chart</h4>
          <div dir="ltr">
            <CandlestickChart />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Area Chart</h4>
          <div dir="ltr">
            <AreaChart />
          </div>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Bar Chart</h4>
          <div dir="ltr">
            <BarChart />
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Pie Chart</h4>
          <div dir="ltr">
            <PieChart />
          </div>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Radar Chart</h4>
          <div dir="ltr">
            <RadarChart />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Radial Chart</h4>
          <div dir="ltr">
            <RadialChart />
          </div>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card>
          <h4 class="header-title mb-4">Polar Area Chart</h4>
          <div dir="ltr">
            <PolarChart />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";
import AreaChart from "./components/area.vue";
import BarChart from "./components/bar.vue";
import BubbleChart from "./components/bubble.vue";
import CandlestickChart from "./components/candlestick.vue";
import ColumnChart from "./components/column.vue";
import PolarChart from "./components/polar.vue";
import LineChart from "./components/line.vue";
import PieChart from "./components/pie.vue";
import RadarChart from "./components/radar.vue";
import RadialChart from "./components/radial.vue";

export default {
  components: {
    Layout,
    AreaChart,
    BarChart,
    BubbleChart,
    CandlestickChart,
    ColumnChart,
    PolarChart,
    LineChart,
    PieChart,
    RadarChart,
    RadialChart,
  },
};
</script>
