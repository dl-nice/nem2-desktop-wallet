<template>
  <div class="import-mnemonic-page-wrapper">
    <div class="import-mnemonic-container">
      <ImportMnemonic @finish-data="updateMnemonic" />
    </div>
    <div class="right-tip-container">
      <RightTipDisplay 
        :tip-content="tipContents"
      />
    </div>
    <button @click="submit">ok</button>
  </div>
</template>

<script lang="ts">
import ImportMnemonicTs from './ImportMnemonicTs'
import './ImportMnemonic.less'
export default class ImportMnemonic extends ImportMnemonicTs {}
</script>

