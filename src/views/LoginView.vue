<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      
    >
      <a-input v-model:value="formState.email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { login } from '@/api/auth';

interface FormState {
  email: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  email: '',
  password: '',
  remember: true,
});
// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

const onFinish = async (e: Event) => {
     
      console.log('Captured email:', formState.email);
      console.log('Captured password:', formState.password);

      if (!formState.email || !formState.password) {
        console.error('Email or password is empty');
        return;
      }

      try {
        const response = await login({ email: formState.email, password: formState.password });
        console.log('Login successful:', response);
        // Handle successful login, like redirecting to the dashboard
      } catch (error) {
        // Handle the 'unknown' type error
        if (error instanceof Error) {
          console.error('Login failed:', error.message);
        } else {
          console.error('Login failed:', error);
        }
      }
    };

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

