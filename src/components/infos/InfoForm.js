import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import { Button, TextField } from '../ui'
import Modale from './../Modal'
import { updateComment } from '../../database/user'

function InfoForm({ info }) {
  const [open, setOpen] = useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  const { data: authUser } = useAuth()
  let { type } = useParams()

  const [comment, setComment] = useState(false)
  const changeComment = setComment

  // React Hook Form
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    if (authUser === null) {
      handleOpenModal()
    } else {
      changeComment(!comment)
      updateComment(type, info, data, authUser)
    }
  }

  return (
    <>
      <p>
        Leave a comment (Before write, please note that you must be logged in)
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Title (Before write, please note that you must be logged in)"
          variant="filled"
          size="small"
          required
          type="string"
          name="title"
          {...register('title')}
        />
        <TextField
          id="outlined-basic"
          label="Your comment (Before write, please note that you must be logged in)"
          variant="filled"
          multiline
          required
          name="comment"
          {...register('comment')}
        />
        <Button
          variant="contained"
          style={{ margin: '0 auto' }}
          type="submit"
          value="Submit"
          color={comment ? 'secondary' : 'success'}
        >
          {comment ? 'Sent !' : 'Submit'}
        </Button>
        {open && (
          <Modale
            open={open}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </form>
    </>
  )
}

export default InfoForm
