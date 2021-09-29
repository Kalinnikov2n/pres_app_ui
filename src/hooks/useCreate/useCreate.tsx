import { useMutation } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { ProjectTypes } from '../../@types/common'
import { documentsConfig } from '../../config/documents'

export const useCreate = (type: ProjectTypes) => {
  const { [type]: config } = documentsConfig
  const {
    createMutation,
    createVariables,
    getOptimisticCreate,
    createMutationName,
    queryListName,
    listQuery,
    listVariables,
  } = config

  const [create] = useMutation(createMutation)

  const handleCreate = useCallback(
    (params) =>
      create({
        variables: createVariables(params),
        optimisticResponse: getOptimisticCreate(params),
        update: (cache, { data }) => {
          if (!data) return
          const { [createMutationName]: createdElement } = data
          const isOptimistic = createdElement.id.includes('_optimistic')
          const queryOptions = { query: listQuery, variables: listVariables() }
          const query: any = cache.readQuery(queryOptions)
          const {
            [queryListName]: { list },
          } = query
          const filteredElements = list.filter(({ id }: any) => !id.includes(createdElement.name))
          const elements = isOptimistic ? [...list, createdElement] : [...filteredElements, createdElement]

          cache.writeQuery({
            ...queryOptions,
            data: {
              ...query,
              [queryListName]: {
                list: elements,
              },
            },
          })
        },
      }),
    [create, createMutationName, createVariables, getOptimisticCreate, listQuery, listVariables, queryListName]
  )

  return useMemo(
    () => ({
      handleCreate,
    }),
    [handleCreate]
  )
}
