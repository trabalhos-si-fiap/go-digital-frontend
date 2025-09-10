import { zodResolver } from '@hookform/resolvers/zod'
import { XIcon } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createClient } from '../../api/create-client'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  SButton,
  SFieldset,
  SNewClientForm,
} from './styles'

const createClientFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  instagram: z.string(),
  phone: z.string(),
})

type CreateClientFormSchema = z.infer<typeof createClientFormSchema>

interface DialogButtonProps {
  onClientCreated?: () => void
}

export function DialogButton({ onClientCreated }: DialogButtonProps) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CreateClientFormSchema>({
    resolver: zodResolver(createClientFormSchema),
  })

  const { mutateAsync: createClientFn } = useMutation({
    mutationFn: createClient,
  })

  async function handleCreateClient(data: CreateClientFormSchema) {
    try {
      await createClientFn({
        name: data.name,
        email: data.email,
        instagram: data.instagram,
        phone: data.phone,
      })

      reset()
      onClientCreated?.()
      setOpen(false)
    } catch (error) {
      console.log(`Create client error: ${error}`)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button">Adicionar novo cliente</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Adicionar novo cliente</DialogTitle>
          <Dialog.Description />
          <DialogClose asChild>
            <SButton type="button" aria-label="Close">
              <XIcon size={20} />
            </SButton>
          </DialogClose>

          <SNewClientForm onSubmit={handleSubmit(handleCreateClient)}>
            <SFieldset>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" {...register('name')} />
            </SFieldset>

            <SFieldset>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" {...register('email')} />
            </SFieldset>

            <SFieldset>
              <label htmlFor="instagram">Instagram</label>
              <input type="text" id="instagram" {...register('instagram')} />
            </SFieldset>

            <SFieldset>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" {...register('phone')} />
            </SFieldset>

            <div>
              <button type="submit" disabled={isSubmitting}>
                Adicionar
              </button>
            </div>
          </SNewClientForm>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
