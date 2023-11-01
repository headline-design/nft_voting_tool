import VotePage from './index'
import React from 'react'
import { withRoute } from '../../stories/withRoute'

export default {
  title: 'Pages',
  render: withRoute(() => <VotePage sort="descending" />, {
    wallet: {
      enabled: true,
      // address: 'TWI4TQQGI2BWT4CDCGZJCNHDYAJE5OLFBMFKXEG3OBWFOLIPGJCY6HAHKA',
    },
    router: {
      enabled: true,
      path: '/vote/:voteId',
      entries: ['/vote/286064112'],
    },
    appShell: true,
  }),
}

export const Vote = {}
