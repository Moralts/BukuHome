<script setup lang="ts">
import { inject, Ref, computed } from 'vue'
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

const DEV = inject<Ref<boolean>>('DEV')
const { theme } = useData()
const { footer } = theme.value
const { hasSidebar } = useSidebar()
const isDocFooterVisible = computed(() => {
  return !DEV || footer.message || footer.copyright
})
</script>

<template>
  <div v-if="isDocFooterVisible" v-show="hasSidebar" class="m-doc-footer">
    <div class="m-doc-footer-message">
      <p v-if="footer?.message">{{ footer.message }}</p>
    </div>
    <p class="m-doc-footer-copyright" v-if="footer?.copyright">
      {{ footer.copyright }}
    </p>
  </div>
</template>

<style scoped>
.m-doc-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.m-doc-footer-message,
.m-doc-footer-copyright {
  display: flex;
  align-items: center;
}


</style>
