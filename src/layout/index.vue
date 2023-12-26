<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <Content />
      <Footer />
    </a-layout>
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