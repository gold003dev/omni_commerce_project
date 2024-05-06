<template>
  <Layout>
    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Default Accordions">
          <template v-slot:sub-text> Click the accordions below to expand/collapse the accordion content. </template>
          <template v-slot:preview>
            <b-accordion v-model="openAccordion1Id" id="accordionExample">
              <b-accordion-item id="1" title="Accordion Item #1">
                <div><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
              <b-accordion-item id="2" title="Accordion Item #2">
                <div><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
              <b-accordion-item id="3" title="Accordion Item #3">
                <div><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
            </b-accordion>
          </template>
        </SampleWrapper>
      </b-col>

      <b-col xl="6">
        <SampleWrapper title="Flush Accordions">
          <template v-slot:sub-text> Add <code>.accordion-flush</code> to remove the default <code>background-color</code>, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. </template>
          <template v-slot:preview>
            <b-accordion :flush="true" id="accordionFlushExample">
              <b-accordion-item id="1" title="Accordion Item #1">
                <div>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </b-accordion-item>

              <b-accordion-item id="2" title="Accordion Item #2">
                <div>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </b-accordion-item>

              <b-accordion-item id="3" title="Accordion Item #3">
                <div>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </b-accordion-item>
            </b-accordion>
          </template>
        </SampleWrapper>
      </b-col>
    </b-row>
    <!-- end row-->

    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Simple Card Accordions">
          <template v-slot:sub-text> Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper. </template>
          <template v-slot:preview>
            <b-accordion v-model="openAccordion3Id" id="CardaccordionExample">
              <div id="1" class="card mb-0">
                <div class="card-header" id="CardheadingOne">
                  <h5 class="m-0">
                    <a class="text-reset d-block" v-b-toggle.CardcollapseOne> Collapsible Group Item #1 </a>
                  </h5>
                </div>

                <b-collapse id="CardcollapseOne" visible>
                  <div class="card-body pt-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore susta inable VHS.</div>
                </b-collapse>
              </div>
              <div id="2" class="card mb-0">
                <div class="card-header" id="CardheadingTwo">
                  <h5 class="m-0">
                    <a class="text-reset d-block collapsed" v-b-toggle.CardcollapseTwo> Collapsible Group Item #2 </a>
                  </h5>
                </div>
                <b-collapse id="CardcollapseTwo">
                  <div class="card-body pt-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                </b-collapse>
              </div>
              <div id="3" class="card mb-0">
                <div class="card-header" id="CardheadingThree">
                  <h5 class="m-0">
                    <a class="text-reset d-block collapsed" v-b-toggle.CardcollapseThree> Collapsible Group Item #3 </a>
                  </h5>
                </div>
                <b-collapse id="CardcollapseThree">
                  <div class="card-body pt-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
                </b-collapse>
              </div>
            </b-accordion>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->

      <b-col xl="6">
        <SampleWrapper title="Always Open Accordions">
          <template v-slot:sub-text>
            Omit the <code>data-bs-parent</code> attribute on each <code>.accordion-collapse</code>
            to make accordion items stay open when another item is opened.
          </template>
          <template v-slot:preview>
            <b-accordion v-model="openAccordion3Id" :free="true" id="accordionPanelsStayOpenExample">
              <b-accordion-item id="1" title="Accordion Item #1">
                <div><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
              <b-accordion-item id="2" title="Accordion Item #2">
                <div><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
              <b-accordion-item id="3" title="Accordion Item #3">
                <div><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</div>
              </b-accordion-item>
            </b-accordion>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->
    </b-row>
    <!-- end row-->

    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Custom Accordions">
          <template v-slot:sub-text>
            You can have custom look and feel for accorion as well. Just use class <code>.custom-accordion</code>
            along with
            <code>.accordion</code> as a wrapper.
          </template>
          <template v-slot:preview>
            <b-accordion v-model="openAccordion4Id" :free="true" id="accordionPanelsStayOpenExample">
              <b-accordion-item id="1" title="Q. Can I use this template for my client?">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. </div>
              </b-accordion-item>
              <b-accordion-item id="2" title=" Q. Can this theme work with WordPress?">
                <div>Tempus imperdiet nulla malesuada pellentesque elit eget gravida sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
              </b-accordion-item>
              <b-accordion-item id="3" title="Q. How do I get help with the theme?">
                <div>Laoreet suspendisse interdum consectetur libero id faucibus dolor sit amet, consectetur adipiscing elit.</div>
              </b-accordion-item>
            </b-accordion>
         
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->

      <b-col xl="6">
        <SampleWrapper title="Collapse">
          <template v-slot:sub-text>
            Bootstrap's collapse provides the way to toggle the visibility of any content or element. Please read the official <a href="https://getbootstrap.com/docs/5.2/components/collapse/" target="_blank">Bootstrap</a>
            documentation for a full list of options.
          </template>
          <template v-slot:preview>
            <p>
              <a class="btn btn-primary" v-b-toggle.collapseExample> Link with href </a>
              <b-button class="ms-1" variant="primary" v-b-toggle="'collapseExample'"> Button with data-bs-target </b-button>
            </p>
            <b-collapse visible id="collapseExample">
              <div class="card card-body mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
            </b-collapse>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->
    </b-row>
    <!-- end row-->

    <b-row>
      <b-col xl="6">
        <SampleWrapper title="Collapse Horizontal">
          <template v-slot:sub-text> The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element. </template>
          <template v-slot:preview>
            <p>
              <b-button variant="primary" v-b-toggle.collapseWidthExample> Toggle width collapse </b-button>
            </p>
            <div style="min-height: 120px">
              <b-collapse horizontal id="collapseWidthExample">
                <div class="card card-body mb-0" style="width: 300px">This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.</div>
              </b-collapse>
            </div>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->

      <b-col xl="6">
        <SampleWrapper title="Multiple Targets">
          <template v-slot:sub-text> Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code>href</code> or <code>data-bs-target</code> attribute. </template>
          <template v-slot:preview>
            <p>
              <a class="btn btn-primary" v-b-toggle.multiCollapseExample1>Toggle first element</a>
              <b-button variant="primary" v-b-toggle.multiCollapseExample2>Toggle second element </b-button>
              <b-button variant="primary" v-b-toggle="'multiCollapseExample1 multiCollapseExample2'">Toggle both elements </b-button>
            </p>
            <b-row>
              <b-col>
                <b-collapse multi-collapse id="multiCollapseExample1">
                  <div class="card card-body mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
                </b-collapse>
              </b-col>
              <b-col>
                <b-collapse multi-collapse id="multiCollapseExample2">
                  <div class="card card-body mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
                </b-collapse>
              </b-col>
              <!-- end col -->
            </b-row>
          </template>
        </SampleWrapper>
      </b-col>
      <!-- end col-->
    </b-row>
    <!-- end row-->
  </Layout>
</template>

<script>
import Layout from "@/layout/layout.vue";
import SampleWrapper from "@/template-resources/sample-wrapper.vue";

export default {
  components: { SampleWrapper, Layout },

  data() {
    return {
      openAccordion1Id: "1",
      openAccordion2Id: "1",
      openAccordion3Id: "1",
      openAccordion4Id: "1",
    };
  },
};
</script>
