
<template>
  <a-style-provider hash-priority="high" :transformers="[legacyLogicalPropertiesTransformer]">
    <a-config-provider
      :theme="{
        algorithm: theme.darkAlgorithm
      }"
    >
      <RouterView />
    </a-config-provider>
  </a-style-provider>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { legacyLogicalPropertiesTransformer, theme } from 'ant-design-vue'
</script>