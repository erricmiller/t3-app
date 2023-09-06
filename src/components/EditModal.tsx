'use client'
import React from 'react'
import CustomForm from './CustomForm'
import CustomInput from './customui/CustomInput'
import CustomRadioGroup from './CustomRadioGroup'
import CustomButton from './customui/CustomButton'
import { trpc } from '@/app/_trpc/client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Gender, userRole, usersValidations } from '@/validations/users'
import { z } from 'zod'

const EditModal = () => {
    const updateUser = trpc.users.updateUser.useMutation();
    const form = useForm<z.infer<typeof usersValidations>>({
        resolver: zodResolver(usersValidations),
        defaultValues: {
          name: "Sanan",
          email:"sanan@gmail.com",
          password: "123456789",
          gender:Gender.Male,
          userRole:userRole.Admin,
        },
      });
    
      async function onSubmit(values: z.infer<typeof usersValidations>) {
        updateUser.mutate(values);
      }

      const gender = [
        { id: "1", label: "Male", value: "Male" },
        { id: "2", label: "Female", value: "Female" },
      ];
      const accountType = [
        { id: "1", label: "Admin", value: "Admin" },
        { id: "2", label: "Client", value: "Client" },
      ];
  return (
    <div className="card flex flex-col gap-2 rounded border p-4">
      <h4 className="w-full text-center">Edit User</h4>
      <CustomForm form={form} onSubmit={form.handleSubmit(onSubmit)}>
      <CustomInput
          control={form.control}
          label="Name"
          name="name"
          description="Please Enter your Name"
          placeholder="Fahad"
        />
      <CustomInput
          control={form.control}
          label="Email"
          name="email"
          description="Please Enter your Email"
          placeholder="fahad@gmail.com"
        />
        <CustomInput
          control={form.control}
          label="Password"
          name="password"
          type="password"
          description="Please Enter your Password"
          placeholder="••••••••"
        />
        <CustomRadioGroup
          control={form.control}
          label="Gender"
          name="gender"
          options={gender}
          description="Choose Gender."
        />
        <CustomRadioGroup
          control={form.control}
          label="User Role"
          name="userRole"
          options={accountType}
          description="Choose User Role."
        />
        <CustomButton type="submit">Update</CustomButton>
      </CustomForm>
      </div>
  )
}

export default EditModal