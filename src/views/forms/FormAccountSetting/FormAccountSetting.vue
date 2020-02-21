<template>
  <div>
    <FormWrapper class="account-setting-container">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @keyup.enter="handleSubmit(submit)">
          <div class="fixed-full-width-item-container">
            <div class="form-headline">
              {{ $t('Set_account_password') }}
            </div>
          </div>
          <div class="left-container">
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_seed_hash') }}</FormLabel>
              </div>
              <div class="value">
                <div class="full-width-item-container">
                  <p
                    class="input-size">
                    C6DAFB1CDDF22089C76E7130DB7B2919B9AD3AEF1CEEE44C2ABCF1252B4458D6
                  </p>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_account_name') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="newAccountName"
                  :name="$t('newAccountName')"
                  :rules="validationRules.newAccountName"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.accountName"
                        v-focus
                        class="full-width-item-container input-size input-style"
                        :placeholder="$t('account_name')"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_password') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="newPassword"
                  mode="lazy"
                  :name="$t('password')"
                  :rules="validationRules.password"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        ref="passwordInput"
                        v-model="formItems.password"
                        class="full-width-item-container input-size input-style"
                        :placeholder="$t('please_enter_your_wallet_password')"
                        type="password"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_repeat_password') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="confirmPassword"
                  :name="$t('confirmPassword')"
                  :rules="validationRules.confirmPassword"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.passwordAgain"
                        class="full-width-item-container input-size input-style"
                        data-vv-name="confirmPassword"
                        :placeholder="$t('please_enter_your_new_password_again')"
                        type="password"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-row">
              <div class="label">
                <FormLabel>{{ $t('Set_password_hint') }}</FormLabel>
              </div>
              <div class="value">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="hint"
                  :name="$t('hint')"
                  :rules="validationRules.message"
                  tag="div"
                  class="inline-container"
                >
                  <ErrorTooltip :errors="errors">
                    <div class="full-width-item-container">
                      <input
                        v-model="formItems.hint"
                        class="full-width-item-container input-size input-style"
                      >
                    </div>
                  </ErrorTooltip>
                </ValidationProvider>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </FormWrapper>

    <div class="right-container">
      <div class="warm-tips-title">
        {{ $t('Warm_tips') }}
      </div>
      <div class="warm-tips-text">
        {{ $t('Set_account_description_tips1') }}
      </div>
      <div class="warm-tips-text">
        {{ $t('Set_account_description_tips2') }}
      </div>
         
      <div class="button-container mt-3">
        <button
          type="button"
          class="button-style back-button" 
          @click="$router.push({name: 'accounts.login'})"
        >
          {{ $t('Previous_step') }}
        </button>
        <button
          type="submit"
          class="button-style validation-button" 
          @click="handleSubmit(submit)"
        >
          {{ $t('next') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {FormAccountSettingTs} from './FormAccountSettingTs'
export default class FormAccountSetting extends FormAccountSettingTs {}
</script>

<style lang="less" scoped>
@import "../../../views/resources/css/variables.less";
.account-setting-container {
  display: inline-block;
  width: 100%;
  clear: both;
  min-height: 1rem;
  .form-row {
    width: 100%;
    margin-top: 20px;
    display: flex;
  }
  .label {
    display: inline-block;
    font-size: @normalFont;
    text-align: right;
    width: 100%;
    margin-right: 25px;
    margin-top: 10px;
  }
  .value {
    float: left;
    font-size: @smallerFont;
    font-weight: bolder;
  }
}
.warm-tips-title {
    padding-bottom: 34px;
    font-weight: 600;
    color:rgba(51,51,51,1);
    font-size:20px;
    font-weight:400;
  }
.warm-tips-text {
    padding-bottom: 10px;
    font-size:20px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.right-container {
  display: block;
  position: absolute;
  width: 5rem;
  float: left;
  left: 10.5rem;
  top: 2.5rem;
}
.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
}
.input-size{
  width: 6.3rem;
}
</style>
