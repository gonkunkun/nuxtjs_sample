<template>
  <v-app dark>
    <default-sidebar />
    <default-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <default-right-drawer />
    <default-footer />
  </v-app>
</template>

<script>
import DefaultHeader from "~/components/layouts/header";
import DefaultFooter from "~/components/layouts/footer";
import DefaultSidebar from "~/components/layouts/sidebar";
import DefaultRightDrawer from "~/components/layouts/rightDrawer";
export default {
  name: 'default',
  components: {
    DefaultHeader,
    DefaultFooter,
    DefaultSidebar,
    DefaultRightDrawer
  },
  data() {
    return {
    }
  }
}
</script>
