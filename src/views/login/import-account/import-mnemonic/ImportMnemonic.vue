<template>
  <div class="create-mnemonic-sec" @keyup.enter="submit">
    <p class="set-title">
      {{ $t('Input_mnemonic') }}
    </p>
    <div class="create-mnemonic-col">
      <div class="create-mnemonic-left">
        <ErrorTooltip field-name="mnemonic" placement-override="top">
          <textarea
            v-model.lazy="seed"
            v-focus
            v-validate="validation.mnemonicCheck"
            data-vv-name="mnemonic"
            :data-vv-as="$t('mnemonic')"
            class="show-mnemonic"
          />
        </ErrorTooltip>
        <div class="button-container">
          <button class="info-button" @click="goToCreateAccountInfo">
            {{ $t('Return_password_setting') }}
          </button>
          <button @click="submit">
            {{ $t('Import_mnemonic') }}
          </button>
        </div>
      </div>
      <div class="create-mnemonic-right">
        <p class="text">
          {{ $t('Input_mnemonic_tips') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImportMnemonicTs from './ImportMnemonicTs'
export default class ImportAccount2 extends ImportMnemonicTs {}
</script>

<style scoped lang="less">
@import "ImportMnemonic.less";
</style>
