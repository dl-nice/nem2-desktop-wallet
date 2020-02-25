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

import {mapGetters} from 'vuex'

import {MnemonicPassPhrase} from 'nem2-hd-wallets'

import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
// @ts-ignore
import MnemonicVerification from '@/components/MnemonicVerification/MnemonicVerification.vue'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'

@Component({
  components: {
    RightTipDisplay,
    MnemonicVerification,
    ButtonStep,
  },
  computed: {...mapGetters({
    currentMnemonic: 'temporary/mnemonic',
  }),
  },
})
export default class VerifyMnemonicTs extends Vue {
  /**
   * Temporary Mnemonic pass phrase
   * @var {MnemonicPassPhrase}
   */
  public currentMnemonic: MnemonicPassPhrase

  /// region computed properties getter/setter
  get mnemonicWords(): string[] {
    return this.currentMnemonic.plain.split(' ')
  }
  /// end-region computed properties getter/setter

  tipContents: string[] = [
    '助记词如果备份错误，将可能不能找回，请认真核对单词和顺序.',
  ]
}
