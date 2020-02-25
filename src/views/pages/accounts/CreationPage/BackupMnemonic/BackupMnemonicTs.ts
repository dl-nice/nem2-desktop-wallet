/**
 * Copyright 2020 NEM Foundation (https://nem.io)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'
// @ts-ignore
import MnemonicDisplay from '@/components/MnemonicDisplay/MnemonicDisplay.vue'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
import { MnemonicPassPhrase } from 'nem2-hd-wallets'
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  components: {
    RightTipDisplay,
    MnemonicDisplay,
    ButtonStep,
  },
  computed: {...mapGetters({
    currentMnemonic: 'temporary/mnemonic',
  })},
})
export default class BackupMnemonicTs extends Vue {
  /**
   * Temporary Mnemonic pass phrase
   * @var {MnemonicPassPhrase}
   */
  public currentMnemonic: MnemonicPassPhrase
  
  tipContents: string[] = [
    '请不要透露你备份的记助词，任何人有了记助词，将可以彻底掌控其下的钱包资产',
    '请将你的记助词离线写在纸上并做多份保存，或者离线的加密磁盘和存储介质等',
  ]
  
  get mnemonicList() {
    return this.currentMnemonic.plain.split(' ')
  }
}
