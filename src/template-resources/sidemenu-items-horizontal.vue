// alternative horizontal navigation -- in stores/layoutStore set layoutType to 'topnav'
<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-baseUi" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="uil-apps"></i>Base UI
      <div class="arrow-down"></div>
    </a>
    <div class="dropdown-menu" aria-labelledby="topnav-baseUi">
      <router-link to="/ui/accordions" class="dropdown-item side-nav-link-ref">Accordions</router-link>
      <router-link to="/ui/alerts" class="dropdown-item side-nav-link-ref">Alerts</router-link>
      <router-link to="/ui/avatars" class="dropdown-item side-nav-link-ref">Avatars</router-link>
      <router-link to="/ui/badges" class="dropdown-item side-nav-link-ref">Badges</router-link>
      <router-link to="/ui/buttons" class="dropdown-item side-nav-link-ref">Buttons</router-link>
      <router-link to="/ui/cards" class="dropdown-item side-nav-link-ref">Cards</router-link>
      <router-link to="/ui/dropdowns" class="dropdown-item side-nav-link-ref">Dropdowns</router-link>
      <router-link to="/ui/form-basic" class="dropdown-item side-nav-link-ref">Form Basic</router-link>
      <router-link to="/ui/form-advanced" class="dropdown-item side-nav-link-ref">Form Advanced</router-link>
      <router-link to="/ui/list-group" class="dropdown-item side-nav-link-ref">List Group</router-link>
      <router-link to="/ui/modals" class="dropdown-item side-nav-link-ref">Modals</router-link>
      <router-link to="/ui/offcanvas" class="dropdown-item side-nav-link-ref">Offcanvas</router-link>
      <router-link to="/ui/pagination" class="dropdown-item side-nav-link-ref">Pagination</router-link>
      <router-link to="/ui/popovers" class="dropdown-item side-nav-link-ref">Popovers</router-link>
      <router-link to="/ui/progress" class="dropdown-item side-nav-link-ref">Progress</router-link>
      <router-link to="/ui/spinners" class="dropdown-item side-nav-link-ref">Spinners</router-link>
      <router-link to="/ui/tables" class="dropdown-item side-nav-link-ref">Tables</router-link>
      <router-link to="/ui/tabs" class="dropdown-item side-nav-link-ref">Tabs</router-link>
      <router-link to="/ui/tooltips" class="dropdown-item side-nav-link-ref">Tooltips</router-link>
      <router-link to="/ui/typography" class="dropdown-item side-nav-link-ref">Typography</router-link>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-baseUi" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="uil-minus-path"></i>Extended UI
      <div class="arrow-down"></div>
    </a>
    <div class="dropdown-menu" aria-labelledby="topnav-baseUi">
      <router-link to="/extended/charts" class="dropdown-item side-nav-link-ref">Charts</router-link>
      <router-link to="/extended/dashboard" class="dropdown-item side-nav-link-ref">Dashboard</router-link>
      <div class="dropdown">
        <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Icons
          <div class="arrow-down"></div>
        </a>
        <div class="dropdown-menu" aria-labelledby="topnav-icons">
          <router-link to="/extended/icons/remix-icons" class="dropdown-item side-nav-link-ref">Remix Icons</router-link>
          <router-link to="/extended/icons/mdi" class="dropdown-item side-nav-link-ref">Material Design</router-link>
          <router-link to="/extended/icons/unicons" class="dropdown-item side-nav-link-ref">Unicons</router-link>
        </div>
      </div>
      <router-link to="/extended/dragula" class="dropdown-item side-nav-link-ref">Dragula</router-link>
      <router-link to="/extended/range-slider" class="dropdown-item side-nav-link-ref">Range Slider</router-link>
    </div>
  </li>
</template>
