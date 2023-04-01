import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Add.css';

function Add() {
  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="Button violet">Add profile</button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">Add Profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Add new profile here. Click save when you're done.
                </Dialog.Description>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                            Name
                        </label>
                        <input className="Input" id="name" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="designation">
                            Designation
                        </label>
                        <input className="Input" id="designation" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="location">
                            Location
                        </label>
                        <input className="Input" id="location" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="salary">
                            Salary
                        </label>
                        <input className="Input" id="salary" />
                    </fieldset>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Dialog.Close asChild>
                        <button className="Button green">Save changes</button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
  </Dialog.Root>
  )
}

export default Add