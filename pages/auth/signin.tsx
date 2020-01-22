import React from 'react'
import { NextPage } from 'next'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Button from '@components/Button'
import Input from '@components/Form/Input'
import PasswordInput from '@components/Form/PasswordInput'
import Layout from '@components/Layout'
import Link from '@components/Link'
import Text from '@components/Text'
import withGuestAuth from '@hocs/withGuestAuth'
import * as API from '@utils/api'
import { signin } from '@utils/auth'

type Fields = {
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

      case 200:
        signin(body.data)
    }
  }

  return (
    <Layout>
      <div className="inline-flex flex-col items-center justify-center p-8 rounded bg-white shadow-md">
        <Text className="mb-8">Login with your Account</Text>

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
            <Form className="w-full lg:w-84">
              <div className="mb-5">
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Your Email address"
                  className="w-full"
                />
              </div>

              <div className="mb-5">
                <PasswordInput
                  name="password"
                  value={values.password}
                  placeholder="Your Password"
                  className="w-full"
                />
              </div>

              <div className="mb-5">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Login
                </Button>
              </div>

              <div className="border mb-5" />

              <div className="text-center">
                <span className="mr-1">Don't have an Account?</span>
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

export default withGuestAuth(Signin)
