<script setup>
import Topbar from "./nav/topbar.vue";
import SidebarNav from "./nav/sidebar-nav.vue";
import Footer from "./footer.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import getInitials from "@/utils/getInitials.js";

const router = useRouter();

const currentRouteName = computed(() => router.currentRoute.value.name);
</script>
<template>
    <div class="wrapper">
        <Topbar/>
        <SidebarNav/>
        <div class="content-page">
            <div class="content pt-3">
                <b-row>
                    <b-col class="d-flex flex-row-reverse mb-3">
                        <ul class="breadcrumb m-0 d-none d-sm-flex">
                            <li class="breadcrumb-item">{{currentRouteName }}</li>
                        </ul>
                    </b-col>
                </b-row>
                <b-container fluid>
                    <slot></slot>
                </b-container>
            </div>
            <Footer/>
            <component></component>
        </div>
    </div>
</template>