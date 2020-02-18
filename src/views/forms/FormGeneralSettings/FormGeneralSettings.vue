<template>
  <div>
    <FormWrapper class="general-settings-container">
      <div class="form-row">
        <div class="label">
          <FormLabel>{{ $t('form_label_language') }}</FormLabel>
        </div>
        <div class="value">
          <LanguageSelector v-model="formItems.language" :auto-submit="false" :default-form-style="true" />
        </div>
      </div>
      <!-- Transaction fee selector -->
      <div class="form-row">
        <div class="label label-fee">
          <FormLabel>{{ $t('form_label_fee') }}</FormLabel>
        </div>
        <div class="value">
          <MaxFeeSelector v-model="formItems.maxFee" />
        </div>
      </div>
      <div class="form-row">
        <div class="label">
          <FormLabel>{{ $t('set_explorer_link') }}</FormLabel>
        </div>
        <div class="value">
          <ExplorerUrlSetter v-model="formItems.explorerUrl" :auto-submit="false" />
        </div>
      </div>
      <div class="form-row">
        <div class="label">
          <FormLabel>{{ $t('form_label_default_wallet') }}</FormLabel>
        </div>
        <div class="value">
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
    display: block;
    width: 100%;
    clear: both;
    min-height: 1rem;
    .form-row {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
    }
    .label {
        display: inline-block;
        text-align: right;
        font-size: 20px;
        width: 100%;
        margin-right: 25px;
        margin-top:4px;
    }
    .label-fee {
        margin-top:27px;
    }
    .value {
        float: left;
        font-size: @smallerFont;
        font-weight: bolder;
    }
}
</style>

