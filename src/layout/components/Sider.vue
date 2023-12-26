<template>
  <a-layout-sider>
    <a-menu mode="inline">
      <a-menu-item key="1">
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <!-- <a-menu-item key="9">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="19">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="29">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="39">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="49">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="59">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="69">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="91">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="92">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="93">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="94">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="95">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="96">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="97">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="911">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="119">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="912">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="9123">
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="91234">
        <span>File</span>
      </a-menu-item> -->
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
</script>
<style lang="less" scoped>
aside {
  background: rgba(0, 0, 0, 0) !important;
  .ant-menu {
    height: 100%;
    overflow: auto;
  }
}
</style>