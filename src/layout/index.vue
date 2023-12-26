<template>
  <a-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Sider />
      </a-layout-sider>
      <a-layout-content>
        <Content />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import Header from './components/Header'
import Sider from './components/Sider'
import Footer from './components/Footer'
import Content from './components/Content'
</script>
<style lang="less" scoped>
section {
  height: 100%;
}
</style>