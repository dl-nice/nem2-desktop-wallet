<template>
  <div>
    <FormWrapper class="general-settings-container">
      <div class="form-row first-row">
        <div class="label">
          <FormLabel>{{ $t('form_label_language') }}</FormLabel>
        </div>
        <div class="value">
          <LanguageSelector v-model="formItems.language" :auto-submit="false" :default-form-style="true" />
        </div>
      </div>
      <!-- Transaction fee selector -->
      <div class="form-row">
        <MaxFeeSelector v-model="formItems.maxFee" />
      </div>
      <div class="form-row">
        <ExplorerUrlSetter v-model="formItems.explorerUrl" :auto-submit="false" />
      </div>

      <div class="form-row">
        <div class="label wallet-selector-label">
          <FormLabel>{{ $t('form_label_default_wallet') }}</FormLabel>
        </div>
        <div class="value wallet-selector-value">
          <WalletSelectorField v-model="formItems.defaultWallet" :auto-submit="false" :default-form-style="true" />
        </div>
      </div>
    </FormWrapper>
  </div>
</template>

<script lang="ts">
import { FormGeneralSettingsTs } from './FormGeneralSettingsTs'
export default class FormGeneralSettings extends FormGeneralSettingsTs {}
</script>

<style lang="less" scoped>
@import "../../../views/resources/css/variables.less";
.general-settings-container {
  display: inline-block;
  width: 100%;
  clear: both;
  min-height: 1rem;
  .form-row {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
  }
  .first-row {
    margin-top: 14px;
  }
  .label {
    display: inline-block;
    text-align: right;
    font-size: @normalFont;
    width: 100%;
    margin-right: 25px;
  }
  .value {
    float: left;
    font-size: @smallerFont;
    font-weight: bolder;
  }
  .wallet-selector-value {
    margin-top: 20px;
  }
}

</style>

