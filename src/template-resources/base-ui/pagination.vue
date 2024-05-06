<template>
  <Layout>
    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Default Pagination">
          <template v-slot:sub-text> Simple pagination inspired by Rdio, great for apps and search results. </template>
          <template v-slot:preview>
            <nav>
              <b-pagination v-model="currentPage1" :total-rows="20" :per-page="4"></b-pagination>
            </nav>
          </template>
        </SampleWrapper>

        <SampleWrapper title="Disabled and active states">
          <template v-slot:sub-text> Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page. </template>
          <template v-slot:preview>
            <nav aria-label="...">
              <b-pagination v-model="currentPage" :total-rows="15" :per-page="5" hide-goto-end-buttons prev-text="Previous" next-text="Next"></b-pagination>
            </nav>
          </template>
        </SampleWrapper>

        <SampleWrapper title="Alignment">
          <template v-slot:sub-text> Change the alignment of pagination components with flexbox utilities. </template>
          <template v-slot:preview>
            <nav aria-label="Page navigation example">
              <b-pagination v-model="currentPage1" :total-rows="15" :per-page="5" hide-goto-end-buttons prev-text="Previous" next-text="Next" align="center"></b-pagination>
            </nav>

            <nav aria-label="Page navigation example">
              <b-pagination v-model="currentPage1" :total-rows="15" :per-page="5" hide-goto-end-buttons prev-text="Previous" next-text="Next" align="end"></b-pagination>
            </nav>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col -->

      <b-col xl="6">
        <SampleWrapper title="Rounded Pagination">
          <template v-slot:sub-text> Add <code> .pagination-rounded</code> for rounded pagination. </template>
          <template v-slot:preview>
            <nav>
              <ul class="pagination pagination-rounded mb-0">
                <b-pagination v-model="currentPage2" :total-rows="20" :per-page="4"  @update:modelValue="something"></b-pagination>
              </ul>
            </nav>
          </template>
        </SampleWrapper>

        <SampleWrapper title="Sizing">
          <template v-slot:sub-text> Add <code> .pagination-lg</code> or <code> .pagination-sm</code> for additional sizes. </template>
          <template v-slot:preview>
            <nav>
              <b-pagination v-model="currentPage1" :total-rows="15" :per-page="5" size="lg"></b-pagination>
            </nav>

            <nav>
              <ul class="mb-0">
                <b-pagination v-model="currentPage1" :total-rows="15" :per-page="5" size="sm"></b-pagination>
              </ul>
            </nav>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col -->
    </b-row>
    <!-- end row -->
  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";
import SampleWrapper from "@/template-resources/sample-wrapper.vue";
export default {
  components: { Layout, SampleWrapper },
  data() {
    return {
      currentPage: 2,
      currentPage1: 0,
      currentPage2: 3,
    };
  },
  methods: {
    something(e){
      console.log(e)
    }
  }
};
</script>
