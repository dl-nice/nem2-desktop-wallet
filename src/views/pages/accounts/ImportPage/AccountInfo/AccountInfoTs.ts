import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
// @ts-ignore
import FormAccountSetting from '@/views/forms/FormAccountSetting/FormAccountSetting.vue'

@Component({
  components: {
    RightTipDisplay,
    FormAccountSetting,
  },
})
export default class AccountInfoTs extends Vue {
  tipContents: string[] = [
    'Set_account_description_tips1',
    'Set_account_description_tips2',
  ]
}
