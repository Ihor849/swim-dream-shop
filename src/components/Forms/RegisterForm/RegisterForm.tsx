import React from 'react';
import { useForm } from 'react-hook-form';
import {Form, Label, Input, Select, Option,TitleRadioBtn, WrpperRadioBtn} from "./RegisterForm.styled"


export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit:(data: any) => void = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>First name<Input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} /></Label>

      <Label>Last name<Input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /></Label>
      
      <Label>Email<Input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /></Label>

      <Label>Password<Input type="password" placeholder="Password" {...register("Password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/i})} /></Label>
      <Label>ConfirmPassword<Input type="password" placeholder="ConfirmPassword" {...register("Password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/i})} /></Label>

      <Label >Mobile number<Input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} /></Label>

      <Label>Appeal
        <Select {...register("Title", { required: true })}>
          <Option className='' value="Mr">Mr</Option>
          <Option className='' value="Mrs">Mrs</Option>
          <Option className='' value="Miss">Miss</Option>
          <Option className='' value="Dr">Dr</Option>
        </Select>
      </Label>
      <TitleRadioBtn className="titleRadioBtn">Developer</TitleRadioBtn>

      <WrpperRadioBtn className="wrpperRadioBtn">
        <Label><Input className='radioBtn' {...register("Developer", { required: true })} type="radio" value="Yes" />Yes</Label>
        <Label><Input className='radioBtn' {...register("Developer", { required: true })} type="radio" value="No" />No</Label>
      </WrpperRadioBtn>

      {/* <Input type="submit" /> */}
      <button type="submit">Submit</button>
    </Form>
  );

}