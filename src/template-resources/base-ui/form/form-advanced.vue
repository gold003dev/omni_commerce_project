<template>
  <Layout>
    <b-row>
      <b-col cols="12">

        <SampleWrapper title="Bootstrap Datepicker">
          <template v-slot:sub-text>
            Bootstrap-datepicker provides a flexible datepicker widget in the
            Bootstrap style.
          </template>
          <template v-slot:preview>
            <b-row>
              <b-col lg="6">
                <b-form-group
                    label="Date Picker"
                    class="mb-3 position-relative"
                    id="datepicker1"
                >
                  <BootstrapDatepicker type="text" placeholder="Select Date" data-provide="datepicker"
                                       data-date-format="d-M-yyyy" data-date-container="#datepicker1"/>
                </b-form-group>
              </b-col>

              <b-col lg="6">
                <b-form-group
                    label="Date View"
                    class="mb-3 position-relative"
                    id="datepicker2"
                >
                  <BootstrapDatepicker type="text" placeholder="Select Date" data-provide="datepicker"
                                       data-date-format="d-M-yyyy" data-date-container="#datepicker2"/>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="6">
                <b-form-group
                    label="Multi Datepicker"
                    class="mb-3 position-relative"
                    id="datepicker3"

                >
                  <BootstrapDatepicker type="text" placeholder="Select Date" data-provide="datepicker"
                                       data-date-multidate="true" data-date-container="#datepicker3"/>
                </b-form-group>
              </b-col>

              <b-col lg="6">
                <b-form-group
                    label="Autoclose"
                    class="mb-3 position-relative"
                    id="datepicker4"
                >
                  <BootstrapDatepicker type="text" placeholder="Select Date" data-provide="datepicker"
                                       data-date-autoclose="true"
                                       data-date-container="#datepicker4"/>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="6">
                <b-form-group
                    label="Month View"
                    class="mb-3 position-relative"
                    id="datepicker5"
                >
                  <BootstrapDatepicker type="text" placeholder="Select Month" data-provide="datepicker"
                                       data-date-format="MM yyyy" data-date-min-view-mode="1"
                                       data-date-container="#datepicker5"/>
                </b-form-group>
              </b-col>

              <b-col lg="6">
                <b-form-group
                    label="Year View"
                    class="mb-3 position-relative"
                    id="datepicker6"
                >
                  <BootstrapDatepicker type="text" placeholder="Select Year" data-provide="datepicker"
                                       data-date-min-view-mode="2" data-date-container="#datepicker6"/>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col lg="6">
                <div>
                  <label class="form-label">Inline Datepicker</label>
                  <div data-provide="datepicker-inline"></div>
                </div>
              </b-col>
            </b-row>
          </template>
        </SampleWrapper>

      </b-col>
    </b-row>


  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";
import SampleWrapper from "@/template-resources/sample-wrapper.vue";
import BootstrapDatepicker from "./bootstrap-datepicker.vue";

export default {
  components: {
    BootstrapDatepicker,
    SampleWrapper,
    Layout,
  },

};
</script>
