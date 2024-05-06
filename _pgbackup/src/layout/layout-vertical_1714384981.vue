<script setup>
import Topbar from "./nav/topbar.vue";
import SidebarNav from "./nav/sidebar-nav.vue";
import Footer from "./footer.vue";
</script>
<template>
    <div class="wrapper">
        <Topbar/>
        <SidebarNav/>
        <div class="content-page">
            <div class="content pt-3">
                <b-container fluid style="margin-top: 0; padding-top: 0px;">
                    <slot></slot>
                </b-container>
            </div>
            <Footer/>
            <component></component>
        </div>
    </div>
</template>