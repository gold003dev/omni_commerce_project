<template>
    <!-- Template Resources -->
    <li class="side-nav-title mt-3">
        <span>TEMPLATE RESOURCES</span> 
    </li>
    <!-- Base UI -->
    <li class="side-nav-item" role="button"><a v-b-toggle.baseUi class="side-nav-link"> <i class="uil-apps"></i> <span> Base UI </span> <span class="menu-arrow"></span> </a>
        <b-collapse id="baseUi">
            <ul class="side-nav-second-level">
                <li>
                    <router-link to="/ui/accordions" class="side-nav-link-ref">Accordions </router-link>
                </li>
                <li>
                    <router-link to="/ui/alerts" class="side-nav-link-ref">Alerts</router-link>
                </li>
                <li>
                    <router-link to="/ui/avatars" class="side-nav-link-ref">Avatars</router-link>
                </li>
                <li>
                    <router-link to="/ui/badges" class="side-nav-link-ref">Badges</router-link>
                </li>
                <li>
                    <router-link to="/ui/buttons" class="side-nav-link-ref">Buttons</router-link>
                </li>
                <li>
                    <router-link to="/ui/cards" class="side-nav-link-ref">Cards</router-link>
                </li>
                <li>
                    <router-link to="/ui/dropdowns" class="side-nav-link-ref">Dropdowns</router-link>
                </li>
                <li>
                    <router-link to="/ui/form-basic" class="side-nav-link-ref">Form Basic</router-link>
                </li>
                <li>
                    <router-link to="/ui/form-advanced" class="side-nav-link-ref">Form Advanced</router-link>
                </li>
                <li>
                    <router-link to="/ui/list-group" class="side-nav-link-ref">List Group</router-link>
                </li>
                <li>
                    <router-link to="/ui/modals" class="side-nav-link-ref">Modals</router-link>
                </li>
                <li>
                    <router-link to="/ui/offcanvas" class="side-nav-link-ref">Offcanvas</router-link>
                </li>
                <li>
                    <router-link to="/ui/pagination" class="side-nav-link-ref">Pagination</router-link>
                </li>
                <li>
                    <router-link to="/ui/popovers" class="side-nav-link-ref">Popovers</router-link>
                </li>
                <li>
                    <router-link to="/ui/progress" class="side-nav-link-ref">Progress</router-link>
                </li>
                <li>
                    <router-link to="/ui/spinners" class="side-nav-link-ref">Spinners</router-link>
                </li>
                <li>
                    <router-link to="/ui/tables" class="side-nav-link-ref">Tables</router-link>
                </li>
                <li>
                    <router-link to="/ui/tabs" class="side-nav-link-ref">Tabs</router-link>
                </li>
                <li>
                    <router-link to="/ui/tooltips" class="side-nav-link-ref">Tooltips</router-link>
                </li>
                <li>
                    <router-link to="/ui/typography" class="side-nav-link-ref">Typography</router-link>
                </li>
            </ul>
        </b-collapse>
    </li>
    <!-- Extended UI -->
    <li class="side-nav-item" role="button"><a v-b-toggle.sidebarExtendedUI class="side-nav-link"> <i class="uil-minus-path"></i> <span> Extended UI </span> <span class="menu-arrow"></span> </a>
        <b-collapse id="sidebarExtendedUI">
            <ul class="side-nav-second-level">
                <li>
                    <router-link to="/extended/charts" class="side-nav-link-ref">Charts</router-link>
                </li>
                <li>
                    <router-link to="/extended/dashboard" class="side-nav-link-ref">Dashboard</router-link>
                </li>
                <!-- Icons -->
                <li class="side-nav-item" role="button"><a v-b-toggle.sidebarIcons aria-expanded="false" aria-controls="sidebarIcons"> <span> Icons </span> <span class="menu-arrow"></span> </a>
                    <b-collapse id="sidebarIcons">
                        <ul class="side-nav-third-level">
                            <li>
                                <router-link to="/extended/icons/remix-icons" class="side-nav-link-ref">Remix Icons</router-link>
                            </li>
                            <li>
                                <router-link to="/extended/icons/mdi" class="side-nav-link-ref">Material Design</router-link>
                            </li>
                            <li>
                                <router-link to="/extended/icons/unicons" class="side-nav-link-ref">Unicons</router-link>
                            </li>
                        </ul>
                    </b-collapse>
                </li>
                <li>
                    <router-link to="/extended/dragula" class="side-nav-link-ref">Dragula</router-link>
                </li>
                <li>
                    <router-link to="/extended/range-slider" class="side-nav-link-ref">Range Slider</router-link>
                </li>
            </ul>
        </b-collapse>
    </li>
</template>
