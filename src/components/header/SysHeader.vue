<template>
<el-button @click="onadd">增加</el-button>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:{
    onadd:{
      type:Function
    }
  },
  methods: {
  }
}
</script>