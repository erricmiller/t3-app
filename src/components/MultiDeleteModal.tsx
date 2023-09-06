'use client'
import React from 'react'
import CustomAlertDialog from './customui/CustomAlertDialog'
import { Button } from './ui/button'
import { Icons } from '@/lib/Icons'

const MultiDeleteModal = ({ data }: { data?: any }) => {
  return (
    <CustomAlertDialog
      title="Are you absolutely sure?"
      message="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      trigger={
        <Button variant="destructive" size="sm" className="ml-auto h-8 lg:flex">
          <Icons.delete className="mr-2 h-4 w-4" />
          Delete
        </Button>
      }
      onConfirmClick={() => console.log(data)}
      onCancelClick={() => console.log("Cancel clicked")}
    />
  )
}

export default MultiDeleteModal