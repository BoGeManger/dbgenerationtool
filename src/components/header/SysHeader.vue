<template>
  <sys-tab id="systab" :data-options="dataOptions"></sys-tab>
</template>


<script>
import SysTab from '@/components/common/SysTab'

export default {
  props:['data-options'],
  components:{
    "sys-tab":SysTab
  }
}
</script>
