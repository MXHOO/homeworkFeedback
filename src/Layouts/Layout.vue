<template>
  <a-layout id="layout-container" class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Sider></Sider>
    </a-layout-sider>
    <a-layout style="height: 100%; ">
      <a-layout-header style="background: #fff; padding: 0;">
        <Header></Header>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Content></Content>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Content from './Content'
import Header from './Header'
import Sider from './Sider'
export default {
  components: {
    Content,
    Sider,
    Header
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped>
.layout {
  height: 100%;
}
</style>