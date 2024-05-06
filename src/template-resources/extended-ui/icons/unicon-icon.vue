<template>
  <Layout>
    <Breadcrumb :title="title" :items="items" />

    <b-row v-for="(icons, title) in unicons" :key="title">
      <b-col cols="12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">{{ title }}</h4>
            <b-row class="icons-list-demo">
              <b-col xl="3" lg="4" sm="6" v-for="(icon, index) in icons" :key="index"> <i :class="`uil ${icon}`"></i>{{ icon }} </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";
import { unicons } from "./data";
export default {
  components: { Layout },
  data() {
    return {
      unicons,
    };
  },
};
</script>
