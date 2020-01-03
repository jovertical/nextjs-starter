import React from 'react'
import { NextPage } from 'next'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Button from '@components/Button'
import Input from '@components/Form/Input'
import Layout from '@components/Layout'
import Link from '@components/Link'
import Text from '@components/Text'
import * as API from '@utils/api'

interface Fields {
  email: string
  password: string
}

const Signin: NextPage<{}> = () => {
  const handleSubmit = async (
    values: Fields,
    formik: FormikHelpers<Fields>
  ): Promise<void> => {
    const { status, body } = await API.post('/auth/signin', values)

    formik.setSubmitting(false)

    switch (status) {
      case 422:
        formik.setErrors(body)
        break
    }
  }

  return (
    <Layout>
      <div className="tw-inline-flex tw-flex-col tw-items-center tw-justify-center tw-p-8 tw-rounded tw-bg-white tw-shadow-md">
        <Text className="tw-mb-8">Sign in with your Account</Text>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required()
              .email(),
            password: Yup.string().required()
          })}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }): React.ReactElement => (
            <Form className="tw-w-full lg:tw-w-84">
              <div className="tw-mb-5">
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Your Email address"
                  className="tw-w-full"
                />
              </div>

              <div className="tw-mb-5">
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Your Password"
                  className="tw-w-full"
                />
              </div>

              <div className="tw-mb-5">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="tw-w-full"
                >
                  Login
                </Button>
              </div>

              <div className="tw-border tw-mb-5" />

              <div className="tw-text-center">
                <span className="tw-mr-1">Don't have an Account?</span>
                <Link href="/auth/signup" variant="primary">
                  Sign up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Signin
