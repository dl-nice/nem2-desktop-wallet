<template>
  <div class="right-tip-wrapper">
    <div class="tip-title">
      {{ $t(tipTitle) }}
    </div>
    <div v-for="(item, index) in tipContent" :key="index" class="tip-content-paragraph">
      {{ $t(item) }}
    </div>
  </div>
</template>

<script lang="ts">
import { RightTipDisplayTs } from './RightTipDisplayTs'
import './RightTipDisplay.less'
export default class RightTipDisplay extends RightTipDisplayTs{}
</script>
