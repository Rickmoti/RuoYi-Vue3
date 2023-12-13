<template>
  <el-config-provider :locale="language">
    <router-view/>
  </el-config-provider>
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import {handleThemeStyle} from '@/utils/theme'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
// 这个地方要注意由于没好好看文档我以为 locale 的传参是字符串，导致产生了 bug  import en from 'element-plus/es/locale/lang/en'; 可能也是  import en from 'element-plus/lib/locale/lang/en';
const language = ref(localStorage.getItem('lang') === 'en' ? en : zhCn);
onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme)
  })
})
</script>
