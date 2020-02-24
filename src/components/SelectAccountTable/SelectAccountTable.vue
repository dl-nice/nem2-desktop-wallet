<template>
  <Table
    size="large" height="190" :columns="columns1"
    :data="data1"
  >
    <template slot="choices" slot-scope="{ row }">
      <img :src="row.choices" alt="">
    </template>
  </Table>
</template>

<script>
import { SelectAccountTableTs } from './SelectAccountTableTs'
import './SelectAccountTable.less'
export default class SelectAccountTable extends SelectAccountTableTs {}
</script>
