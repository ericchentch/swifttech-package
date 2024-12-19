import { Axiom } from '@axiomhq/js'

export const logger = (datalog: { message: string; data?: any }) => {
  const axiom = new Axiom({
    token: process.env.AXIOM_TOKEN || '',
    orgId: process.env.AXIOM_ORG_ID || '',
  })

  const dataSet = process.env.AXIOM_DATASET || ''

  axiom.ingest(dataSet, datalog)
}
