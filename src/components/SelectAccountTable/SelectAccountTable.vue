<template>
  <Table size="large" height="190" :columns="columns1" :data="data1">
    <template slot-scope="{ row }" slot="choices">
      <img :src="row.choices" alt="">
    </template>
  </Table>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import "./SelectAccountTable.less";
import { dashboardImages } from "@/views/resources/Images";
import confirmed from '@/views/resources/img/monitor/dash-board/dashboardConfirmed.png';
@Component
export default class SelectAccountTable extends Vue {
  data() {
    return {
      columns1: [
        {
          title: "ADDRESS",
          key: "address",
          width: 450
        },
        {
          title: "PATH",
          key: "path",
          width: 190
        },
        {
          title: "ASSETS",
          key: "assets",
          width: 190
        },
        {
          title: "CHOICES",
          slot: "choices",
          align: 'center'
          // width: 80,
        }
      ],
      data1: [
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        },
        {
          address: "TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP",
          path: "0/0/../43/1/",
          assets: "1000.00xym",
          choices: confirmed
        }
      ]
    };
  }
}
</script>

<style>
</style>