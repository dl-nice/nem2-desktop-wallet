<template>
  <form action="submit" onsubmit="event.preventDefault()" @keyup.enter="submit">
    <ErrorTooltip field-name="password">
      <input
        v-model.lazy="password"
        v-focus
        v-validate="validation.accountPassword"
        type="password"
        data-vv-name="password"
        :data-vv-as="$t('password')"
        :placeholder="$t('please_enter_your_wallet_password')"
      >
    </ErrorTooltip>
    <input
      v-show="false" v-model="accountPassword" v-validate
      disabled data-vv-name="accountPassword"
    >
    <Button type="success" @click="submit">
      {{ $t('confirm') }}
    </Button>
  </form>
</template>

<script lang="ts">
import CheckPasswordTs from './CheckPasswordTs'

export default class CheckPassword extends CheckPasswordTs {


}
</script>
<style scoped lang="less">
</style>
