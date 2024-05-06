<template>
  <Layout>
    <b-row>
      <b-col cols="12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">New Icons <span class="badge badge-danger-lighten">6.5.95</span></h4>
            <b-row class="icons-list-demo" id="newIcons">
              <b-col xl="3" lg="4" sm="6" v-for="(icon, index) in newIcons" :key="index"> <i :class="`mdi mdi-${icon.name}`"></i> mdi-{{ icon.name }} </b-col>
            </b-row>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">All Icons</h4>
            <b-row class="icons-list-demo" id="icons">
              <b-col xl="3" lg="4" sm="6" v-for="(icon, index) in materialDesignIcons" :key="index"> <i :class="`mdi mdi-${icon.name}`"></i> mdi-{{ icon.name }} </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Size</h4>
            <b-row class="icons-list-demo">
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-18px mdi-account"></i> mdi-18px </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-24px mdi-account"></i> mdi-24px </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-36px mdi-account"></i> mdi-36px </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-48px mdi-account"></i> mdi-48px </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Rotate</h4>
            <b-row class="icons-list-demo">
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270 </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315 </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Spin</h4>
            <b-row class="icons-list-demo">
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-spin mdi-loading"></i> mdi-spin </b-col>
              <b-col xl="3" lg="4" sm="6"> <i class="mdi mdi-spin mdi-star"></i> mdi-spin </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";

import { materialDesignIcons } from "./data";

export default {
  components: { Layout },
  data() {
    let newIcons = [];
    let deprecatedIcons = [];
    return {
      materialDesignIcons,
      newIcons,
      deprecatedIcons,
    };
  },
  mounted() {
    this.getNewIcons();
  },
  methods: {
    isNew(icon) {
      return icon.version === "6.5.95";
    },
    getNewIcons() {
      for (let i in this.materialDesignIcons) {
        if (this.isNew(materialDesignIcons[i])) {
          this.newIcons.push(materialDesignIcons[i]);
        }
      }
    },
  },
};
</script>
