import SimpleTable from './Table/SimpleTable.svelte'
import DenseTable from './Table/DenseTable.svelte'

export default { title: 'Table' }

export const simpleTable = () => ({
  Component: SimpleTable
})

export const denseTable = () => ({
  Component: DenseTable
})
