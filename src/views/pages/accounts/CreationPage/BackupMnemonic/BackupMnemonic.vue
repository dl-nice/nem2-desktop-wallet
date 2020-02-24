<template>
  <div>
    <div class="backup-mnemonic-page-wrapper">
       <div class="backup-mnemonic-container">
      <MnemonicDisplay :mnemonic-list="mnemonicList" />
    </div>
      <div class="right-tip-container">
        <RightTipDisplay 
          :tip-content="tipContents"
        />
      </div>
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">
        上一步
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        下一步
      </ButtonStep>
    </div>
  </div>
</template>

<script>
import BackupMnemonicTs from './BackupMnemonicTs'
import './BackupMnemonic.less'
export default class BackupMnemonic extends BackupMnemonicTs {

}
</script>
