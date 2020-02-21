<template>
  <div class="progress-contain">
    <Progress :stroke-width="20" stroke-color="rgba(82,0,198,1)" :percent="value" />
  </div>
</template>

<script lang="ts">
import {ProgressDisplayTs} from './ProgressDisplayTs'
export default class ProgressDisplay extends ProgressDisplayTs {}
</script>
<style lang="less" scoped>
</style>
