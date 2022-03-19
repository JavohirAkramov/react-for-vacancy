import React from 'react'
import { Formik } from 'formik';
import s from './AddComment.module.css'

function AddComment(props) {
  let onCancelHandler = () => {
    console.log(props, "3333333333")
    props.setToggleAddComment(false)
  }
  let postId = props.postId
  return (
    <div>
      <h3 className={s.addCommentHeading}>Add comment</h3>
      <Formik
        initialValues={{ email: '', name: '', body: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.name) {
            errors.name = 'Required';
          } else if (values.name > 35) {
            errors.name = 'No more 35 characters'
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
            props.sendMyComment({ postId, ...values })
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
          <form className={s.addComment} onSubmit={handleSubmit}>
            <div className={s.inputGroup}>
              <label htmlFor='name'>Comment title: </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                />
              {errors.name && touched.name && errors.name}
            </div>
            <div className={s.inputGroup}>
              <label htmlFor='body'>Comment: </label>
              <input
                type="text"
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {errors.body && touched.body && errors.body}
            </div>
            <div className={s.inputGroup}>
              <label htmlFor='email'>Email: </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <button className={s.firstButton} type="button" onClick={() => { onCancelHandler() }}>Cancel</button>
              <button type="submit" disabled={isSubmitting}>
              Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddComment