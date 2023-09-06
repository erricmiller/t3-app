"use client"
import { ReactNode } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

type Props = {
    title: string;
    message: string;
    className?: string;
    confirmText?: string;
    cancelText?: string;
    trigger: ReactNode;
    onConfirmClick: () => void;
    onCancelClick: () => void;
  }

const CustomAlertDialog = (props: Props) => {
  const { title, message, trigger, className = '', confirmText = 'Confirm', cancelText = 'Cancel' } = props;

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild className={`custom-alertdialog-trigger ${className}`}>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="custom-alertdialog-content p-3 rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="custom-alertdialog-title text-center">{title}</AlertDialogTitle>
          <AlertDialogDescription className="custom-alertdialog-description text-center">{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="custom-alertdialog-footer flex flex-row items-center justify-end gap-4">
          <AlertDialogCancel className="custom-alertdialog-cancel mt-0" onClick={props.onCancelClick}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction className="custom-alertdialog-action" onClick={props.onConfirmClick}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CustomAlertDialog