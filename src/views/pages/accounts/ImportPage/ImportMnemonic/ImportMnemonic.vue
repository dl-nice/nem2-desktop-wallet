<template>
  <div>
    <div class="import-mnemonic-page-wrapper">
      <div class="import-mnemonic-container">
        <ImportMnemonic />
      </div>
      <div class="right-tip-container">
        <RightTipDisplay 
          :tip-content="tipContents"
        />
      </div>
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">
        {{ $t('Previous_step') }}
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        {{ $t('Next_step') }}
      </ButtonStep>
    </div>
  </div>
</template>

<script lang="ts">
import ImportMnemonicTs from './ImportMnemonicTs'
import './ImportMnemonic.less'
export default class ImportMnemonic extends ImportMnemonicTs {}
</script>

