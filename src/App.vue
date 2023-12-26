
<template>
  <a-style-provider hash-priority="high" :transformers="[legacyLogicalPropertiesTransformer]">
    <a-config-provider
      :theme="{
        algorithm: theme.darkAlgorithm
      }"
    >
      <router-view />
    </a-config-provider>
  </a-style-provider>
</template>
<script setup>
import { legacyLogicalPropertiesTransformer, theme } from 'ant-design-vue'
</script>