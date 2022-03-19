import React from 'react'
import { Formik } from 'formik'
import c from './AddPost.module.css'
import { useNavigate } from 'react-router-dom'

function AddPost(props) {
  let userId = props.userId
  let navigate = useNavigate()
  return (
    <div>
      <h3 className={c.addPostHeading} >Add post</h3>
      <Formik
        initialValues={{ title: '', body: '' }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          } else if (values.title > 35) {
            errors.title = 'No more 35 characters'
          }
          if (!values.body) {
            errors.body = 'Required'
          } else if (errors.body > 1000) {
            errors.body = 'No more than 1000 characters'
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log({ userId, ...values })
            props.sendMyPost({ userId, ...values })
            navigate('/')
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={c.addPost} onSubmit={handleSubmit}>
            <div className={c.inputGroup}>
              <label htmlFor='title'>Post title: </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
            </div>
            <div className={c.inputGroup}>
              <label htmlFor='body'>Post: </label>
              <input
                type="text"
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {errors.body && touched.body && errors.body}
            </div>
            <div>
              <button className={c.firstButton} type='reset' >Cancel</button>
              <button type="submit" disabled={isSubmitting}>
                Add post
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddPost