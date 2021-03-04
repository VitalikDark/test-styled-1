<template>
  <div id="app">
    <ThemeProvider :theme="theme">
      <HelloWorld/>
      <Box border="1px solid grey" p="100px">
        1
      </Box>
    </ThemeProvider>
  </div>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components';
import HelloWorld from './components/HelloWorld.vue'
import Box from "@/components/Layout/Box/Box";
import theme from "@/theme";

export default {
  name: 'App',

  components: {
    ThemeProvider,
    HelloWorld,
    Box
  },

  data: () => ({
    theme
  })
}
</script>

