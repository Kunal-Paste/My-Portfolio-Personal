import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { ErrorLine } from './ui/error-line'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Icons } from './icons'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormSchema } from '@/lib/schema'
import { sendEmailAction } from '@/lib/actions'



export default function ContactForm() {

      const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (values: ContactFormSchema) => {
    const { data, error } = await sendEmailAction(values)

    if (error) {
      toast.error(error)
      return
    }

    toast.success(data)
    reset()
  }

   return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5 p-1.5"
      >
        <div className="w-full max-w-xl">
          <Label
            htmlFor="email"
            className={cn(errors.email?.message && 'text-destructive')}
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="hello@gmail.com"
            {...register('email')}
            className={cn(errors.email?.message && 'border-destructive')}
          />
          <ErrorLine message={errors.email?.message} />
        </div>
        <div className="w-full max-w-xl">
          <Label
            htmlFor="message"
            className={cn(errors.message?.message && 'text-destructive')}
          >
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Hello! What's up?"
            {...register('message')}
            className={cn(errors.message?.message && 'border-destructive')}
          />
          <ErrorLine message={errors.message?.message} />
        </div>
        <Button type={'submit'} size="lg">
          Submit <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    )
}