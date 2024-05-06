<template>
  <Layout>
    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Default">
          <template v-slot:sub-text> Start with default options </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_01" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Prefix">
          <template v-slot:sub-text> Showing grid and adding prefix "$" </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_03" data-type="double" data-grid="true" data-min="0" data-max="1000" data-from="200" data-to="800" data-prefix="$" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Step">
          <template v-slot:sub-text> Increment with specific value only (step) </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_05" data-type="double" data-grid="true" data-min="-1000" data-max="1000" data-from="-500" data-to="500" data-step="250" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Prettify Numbers">
          <template v-slot:sub-text> Prettify enabled. Much better! </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_07" data-grid="true" data-min="1000" data-max="1000000" data-step="1000" data-from="200000" data-to="1000" data-prettify_enabled="true" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Extra Example">
          <template v-slot:sub-text> Want to show that max number is not the biggest one? </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_09" data-grid="true" data-min="18" data-max="70" data-prefix="Age" data-max_postfix="+" data-from="30" data-to="1000" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Postfixes">
          <template v-slot:sub-text> Using postfixes </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_11" data-type="single" data-grid="true" data-min="-90" data-max="90" data-postfix=" Â°" data-from="0" />
          </template>
        </SampleWrapper>
      </b-col>

      <b-col xl="6">
        <SampleWrapper title="Min-Max">
          <template v-slot:sub-text> Set min value, max value and start point </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_02" data-min="100" data-max="1000" data-from="550" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Range">
          <template v-slot:sub-text> Set up range with negative values </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_04" data-min="-1000" data-max="1000" data-from="-500" data-to="500" data-type="double" data-grid="true" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Custom Values">
          <template v-slot:sub-text> Using any strings as values </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_06" data-grid="true" data-from="3" data-values="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Disabled">
          <template v-slot:sub-text> Lock slider by using disable option </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_08" data-min="100" data-max="1000" data-from="550" data-disable="true" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Use Decorate Both option">
          <template v-slot:sub-text> Use decorate_both option </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_10" data-type="double" data-min="100" data-max="200" data-from="145" data-to="155" data-prefix="Weight " data-postfix=" million pounds" data-decorate_both="true" />
          </template>
        </SampleWrapper>

        <SampleWrapper title="Hide">
          <template v-slot:sub-text> Or hide any part you wish </template>
          <template v-slot:preview>
            <IonRangeSlider id="range_12" data-type="double" data-min="1000" data-max="2000" data-from="1200" data-to="1800" data-hide_min_max="true" data-hide_from_to="true" data-grid="true" />
          </template>
        </SampleWrapper>
      </b-col>
    </b-row>
  </Layout>
</template>

<script setup>
import Layout from "@/layout/layout.vue";
import SampleWrapper from "@/template-resources/sample-wrapper.vue";
import IonRangeSlider from "./ion-range-slider.vue";
</script>
