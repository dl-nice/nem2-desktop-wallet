<template>
  <div class="step-2-wrapper" @mouseover="shouldTrackMouse && handleMousemove($event)">
    <ProgressDisplay :value="percent" />
    <div class="progress-bar">
      {{ $t('Move_your_mouse') }}
    </div>
  </div>
</template>

<script lang="ts">
import GenerateMnemonicTs from './GenerateMnemonicTs'
import './GenerateMnemonic.less'
export default class GenerateMnemonic extends GenerateMnemonicTs { }
</script>
