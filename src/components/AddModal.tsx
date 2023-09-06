'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Gender, userRole, usersValidations } from '@/validations/users';
import CustomForm from './CustomForm';
import CustomInput from './customui/CustomInput';
import CustomRadioGroup from './CustomRadioGroup';
import CustomButton from './customui/CustomButton';
import { trpc } from '@/app/_trpc/client';

const AddModal = () => {

  const addUser = trpc.users.addUser.useMutation();
    const form = useForm<z.infer<typeof usersValidations>>({
        resolver: zodResolver(usersValidations),
        defaultValues: {
          name: "",
          email:"",
          password: "",
          gender:Gender.Male,
          userRole:userRole.Client,
        },
      });
    
      async function onSubmit(values: z.infer<typeof usersValidations>) {
        addUser.mutate(values);
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
      <h4 className="w-full text-center">Add User</h4>
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
        <CustomButton type="submit">Submit</CustomButton>
      </CustomForm>
      </div>
  )
}

export default AddModal