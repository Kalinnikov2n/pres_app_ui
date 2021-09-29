import { useQuery } from '@apollo/client'
import { useMemo } from 'react'
import { ApolloOptions } from '../../@types/apolloOptions'
import { ProjectTypes } from '../../@types/common'
import { documentsConfig } from '../../config/documents'

export const useList = (type: ProjectTypes, options?: ApolloOptions) => {
  const { [type]: config } = documentsConfig
  const { listQuery, listVariables, queryListName } = config

  const apolloOptions: ApolloOptions = {
    fetchPolicy: options?.fetchPolicy ?? 'cache-only',
  }

  const { data } = useQuery(listQuery, {
    variables: listVariables(),
    ...apolloOptions,
  })

  const list = useMemo(() => {
    if (!data) return []

    const { [queryListName]: result } = data
    const { list } = result
    return list
  }, [data, queryListName])

  return useMemo(
    () => ({
      list,
    }),
    [list]
  )
}
