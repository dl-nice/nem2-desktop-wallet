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
import {Component, Prop, Vue} from 'vue-property-decorator'
// @ts-ignore
import confirmed from '@/views/resources/img/monitor/dash-board/dashboardConfirmed.png'


@Component
export class SelectAccountTableTs extends Vue {
  columns1 = [
    {
      title: 'ADDRESS',
      key: 'address',
      width: 450,
    },
    {
      title: 'PATH',
      key: 'path',
      width: 190,
    },
    {
      title: 'ASSETS',
      key: 'assets',
      width: 190,
    },
    {
      title: 'CHOICES',
      slot: 'choices',
      align: 'center',
      // width: 80,
    },
  ]

  data1 = [
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: confirmed,
    },
  ]
}
