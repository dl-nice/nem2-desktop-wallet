<template>
  <div class="generate-wallet-page-wrapper">
    <div class="import-wallet">
      <div class="select-network">
        <div class="title">
          {{ $t('chain_net') }}:
        </div>
        <input type="text" placeholder="symbol">
      </div>
      <div class="select-network">
        <div class="title">
          {{ $t('Network_type') }}:
        </div>
        <Select name class>
          <Option>TEXT-NET</Option>
        </Select>
      </div>
    </div>
    <TableTitle>{{ $t('select_wallet_list') }}</TableTitle>
    <div class="blank" />
    <SelectAccountTable />
  </div>
</template>

<script>
import GenerateWalletTs from './GenerateWalletTs'
import './GenerateWallet.less'
export default class GenerateWallet extends GenerateWalletTs {}
</script>
