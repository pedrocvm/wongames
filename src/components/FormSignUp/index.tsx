import Link from 'next/link';

import { FormWrapper, FormLink } from 'components/Form';
import TextField from 'components/TextField';
import Button from 'components/Button';

import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { Email } from '@styled-icons/material-outlined/Email';
import { Lock } from '@styled-icons/boxicons-regular/Lock';

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField icon={<UserCircle />} placeholder="Name" />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        icon={<Lock />}
        type="password"
        placeholder="Confirm Password"
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignUp;
